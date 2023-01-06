import { onMounted, ref } from "vue";
import breakingBadApi from "@/api/breakingBadApi";
import type { Character } from "../interfaces/character";
import axios from "axios";

const characters = ref<Character>();
const isLoading = ref<boolean>(true);
const hasError = ref<boolean>(false);
const errorMessage = ref<string>("");

export const useCharacters = () => {
  onMounted(() => {
    loadCharacters();
  });

  const loadCharacters = async () => {
    if (characters.value) return;

    try {
      setTimeout(async () => {
        const { data } = await breakingBadApi.get<Character>("/character");
        characters.value = data;
        isLoading.value = false;
      }, 1000);
    } catch (error) {
      hasError.value = true;

      if (axios.isAxiosError(error)) {
        return (errorMessage.value = error.message);
      }
      errorMessage.value = JSON.stringify(error);
    }
  };

  return {
    characters,
    isLoading,
    hasError,
    errorMessage,
  };
};
