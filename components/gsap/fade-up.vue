<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

const props = defineProps<{
  tag?: string
  delay?: number
}>()

const el = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!el.value) return

  gsap.fromTo(
    el.value,
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: props.delay || 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el.value,
        start: 'top 80%',
        toggleActions: 'play none',
      },
    }
  )
})

onBeforeUnmount(() => {
  // optional cleanup (bisa dipakai kalau kamu punya banyak trigger)
  gsap.context(() => {
    gsap.killTweensOf(el.value)
  }, el)
})
</script>

<template>
  <component :is="tag || 'div'" ref="el">
    <slot />
  </component>
</template>
