import * as dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { pbkdf2, randomBytes } from 'crypto';

import { digest, length } from '../config';
import User from '../schemas/user';
import { IUser } from '../interfaces/user';
import BaseController from './BaseController';

dotenv.config({ path: '.env' });

export default class UserCtrl extends BaseController {
  public model = User;

  public login = (request: Request, response: Response, next: NextFunction) => {
    this.model.findOne({ email: request.body.email }, (err, user: IUser) => {
      pbkdf2(request.body.password, user.salt, 10000, length, digest, (err: Error, hash: Buffer) => {
        if (err) {
          console.error(err);
        }

        // check if password is active
        if (hash.toString('hex') === user.password) {

          const token = sign(Object.assign({}, { user: user.username, permissions: [] }), process.env.APP_SECRET, {
            expiresIn: '7d'
          });
          response.json({
            status: 'success',
            message: 'Authenticated',
            data: {
              jwt: token
            }
          });
        } else {
          response.json({ status: 'fail', message: 'Wrong password' });
        }
      });
    });
  }

  public register = (request: Request, response: Response, next: NextFunction) => {
    if (!request.body.hasOwnProperty('password')) {
      const err = new Error('No password');
      return next(err);
    }

    const salt = randomBytes(128).toString('base64');

    pbkdf2(request.body.password, salt, 10000, length, digest, (err: Error, hash: Buffer) => {
      response.json({
        status: 'success',
        data: {
          hashed: hash.toString('hex'),
          salt
        }
      });
    });
  }
}
