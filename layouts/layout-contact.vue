<template>
  <div>
    <Navbar class="absolute w-full hidden lg:block" />
    <MobileNavbar class="lg:hidden" />
<slot />
    <Footer/>
  </div>
</template>

<script lang="ts" setup>
import Navbar from '~/components/navbar.vue';

</script>

<style></style>
