<template>
  <div>
    <Container>
      <UiPageHader
        title="Vision & Mission"
        subtitle="Information about the Vision & Mission"
        bg="./img/visi-misi.jpg"
      />
      <div class="pt-16">
        <UiBoxImageLeft
          title="Vision"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
"
          image="./img/brief.jpg"
        ></UiBoxImageLeft>
      </div>
      <div class="py-16">
        <UiBoxImageRight
          title="Mission"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
"
          image="./img/brief.jpg"
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
          <p class="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
const activeIndex = ref<number | null>(null);

const setActive = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const coreValue = ref([
  {
    title: "Value 1",
    subtitle: "Lorem Ipsum has been the industry",
    image: "./img/brief.jpg",
  },
  {
    title: "Value 2",
    subtitle: "Lorem Ipsum has been the industry",
    image: "./img/brief.jpg",
  },
  {
    title: "Value 3",
    subtitle: "Lorem Ipsum has been the industry",
    image: "./img/brief.jpg",
  },
  {
    title: "Value 4",
    subtitle: "Lorem Ipsum has been the industry",
    image: "./img/brief.jpg",
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
</style>

