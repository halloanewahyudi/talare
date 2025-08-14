<template>
  <div class="py-40">
    <p>Total Halaman: {{ totalPages }}</p>
    
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Cari post..."
      class="border px-2 py-1"
    />

    <ul>
      <li v-for="value in posts" :key="value.id">
        {{ value.title }}
      </li>
    </ul>

    <div class="mt-4 flex gap-2">
      <button @click="prevPage" :disabled="currentPage <= 1">Prev</button>
      <button @click="nextPage" :disabled="currentPage >= totalPages">Next</button>
      <span>Halaman {{ currentPage }} dari {{ totalPages }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>


const currentPage = ref(1);
const perPage = ref(2);
const searchQuery = ref("");

// ✅ Gunakan useFetch Nuxt secara langsung. Ini lebih andal.
const config = useRuntimeConfig();
const url = config.public.baseUrl 
const { data, response } = await useFetch(`${url}/api/v1/posts/post`, {

  query: computed(() => ({
    search: searchQuery.value,
    per_page: perPage.value,
    page: currentPage.value,
  })),
  // Opsi immediate: true sudah default di useFetch saat digunakan di setup
});

// ✅ Ambil totalPages dari response object setelah data di-fetch
const totalPages = computed(() => {
  if (response.value && response.value.headers) {
    const pages = response.value.headers.get("X-WP-TotalPages");
    return pages ? parseInt(pages, 10) : 0;
  }
  return 0;
});

const posts = computed(() => data.value || []);

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

// watchEffect akan secara otomatis memanggil ulang fetch saat currentPage atau searchQuery berubah
</script>