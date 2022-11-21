<template>
  <div class="movement">
    <div class="content">
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
    </div>
    <div class="action">
      <img
        src="@/assets/trash-icon.svg"
        alt="trash-icon"
        @click="removeMovement"
      />
      <p :class="{ green: amount > 0, red: amount < 0 }">
        {{ formattedAmount }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRefs, computed, defineEmits } from "vue";
import currencyFormatter from "@/hooks/currencyFormat";

const props = defineProps({
  movement: {
    type: Object,
    default: () => {},
  },
});
const emit = defineEmits(["removeMovement"]);

const { id, title, description, amount } = toRefs(props.movement);

const formattedAmount = computed(() => currencyFormatter.format(amount.value));

const removeMovement = () => emit("removeMovement", id.value);

</script>

<style scoped>
.movement {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  background-color: #e6f9ff;
  border-radius: 8px;
  box-sizing: border-box;
}
.movement .content {
  width: 100%;
}
.movement .action {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
}
h4,
p {
  margin: 0;
  padding: 0;
}
h4 {
  margin-bottom: 8px;
}
.movement .action img {
  margin-bottom: 16px;
  cursor: pointer;
}
.red {
  color: red;
}
.green {
  color: green;
  font-weight: bold;
}
</style>
