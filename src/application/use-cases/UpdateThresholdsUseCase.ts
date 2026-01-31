import { Thresholds } from './../../config/thresholds.js';

export class UpdateThresholdsUseCase {
  execute(newThresholds: { hot: number; cold: number }) {
    // validation métier possible
    Thresholds.update(newThresholds);
  }
}
