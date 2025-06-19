<template>
  <div>
     <div class="product-header mb-10">
     <h1 class="text-2xl lg:text-4xl font-light  product-title text-primary border-b-2  flex flex-cols lg:flex-row gap-4 "> <span class="font-bold  border-primary border-b-4 pb-1 "> Product </span> <span> {{ item.name }} </span> </h1> 
     </div>
     <section>
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus odio voluptate, cupiditate accusamus eius distinctio doloremque voluptatibus facere sit consectetur eveniet iusto, aliquam adipisci? Repellendus et reprehenderit perspiciatis doloremque non.</p>
     </section>
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