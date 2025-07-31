<template>
  <div class="pb-20">
    <container>
      <div class="flex items-center gap-2 mb-5">
        <div class="line w-10 lg:w-20 h-1 bg-primary"></div>
        <h2 class="text-4xl text-primary font-bold">Clients & Strategic Partners</h2>
      </div>

      <div
        class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 justify-center items-center divide-gray-200 bg-white rounded-xl border border-gray-200"
      >
        <div v-for="item in clients" class="p-4">
          <img :src="item?.featured_image" alt="" class="object-contain" />
        </div>
      </div>
    </container>
  </div>
</template>

<script lang="ts" setup>
const { data: clients, status } = await useApi("/posts/partner");
</script>

<style></style>
