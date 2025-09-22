<template>
  <div>
    <container>
      <div v-if="status === 'pending'">loading...</div>
      <div v-else>
    <!--     <ui-page-hader
          :title="gallery.title"
          :subtitle="gallery?.acf?.sub_title"
          :bg="gallery?.featured_image"
          class="mb-20"
        /> -->

        <div class="flex items-center gap-2 mb-5">
          <div class="line w-10 lg:w-20 h-1 bg-primary"></div>
          <h2 class="text-4xl text-primary font-bold" v-html="gallery?.title"></h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 pb-20">
          <div
            v-for="(item, index) in gallery?.acf?.gallery"
            :key="index"
            class="group overflow-hidden rounded-xl border border-gray-300 cursor-pointer"
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
      class="fixed inset-0 w-full h-full  flex justify-center items-center bg-white/90 z-50"
    >
      <button @click="closePopup" class="absolute top-4 right-4">
        <icon name="line-md:close" class="text-3xl text-red-500" />
      </button>
      <button @click="prevImage">
        <icon name="line-md:arrow-left" class="text-3xl text-primary" />
      </button>
      <div class="flex flex-col gap-4">
<div
  ref="popupRef"
  class="relative h-full lg:max-h-[calc(80vh)] aspect-video  mx-auto rounded-xl overflow-hidden border-2 border-primary bg-white "
>
  <!-- LAYER 1: Background blur -->
  <img
    :src="gallery?.acf?.gallery[selectedIndex]?.url"
    alt=""
    class="absolute inset-0 w-full h-full object-cover blur-lg opacity-80"
  />

  <!-- LAYER 2: Gambar utama -->
  <img
    :src="gallery?.acf?.gallery[selectedIndex]?.url"
    :alt="gallery?.acf?.gallery[selectedIndex]?.title"
    class="relative z-10 h-full w-full object-contain"
  />

  <!-- LAYER 3: Judul -->
  <span class="absolute bottom-4 left-4 text-white z-20">
    {{ gallery?.acf?.gallery[selectedIndex]?.title }}
  </span>
</div>


      <div class="flex items-center gap-3">
  <!-- Tombol prev -->
  <button
    v-if="totalThumbPages > 1"
    @click="prevThumbPage"
    class="p-2 w-10 h-10 bg-gray-200 rounded-full"
  >
    <icon name="line-md:arrow-left" />
  </button>

  <!-- Thumbnails sesuai halaman -->
  <div class="flex items-center gap-3">
    <div v-for="(item, index) in visibleThumbnails" :key="index">
      <img
        :src="item?.url"
        :alt="item?.title"
        class="h-20 w-20 object-cover rounded-xl cursor-pointer border-2 transition"
        :class="selectedIndex === index + thumbPage * pageSize ? 'border-primary shadow-xl' : 'border-transparent'"
        @click="selectItem(index + thumbPage * pageSize)"
      />
    </div>
  </div>

  <!-- Tombol next -->
  <button
    v-if="totalThumbPages > 1"
    @click="nextThumbPage"
    class="p-2 w-10 h-10 bg-gray-200 rounded-full"
  >
    <icon name="line-md:arrow-right" />
  </button>
</div>

      </div>

      <button @click="nextImage">
        <icon name="line-md:arrow-right" class="text-3xl text-primary" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp();

const route = useRoute();
const { data: gallery, status } = await useApi(`/content/${route.params.slug}`);

const selectedIndex = ref<number | null>(null);
const popupRef = ref<HTMLElement | null>(null);

const pageSize = 8;
const thumbPage = ref(0);

const totalThumbPages = computed(() => {
  return Math.ceil((gallery.value?.acf?.gallery?.length || 0) / pageSize);
});

const visibleThumbnails = computed(() => {
  if (!gallery.value) return [];
  const start = thumbPage.value * pageSize;
  const end = start + pageSize;
  return gallery.value.acf.gallery.slice(start, end);
});

const animateJelly = () => {
  if (!popupRef.value) return;
  $gsap.gsap.fromTo(
    popupRef.value,
    { scale: 0.8, rotate: -3 },
    {
      scale: 1,
      rotate: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
    }
  );
};

const selectItem = (index: number) => {
  selectedIndex.value = index;
  nextTick(() => animateJelly());
};

const closePopup = () => {
  selectedIndex.value = null;
};

const prevImage = () => {
  if (selectedIndex.value === null) return;
  selectedIndex.value =
    (selectedIndex.value - 1 + gallery.value.acf.gallery.length) %
    gallery.value.acf.gallery.length;
  nextTick(() => animateJelly());
};

const nextImage = () => {
  if (selectedIndex.value === null) return;
  selectedIndex.value =
    (selectedIndex.value + 1) % gallery.value.acf.gallery.length;
  nextTick(() => animateJelly());
};

const prevThumbPage = () => {
  thumbPage.value = (thumbPage.value - 1 + totalThumbPages.value) % totalThumbPages.value;
};
const nextThumbPage = () => {
  thumbPage.value = (thumbPage.value + 1) % totalThumbPages.value;
};
</script>


<style scoped></style>
