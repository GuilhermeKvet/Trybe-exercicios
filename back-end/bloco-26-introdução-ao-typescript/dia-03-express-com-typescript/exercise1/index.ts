import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import getErrors from './middlewares/error';
import UserRoutes from './routes/UserRoutes';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Express + TypeScript')
});

app.use(UserRoutes)

// middleware de erro, sempre no final!
app.use(getErrors);

module.exports = app;