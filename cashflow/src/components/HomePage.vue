<template>
  <Layout>
    <template #header>
      <Header />
    </template>

    <template #resume>
      <Resume
        :totalLabel="'Total Savings'"
        :label="label"
        :total-amount="200000"
        :amount="amount"
      >
        <template #graphic>
          <Graphic />
        </template>
        <template #action>
          <Action />
        </template>
      </Resume>
    </template>

    <template #movements>
      <Movements />
    </template>
  </Layout>
</template>

<script setup>
import { ref } from "vue";
import Layout from "./Layout.vue";
import Header from "./Header.vue";
import Resume from "./Resume/index.vue";
import Movements from "./Movements.vue";

const amount = ref(null);
const label = ref(null);
</script>
