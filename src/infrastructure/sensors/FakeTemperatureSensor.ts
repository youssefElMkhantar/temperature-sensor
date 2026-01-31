import type { TemperatureSensorPort } from '../../domain/ports/TemperatureSensorPort.js';

export class FakeTemperatureSensor implements TemperatureSensorPort {
  async getTemperature(): Promise<number> {
    return Math.round(Math.random() * 50);
  }
}
