<template>
  <div>

    <Container>
      <UiPageHader
        :title="management.title"
        :subtitle="management.acf.sub_title"
        :bg="management.featured_image"
      />

      <section class="py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          <div v-for="item in managers" :key="item">
            <NuxtLink :to="{
              name: 'about-management-slug',
              params: { slug: item.slug }
            }" class="group">
            <div class="relative h-[380px] w-full overflow-hidden rounded-xl border border-neutral-400 group-hover:shadow-xl mb-3">
             <img
                :src="item.featured_image"
                alt=""
                class="w-full h-[380px] object-cover object-top group-hover:scale-110 duration-300"
              />
            </div>
             
              <h4 class="text-lg font-bold group-hover:text-primary duration-300" v-html="item.title" ></h4>
              <div v-html="item.acf.position"></div>
  
            </NuxtLink>
          </div>
        </div>
      </section>
    </Container>
  </div>
</template>

<script lang="ts" setup>
// const { management } = useManagement();

const baseUrl = useRuntimeConfig().public.baseUrl
const {data: management, pending, error, refresh} = await useFetch(baseUrl+'/api/v1/content/management')
const { data:managers, pending:managersPending, error:managersError, refresh:managersRefresh } = await useFetch(baseUrl+'/api/v1/posts/management')
</script>

<style></style>
