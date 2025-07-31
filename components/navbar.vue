<template>
  <div
    class="py-2 flex flex-col gap-4"
    :class="{ 'sticky top-0 z-50 bg-white lg:bg-transparent': isSticky }"
  >
    <Container
      :class="{
        'lg:hidden lg:opacity-0 duration-300 transition-all ease-in-out': isSticky,
      }"
    >
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="flex items-center gap-2 z-50">
          <img
            src="/img/logo.png"
            alt="logo"
            class="h-7 lg:h-10 shrink-0 object-contain"
          />
         
        </NuxtLink>

        <img
          src="/img/logoipsum.svg"
          alt="logo"
          class="h-5 lg:h-8 shrink-0 object-contain"
        />
        <button @click="mobileMenu = !mobileMenu" class="lg:hidden">
          <Icon
            name="line-md:close-to-menu-alt-transition"
            class="text-3xl text-primary"
          />
        </button>
      </div>
    </Container>

    <!-- Sticky nav -->
    <div
      class="navbar sticky top-0 z-50 duration-300 lg:block"
      :class="[mobileMenu ? 'block opacity-100' : 'hidden']"
    >
      <Container>
        <nav
          class="menu relative flex flex-col lg:flex-row lg:items-center w-full gap-6 lg:gap-10 bg-gradient-to-b from-neutral-100 to-neutral-300 rounded py-6 px-6 lg:py-0 ring-2 ring-neutral-300"
        >
          <ul
            class="flex flex-col gap-2 lg:flex-row lg:items-center justify-between w-full"
          >
            <li v-for="menu in menus" :key="menu.path" class="group relative">
              <div
                class="flex items-center justify-between w-full lg:w-auto"
                @click="menu.children && toggleDropdown(menu.path)"
              >
                <NuxtLink
                  :to="menu.path"
                  class="nav-link w-full font-medium  hover:text-primary group"
                >
                  {{ menu.name }}
                </NuxtLink>

                <span v-if="menu.children" class="lg:mt-2">
                  <Icon
                    name="bi:caret-down-fill"
                    class="transition-transform duration-300 "
                    :class="{ 'rotate-180': activeDropdown === menu.path }"
                  />
                </span>
              </div>

              <!-- Submenu -->
              <ul
                v-if="menu.children"
                class="lg:absolute lg:top-full sub-menu"
                :class="{
                  'sub-menu-open': activeDropdown === menu.path,
                  hidden: activeDropdown !== menu.path,
                  'lg:block lg:mt-0': true,
                }"
              >
                <li v-for="child in menu.children" :key="child.path">
                  <NuxtLink
                    :to="child.path"
                    class="nav-link text-sm mx-2 text-white hover:text-primary"
                    @click="mobileMenu = false"
                  >
                    {{ child.name }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li><a href="linkedin.com" class="flex items-center gap-2"><Icon name="mdi:linkedin" class="text-2xl" /></a></li>
          <li><a href="x.com" class="flex items-center gap-2"><Icon name="line-md:twitter-x" class="text-xl" /></a></li>
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
    isSticky.value = window.scrollY > 100;
  };
  window.addEventListener("scroll", handleScroll);
  onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));
});

const activeDropdown = ref<string | null>(null);

const toggleDropdown = (path: string) => {
  activeDropdown.value = activeDropdown.value === path ? null : path;
};
</script>
<style scoped>
@reference "tailwindcss";
.nav-link {
  @apply relative lg:p-3 flex items-center gap-2 text-gray-700/85 hover:text-gray-800 duration-300 ease-in-out;
}
.menu .router-link-active {
  @apply bg-gradient-to-b  text-gray-800 duration-300 ease-in-out flex  items-center gap-2;
}

.menu .router-link-active::before {
  content: "";
  @apply w-2 h-2 bg-[var(--color-secondary)] rounded-full;
}

.sub-menu {
  @apply relative lg:absolute hidden top-full group-hover:top-full group-hover:flex flex-col gap-2 lg:bg-gradient-to-b from-gray-200 via-gray-300 to-gray-100   rounded-b-xl duration-300 ease-in-out lg:w-[200px]  lg:p-4 border border-gray-200 border-t-0;
}
.sub-menu-open {
  @apply block;
}
.sub-menu .nav-link {
  @apply p-0  text-sm;
}
.sub-menu a {
  @apply bg-transparent inline-flex;
}
</style>
