<template>
  <div class="py-2 flex flex-col gap-4 " :class="{ 'sticky top-0 z-50 bg-white lg:bg-transparent': isSticky }">
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
      class="navbar sticky top-0 z-50  duration-300  lg:block"
      :class="[ mobileMenu ? 'block opacity-100' : 'hidden']"
    >
      <Container>
        <nav class="menu flex flex-col lg:flex-row lg:items-center  w-full  gap-6 lg:gap-10  py-3 bg-gradient-to-b from-red-600 to-secondary rounded-xl px-6">
          <ul class="flex flex-col gap-2 lg:flex-row lg:items-center justify-between w-full">
            <li v-for="menu in menus" :key="menu.path" class="group relative">
              <NuxtLink :to="menu.path" class="nav-link mx-2 font-medium text-white hover:text-primary group">
                {{ menu.name }} <span v-if="menu.children"><Icon name="bi:caret-down-fill" class="text-sm mt-2 group-hover:rotate-180 duration-300" /> </span>
              </NuxtLink>
              <ul v-if="menu.children" class=" sub-menu ">
                <li v-for="child in menu.children" :key="child.path">
                  <NuxtLink :to="child.path" class="nav-link mx-2 font-medium text-white hover:text-primary">
                    {{ child.name }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>

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
  @apply relative py-1 px-3 flex items-center gap-2 text-white/90;
}
.nav-link:hover,
.menu .router-link-active  {
  @apply bg-red-900/30   text-white rounded-full duration-300 ease-in-out flex items-center gap-2;
}
.router-link-active::after {
  content: "";
  @apply w-2 h-2 bg-[var(--color-primary)] rounded-full;
}

.sub-menu {
  @apply absolute hidden top-10 group-hover:top-full group-hover:block  bg-[var(--color-secondary)]  text-white rounded-b-xl duration-300 ease-in-out lg:w-[200px]  p-4 ;
}
.sub-menu .nav-link{
  @apply px-0 py-2 text-sm text-white/80;
}
.sub-menu .nav-link:hover {
  @apply bg-transparent inline-flex text-white ;
  
}
</style>
