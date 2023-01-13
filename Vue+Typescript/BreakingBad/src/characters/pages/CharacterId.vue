<script setup lang="ts">
import { watch, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import useCharacter from "../composables/useCharacter";

const route = useRoute();
const router = useRouter();

const { id } = route.params as { id: string };

const { character, isLoading, isError, errorMessage } = useCharacter(id);

watchEffect(() => {
  if (isError.value) {
    //send to list page
    router.replace("/characters");
  }
});

</script>

<template>
  <h1 v-if="isLoading">Loading...</h1>
  <h1 v-else-if="isError">{{ errorMessage }}</h1>

  <div v-else-if="character">
    <h1>{{ character.name }}</h1>
    <div class="container">
      <img :src="character.image" alt="character image" />
      <ul>
        <li>Species: {{ character.species }}</li>
        <li>Status: {{ character.status }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container ul {
  list-style: none;
  padding: 1rem;
}
</style>
