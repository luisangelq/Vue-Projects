<template>
  <main>
    <h3>User name {{ userName }}</h3>
    <input placeholder="Enter tour user name" v-model="userName" />
    <button @click="logIn">Log In</button>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const userName = ref("");

const logIn = () => {
  router.replace("/chats");
};
</script>
