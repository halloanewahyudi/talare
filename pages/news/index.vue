<script lang="ts" setup>
useSeo({
  title: 'News Talare',
  description: 'Informasi berita terbaru tentang Talare',
  keywords: 'berita, informasi, talare',
  image: 'https://contoh.com/images/seo-nuxt3.png',
  type: 'article'
})

const posts = ref<any[]>([]);
const searchQuery = ref("");
const currentPage = ref(1);
const perPage = 8;
const totalPages = ref(1);
const loading = ref(false);
const apiUrl = useRuntimeConfig().public.baseUrl;


// Fungsi untuk mengambil postingan berdasarkan kategori ID
const fetchPosts = async () => {
  loading.value = true;
  try {
    const response = await fetch(
      `${apiUrl}/api/v1/posts/post?&search=${searchQuery.value}&per_page=${perPage}&page=${currentPage.value}`
    );

    const data = await response.json();
    posts.value = data;

    const totalPosts = Number(response.headers.get("X-WP-Total") || 0);
    totalPages.value = Math.ceil(totalPosts / perPage); // hitung jumlah halaman
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
  loading.value = false;
};


// Fetch kategori saat komponen dimuat atau slug berubah
//  watch(categorySlug, fetchCategoryId, { immediate: true });
watchEffect(() => {
  fetchPosts();
})


// Fungsi pencarian
const searchPosts = () => {
  currentPage.value = 1;
  fetchPosts();
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    fetchPosts();
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value ) {

    currentPage.value++;
    fetchPosts();
  } 
}

const {data:news , status} = await useApi("/content/news")
</script>

<template>
  <div>

    <Container>

    <UiPageHader :title="news?.title" :subtitle="news?.acf.sub_title" :bg="news?.featured_image" class="mb-10"/>
    <!-- Search Bar -->
     <div class="relative w-full max-w-[600px] mx-auto -top-16 p-2 bg-white rounded-full flex justify-center items-center">
      <input
      v-model="searchQuery"
      @input="searchPosts"
      type="text"
      placeholder="Find here.."
      class="w-full rounded-full py-2 px-5 border focus:outline-none focus:ring-2 focus:ring-neutral-500/30 focus:ring-offset-2"
    />
    <icon :name="loading ? 'line-md:loading-twotone-loop' : 'simple-line-icons:magnifier'" class="absolute top-1/2 -translate-y-1/2 right-4 text-xl" />
     </div>
    

    <!-- List Post -->
    <div v-if="loading" class="text-center w-full p-10 flex justify-center items-center">
       <Loading />
    </div>
    <div v-else>
      <div v-if="posts.length === 0" class="text-center text-gray-500">
        Tidak ada postingan ditemukan.
      </div>
      
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="post in posts"
          :key="post.id"
          class="border border-gray-300 rounded-lg mb-5 bg-white group overflow-hidden"
        >
        <NuxtLink :to="`/news/${post.slug}`" class="overflow-hidden h-48 w-full rounded-lg">
          <img
            :src="post.featured_image ? post.featured_image : '/img/noimage.png'"
            alt=""
            class="w-full h-48 object-cover  mb-3 group-hover:scale-110 duration-300"
          />
        </NuxtLink>
        <div class="p-5">
        <span class="text-xs text-gray-500"> <icon name="fluent:calendar-20-regular" /> {{ post.date }}</span>
        <NuxtLink :to="`/news/${post.slug}`" class="text-sm">
          <h3 class="text-lg font-medium mb-3 hover:text-secondary duration-300">{{ post.title }}</h3>
        </NuxtLink>

        </div>
        
        </div>
      </div>
    </div>

   <!-- Pagination -->
<div v-if="totalPages > 1">
  <div class="flex justify-center items-center pt-5 mb-20 max-w-xl mx-auto">
    <button
      @click="prevPage"
      :disabled="currentPage <= 1"
      class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
    >
      ←
    </button>
    <span class="px-4 py-2">
      Halaman {{ currentPage }} dari {{ totalPages }}
    </span>
    <button
      @click="nextPage"
      :disabled="currentPage >= totalPages"
      class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
    >
      →
    </button>
  </div>
</div>

  </Container>
  </div>

</template>

