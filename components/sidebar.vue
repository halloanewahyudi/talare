<template>
  <div class="sidebar p-6 lg:p-10 rounded-xl border border-neutral-200 shadow-2xl">
    <ul class="flex lg:flex-col gap-2">
      <li v-for="(menu,index) in productMenu" :key="index">
      <NuxtLink :to="menu.slug" class=" hover:text-primary">
      {{ menu.name }}
      </NuxtLink>
      </li></ul>
  </div>
</template>

<script lang="ts" setup>
 const {productMenu} = useProductMenu();
</script>

<style scoped>
@reference "tailwindcss";

.router-link-active {
  @apply text-[var(--color-primary)] font-bold relative;
}

</style>