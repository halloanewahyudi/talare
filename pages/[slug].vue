<template>
  <div class="mb-20">
  <container>

      <img :src="product?.featured_image" alt="" class="h-[300px] object-cover w-full rounded-xl mb-5 ">
     <div v-html="product?.content" class="flex flex-col gap-6"></div>
  </container>
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    // layout: 'layout-product',

  })
  const route = useRoute();
  const { productMenu } = useProductMenu();
  const item = productMenu.value.find((item) => item.slug == route.params.slug);

  const {data:product} =  await useApi(`/content/${route.params.slug}`)
</script>

<style>

</style>