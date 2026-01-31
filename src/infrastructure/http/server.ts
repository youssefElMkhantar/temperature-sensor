import express, { type Request, type Response } from 'express';
import sensorRouter from './controllers/SensorController.js';

const app = express();
export const PORT = 3000;

app.use(express.json());

app.use('/', sensorRouter);

export default app;
