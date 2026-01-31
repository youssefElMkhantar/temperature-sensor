import type { SensorRepositoryPort } from '../../domain/ports/SensorRepositoryPort.js';

export class GetTemperatureHistoryUseCase {
  constructor(private repository: SensorRepositoryPort) {}

  execute() {
    return this.repository.findLast(15);
  }
}
