import { Thresholds, type ThresholdsType } from './../../config/thresholds.js';

export class UpdateThresholdsUseCase {
  execute(newThresholds: ThresholdsType) {
    // validation métier possible
    Thresholds.update(newThresholds);
  }
}
