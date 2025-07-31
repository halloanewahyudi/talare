<template>
  <div>
     <div class="product-header mb-10">
     <h1 class="text-2xl lg:text-4xl font-light  product-title text-primary border-b-2  flex flex-cols lg:flex-row gap-4 "> <span class="font-bold  border-primary border-b-4 pb-1 "> Product </span> <span> {{ item?.name }} </span> </h1> 
     </div>

      <img :src="product?.featured_image" alt="" class="h-[300px] object-cover w-full rounded-xl mb-5 ">
     <div v-html="product?.content" class=""></div>

  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    layout: 'layout-product',

  })
  const route = useRoute();
  const { productMenu } = useProductMenu();
  const item = productMenu.value.find((item) => item.slug == route.params.slug);

  const {data:product} =  await useApi(`/content/${route.params.slug}`)
</script>

<style>

</style>