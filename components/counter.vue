<template>
  <section
    ref="counterRef"
    class="mb-20 mt-20 grid grid-cols-1 md:grid-cols-3 gap-5 bg-[url('/img/banner-statistik.jpg')] bg-cover bg-center rounded-xl overflow-hidden p-6 lg:p-10 relative"
  >
 
    <div
      v-for="(item, i) in counterItems"
      :key="item.label"
      class="relative flex flex-col items-center gap-2 justify-center text-white text-center"
    >
      <h2
        class="text-2xl lg:text-6xl font-light text-white"
        :ref="el => counters[i] = el"
      >
        0
      </h2>
      <p>{{ item.label }}</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const counterItems = ref([
  { label: 'Year of Experience', value: 17 },
  { label: 'Strategic Partners', value: 10 },
  { label: 'Subject Matter Expert', value: 10 },
])

const counters = ref<HTMLElement[]>([])
const counterRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (process.client && counterRef.value) {
    counterItems.value.forEach((item, i) => {
      const el = counters.value[i]
      if (!el) return

      let obj = { val: 0 }

      gsap.to(obj, {
        val: Number(item.value),
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        onUpdate: () => {
          el.innerText = Math.floor(obj.val).toString()
        }
      })
    })
  }
})
</script>
