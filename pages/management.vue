<template>
  <div>
     <Container>
     <UiPageHader title="Management" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit." bg="./img/talare-slider1.jpg"/>

    <section class="py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
      <div v-for="item in management" :key="item.name">
      <UiCover :title="item.name" :image="item.image" :height="420" :image-opacity="80" >
        <p>{{ item.position }}</p>
      </UiCover>
    
      </div>
    </div>
    </section>
     </Container>
  </div>
</template>

<script lang="ts" setup>
  const {management} = useManagement()
</script>

<style>

</style>