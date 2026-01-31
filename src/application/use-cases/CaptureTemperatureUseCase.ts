import { Sensor } from '../../domain/entities/Sensor.js';
import type { SensorRepositoryPort } from '../../domain/ports/SensorRepositoryPort.js';
import type { TemperatureSensorPort } from '../../domain/ports/TemperatureSensorPort.js';
import type { SensorService } from '../../domain/services/SensorService.js';

export class CaptureTemperatureUseCase {
  constructor(
    private sensorPort: TemperatureSensorPort,
    private repository: SensorRepositoryPort,
    private service: SensorService
  ) {}

  async execute(): Promise<Sensor> {
    const temp = await this.sensorPort.getTemperature();
    const state = this.service.determineState(temp);

    const sensor = new Sensor(temp, state, new Date());
    this.repository.save(sensor);

    return sensor;
  }
}
