<script setup lang="ts">
import { useRouter } from "vue-router";
import type { Result } from "../interfaces/character";

const router = useRouter();

const goToCharacter = (id: number) => {
  router.push(`by/${id}`);
};

defineProps<{
   character: Result;

}>();
</script>

<template>
  <div class="character-card" @click="goToCharacter(character.id)">
    <img :src="character.image" :alt="character.name" />
    <h3>{{ character.name }}</h3>
  </div>
</template>


<style scoped>
.character-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #00bd7e;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(255, 251, 251, 0.2);
}
h3{
  margin: 1rem 0;
  color: #00bd7e;
  font-size: 20px;
}
</style>
