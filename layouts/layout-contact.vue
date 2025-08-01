<template>
  <div>
    <Navbar class="absolute w-full" />
<slot />
    <Footer/>
  </div>
</template>

<script lang="ts" setup>
import Navbar from '~/components/navbar.vue';

</script>

<style></style>
