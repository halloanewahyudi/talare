<template>
  <div>
    <container>
      <ui-page-hader
        :title="wwd?.title"
        :subtitle="wwd?.acf.sub_title"
        :bg="wwd?.featured_image"
        class="mb-20"
      />
      <div class="mb-20">
        <div class="flex items-center gap-2 mb-5">
          <div class="line w-10 lg:w-20 h-1 bg-primary"></div>
          <h2 class="text-4xl text-primary font-bold">
          {{ wwd?.acf?.section_one?.title }}
          </h2>
        </div>
 <div v-html="wwd?.acf?.section_one?.description" class="mb-6"></div>
        <ul
          class="flex flex-col gap-4 p-6 lg:p-10 rounded-xl bg-gradient-to-tr from-white to-neutral-100 hover:shadow-2xl duration-300 ease-in-out border border-neutral-200"
        >
          <li class="flex gap-2" v-for="value in wwd?.acf?.section_one?.list">
            <icon
              name="fluent:checkmark-circle-12-filled"
              class="text-2xl text-primary"
            />
            {{ value.item }}
          </li>
        </ul>
      </div>

      <div class="mb-20">
        <div class="flex items-center gap-2 mb-5">
          <div class="line w-10 lg:w-20 h-1 bg-primary"></div>
          <h2 class="text-4xl text-primary font-bold">
          {{ wwd?.acf?.section_two?.title }}
          </h2>
        </div>
        <div class="mb-6">{{ wwd?.acf?.section_two?.description }}</div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="item in wwd?.acf?.section_two?.items" class="group">
            <icon
              :name="item.icon"
              class="text-4xl text-primary group-hover:scale-125 hover:-animate-bounce duration-300"
            />
            <h4 class="text-lg font-bold mt-2 mb-2" v-html="item.title"></h4>
            <div v-html="item.description" class="text-gray-700 text-justify"></div>
          </div>
        </div>
      </div>
    </container>
  </div>
</template>

<script lang="ts" setup>

const { $gsap } = useNuxtApp();
let ctx; // To manage GSAP Context

onMounted(() => {
  // Create a GSAP Context to manage animations within the component
  ctx = $gsap.gsap.context(() => {
    $gsap.gsap.from(".line", {
      width: 0,
      duration: 1,
      delay:1,
      scrollTrigger: {
        trigger: ".line",
        start: "top bottom",
        scrub: true,
      },
    });
  });
});

onUnmounted(() => {
  // Revert the GSAP Context on component unmount to prevent memory leaks
  ctx && ctx.revert();
});


const baseUrl = useRuntimeConfig().public.baseUrl;
 const { data: wwd, pending, error, refresh } = await useFetch(baseUrl+'/api/v1/content/what-we-do',{
    
})
</script>

<style></style>
