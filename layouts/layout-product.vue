<template>
  <div>
    <Navbar />
    <Container>
      <UiPageHader
        title="Products"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        bg="./img/talare-slider1.jpg"
        class="mt-10"
      />
      <section class="py-16 min-h-screen">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-10">
          <Sidebar />
          <div class="lg:col-span-3">
            <slot />
          </div>
        </div>
      </section>
    </Container>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
