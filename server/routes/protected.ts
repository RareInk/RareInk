import * as dotenv from 'dotenv';
import { NextFunction, Request, Response, Router } from 'express';
import { verify } from 'jsonwebtoken';

dotenv.config({ path: '.env' });

const protectedRouter: Router = Router();

type AuthorizedRequest = Request & { headers: { authorization: string } };

protectedRouter.use((request: AuthorizedRequest, response: Response, next: NextFunction) => {
  const token = request.headers.authorization;

  verify(token, process.env.APP_SECRET, (tokenError) => {
    if (tokenError) {
      return response.status(403).json({
        status: 'error',
        message: 'Invalid token, please Log in first'
      });
    }

    next();
  });
});

protectedRouter.get('/', (request: Request, response: Response) => {
  response.json({
    status: 'success',
    message: 'Welcome, you are now authorised.'
  });
});

export { protectedRouter };
