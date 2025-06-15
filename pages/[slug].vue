<template>
  <div class="min-h-[80vh] flex flex-col items-center justify-center p-10 bg-neutral-200">
     <h1 class="text-4xl font-bold text-neutral-400"> <span class="font-light">Page of </span> {{ route.params.slug }}</h1>

  </div>
</template>

<script lang="ts" setup>


const route = useRoute()
</script>

<style>

</style>