import type { Sensor } from '../entities/Sensor.js';

export interface SensorRepositoryPort {
  save(sensor: Sensor): void;
  findLast(limit: number): Sensor[];
}
