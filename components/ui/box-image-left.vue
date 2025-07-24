<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
     <img :src="props.image" alt="" class="w-full min-h-[300px] h-full object-cover rounded-xl" />
    <div class="box-content">
      <h4 class="text-2xl lg:text-primary lg:text-4xl font-bold mb-3">{{ props.title }}</h4>
       <GsapFadeUp>
      <div v-html="props.description" class="text"></div>
      </GsapFadeUp>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
});
</script>

<style></style>
