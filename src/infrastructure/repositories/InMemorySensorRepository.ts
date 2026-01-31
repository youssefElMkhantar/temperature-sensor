import type { Sensor } from '../../domain/entities/Sensor.js';
import type { SensorRepositoryPort } from '../../domain/ports/SensorRepositoryPort.js';

export class InMemorySensorRepository implements SensorRepositoryPort {
  private history: Sensor[] = [];

  save(sensor: Sensor) {
    this.history.unshift(sensor);
    this.history = this.history.slice(0, 15);
  }

  findLast(limit: number) {
    return this.history.slice(0, limit);
  }
}
