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
      error: 'Unauthorized',
      message: 'You are not authenticated.',
    });
  }

  const authMatch = authHeader.match(/Bearer (.*)$/);

  if (!authMatch) {
    return res.status(401).send({
      error: 'Unauthorized',
      message: 'You are not authenticated.',
    });
  }

  return auth.verifyToken(authMatch[1], (err) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({
          error: 'TokenExpired',
          message: 'jwt expired',
        });
      }

      if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({
          error: 'NoToken',
          message: 'jwt must be provided',
        });
      }
      console.log(err);
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'You are not authenticated.',
      });
    }


    return next();
  });
}
