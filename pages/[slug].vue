<template>
  <div class="mb-20">
  <container>
    <UiPageHader
        :title="product?.title"
        :subtitle="product?.acf.sub_title"
        :bg="product?.featured_image"
        class="mb-16"
      />
     <div v-html="product?.content" class="flex flex-col "></div>
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