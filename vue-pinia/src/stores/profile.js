import { defineStore } from "pinia";

export default defineStore('profile', {
    state: () => ({
        id: 1,
        username: 'luisangelq',
        avatar: '/avatars/avatar.jpg',
        status: 'active',
    }),
})