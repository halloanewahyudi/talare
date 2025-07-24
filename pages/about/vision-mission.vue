<template>
  <div>
    <Container>
      <UiPageHader
        :title="visimisi.title"
        :subtitle="visimisi.acf.sub_title"
        :bg="visimisi.featured_image"
      />

      <div class="pt-16">
        <UiBoxImageLeft
          title="Vision"
          :description="visimisi.acf.vision.vision"
          :image="visimisi.acf.vision.image['url']"
        ></UiBoxImageLeft>
      </div>
      <div class="py-16">
   
        <UiBoxImageRight
          title="Mission"
        :description="visimisi.acf.mission.description"
          :image="visimisi.acf.mission.image['url']"
          class="mission"
        ></UiBoxImageRight>
       
      </div>

      <div class="mb-16">
    <h4 class="text-2xl lg:text-primary lg:text-4xl font-bold mb-6">Core Value</h4>
    <div class="flex h-[400px] overflow-hidden rounded-lg">
      <div
        v-for="(item, index) in coreValue"
        :key="item.title"
        class="group relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex-1 hover:flex-[2] bg-black"
      >
        <!-- Background image -->
        <img
          :src="item.image"
          class="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-300 group-hover:scale-110 opacity-40 group-hover:opacity-80" 
        />
        <!-- Content --> 
        <div class="absolute bottom-0 p-4 z-20 text-white transition-all duration-300">
          <h4 class="text-xl font-bold text-white">{{ item.title }}</h4>
          <p class="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute group-hover:relative w-full ">
            {{ item.subtitle }}
          </p>
        </div>
      </div>
    </div>
  </div>
    </Container>
  </div>
</template>
<script lang="ts" setup>

//  fetch data visi misi
const baseUrl = useRuntimeConfig().public.baseUrl;
 const { data: visimisi, pending, error, refresh } = await useFetch(baseUrl+'/api/v1/content/vision-mission',{
    
})

const activeIndex = ref<number | null>(null);

const setActive = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};


const coreValue = ref([
  {
    title: "Trust",
    subtitle: "We believe in building enduring relationships with our clients and partners, founded on transparency and mutual respect.",
    image: "../img/brief.jpg",
  },
  {
    title: "Excellence",
    subtitle: "Quality is at the core of everything we do. We strive to exceed expectations by delivering innovative and effective solutions.",
    image: "../img/brief.jpg",
  },
  {
    title: "Collaboration",
    subtitle: "By fostering a culture of collaboration—both internally and externally—we empower our clients and partners to achieve shared success.",
    image: "../img/brief.jpg",
  },
  {
    title: "Sustainability",
    subtitle: "We are committed to contributing to the sustainable growth of the insurance and reinsurance industry in Indonesia by promoting sound practices and embracing responsible business strategies.",
    image: "../img/brief.jpg",
  },
   {
    title: "Empowerment",
    subtitle: "Through knowledge-sharing and capacity-building initiatives, we empower our clients to make informed decisions and navigate risks confidently. ",
    image: "../img/brief.jpg",
  },
]);


</script>



<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.text {
  position: relative;
  padding-left: 20px;
  padding-top: 100px;
}

.text p {
  position: absolute;
  background-color: aquamarine;
  top: 100px;
  width: 60%;
  opacity: 0;
}
</style>

