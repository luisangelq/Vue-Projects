<template>
  <main>
    <h3>User name {{userName}}</h3>
    <input placeholder="Enter tour user name" v-model="userName" />
  </main>
</template>

<script setup>
import { ref } from "vue";

const userName = ref("");
</script>
