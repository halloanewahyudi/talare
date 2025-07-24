<template>
  <div class="pb-16">

    <Container>
      <section class="pb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          <div class="lg:col-span-1">
            <div class=" px-6 lg:px-16 lg:sticky lg:top-20">
              <img
                :src="person.featured_image"
                alt=""
                class="w-full h-[260px] object-cover rounded-xl border border-neutral-400 shadow-xl"
              />
            </div>
          </div>

          <div class="lg:col-span-2">
            <h4 class="text-2xl lg:text-primary lg:text-4xl font-bold mb-3">
              {{ person.title }}
            </h4>
            <div v-html="person.content"></div>
          </div>
        </div>
      </section>
 
      <section>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          <div v-for="manager in managers" :key="manager.id">
            <NuxtLink
              :to="{
              name: 'about-management-slug',
              params: { slug: manager.slug }
            }"
              class="flex gap-2 bg-white p-4 rounded-xl border border-gray-200 h-full hover:shadow-xl duration-300"
            >
              <img
                :src="manager.featured_image"
                alt=""
                class="w-[60px] h-[60px] object-cover object-top rounded-full shrink-0"
              />
              <div>
                <h4 class="text-sm font-semibold mb-1">{{ manager.title }}</h4>
                <span class="text-sm italic">{{ manager.acf.position }}</span>
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
// const { management } = useManagement();
const baseUrl = useRuntimeConfig().public.baseUrl;
const { data: person, pending, error, refresh } = await useFetch(baseUrl+'/api/v1/content/'+route.params.slug);

const { data:managers, pending:managersPending, error:managersError, refresh:managersRefresh } = await useFetch(baseUrl+'/api/v1/posts/management')

</script>

<style></style>
