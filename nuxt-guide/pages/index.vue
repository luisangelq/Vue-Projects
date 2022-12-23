<template>
  <div class="m-auto">
    <AboutMe />

    <div
      class="flex flex-col justify-center items-center sm:p-2 md:p-4 lg:p-8 xl:p-16"
    >
      <main
        class="max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <ArticleCard v-for="post in posts" :key="post.slug" />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {
    AboutMe: () => import('~/components/AboutMe.vue'),
    ArticleCard: () => import('~/components/ArticleCard.vue'),
  },
  data() {
    return {
      posts: [1, 2, 3, 4],
    }
  },
}
</script>

<style lang="scss"></style>
