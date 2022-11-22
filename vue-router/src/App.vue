<template>
  <div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/chats">Chats</RouterLink>
  </div>
  <RouterView />

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>


<style scoped>

</style>
