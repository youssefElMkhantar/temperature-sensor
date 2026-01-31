import { SensorService } from '../../src/domain/services/SensorService.js';
import { SensorState } from '../../src/domain/value-objects/SensorState.js';

describe('SensorService', () => {
  const service = new SensorService({
    hot: 35,
    cold: 22,
  });

  it('should return HOT when temperature is >= 35°C', () => {
    expect(service.determineState(35)).toBe(SensorState.HOT);
    expect(service.determineState(40)).toBe(SensorState.HOT);
  });

  it('should return COLD when temperature is < 22°C', () => {
    expect(service.determineState(0)).toBe(SensorState.COLD);
    expect(service.determineState(21)).toBe(SensorState.COLD);
  });

  it('should return WARM when temperature is between 22°C and 35°C', () => {
    expect(service.determineState(22)).toBe(SensorState.WARM);
    expect(service.determineState(30)).toBe(SensorState.WARM);
    expect(service.determineState(34.9)).toBe(SensorState.WARM);
  });
});
