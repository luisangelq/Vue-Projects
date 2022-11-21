<template>
  <button @click="showModal = !showModal">Add Movement</button>
  <Teleport to="#app">
    <Modal v-show="showModal" @closeModal="showModal = false">
      <form @submit.prevent="submit">
        <div class="field">
          <label>Title</label>
          <input type="text" v-model="title" />
        </div>

        <div class="field">
          <label>Amount</label>
          <input type="number" v-model="amount" />
        </div>

        <div class="field">
          <label>Description</label>
          <textarea rows="4" type="text" v-model="description"></textarea>
        </div>

        <div class="field">
          <label class="radio-label">
            <input type="radio" v-model="movementType" value="Income" />
            <span>Income</span>
          </label>
        </div>

        <div class="field">
          <label class="radio-label">
            <input type="radio" v-model="movementType" value="Spent" />
            <span>Spent</span>
          </label>
        </div>

        <div class="action">
          <button>Add Movement</button>
        </div>
      </form>
    </Modal>
  </Teleport>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import Modal from "./Modal.vue";

const showModal = ref(false);

const title = ref("");
const amount = ref("");
const description = ref("");
const movementType = ref("Income");

const emit = defineEmits(["addMovement"]);
const submit = () => {
  emit("addMovement", {
    id: Math.floor(Math.random() * 100000),
    title: title.value,
    amount: movementType.value === "Income" ? amount.value : -amount.value,
    description: description.value,
    type: movementType.value,
    time: new Date(),
  });

  showModal.value = false;
};
</script>

<style scoped>
button {
  color: white;
  font-size: 1.25rem;
  background-color: var(--brand-blue);
  border: none;
  width: 100%;
  padding: 24px 60px;
  border-radius: 60px;
  box-sizing: border-box;
  cursor: pointer;
}

form {
  font-size: 1.24rem;
  width: 100%;
}

form .action {
  padding: 0 24px;
}

.field {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 16px 24px;
}

label {
  margin-bottom: 8px;
}

input,
textarea {
  font-size: 1.24rem;
  border: 2px solid var(--brand-blue);
  border-radius: 8px;
  padding: 8px;
}

input[type="number"] {
  text-align: right;
}

.radio-label {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.radio-label span {
  margin-top: 4px;
  margin-left: 8px;
}

input[type="radio"] {
  appearance: none;
  width: 1.24rem;
  height: 1.24rem;
  color: var(--brand-blue);
  border: 2px solid var(--brand-blue);
  border-radius: 50%;
}

input[type="radio"]:checked {
  background-color: var(--brand-blue);
}
</style>
