<template>
  <div class="relative rounded-xl overflow-hidden bg-black w-full  group " :style="`height: ${props.height}px`">
  <img :src="props.image" alt="" class=" w-full object-cover  group-hover:scale-110 duration-300 ease-in-out" :style="`height: ${props.height}px; opacity: ${props.imageOpacity}%`" >
    <div class="absolute z-10  bottom-2 left-2 text-white p-4">
     <h4 class="text-xl font-bold  text-white" >{{ props.title }}</h4>
     <slot />
    </div>
    <div class="absolute inset-0 bg-gradient-to-t from-black/90 to-white/10"></div>
  </div>
</template>

<script lang="ts" setup>
 const props = withDefaults(
  defineProps<{
    image: string
    imageOpacity?: number
    title: string
    height?: number
  }>(),
  {
    height: 300,
    imageOpacity: 80
  }
)

</script>

<style>

</style>