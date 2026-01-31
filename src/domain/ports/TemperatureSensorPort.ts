export interface TemperatureSensorPort {
  getTemperature(): Promise<number>;
}
