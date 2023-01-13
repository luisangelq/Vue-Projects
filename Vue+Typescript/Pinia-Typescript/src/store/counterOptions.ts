import { defineStore } from "pinia";

interface CounterState {
  count: number;
  lastChange?: Date;
}

export const useCounterOptionsStore = defineStore("counterOptions", {
  state: () =>
    ({
      count: 0,
      lastChange: undefined,
    } as CounterState),

  getters: {
    squaredCount(state) {
      return state.count * state.count;
    },
  },

  actions: {
    incrementBy(amount: number) {
      this.count += amount;
      this.lastChange = new Date();
    },
    increment() {
      this.incrementBy(1);
    },
  },
});
