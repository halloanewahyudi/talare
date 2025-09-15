<template>
  <div
    class="fixed top-0 left-0 w-full px-6 z-50 transition-transform duration-300 border-b border-gray-300 py-2 bg-white"
  >
    <nav class="flex justify-between items-center">
      <NuxtLink to="/" class="flex items-center gap-2 z-50">
        <img
          src="/img/logo-transparent.png"
          alt="logo"
          class="h-7 lg:h-12 shrink-0 object-contain"
        />
      </NuxtLink>
      <button @click="mobileMenu = !mobileMenu" class="lg:hidden">
        <Icon name="line-md:close-to-menu-alt-transition" class="text-3xl text-primary" />
      </button>
    </nav>

    <transition name="fade-slide" mode="out-in">
      <div
        v-if="mobileMenu"
        class="h-full min-h-screen fixed top-auto left-0 w-full bg-white px-6 py-4 overflow-y-auto"
      >
        <ul class="flex flex-col divide-y divide-primary/40">
          <li
            v-for="menu in menus"
            :key="menu.id"
            class="flex flex-col py-2 hover:bg-primary/10 duration-200"
          >
            <div class="flex items-center justify-between">
              <!-- kalau tidak ada children, pakai NuxtLink -->
              <NuxtLink
                v-if="!menu.children"
                :to="menu.path"
                class="nav-link text-sm hover:text-primary"
                @click="closeMenu"
              >
                {{ menu.name }}
              </NuxtLink>

              <!-- kalau ada children, kasih toggle pakai id -->
              <button
                v-else
                @click="toggle(menu.id)"
                class="flex items-center justify-between w-full text-left nav-link text-sm hover:text-primary"
              >
                {{ menu.name }}
                <Icon
                  :name="
                    openMenu === menu.id ? 'line-md:chevron-up' : 'line-md:chevron-down'
                  "
                  class="ml-2"
                />
              </button>
            </div>

            <!-- submenu sesuai parent id -->
            <transition name="fade-slide" mode="out-in">
              <ul
                v-if="menu.children && openMenu === menu.id"
                class="p-4 bg-gray-50 rounded-xl mt-2"
              >
                <li v-for="child in menu.children" :key="child.path">
                  <NuxtLink
                    :to="child.path"
                    class="text-sm hover:text-primary"
                    @click="closeMenu"
                  >
                    {{ child.name }}
                  </NuxtLink>
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
const mobileMenu = ref(false);
const openMenu = ref<string | null>(null);
const { menus } = useMenu();

function toggle(id: string) {
  openMenu.value = openMenu.value === id ? null : id
}

const closeMenu = () => {
  setTimeout(() => {
    mobileMenu.value = false
    openMenu.value = null
  },200)
}
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  transform: translateX(-100%);
}

/* animasi slide submenu */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
