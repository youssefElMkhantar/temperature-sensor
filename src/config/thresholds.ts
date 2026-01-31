export const Thresholds = {
  hot: 35,
  cold: 22,

  update({ hot, cold }: ThresholdsType) {
    this.hot = hot;
    this.cold = cold;
  },
};

export type ThresholdsType = { hot: number; cold: number };
