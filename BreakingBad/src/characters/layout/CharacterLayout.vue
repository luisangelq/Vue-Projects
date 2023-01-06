<script setup lang="ts">
import NavBar from "@/shared/components/NavBar.vue";
import characterRoute from "../router/index";
import type { RouterLink } from "../../router/link-routes";

const routeLinks: RouterLink[] = characterRoute
  .children!.filter(
    (route) => (route.props as { title: string; visible: boolean }).visible
  )
  .map((route) => ({
    name: route.name as string,
    path: route.path,
    title: (route.props as { title: string; visible: boolean }).title,
  }));
</script>

<template>
  <div>
    Character Layout

    <NavBar :links="routeLinks" />

    <Suspense>
      <router-view />
    </Suspense>
  </div>
</template>

<style scoped></style>
