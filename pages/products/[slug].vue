<template>
  <div class="">
    <!-- Header Produk -->
    <div class="product-header mb-10">
      <h1
        class="flex flex-col lg:flex-row gap-4 text-2xl lg:text-4xl font-light border-b-2 text-primary product-title"
      >
        <span class="font-bold border-b-4 border-primary pb-1">Product</span>
        <span>{{ item?.name || '' }}</span>
      </h1>
    </div>

    <!-- Gambar Utama -->
    <img
      v-if="product?.featured_image"
      :src="product.featured_image"
      :alt="product?.name || 'Product Image'"
      class="w-full h-[300px] object-cover rounded-xl mb-5"
    />

    <!-- Konten Produk -->
    <div v-if="product?.content" v-html="cleanContent"  class="product-content"></div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'layout-product',
})

const route = useRoute()
const { productMenu } = useProductMenu()

const cleanContent = ref('')

onMounted(() => {
  if (!product.value?.content) return

  const parser = new DOMParser()
  const doc = parser.parseFromString(product.value.content, 'text/html')

  // Hapus style inline bawaan Gutenberg
  doc.querySelectorAll('ul, li').forEach(el => {
    el.removeAttribute('style')
  })

  cleanContent.value = doc.body.innerHTML
})

// Ambil data produk dari API
const { data: product } = await useApi(`/content/${route.params.slug}`)
</script>



<style>
.product-content ul {
  list-style: disc;
  padding-left: 1.5rem;
  margin-left: 0;
}

.product-content li {
  padding-left: 0;
}
</style>