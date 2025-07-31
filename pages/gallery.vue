<template>
  <div>
    <container>
      <div v-if="status === 'pending'">loading...</div>
      <div v-else>
      <div class="flex items-center gap-2 mb-5">
        <div class="line w-10 lg:w-20 h-1 bg-primary"></div>
        <h2 class="text-4xl text-primary font-bold">Gallery</h2>
      </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 pb-20">
          <div
            v-for="(item,index) in gallery?.acf?.gallery"
            :key="index"
            class="group overflow-hidden rounded-xl border border-gray-300"
          >
            <img
              @click="selectItem(index)"
              :src="item?.url"
              :alt="item?.title"
              class="gallery-item object-cover w-full h-[230px] hover:scale-105 duration-300"
            />
          </div>
        </div>
      </div>
    </container>

    <!-- POPUP -->
    <div
      v-if="selectedIndex !== null"
      class="fixed inset-0 w-full h-full flex justify-center items-center bg-white/90 z-50"
    >
    <button @click="closePopup" class="absolute top-4 right-4">
        <icon name="line-md:close" class="text-3xl text-red-500" />
      </button>
      <button @click="prevImage">
        <icon name="line-md:arrow-left" class="text-3xl text-primary" />
      </button>

      <div
        ref="popupRef"
        class="max-w-[480px] w-full max-h-[480px] h-full rounded-xl overflow-hidden bg-white p-2 shadow-2xl"
      >
        <img
          :src="gallery?.acf?.gallery[selectedIndex]?.url"
          :alt="gallery?.acf?.gallery[selectedIndex]?.title"
          class="h-full w-full object-cover rounded-xl"
        />
        <span class="absolute bottom-4 left-4 text-white">{{ gallery?.acf?.gallery[selectedIndex]?.title }}</span>
      </div>

      <button @click="nextImage">
        <icon name="line-md:arrow-right" class="text-3xl text-primary" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp()
const { data: gallery, status } = await useApi("/content/gallery")

const selectedIndex = ref<number | null>(null)
const popupRef = ref<HTMLElement | null>(null)

const animateJelly = () => {
  if (!popupRef.value) return
  $gsap.gsap.fromTo(
    popupRef.value,
    { scale: 0.8, rotate: -3 },
    {
      scale: 1,
      rotate: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
    }
  )
}

const selectItem = (index: number) => {
  selectedIndex.value = index
  nextTick(() => animateJelly())
}

const closePopup = () => {
  selectedIndex.value = null
}

const prevImage = () => {
  if (selectedIndex.value === null) return
  selectedIndex.value =
    (selectedIndex.value - 1 + gallery.value.acf.gallery.length) %
    gallery.value.acf.gallery.length
  nextTick(() => animateJelly())
}

const nextImage = () => {
  if (selectedIndex.value === null) return
  selectedIndex.value =
    (selectedIndex.value + 1) % gallery.value.acf.gallery.length
  nextTick(() => animateJelly())
}
</script>


<style scoped>
 

</style>