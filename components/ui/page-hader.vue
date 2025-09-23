<template>
  <div
    class="min-h-[380px] pt-20 px-6 lg:px-10 flex flex-col justify-end bg-cover bg-no-repeat bg-center rounded-xl bg-primary text-white relative overflow-hidden"
    :style="`background-image: url(${props.bg})`"
  >
    <div class="absolute inset-0 bg-gradient-to-tr from-black/75 to-transparent"></div>
    <div class="relative flex justify-between items-end pb-20">
      <h1 class="text-4xl lg:text-6xl font-bold text-white">
        <span class="font-light" v-html="props.title"> </span>
      </h1>
      <p class="text-sm text-white/80 absolute bottom-0 right-0 italic">{{ props.subtitle }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  bg: String,
  title: String,
  subtitle: String,
});
</script>

<style></style>
