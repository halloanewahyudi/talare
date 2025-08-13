<template>
  <div>
  <Container>
    <UiPageHader
          :title="wcu?.title"
          :subtitle="wcu?.acf.sub_title"
          :bg="wcu?.featured_image"
          class="mb-20"
        />

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 pb-20">
          <div v-for="item in wcu?.acf?.wcu_items" class="group">
            <Icon :name="item?.item?.icon" class="text-4xl text-primary group-hover:scale-125 hover:-animate-bounce duration-300" />
            <h4 class="text-lg font-bold mt-2 mb-2" v-html="item?.item?.title"></h4>
            <div v-html="item?.item.description" class="text-gray-700 text-justify"></div>
          </div>
        </div>
 </Container>
   
  </div>
</template>

<script lang="ts" setup>

const baseUrl = useRuntimeConfig().public.baseUrl;
 const { data: wcu, pending, error, refresh } = await useFetch(baseUrl+'/api/v1/content/why-choose-us',{
    
})
</script>

<style>

</style>