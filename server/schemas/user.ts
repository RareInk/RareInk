import { pbkdf2, randomBytes } from 'crypto';
import * as dotenv from 'dotenv';
import { NextFunction } from 'express';
import { Document, Schema, model } from 'mongoose';

import { digest, length } from '../config';
import { IUser } from '../interfaces/user';

const userSchema: Schema = new Schema({
  username: String,
  email: { type: String, unique: true, lowercase: true, trim: true },
  firstName: String,
  lastName: String,
  password: String,
  salt: String,
  createdAt: Date
});

// Hash the password first before saving to databsae
userSchema.pre('save', function (next: NextFunction): any {
  const user = this;
  const now = new Date();

  if (!this.createdAt) {
    this.createdAt = now
  }
  const salt = randomBytes(128).toString('base64');

  if (!user.isModified('password')) { return next(); }
  pbkdf2(user.password, salt, 10000, length, digest, (err: Error, hash: Buffer) => {
    this.password = hash.toString('hex');
    this.salt = salt;
  });
  next();
});

// Omit the password when returning a user
userSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    delete ret.password;
    return ret;
  }
});

const User = model('User', userSchema);

export default User;
