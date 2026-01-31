import { jest } from '@jest/globals';
import { GetTemperatureHistoryUseCase } from '../../src/application/use-cases/GetTemperatureHistoryUseCase.js';

describe('GetTemperatureHistoryUseCase', () => {
  it('should return last 15 temperatures', () => {
    const fakeRepository = {
      findLast: jest.fn().mockReturnValue(['data']),
    };

    const useCase = new GetTemperatureHistoryUseCase(fakeRepository as any);

    const result = useCase.execute();

    expect(fakeRepository.findLast).toHaveBeenCalledWith(15);
    expect(result).toEqual(['data']);
  });
});
