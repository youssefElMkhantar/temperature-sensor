import express, {
  type NextFunction,
  type Request,
  type Response,
} from 'express';
import sensorRouter from './controllers/SensorController.js';
import { type JsonError } from './interfaces/interfaces.js';

const app = express();
export const PORT = 3000;

app.use(express.json());

app.use('/', sensorRouter);

app.use((err: JsonError, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('Bad JSON received:', err.message);
    return res.status(400).send({ status: 'error', message: err.message });
  }
  next();
});

export default app;
