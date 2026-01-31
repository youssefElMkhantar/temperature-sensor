import { jest } from '@jest/globals';
import { CaptureTemperatureUseCase } from '../../src/application/use-cases/CaptureTemperatureUseCase.js';
import { SensorService } from '../../src/domain/services/SensorService.js';
import { SensorState } from '../../src/domain/value-objects/SensorState.js';

describe('CaptureTemperatureUseCase', () => {
  it('should capture temperature, determine state and save sensor', async () => {
    // Arrange
    const fakeSensorPort = {
      getTemperature: jest.fn().mockResolvedValue(36 as never),
    };

    const fakeRepository = {
      save: jest.fn(),
    };

    const service = new SensorService({ hot: 35, cold: 22 });

    const useCase = new CaptureTemperatureUseCase(
      fakeSensorPort as any,
      fakeRepository as any,
      service
    );

    // Act
    const result = await useCase.execute();

    // Assert
    expect(fakeSensorPort.getTemperature).toHaveBeenCalled();
    expect(fakeRepository.save).toHaveBeenCalledTimes(1);

    expect(result.temperature).toBe(36);
    expect(result.state).toBe(SensorState.HOT);
    expect(result.capturedAt).toBeInstanceOf(Date);
  });
});
