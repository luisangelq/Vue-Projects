<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counterOptions';

const counterOptions = useCounterOptionsStore();

</script>

<template>
    <div>
        <h1>Pinia Options</h1>
        <p>Current value: {{ counterOptions.count }} </p>
        <p>Square: {{ counterOptions.squaredCount }}</p>

        <button @click="counterOptions.increment">+1</button>
        <button @click="counterOptions.incrementBy(2)">+2</button>
        <button @click="counterOptions.incrementBy(5)">+5</button>
        <button @click="counterOptions.$reset()">Reset</button>
    </div>
</template>


<style scoped>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    button {
        margin: 0.5rem;
    }
</style>