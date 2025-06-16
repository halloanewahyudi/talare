<template>
  <div class="py-2 flex flex-col gap-4 " :class="{ 'sticky top-0 z-50 border-b border-gray-200 bg-white': isSticky }">
    <Container  :class="{ 'lg:hidden lg:opacity-0 duration-300 transition-all ease-in-out': isSticky }">
      <div class="flex justify-between items-center ">
        <NuxtLink to="/">
          <img src="/img/logo.png" alt="logo" class="h-7 lg:h-10 shrink-0 object-contain" />
        </NuxtLink>
       
       <img src="/img/logoipsum.svg" alt="logo" class="h-5 lg:h-8 shrink-0 object-contain " />
           <button @click="mobileMenu = !mobileMenu" class="lg:hidden"><Icon name="line-md:close-to-menu-alt-transition" class="text-3xl text-primary" /></button>
      </div>
    </Container>

    <!-- Sticky nav -->
    <div
      class="navbar sticky top-0 z-50 bg-white duration-300  lg:block"
      :class="[{ 'bg-white ': isSticky }, mobileMenu ? 'block opacity-100' : 'hidden']"
    >
      <Container>
        <nav class=" flex flex-col lg:flex-row lg:items-center  w-full  gap-6 lg:gap-10  py-2">
          <ul class="flex flex-col gap-2 lg:flex-row lg:items-center justify-between w-full">
            <li v-for="menu in menus" :key="menu.path">
              <NuxtLink :to="menu.path" class="nav-link mx-2 font-semibold text-neutral-700 hover:text-primary">
                {{ menu.name }}
              </NuxtLink>
            </li>
          </ul>
           <div class="flex items-center max-w-max divide-x divide-gray-300 border border-gray-300 rounded-xl overflow-hidden shrink-0">
          <button class="active p-2 text-primary cursor-pointer text-sm hover:text-white hover:bg-primary duration-300">EN</button>
          <button class="p-2 text-secondary cursor-pointer text-sm hover:text-white hover:bg-secondary duration-300">ID</button>
        </div>
        </nav>
      </Container>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { menus } = useMenu();
const isSticky = ref(false);
const mobileMenu = ref(false);

onMounted(() => {
  const handleScroll = () => {
    isSticky.value = window.scrollY > 50;
  };
  window.addEventListener("scroll", handleScroll);
  onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));
});


</script>
<style scoped>
@reference "tailwindcss";
.nav-link {
  @apply relative py-2;
}
.nav-link::after {
  content: "";
  @apply w-0 h-0.5 absolute bottom-0 left-0 bg-[var(--color-secondary)];
}
.nav-link:hover::after {
  @apply w-full duration-300 ease-in-out;
}
</style>
