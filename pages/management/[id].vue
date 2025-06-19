<template>
  <div class="pb-16">
    <Container>
     <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
      <div class="lg:col-span-1">
      <UiCover :title="item.name" :image="item.image" :height="420" :image-opacity="80" >
        <p>{{ item.position }}</p>
      </UiCover>
      </div>
      <div class="lg:col-span-2">
        <h4 class="text-2xl lg:text-primary lg:text-4xl font-bold mb-3">{{ item.name }}</h4>
        <div v-html="item.bio"></div>
      </div>
     </div>
    </Container>
  </div>
</template>

<script lang="ts" setup>
 const route = useRoute();
 const {management} = useManagement()
 const item = management.value.find((item) => item.id == route.params.id)
</script>

<style>

</style>