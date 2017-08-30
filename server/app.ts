import { json, urlencoded } from 'body-parser';
import * as compression from 'compression';
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as path from 'path';

import { ApiResponse } from './interfaces/api';
import setRoutes from './routes';
import { mongodb } from './config';

const app: express.Application = express();

app.disable('x-powered-by');

app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));

// Connect to database
mongoose.connect(mongodb || 'mongodb://localhost:27017/test');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error.'));

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// api routes
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
  } as ApiResponse);
});

export { app };
