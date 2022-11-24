<template>
  <div v-for="msg in filteredMessages" :key="msg.id">
    {{ msg.text }}
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

console.log(props);

const messages = ref([
  { id: 1, text: "Hello", author: 1 },
  { id: 2, text: "Hi", author: 2 },
  { id: 3, text: "How are you?", author: 1 },
  { id: 4, text: "I'm fine, thanks", author: 2 },
  { id: 5, text: "What about you?", author: 1 },
  { id: 6, text: "Same here", author: 2 },
]);

const filteredMessages = computed(() => {
  // Filter messages checking params from the route
  const currentChat = Number(props.id);
  const authorMessages = messages.value.map((msg) => {
    if (msg.author === currentChat) {
      return { ...msg, text: `You: ${msg.text}` };
    }
    return msg;
  });

  return authorMessages;
});
</script>
