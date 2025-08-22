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

</script>

<style>
 .content p{
  text-align: justify;
 }
</style>
