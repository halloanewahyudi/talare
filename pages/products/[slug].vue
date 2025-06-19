<template>
  <div>
     <div class=" items-center">
     <h1 class="text-2xl lg:text-4xl  product-title text-primary border-b-2 pb-2"> <span class="font-bold  border-primary border-b-4 "> Product </span> {{ item.name }} </h1> 
     </div>
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    layout: 'layout-product'
  })
  const route = useRoute();
  const { productMenu } = useProductMenu();
   const item = productMenu.value.find((item) => item.slug == route.params.slug);
</script>

<style>

</style>