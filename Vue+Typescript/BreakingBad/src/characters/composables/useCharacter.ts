import apiUrl from "@/api/axiosUrl";
import { ref, computed } from 'vue';
import type { Result } from "../interfaces/character";
import { useQuery } from "@tanstack/vue-query";

const character = ref<{ [id: string]: Result }>({});
const errorMessage = ref<string | null>(null);

const getCharacter = async (id: string): Promise<Result> => {
  if (character.value[id]) return character.value[id];

  const { data } = await apiUrl.get<Result>(`/character/${id}`);
  
  return data;
};

const useCharacter = (id: string) => {
  const { isLoading, isError } = useQuery(
    ["character"],
    () => getCharacter(id),
    {
      onSuccess: (data) => {
        character.value[id] = data;
      },
      onError: () => {
        errorMessage.value = "Character not found";
      },
    }
  );

  return {
    isLoading,
    isError,
    errorMessage,

    //getters
    character: computed<Result >(() => character.value[id]),

  };
};

export default useCharacter;
