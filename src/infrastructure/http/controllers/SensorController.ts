import { UpdateThresholdsUseCase } from './../../../application/use-cases/UpdateThresholdsUseCase.js';
import { Router } from 'express';
import { CaptureTemperatureUseCase } from '../../../application/use-cases/CaptureTemperatureUseCase.js';
import { FakeTemperatureSensor } from '../../sensors/FakeTemperatureSensor.js';
import { InMemorySensorRepository } from '../../repositories/InMemorySensorRepository.js';
import { SensorService } from '../../../domain/services/SensorService.js';
import { Thresholds } from '../../../config/thresholds.js';
import { GetTemperatureHistoryUseCase } from '../../../application/use-cases/GetTemperatureHistoryUseCase.js';

const router = Router();

const repository = new InMemorySensorRepository();
const captureTemperature = new CaptureTemperatureUseCase(
  new FakeTemperatureSensor(),
  repository,
  new SensorService(Thresholds)
);

const updateThresholds = new UpdateThresholdsUseCase();

const getTemperatureHistory = new GetTemperatureHistoryUseCase(repository);

router.get('/temperature', async (req, res) => {
  const result = await captureTemperature.execute();
  res.json(result);
});

router.get('/temperature/history', async (req, res) => {
  const result = await getTemperatureHistory.execute();
  res.json(result);
});

router.put('/thresholds', async (req, res) => {
  console.log('hhhh', req.body);
  if (
    typeof req.body !== 'object' ||
    !(req.body?.hot > 0 && req.body?.cold > 0)
  ) {
    return res.status(400).json('invalid input. please enter 2 positive value');
  }
  const { hot, cold }: typeof Thresholds = req.body;
  const result = await updateThresholds.execute({ hot, cold });
  res.json(result);
});

export default router;
