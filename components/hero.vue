<template>
  <div class="hero" :style="`background-image: url(${props.bg})`">
    <div class="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
    <div class="relative z-10 w-full">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  bg: String,
});
</script>

<style>
@reference "tailwindcss";
.hero {
  @apply bg-cover bg-center flex flex-col items-center justify-center p-10 min-h-[80vh] relative;
}
</style>
