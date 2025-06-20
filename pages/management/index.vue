<template>
  <div>
    <Container>
      <UiPageHader
        title="Management"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        bg="./img/talare-slider1.jpg"
      />

      <section class="py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          <div v-for="item in management" :key="item.name">
            <NuxtLink :to="'/management/' + item.id" class="group">
            <div class="relative h-[380px] w-full overflow-hidden rounded-xl border border-neutral-400 group-hover:shadow-xl mb-3">
             <img
                :src="item.image"
                alt=""
                class="w-full h-[380px] object-cover group-hover:scale-110 duration-300"
              />
            </div>
             
              <h4 class="text-lg font-bold group-hover:text-primary duration-300">{{ item.name }}</h4>
              <p>{{ item.position }}</p>
            </NuxtLink>
          </div>
        </div>
      </section>
    </Container>
  </div>
</template>

<script lang="ts" setup>
const { management } = useManagement();
</script>

<style></style>
