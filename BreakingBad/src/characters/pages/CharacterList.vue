<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";

import CardList from "@/characters/components/CardList.vue";
import characterStore from "@/store/character.store";

const props = defineProps<{
  title: string;
  visible: boolean;
}>();


useQuery(
  ["character"],
  characterStore.loadCharacters,
  {
    onSuccess: (data ) => {
      characterStore.loadedCharacters(data);
    },
    onError: (error: string) => {
      characterStore.charactersError(error);
    },
  }
);
</script>

<template>
  <h1 v-if="characterStore.characters.isLoading">Loading...</h1>

  <template v-else>
    <h2>{{ props.title }}</h2>
    <CardList :characters="characterStore.characters.list.results" />
  </template>
</template>

<style scoped></style>
