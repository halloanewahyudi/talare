<template>
  <div class="pb-16">
    <Container>
      <section class="pb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          <div class="lg:col-span-1">
          <div class=" px-6 lg:px-16">
            <UiCover
              :title="item.name"
              :image="item.image"
              :height="240"
              :image-opacity="80"
              class="border-4 border-gray-400"
            >
              <p>{{ item.position }}</p>
            </UiCover>
          </div>
          
          </div>
          <div class="lg:col-span-2">
            <h4 class="text-2xl lg:text-primary lg:text-4xl font-bold mb-3">
              {{ item.name }}
            </h4>
            <div v-html="item.bio"></div>
          </div>
        </div>
      </section>

      <section>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          <div v-for="manager in management"
            :key="manager.id"
          >
            <NuxtLink :to="'/management/' + manager.id"  class="flex gap-2 bg-white p-4 rounded-xl border border-gray-200 h-full hover:shadow-xl duration-300">
              <img
                :src="manager.image"
                alt=""
                class="w-[60px] h-[60px] object-cover object-top rounded-full shrink-0"
              />
              <div>
                <h4 class="text-sm font-semibold mb-1">{{ manager.name }}</h4>
                <span class="text-sm italic">{{ manager.position }}</span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>
    </Container>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const { management } = useManagement();
const item = management.value.find((item) => item.id == route.params.id);
</script>

<style></style>
