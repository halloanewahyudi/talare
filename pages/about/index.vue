<template>
  <div>
    <Container>
      <UiPageHader
        :title="about?.title"
        :subtitle="about?.acf.sub_title"
        :bg="about?.featured_image"
        class="mb-16"
      />

      <section class="mb-16">
        <div v-html="about?.content" class="content">
          
        </div>

      </section>

    </Container>
  </div>
</template>

<script lang="ts" setup>

// data services
const baseUrl = useRuntimeConfig().public.baseUrl;
 const { data:about, pending, error, refresh } = await useFetch(baseUrl+'/api/v1/content/about')

 // data services
/* const baseUrl = useRuntimeConfig().public.baseUrl;
 const { data:dataServices, pending, error, refresh } = await useFetch(baseUrl+'/api/v1/content/services')
 */
/* 

const { $gsap } = useNuxtApp();
    let ctx; // To manage GSAP Context

onMounted(() => {
      // Create a GSAP Context to manage animations within the component
      ctx = $gsap.gsap.context(() => {
        $gsap.gsap.from(".line", { 
          width:0, duration: 1,
          scrollTrigger: {
            trigger: ".line",
            start: "top 80%",
            scrub: true,
          },
         });

      });
    });

    onUnmounted(() => {
      // Revert the GSAP Context on component unmount to prevent memory leaks
      ctx && ctx.revert();
    }); */
</script>

<style>
 .content p{
  text-align: justify;
 }
</style>
