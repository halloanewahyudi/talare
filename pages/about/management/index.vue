<template>
  <div>
    <Container>
      <UiPageHader
        :title="management?.title"
        :subtitle="management?.acf?.sub_title"
        :bg="management?.featured_image"
        class="mb-20"
      />

      <div class="flex flex-col gap-6 lg:gap-10 mb-20">
        <!--  management wrapper -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10  max-w-max mx-auto h-full"
        >
          <div
            v-for="item in komisaris"
            :key="item"
            class="w-[260px]"
          >
            <NuxtLink
              :to="{
                name: 'about-management-slug',
                params: { slug: item?.slug },
              }"
              class="group flex flex-col gap-2"
            >
              <div
                class="relative h-[300px] w-full overflow-hidden rounded-xl border border-neutral-400 group-hover:shadow-xl mb-3"
              >
                <img
                  :src="item?.featured_image"
                  alt=""
                  class="w-full h-[300px] object-cover object-center group-hover:scale-110 duration-300 bg-gradient-to-b from-primary to-blue-400"
                />
              </div>
               <div>
               <h4
                class="font-medium group-hover:text-primary duration-300 mb-1"
                v-html="item?.title"
              ></h4>
              <div v-html="item?.acf?.position" class="text-sm text-gray-600"></div>
               </div>
              
            </NuxtLink>

            <NuxtLink :to="{
                name: 'about-management-slug',
                params: { slug: item?.slug },
              }" class="text-sm italic group flex items-center gap-1 mt-2 text-primary"> Read More <Icon name="material-symbols-light:arrow-right-alt group-hover:translate-x-2 duration-300"></Icon> 
              </NuxtLink>
          </div>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10  max-w-max mx-auto "
        >
          <div
            v-for="item in direktur"
            :key="item"
            class="w-full max-w-[260px] "
          >
            <NuxtLink
              :to="{
                name: 'about-management-slug',
                params: { slug: item?.slug },
              }"
              class="group flex flex-col gap-2"
            >
              <div
                class="relative h-[300px] w-full overflow-hidden rounded-xl border border-neutral-400 group-hover:shadow-xl mb-3"
              >
                <img
                  :src="item?.featured_image"
                  alt=""
                  class="w-full h-[300px] object-cover object-center group-hover:scale-110 duration-300 bg-gradient-to-b from-primary to-blue-400"
                />
              </div>
              <div>
              <h4
                class="font-medium group-hover:text-primary duration-300 mb-1"
                v-html="item?.title"
              ></h4>
              <div v-html="item?.acf?.position" class="text-sm text-gray-600"></div>
              </div>
              
            </NuxtLink>
             <NuxtLink :to="{
                name: 'about-management-slug',
                params: { slug: item?.slug },
              }" class="text-sm italic group flex items-center gap-1 mt-2 text-primary"> Read More <Icon name="material-symbols-light:arrow-right-alt group-hover:translate-x-2 duration-300"></Icon> 
              </NuxtLink>
          </div>
        </div>
      </div>
      <!-- end management wrapper -->
    </Container>
  </div>
</template>

<script lang="ts" setup>
// const { management } = useManagement();

const { data: management, pending } = await useApi("/content/management");

const { data: komisaris, pending: managersPending } = await useApi(
  "/posts/management?taxonomy=management-category&term=komisaris"
);

const { data: direktur, pending: direkturPending } = await useApi(
  "/posts/management?taxonomy=management-category&term=direktur"
);
</script>

<style></style>
