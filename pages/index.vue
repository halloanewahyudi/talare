<template>
  <div>
    <Container>
      <!--  hero -->
      <Hero :bg="home?.acf?.counter?.background?.url" class="rounded-xl overflow-hidden mb-20">
        <div class="max-w-[600px] w-full">
          <h1 class="text-4xl lg:text-6xl font-bold text-white">
            Reinsurance Consultant
          </h1>
          <p class="text-2xl text-white">
            full service international reinsurance intermediary companies in Indonesia. 
          </p>
        </div>
      </Hero>

      <!--   Brief -->
      <section
        class="mb-20 flex flex-col lg:gap-20 bg-gray-100 p-6 lg:p-0 lg:bg-transparent rounded-xl lg:rounded-none"
      >
        <GsapFadeUp>
          <h2 class="text-2xl lg:text-4xl font-bold text-primary mb-5">
            A Brief of Talare
          </h2>
        </GsapFadeUp>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 relative">
          <div class="">
            <img
              :src="home?.acf?.a_brief_of_talare?.image?.url"
              alt=""
              class="flex rounded-xl lg:absolute lg:w-[800px] lg:h-[400px] lg:left-0 lg:-top-20 object-cover"
            />
          </div>
   <GsapFadeUp>
          <div
            class="relative p-6 lg:p-10 rounded-xl bg-white flex flex-col gap-5 border border-neutral-200 lg:shadow-2xl h-max"
          >
            <h3 class="text-2xl font-bold text-primary" v-html="home?.acf?.a_brief_of_talare?.title">
             
            </h3>
            <div v-html="home?.acf?.a_brief_of_talare?.description"></div>

            <NuxtLink :to="home.acf?.a_brief_of_talare?.button?.url" class="btn btn-primary self-end">
            {{ home.acf?.a_brief_of_talare?.button?.title }}
            </NuxtLink>
          </div>
          </GsapFadeUp>
        </div>
      </section>

      <!-- counter  -->
       <section
    class="grid grid-cols-1 md:grid-cols-3 gap-5 bg-[url('/img/banner-statistik.jpg')] bg-cover bg-center rounded-xl overflow-hidden p-6 lg:p-10 mb-20 relative text-white"
  >
    <Counter
      v-for="(item, i) in home?.acf?.counter?.item"
      :key="i"
      :label="item.caption"
      :value="item.number"
    />
  </section>
  </Container>
  </div>
</template>

<script lang="ts" setup>
const langActive = ref("EN");
const lang = ref(["EN", "ID"]);
const toggleLang = () => {
  langActive.value = lang.value[lang.value.indexOf(langActive.value) + 1];
};

const baseUrl = useRuntimeConfig().public.baseUrl;
 const { data:home, pending, error, refresh } = await useFetch(baseUrl+'/api/v1/content/home')

</script>

<style></style>
