<template>
  <div>
    <Container>
      <UiPageHader
        title="Vision & Mission"
        subtitle="Information about the Vision & Mission"
        bg="./img/bg-hero.jpg"
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
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
         <UiCover v-for="item in coreValue" :key="item.title" :title="item.title" :image="item.image" :height="280" :image-opacity="60" />
      </div>
      </div>
  
   
    </Container>
  </div>
</template>

<script lang="ts" setup>
  const coreValue = ref([
    {
      title:'Value 1',
      image:'./img/brief.jpg',
    },{
      title:'Value 2',
      image:'./img/brief.jpg',
    },{
      title:'Value 3',
      image:'./img/brief.jpg',
    },{
      title:'Value 4',
      image:'./img/brief.jpg',
    }
  ])
</script>

<style></style>
