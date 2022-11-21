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
          <Graphic :amounts="amounts" />
        </template>
        <template #action>
          <Action @addMovement="addMovement" />
        </template>
      </Resume>
    </template>

    <template #movements>
      <Movements :movements="movements" @removeMovement="removeMovement" />
    </template>
  </Layout>
</template>

<script setup>
import { ref, computed } from "vue";
import Layout from "./Layout.vue";
import Header from "./Header.vue";
import Resume from "./Resume/index.vue";
import Graphic from "./Graphic.vue";
import Action from "./Action.vue";
import Movements from "./Movements/index.vue";

const amount = ref(null);
const label = ref(null);

// const amounts = ref([1000, -100, -200, -300 ]);

const movements = ref([
  {
    id: 1,
    title: "Salary",
    description: "Salary from my job",
    amount: 3000,
    type: "Income",
    time: new Date("11-19-2022"),
  },
  {
    id: 2,
    title: "Rent",
    description: "Rent from my apartment",
    amount: -1200,
    type: "Spent",
    time: new Date("11-19-2022"),
  },
  {
    id: 3,
    title: "Groceries",
    description: "Comida",
    amount: -1000,
    type: "Spent",
    time: new Date("11-19-2022"),
  },
  {
    id: 4,
    title: "Bus",
    description: "Bus ride",
    amount: -200,
    type: "Spent",
    time: new Date("11-19-2022"),
  },
  {
    id: 5,
    title: "Credit Card",
    description: "BBVA Credit Card",
    amount: -2000,
    type: "Spent",
    time: new Date("11-19-2022"),
  },
  {
    id: 6,
    title: "Salary",
    description: "Salary from my job",
    amount: 3000,
    type: "Income",
    time: new Date("11-19-2022"),
  },
  {
    id: 7,
    title: "Rent",
    description: "Rent from my apartment",
    amount: -1200,
    type: "Spent",
    time: new Date("11-19-2022"),
  },
  {
    id: 8,
    title: "Groceries",
    description: "Comida",
    amount: -1000,
    type: "Spent",
    time: new Date("11-19-2022"),
  },
  {
    id: 9,
    title: "Bus",
    description: "Bus ride",
    amount: -200,
    type: "Spent",
    time: new Date("11-19-2022"),
  },
  {
    id: 10,
    title: "Credit Card",
    description: "BBVA Credit Card",
    amount: -2000,
    type: "Spent",
    time: new Date("11-19-2022"),
  },
]);

const amounts = computed(() => {
  return movements.value.map((movement) => movement.amount);
});

const addMovement = (movement) => movements.value.push(movement);

const removeMovement = (id) =>
  (movements.value = movements.value.filter((movement) => movement.id !== id));
</script>
