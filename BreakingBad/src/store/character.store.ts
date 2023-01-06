import breakingBadApi from "@/api/breakingBadApi";
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
  loadCharacterById: () => void;
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
    isLoading: false,
    isError: false,
    errorMessage: null,
  },

  //Methods
  loadCharacters: async (): Promise<Character> => {
    const { data } = await breakingBadApi.get<Character>("/character");

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
  loadCharacterById: () => {
    characterStore.ids.isLoading = true;
    characterStore
  },
  checkIdInStore: (id: string) => {
    return true;
  },
  loadedCharacterById: (character: Result) => {},
});

export default characterStore;
