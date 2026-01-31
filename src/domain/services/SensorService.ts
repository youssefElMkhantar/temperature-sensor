import { Thresholds } from './../../config/thresholds.js';
import { SensorState } from '../value-objects/SensorState.js';

export class SensorService {
  constructor(private thresholds: { hot: number; cold: number }) {}

  determineState(temp: number): SensorState {
    if (temp >= this.thresholds.hot) return SensorState.HOT;
    if (temp < this.thresholds.cold) return SensorState.COLD;
    return SensorState.WARM;
  }
}
