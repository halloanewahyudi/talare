<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-primary/10 lg:pt-4 " >
    <NuxtLayout >
    <NuxtPage />
    </NuxtLayout> 
  </div>
</template>
<script setup lang="ts">
import gsap from 'gsap';

 defineAppConfig({
  siteName: 'Nama Situs',
  titleSeparator: '·',
  defaultDescription: 'Deskripsi default situs.',
  defaultKeywords: 'nuxt, vue, tailwind, typescript',
  defaultOgImage: '/og-default.jpg'
})

</script>


<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
  transform: translateY(0);
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>
