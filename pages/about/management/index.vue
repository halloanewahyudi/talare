<template>
  <div>
    <Container>
      <UiPageHader
        :title="management?.title"
        :subtitle="management?.acf?.sub_title"
        :bg="management?.featured_image"
        class="mb-20"
      />

      <div class="flex flex-col gap-5">
        <!--  management wrapper -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center max-w-max mx-auto h-full mb-20"
        >
          <div
            v-for="item in komisaris"
            :key="item"
            class="w-full max-w-[260px] h-[300px]"
          >
            <NuxtLink
              :to="{
                name: 'about-management-slug',
                params: { slug: item?.slug },
              }"
              class="group"
            >
              <div
                class="relative h-[300px] w-full overflow-hidden rounded-xl border border-neutral-400 group-hover:shadow-xl mb-3"
              >
                <img
                  :src="item?.featured_image"
                  alt=""
                  class="w-full h-[380px] object-cover object-center group-hover:scale-110 duration-300 bg-gradient-to-b from-primary to-blue-400"
                />
              </div>

              <h4
                class="font-medium group-hover:text-primary duration-300 mb-1"
                v-html="item?.title"
              ></h4>
              <div v-html="item?.acf?.position" class="text-sm text-gray-600"></div>
            </NuxtLink>
          </div>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 items-center max-w-max mx-auto mb-20"
        >
          <div
            v-for="item in direktur"
            :key="item"
            class="w-full max-w-[260px] h-[300px]"
          >
            <NuxtLink
              :to="{
                name: 'about-management-slug',
                params: { slug: item?.slug },
              }"
              class="group"
            >
              <div
                class="relative h-[300px] w-full overflow-hidden rounded-xl border border-neutral-400 group-hover:shadow-xl mb-3"
              >
                <img
                  :src="item?.featured_image"
                  alt=""
                  class="w-full h-[380px] object-cover object-center group-hover:scale-110 duration-300 bg-gradient-to-b from-primary to-blue-400"
                />
              </div>

              <h4
                class="font-medium group-hover:text-primary duration-300 mb-1"
                v-html="item?.title"
              ></h4>
              <div v-html="item?.acf?.position" class="text-sm text-gray-600"></div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <!-- end management wrapper -->

      <div class="h-20 w-full"></div>
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
