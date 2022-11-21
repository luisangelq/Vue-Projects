<template>
  <div class="modal">
    <div class="head">
      <p>New record</p>
      <img
        src="@/assets//close-icon.svg"
        alt="close"
        @click="closeModal"
      />
    </div>

    <div class="body">
        <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["closeModal"]);

const closeModal = () => emit("closeModal");

</script>

<style scoped>
.modal {
  z-index: 2;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: white;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 24px 24px;
  box-sizing: border-box;
}

.head img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

p {
  margin: 0;
  font-size: 1.5rem;
  color: var(--brand-blue);
}
</style>
