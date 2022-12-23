import { defineStore } from "pinia";

export default defineStore("contacts", {
  state: () => ({
    contacts: [
      { id: 2, name: "Miguelito", avatar: "/avatars/avatar-02.jpg" },
      { id: 3, name: "Gaby", avatar: "/avatars/avatar-03.jpg" },
    ],
  }),
});
