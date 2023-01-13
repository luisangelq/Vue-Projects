import apiUrl from "@/api/axiosUrl";
import type { Character, Result } from "@/characters/interfaces/character";
import { reactive } from "vue";

interface Store {
  characters: {
    list: Character;
    count: number;
    isLoading: boolean;
    isError: boolean;
    errorMessage: string | null;
  };
  ids: {
    list: {
      [id: string]: Result;
    };
    isLoading: boolean;
    isError: boolean;
    errorMessage: string | null;
  };

  //Methods
  loadCharacters: () => Promise<Character>;
  loadedCharacters: (characters: Character) => void;
  charactersError: (error: string) => void;

  //Methods for ids
  loadCharacterById: (id: string) => Promise<Result>;
  checkIdInStore: (id: string) => boolean;
  loadedCharacterById: (character: Result) => void;
}

//Initial state
const characterStore = reactive<Store>({
  characters: {
    count: 0,
    errorMessage: null,
    isError: false,
    isLoading: true,
    list: {
      info: {
        count: 0,
        next: "",
        pages: 0,
        prev: null,
      },
      results: [],
    },
  },
  ids: {
    list: {},
    isLoading: true,
    isError: false,
    errorMessage: null,
  },

  //Methods
  loadCharacters: async (): Promise<Character> => {
    if (characterStore.characters.count > 0) {
      return characterStore.characters.list;
    }
    const { data } = await apiUrl.get<Character>("/character");

    return data;
  },
  loadedCharacters: (data: Character) => {
    characterStore.characters.list = data;
    characterStore.characters.count = data.results.length;
    characterStore.characters.isLoading = false;
  },
  charactersError: (error: string) => {
    characterStore.characters.errorMessage = error;
    characterStore.characters.isError = true;
    characterStore.characters.isLoading = false;
  },

  //Methods for ids
  loadCharacterById: async (id: string): Promise<Result> => {
    if (characterStore.checkIdInStore(id)) {
      return characterStore.ids.list[id];
    }

    const { data } = await apiUrl.get<Result>(`/character/${id}`);
    console.log(data);

    return data;
  },
  checkIdInStore: (id: string) => {
    if (characterStore.ids.list[id]) {
      return true;
    }

    return false;
  },
  loadedCharacterById: (character: Result) => {
    characterStore.ids.list[character.id] = character;
    characterStore.ids.isLoading = false;
  },
});

export default characterStore;
