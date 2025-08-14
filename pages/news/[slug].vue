<template>
  <div>
    <container>
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-10">
        <div class="lg:col-span-3">
          <div class="bg-white rounded-xl border border-gray-300 overflow-hidden mb-20">
            <img
              :src="post?.featured_image"
              alt=""
              class="w-full h-auto rounded-xl mb-5"
            />

            <div class="p-6 lg:p-10">
              <span class="text-xs"
                >
                <icon name="fluent:calendar-20-regular"  />
                {{ post?.date }}</span
              >
              <h1 class="text-2xl lg:text-4xl font-bold mb-5" v-html="post?.title"></h1>
              <div v-html="post?.content" class="text-justify mb-20"></div>
            </div>
          </div>
        </div>
        <div class="lg:col-span-1">
          <div class="flex flex-col gap-3 bg-white rounded-xl border border-gray-300 p-5">
            <h4 class="text-xl font-bold">Latest News</h4>
            <div v-for="item in posts" :key="item.id">
              <nuxt-link :to="`/news/${item?.slug}`" class="flex gap-2">
                <img
                  :src="item?.featured_image"
                  alt=""
                  class="w-20 h-20 rounded-md object-cover"
                />
                <div>
                  <span class="text-xs">{{ item?.date }}</span>
                  <h4
                    class="text-sm font-medium hover:text-primary duration-300"
                    v-html="item?.title"
                  ></h4>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </container>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const { data: post, status } = await useApi(`/content/${route.params.slug}`);
const { data: posts, status: postsStatus } = await useApi("/posts/post?per_page=5");
</script>

<style></style>
