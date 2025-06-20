<template>
  <div>
     <div class="product-header mb-10">
     <h1 class="text-2xl lg:text-4xl font-light  product-title text-primary border-b-2  flex flex-cols lg:flex-row gap-4 "> <span class="font-bold  border-primary border-b-4 pb-1 "> Product </span> <span> {{ item.name }} </span> </h1> 
     </div>
     <section>
     <img src="/img/talare-slider2.jpg" alt="" class="h-[300px] object-cover w-full rounded-xl mb-5 ">
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus odio voluptate, cupiditate accusamus eius distinctio doloremque voluptatibus facere sit consectetur eveniet iusto, aliquam adipisci? Repellendus et reprehenderit perspiciatis doloremque non.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis nulla excepturi ipsam a fugit hic magni nesciunt numquam aperiam officia dignissimos, ut laborum quam explicabo reiciendis, soluta molestias deleniti minima!</p>
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