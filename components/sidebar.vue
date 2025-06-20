<template>
  <div>
    <div class="sidebar sticky top-20 rounded-xl ">
      <ul class="sidebar-menu flex flex-col divide-y divide-neutral-300">
        <li
          v-for="(menu, index) in productMenu"
          :key="index"
          class="py-2 pr-6 pl-8 relative"
        >
        <Icon v-if="menu.slug == route.params.slug" name="iconoir:arrow-right-circle-solid" class=" text-secondary absolute left-2" />
       
          <NuxtLink :to="menu.slug" class="hover:text-primary">
            {{ menu.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>


<script lang="ts" setup>
 const {productMenu} = useProductMenu();
 const route = useRoute();
</script>

<style scoped>
@reference "tailwindcss";

.sidebar-menu{
  @apply bg-gradient-to-b from-neutral-50 via-white to-neutral-200 overflow-hidden rounded-xl border-2 border-neutral-300 shadow-2xl;
}

.sidebar-menu li{
transition: all 0.2s;
@apply flex gap-2 items-center;
}

.router-link-active {
  @apply  font-bold relative;
}

</style>