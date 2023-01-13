import { ref, computed } from "vue";
import type { Character, Result } from "../interfaces/character";
import apiUrl from "@/api/axiosUrl";
import { useQuery } from "@tanstack/vue-query";

const characters = ref<Result[]>([]);
const errorMessage = ref<string | null>(null);

const getCharacters = async (): Promise<Result[]> => {
  if (characters.value.length > 0) return characters.value;

  const { data } = await apiUrl.get<Character>("/character");
  return data.results;
};

const useCharacters = () => {
  const { isLoading, isError } = useQuery(["characters"], getCharacters, {
    onSuccess: (data) => {
      characters.value = data;
    },
    onError: () => {
      errorMessage.value = "Characters not found";
    },
  });

  return {
    characters,
    isLoading,
    isError,
    errorMessage,

    //getters
    count: computed(() => characters.value.length),

    //methods
    getCharacters,
  };
};

export default useCharacters;
