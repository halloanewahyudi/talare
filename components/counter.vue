<template>
  <div
    ref="counterRef"
    class="flex flex-col items-center gap-2 justify-center text-white text-center"
  >
    <h2 ref="numberEl" class="text-2xl lg:text-6xl font-light text-white">0</h2>
    <p>{{ label }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps<{
  label: string
  value: number
}>()

const counterRef = ref<HTMLElement | null>(null)
const numberEl = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!process.client || !numberEl.value) return

  const obj = { val: 0 }

  gsap.to(obj, {
    val: props.value,
    duration: 2,
    scrollTrigger: {
      trigger: counterRef.value,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    onUpdate: () => {
      if (numberEl.value) {
        numberEl.value.innerText = Math.floor(obj.val).toString()
      }
    },
  })
})
</script>
