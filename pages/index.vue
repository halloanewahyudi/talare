<template>
  <div>
    <Container>
  
    <!-- Basic Slider -->
    <Splide :options="{ rewind: true, arrows: false, pagination: false }" aria-label="Basic Example">
   
       <SplideSlide class="w-full"  v-for="value in home?.acf?.slideshow" :key="slide">

          <Hero :bg="value?.slide?.slide_image?.url" class="rounded-xl overflow-hidden mb-20 ">
        <div class="max-w-[680px] w-full ">
          <h1 class="text-4xl lg:text-5xl font-bold text-white" v-html="value?.slide?.slide_title"> </h1>
          <div class="text-2xl text-white" v-html="value?.slide?.slide_description"></div>
        </div>
      </Hero>
      </SplideSlide>
 
    </Splide>


      <!--   Brief -->
      <section
        class="mb-20 flex flex-col lg:gap-20 bg-gray-100 p-6 lg:p-0 lg:bg-transparent rounded-xl lg:rounded-none"
      >
        <GsapFadeUp>
          <h2 class="text-2xl lg:text-4xl font-bold text-primary mb-5">
           A Brief of PT Tala Reinsurance Brokers
          </h2>
        </GsapFadeUp>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 relative">
          <div >
            <img
              :src="home?.acf?.a_brief_of_talare?.image?.url"
              alt=""
              class="flex rounded-xl lg:absolute lg:w-[800px] lg:h-[400px] lg:left-0 lg:-top-20 object-cover"
            />
          </div>
   <GsapFadeUp>
          <div
            class="relative p-6 lg:p-10 rounded-xl bg-white/90 backdrop-blur-lg flex flex-col gap-5 border border-neutral-200 lg:shadow-2xl h-max"
          >
            <h3 class="text-2xl font-bold text-primary" v-html="home?.acf?.a_brief_of_talare?.title">
              </h3>
            <div v-html="home?.acf?.a_brief_of_talare?.description" class="text-gray-700"></div>

            <NuxtLink :to="home.acf?.a_brief_of_talare?.button?.url" class="btn btn-primary self-end">
            {{ home.acf?.a_brief_of_talare?.button?.title }}
            </NuxtLink>
          </div>
          </GsapFadeUp>
        </div>
      </section>

   
  </Container>
  </div>
</template>

<script lang="ts" setup>


useSeo({
  title: 'Tips SEO untuk Nuxt 3',
  description: 'Pelajari cara mengoptimalkan SEO di Nuxt 3 dengan mudah.',
  keywords: 'Nuxt 3, SEO, Vue, Tailwind CSS',
  image: 'https://contoh.com/images/seo-nuxt3.png',
  type: 'article'
})

const langActive = ref("EN");
const lang = ref(["EN", "ID"]);
const toggleLang = () => {
  langActive.value = lang.value[lang.value.indexOf(langActive.value) + 1];
};

const baseUrl = useRuntimeConfig().public.baseUrl;
 const { data:home, pending, error, refresh } = await useFetch(baseUrl+'/api/v1/content/home')

</script>

<style></style>
