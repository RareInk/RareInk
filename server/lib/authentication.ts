import { pbkdf2, randomBytes } from 'crypto';
import { sign, verify, SignCallback, VerifyCallback } from 'jsonwebtoken';

import { digest, length, secret } from '../config';

/**
 * Generate a salt and hash for password.
 *
 * @export
 * @param {string} password The given plaintext password
 * @param {(err: Error, derivedKey: Buffer) => any} callback The callback.
 */
export function hashPassword(password: string, callback: (err: Error, derivedKey: Buffer) => any) {
  const salt = randomBytes(128).toString('base64');
  return pbkdf2(password, salt, 10000, length, digest, callback);
}

/**
 * Checks a password against its hash.
 *
 * @export
 * @param {string} password The given plaintext password
 * @param {string} salt The given salt
 * @param {(err: Error, derivedKey: Buffer) => any} callback The callback.
 */
export function verifyPassword(password: string, salt: string, callback: (err: Error, derivedKey: Buffer) => any) {
  return pbkdf2(password, salt, 10000, length, digest, callback);
}

/**
 * Sign a JWT token.
 *
 * @export
 * @param {{ [key: string]: any }} tokenData The data to use in the token data
 * @param {SignCallback} callback The callback.
 * @returns The JWT token as a string.
 */
export function signToken(tokenData: string | object | Buffer, callback: SignCallback) {
  return sign(tokenData, secret, { expiresIn: '7d' }, callback);
}

/**
 * Verify a JWT token.
 *
 * @export
 * @param  {string} token The JWT token to verify
 * @param  {VerifyCallback} callback The callback
 */
export function verifyToken(token: string, callback: VerifyCallback) {
  return verify(token, secret, callback);
}
