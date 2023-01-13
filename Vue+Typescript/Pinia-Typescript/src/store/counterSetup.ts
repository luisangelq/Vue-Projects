import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterSetupStore = defineStore("counterSetup", () => {
  const count = ref<number>(0);
  const lastChange = ref<Date | undefined>(undefined);

  const increment = () => {
    count.value += 1;
    lastChange.value = new Date();
  };

  const incrementBy = (amount: number) => {
    count.value += amount;
    lastChange.value = new Date();
  };

  const reset = () => {
    count.value = 0;
    lastChange.value = undefined;
    };

  return {
    count,
    lastChange,

    squaredCount: computed(() => count.value * count.value),

    increment,
    incrementBy,
    reset,
  };
});
