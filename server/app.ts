import { json, urlencoded } from 'body-parser';
import * as compression from 'compression';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as session from 'express-session'
import * as expressValidator from 'express-validator'
import * as passport from 'passport';
import * as path from 'path';

import setRoutes from './routes';

dotenv.config({ path: '.env' });

const app: express.Application = express();

app.disable('x-powered-by');

app.use(json());
app.use(compression());
app.use(expressValidator());
app.use(urlencoded({ extended: true }));
app.use(session({ secret: process.env.APP_SECRET }));

setRoutes(app);

if (app.get('env') === 'production') {
  app.use(express.static(path.join(__dirname, '../client')));
}

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  const err = new Error('Not Found');
  next(err);
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(err.status || 500);
  res.json({
    status: 'error',
    message: err.message,
  });
});

export { app };
