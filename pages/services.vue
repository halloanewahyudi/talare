<template>
  <div>
    <container>
      <ui-page-hader
        :title="dataServices?.title"
        :subtitle="dataServices?.acf?.sub_title"
        :bg="dataServices?.featured_image"
        class="mb-20"
      />

      <section> 
        <div class=" text-center leading-relaxed  mb-20" v-html="dataServices?.acf?.description"></div>

  <div class="flex flex-col gap-6 lg:gap-10 mb-20">
    <div class="service-item" v-for="(item, index) in dataServices?.acf?.services" :key="index">
     <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
      <img :src="item?.image?.url" alt="" class="w-full max-h-[300px] h-full object-cover object-center rounded-xl">
      <div>
      <h4 class="text-2xl lg:text-primary lg:text-4xl font-bold mb-3">{{ item?.services_item?.title }}</h4>
      <div class="text-justify">{{ item?.services_item?.description }}</div>
      </div>
     </div>
    </div>
  </div>

      </section>
      </container>
  </div>
</template>

<script lang="ts" setup>
 
const { $gsap } = useNuxtApp()

onMounted(() => {
  const items = $gsap.gsap.utils.toArray<HTMLElement>('.service-item')

  items.forEach((item) => {
    $gsap.gsap.from(item, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        scrub: false, // ubah ke false kalau mau animasi per item, bukan sinkron scroll
        toggleActions: 'play none none play'
      },
    })
  })
})

// data services
const baseUrl = useRuntimeConfig().public.baseUrl;
 const { data:dataServices, pending, error, refresh } = await useFetch(baseUrl+'/api/v1/content/services')
</script>

<style>

</style>