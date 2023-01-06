import { defineStore } from "pinia";

import useProfileStore from "./profile";

export default defineStore("contacts", {
  state: () => ({
    contacts: [
      { id: 2, name: "Miguelito", avatar: "/avatars/avatar-02.jpg" },
      { id: 3, name: "Gaby", avatar: "/avatars/avatar-03.jpg" },
    ],
  }),

  getters: {
    getContactById: (state) => (id) => {
      const profileStore = useProfileStore();

      console.log("profileStore.id", profileStore.id);
      console.log(id);

      if (id === profileStore.id) return {
        id: profileStore.id,
        name: "Yo",
        avatar: profileStore.avatar,
      }
      return state.contacts.find((contact) => contact.id === id);
    },
  },
});
