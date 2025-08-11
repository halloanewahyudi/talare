<template>
  <div class="pb-20">
    <container>
      <div class="flex items-center gap-2 mb-5">
        <div class="line w-10 lg:w-20 h-1 bg-primary"></div>
        <h2 class="text-4xl text-primary font-bold">Clients & Strategic Partners</h2>
      </div>

       <div class="mb-10">
    <h4 class="text-xl mb-5"> Insurance Company </h4>
      <div
        class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 justify-center items-center divide-gray-200 bg-white rounded-xl border border-gray-200"
      >
        <div v-for="item in ic" class="p-4">
          <img :src="item?.featured_image" alt="" class="object-contain h-20 mx-auto" />
        </div>
      </div>
  </div>


 <div class="mb-10">
    <h4 class="text-xl mb-5"> Reinsurance Company </h4>
      <div
        class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 justify-center items-center divide-gray-200 bg-white rounded-xl border border-gray-200"
      >
        <div v-for="item in rc" class="p-4">
          <img :src="item?.featured_image" alt="" class="object-contain h-20 mx-auto" />
        </div>
      </div>
  </div>
      
  <div class="mb-10">
    <h4 class="text-xl mb-5"> Joint Brokers </h4>
      <div
        class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 justify-center items-center divide-gray-200 bg-white rounded-xl border border-gray-200"
      >
        <div v-for="item in jb" class="p-4">
          <img :src="item?.featured_image" alt="" class="object-contain h-20 mx-auto" />
        </div>
      </div>
  </div>
   
    </container>
  </div>
</template>

<script lang="ts" setup>

const { data: ic, status: icStatus } = await useApi("/posts/partner?per_page=100&taxonomy=client-category&term=insurance-company");

const { data: jb, status: jbStatus } = await useApi("/posts/partner?per_page=100&taxonomy=client-category&term=joint-brokers");

const { data: rc, status : rcStatus } = await useApi("/posts/partner?per_page=100&taxonomy=client-category&term=reinsurance-company	");

</script>

<style></style>
