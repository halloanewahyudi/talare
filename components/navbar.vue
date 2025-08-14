<template>
  <!-- Progress bar -->
  <div class="fixed inset-0 bg-secondary h-0.5 z-[1000] " :style="`width:${progress}%`"></div>

  <!-- Navbar -->
  <header
    ref="navbarRef"
    class="fixed top-0 left-0 w-full z-50 transition-transform duration-300 "
    :class="isVisible ? 'translate-y-0 bg-white/80 backdrop-blur-2xl' : '-translate-y-full lg:top-12'"
  >
    <!-- Top Container -->
    <Container
      class="py-2 flex flex-col gap-4  "
      :class="{ 'sticky top-0 z-50 ': isSticky }"
    >
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="flex items-center gap-2 z-50">
          <img src="/img/logo-transparent.png" alt="logo" class="h-7 lg:h-12 shrink-0 object-contain" />
        </NuxtLink>

        <img src="/img/logo-ojk-1.png" alt="logo" class="h-5 lg:h-10 shrink-0 object-contain" />
        <button @click="mobileMenu = !mobileMenu" class="lg:hidden">
          <Icon name="line-md:close-to-menu-alt-transition" class="text-3xl text-primary" />
        </button>
      </div>
    </Container>

    <!-- Sticky nav content -->
    <div
      class="navbar lg:block duration-300"
      :class="[mobileMenu ? 'block opacity-100' : 'hidden', isSticky ? '' : '']"
    >
      <Container>
        <nav
          class="menu relative flex flex-col lg:flex-row lg:items-center w-full gap-6 lg:gap-10 bg-gradient-to-b from-neutral-100 to-neutral-300 rounded py-6 px-6 lg:py-0 ring-2 ring-neutral-300"
        >
          <ul class="flex flex-col gap-2 lg:flex-row lg:items-center justify-between w-full">
            <li v-for="menu in menus" :key="menu.path" class="group relative">
              <div
                class="flex items-center justify-between w-full lg:w-auto"
                @click="menu.children && toggleDropdown(menu.path)"
              >
                <NuxtLink
                  :to="menu.path"
                  class="nav-link w-full font-medium hover:text-primary group"
                >
                  {{ menu.name }}
                </NuxtLink>
                <span v-if="menu.children" class="lg:mt-2">
                  <Icon
                    name="bi:caret-down-fill"
                    class="transition-transform duration-300"
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
                  'lg:block lg:mt-0': true
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
     
          </ul>
        </nav>
      </Container>
    </div>
  </header>

  <!-- Konten offset -->
  <main :style="{ paddingTop: navbarHeight + 'px' }">
    <slot />
  </main>
</template>

<script lang="ts" setup>
const { menus } = useMenu();

// State
const isSticky = ref(false);
const isVisible = ref(true);
const mobileMenu = ref(false);
const activeDropdown = ref<string | null>(null);

const navbarRef = ref<HTMLElement | null>(null);
const navbarHeight = ref(0);
let lastScrollY = 0;

// Scroll handler
onMounted(() => {
  if (navbarRef.value) {
    navbarHeight.value = navbarRef.value.offsetHeight;
  }

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    // Sticky trigger
    isSticky.value = currentScroll > 100;

    // Show navbar if scrolling up, hide if down
    if (currentScroll > lastScrollY && currentScroll > 100) {
      isVisible.value = false;
    } else {
      isVisible.value = true;
    }

    lastScrollY = currentScroll;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

// Dropdown toggle
const toggleDropdown = (path: string) => {
  activeDropdown.value = activeDropdown.value === path ? null : path;
};

// Progress bar
const { progress } = useLoadingIndicator({
  duration: 2000,
  throttle: 200,
  estimatedProgress: (duration, elapsed) =>
    (2 / Math.PI * 100) * Math.atan((elapsed / duration) * 100 / 50)
});
</script>

<style scoped>
@reference "tailwindcss";
.nav-link {
  @apply relative lg:p-3 flex items-center gap-2 text-gray-700/85 hover:text-gray-800 duration-300 ease-in-out;
}
.menu .router-link-active {
  @apply bg-gradient-to-b text-gray-800 duration-300 ease-in-out flex items-center gap-2;
}
.menu .router-link-active::before {
  content: "";
  @apply w-2 h-2 bg-[var(--color-secondary)] rounded-full;
}
.sub-menu {
  @apply relative lg:absolute hidden top-full group-hover:top-full group-hover:flex flex-col gap-2 lg:bg-gradient-to-b from-gray-200 via-gray-300 to-gray-100 rounded-b-xl duration-300 ease-in-out lg:w-[230px] lg:p-4 border border-gray-200 border-t-0;
}
.sub-menu-open {
  @apply block;
}
.sub-menu .nav-link {
  @apply p-0 text-sm;
}
.sub-menu a {
  @apply bg-transparent inline-flex;
}
</style>
