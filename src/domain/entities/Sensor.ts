import type { SensorState } from '../value-objects/SensorState.js';

export class Sensor {
  constructor(
    public temperature: number,
    public state: SensorState,
    public capturedAt: Date
  ) {}
}
