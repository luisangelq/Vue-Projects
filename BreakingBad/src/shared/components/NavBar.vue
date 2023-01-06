<script setup lang="ts">
import type { RouterLink } from "../../router/link-routes";

interface Props {
  title?: string;
  links?: RouterLink[];
  showIcon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  links: () => [],
  showIcon: false,
});
</script>

<template>
  <nav>
    <img v-show="props.showIcon" src="@/assets/logo.svg" alt="logo" height="25" width="25" />

    <span v-if="props.title">{{ props.title }}</span>

    <router-link v-for="link of props.links" :key="link.path" :to="link.path">{{
      link.title
    }}</router-link>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem;
  height: 3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
