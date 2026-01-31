export const Thresholds = {
  hot: 35,
  cold: 22,

  update({ hot, cold }: { hot: number; cold: number }) {
    this.hot = hot;
    this.cold = cold;
  },
};
