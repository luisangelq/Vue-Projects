<template>
  <div class="block bg-white sm:border sm:rounded-lg p-4">
    <h3 class="font-bold text-xl mb-2 mt-0">{{ title }}</h3>
    <div class="my-2">
      <p class="m-0">Por {{ author }}</p>
      <small class="italic">Fecha de publicación: {{ date }}</small>
    </div>
    <figure>
      <img :src="cover" alt="cover" class="w-full" />
    </figure>
    <p class="my-4 font-serif">{{ description }}</p>
    <div class="flex gap-2">
      <a
        class="w-full text-center border rounded-full px-8 py-2 bg-gray-200 hover:bg-gray-300"
        :href="slug"
        >Ir al post</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    slug: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
    date: {
      type: Date,
      default: '',
    },
    cover: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>

