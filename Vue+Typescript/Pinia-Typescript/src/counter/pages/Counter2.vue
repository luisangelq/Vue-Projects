<script setup lang="ts">
import { useCounterSetupStore } from '@/store/counterSetup';

const counterSetup = useCounterSetupStore();

</script>

<template>
    <div>
        <h1>Pinia Setup</h1>
        <p>Current value: {{ counterSetup.count }} </p>
        <p>Square: {{ counterSetup.squaredCount }}</p>

        <button @click="counterSetup.increment">+1</button>
        <button @click="counterSetup.incrementBy(2)">+2</button>
        <button @click="counterSetup.incrementBy(5)">+5</button>
        <button @click="counterSetup.reset()">Reset</button>
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