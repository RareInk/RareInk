import { NextFunction, Request, Response } from 'express';
import * as auth from '../lib/authentication';

/**
 * Verify that a token is valid, thus proving that this user
 * is properly authenticated/logged in.
 *
 * @export
 */
export function validateAuthentication(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    return res.status(401).send({
      status: 'error',
      message: 'You are not authenticated.',
    });
  }

  const authMatch = authHeader.match(/Bearer (.*)$/);

  if (authMatch) {
    auth.verifyToken(authMatch[1], (err) => {
      if (err) {
        return res.status(401).json({status: 'error', data: {message: 'Failed to authenticate token.'}});
      }
    });
  } else {
    return res.status(403).send({status: 'error', data: {message: 'No token provided'}});
  }
}
