<template>
  <div>
    <Container>
      <!--  hero -->
      <Hero bg="./img/bg-hero.jpg" class="rounded-xl overflow-hidden mb-20">
        <div class="max-w-[600px] w-full">
          <h1 class="text-4xl lg:text-6xl font-bold text-white">
            Lorem ipsum dolor sit amet
          </h1>
          <p class="text-2xl text-white">
            consectetur adipiscing elit. Ut non lobortis enim. Donec et nunc nec diam
            laoreet rhoncus.
          </p>
        </div>
      </Hero>

      <!--   Brief -->
      <section
        class="mb-20 flex flex-col lg:gap-20 bg-gray-100 p-6 lg:p-0 lg:bg-transparent rounded-xl lg:rounded-none"
      >
        <h2 class="text-2xl lg:text-4xl font-bold text-primary mb-5">
          A Brief of Talare
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 relative">
          <div class="">
            <img
              src="/img/img-1.jpg"
              alt=""
              class="flex rounded-xl lg:absolute lg:w-[800px] lg:h-[400px] lg:left-0 lg:-top-20 object-cover"
            />
          </div>

          <div
            class="relative p-6 lg:p-10 rounded-xl bg-white flex flex-col gap-5 border border-neutral-200 lg:shadow-2xl h-max"
          >
            <h3 class="text-2xl font-bold text-primary">
              Focus on providing services to Our Customers
            </h3>
            <p>
              Established on April 25, 2005, PT Tala Re International which known as “Tala
              Re” is a full service international reinsurance intermediary companies in
              Indonesia. We have created an unparalleled service offering for customers
              that is challenging the larger brokers in the global reinsurance market and
              combining the best advocates in the industry and market leading analytical
              capabilities.
            </p>
            <NuxtLink to="/" class="btn btn-primary self-end">Read More</NuxtLink>
          </div>
        </div>
      </section>

      <!-- counter  -->
      <Counter />
    </Container>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>
