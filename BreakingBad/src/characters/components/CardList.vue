<script setup lang="ts">
import CharacterCard from "./CharacterCard.vue";
import type { Result } from "../interfaces/character";

//! 1- Normal suspense

// //initialize the response api with suspense
// const { data: characters } = await breakingBadApi.get<Character>("/character");

//! 2- Conposable function
//const { isLoading, characters, hasError, errorMessage } = useCharacters();

//! 3- TanStack Query

// const getCharactersSlow = async (): Promise<Character> => {

//   return new Promise((resolve) => {
//     setTimeout(async () => {
//       const { data } = await breakingBadApi.get<Character>("/character");
//       resolve(data);
//     }, 1000);
//   });

// const { data } = await breakingBadApi.get<Character>("/character");
// return data;
// };
// const {
//   isLoading,
//   isError,
//   data: characters,
//   error,
// } = useQuery(["characters"], getCharactersSlow,
//   {
//     cacheTime: 1000 * 60,
//     refetchOnReconnect: 'always'

//   }
// );

interface Props {
  characters: Result[];
}
const props = defineProps<Props>();
</script>

<template>
  <CharacterCard
    v-for="character in characters"
    :key="character.id"
    :character="character"
  />
</template>

<style scoped></style>
