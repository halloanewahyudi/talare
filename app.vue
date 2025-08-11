<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-primary/10 lg:pt-10 " >
    <NuxtLayout >
    <NuxtPage />
    </NuxtLayout> 
  </div>
</template>
<script setup lang="ts">
import gsap from 'gsap';


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
