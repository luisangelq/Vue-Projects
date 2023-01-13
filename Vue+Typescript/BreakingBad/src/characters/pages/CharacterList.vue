<script setup lang="ts">
import CardList from "@/characters/components/CardList.vue";
import useCharacters from "../composables/useCharacters";

const props = defineProps<{ title: string; visible: boolean }>();

const { characters, isLoading, isError, errorMessage, count } = useCharacters();
</script>

<template>
  <h1 v-if="isLoading">Loading...</h1>
  <h1 v-else-if="isError">{{ errorMessage }}</h1>

  <template v-else>
    <h2>{{ props.title }} - ({{ count }})</h2>
    <CardList :characters="characters" />
  </template>
</template>
