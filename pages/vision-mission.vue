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
        <h4 class="text-2xl lg:text-primary lg:text-4xl font-bold mb-3">Core Value</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div v-for="item in coreValue" :key="item.title">
            <div class="relative overflow-hidden bg-black w-full group h-[300px]">
              <img
                :src="item.image"
                alt=""
                class="w-full object-cover group-hover:scale-110 duration-300 ease-in-out h-[300px]"
              />
              <div class="absolute z-10 bottom-2 left-2 text-white p-4">
                <h4 class="text-xl font-bold text-white">{{ item.title }}</h4>
                <slot />
              </div>
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/90 to-white/10"
              ></div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script lang="ts" setup>
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

<style></style>
