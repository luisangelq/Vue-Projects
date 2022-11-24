<template>
  <div class="navBar">
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink to="/session">Session</RouterLink>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <RouterLink :to="{ name: 'chats' }">Chats</RouterLink>
  </div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>

.navBar {
  display: flex;
  justify-content: space-around;
  background-color: #f1f1f1;
  padding: 10px;
  margin: 0;
}
</style>
