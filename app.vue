<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-primary/10">
    <!--   <NuxtLayout >
    <NuxtPage />
    </NuxtLayout> -->
    <div class="flex flex-col justify-center items-center p-6 min-h-screen">
      <div class="max-w-md w-full text-center">
        <h1 class="text-4xl lg:text-8xl font-bold word text-primary">Sorry..!</h1>
        <p class="text-xl word">this website is under development</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import gsap from 'gsap';

onMounted(() => {
  gsap.from(".word", {
    y: "100%",
    scale: 1.4,
    skewY: 10,
    opacity: 0,
    filter: "blur(10px)", // blur awal
    duration: 0.8,
    ease: "elastic.out(1, 0.5)", // jelly effect
    stagger: 0.2,
    onUpdate: function () {
      // Untuk memastikan efek blur ikut transisi
      gsap.to(".word", {
        filter: "blur(0px)", // blur hilang saat animasi jalan
        duration: 0.3,
        ease: "power1.out",
        overwrite: "auto",
      });
    }
  });
});

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
