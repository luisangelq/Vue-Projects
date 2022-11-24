<template>
    <h1>Session</h1>
    <RouterView />
    <RouterView name="register" />
</template>

<script setup>
    import { RouterView } from 'vue-router';
</script>