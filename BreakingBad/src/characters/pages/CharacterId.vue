<template>
    <div>
        Character Id
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

    const route = useRoute();

    const {id} = route.params as { id: string };
</script>

<style scoped>

</style>