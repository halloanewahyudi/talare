<template>
  <div>
    <Navbar class="absolute w-full" />
    <div class="min-h-screen relative">
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 min-h-screen items-center">
      <div class="md:col-span-1 relative">
        <img
          src="/img/klaim.jpg"
          alt=""
          class="w-full min-h-screen h-full object-cover"
        />
        <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl lg:text-6xl font-bold text-white">Contact</h1>
      </div>
      <div class="md:col-span-2 lg:col-span-1">
        <slot />
      </div>
    </div>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts" setup>
import Navbar from '~/components/navbar.vue';

</script>

<style></style>
