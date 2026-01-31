import { InMemorySensorRepository } from '../../src/infrastructure/repositories/InMemorySensorRepository.js';
import { Sensor } from '../../src/domain/entities/Sensor.js';
import { SensorState } from '../../src/domain/value-objects/SensorState.js';

describe('InMemorySensorRepository', () => {
  it('should keep only last 15 temperature records', () => {
    const repo = new InMemorySensorRepository();

    for (let i = 0; i < 20; i++) {
      repo.save(new Sensor(i, SensorState.WARM, new Date()));
    }

    const history = repo.findLast(15);

    expect(history).toHaveLength(15);
    expect(history[0]?.temperature).toBe(19);
    expect(history[14]?.temperature).toBe(5);
  });
});
