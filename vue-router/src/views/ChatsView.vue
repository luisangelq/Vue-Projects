<template>
  <div>
    <aside>
      <div v-for="chat in chats" :key="chat.id">
        <RouterLink :to="`/chats/${chat.id}`"> 
          {{ chat.name }}
         </RouterLink>
      </div>
    </aside>

    <article>
      <RouterView />
    </article>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";

const route = useRoute();

const chats = ref([
  { id: 1, name: "Luis" },
  { id: 2, name: "Alma" },
  { id: 3, name: "Gaby" },
  { id: 4, name: "Roberto" }
]);

watchEffect(() => {
  console.log(route.params);
});
</script>
