<template>
  <div
    class="min-h-[380px] py-20 px-6 lg:px-10 flex flex-col justify-center bg-cover bg-no-repeat bg-center rounded-xl bg-primary text-white relative overflow-hidden"
    :style="`background-image: url(${props.bg})`"
  >
    <div class="absolute inset-0 bg-gradient-to-tr from-black/75 to-transparent"></div>
    <div class="relative">
      <h1 class="text-4xl lg:text-6xl font-bold text-white">
        <span class="font-light"> {{ props.title }} </span>
      </h1>
      <p>{{ props.subtitle }}</p>
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
