<template>
  <div>
    <container>
      <ui-page-hader
        title="Services"
        subtitle="loremipsum doloresitamet"
        bg="/img/about.jpg"
        class="mb-20"
      />

      <section> 
        <p class="text-2xl  text-center leading-relaxed max-w-3xl mx-auto mb-20">
        Many reinsurers are aware that auditing their customers can greatly reduce and avoid costly mistakes; however they may be lacking the staff or time to perform these crucial audits. Tala Re has the staff and knowledge to offer these services. Our services include but are not limited to:

        </p>

  <div class="flex flex-col gap-6 lg:gap-10 mb-20">
    <div class="service-item" v-for="(item, index) in services" :key="index">
     <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
      <img :src="item.image" alt="" class="w-full min-h-[300px] h-full object-cover rounded-xl">
      <div>
      <h4 class="text-2xl lg:text-primary lg:text-4xl font-bold mb-3">{{ item.title }}</h4>
      <p>{{ item.description }}</p>
      </div>
     </div>
    </div>
  </div>

      </section>
      </container>
  </div>
</template>

<script lang="ts" setup>
 const services = ref([
   {
    title:"Contract Compliance",
    description:"verify treaty compliance and confirm adherence to underwriting guidelines and representations.",
    image:"/img/kontrak.jpg"
   },
   {
    title:"Claims Handling",
    description:"confirm responsibility of cedant as outlined in claims management philosophies, operations and systems and evaluate claim practices through review of amounts paid, settled, reserved and reported.",
    image:"/img/klaim.jpg"
   },
   {
    title:"Reinsurance Premium Accounting",
    description:"determine if reinsurance premiums and commissions have been correctly administered and validate, if the unearned reinsurance premium is collectable and correlates to the underlying policy data.",
    image:"/img/akunting.jpg"
   },
   {
    title:"Implementation and Recommendation",
    description:"if we determine that one of the above issues is out of compliance with what was warranted to the reinsurer, we can identify this in a clear report and make recommendations of how to revamp the area of.",
    image:"/img/implementasi.jpg"
   }
 ])

const { $gsap } = useNuxtApp()

onMounted(() => {
  const items = $gsap.gsap.utils.toArray<HTMLElement>('.service-item')

  items.forEach((item) => {
    $gsap.gsap.from(item, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        scrub: false, // ubah ke false kalau mau animasi per item, bukan sinkron scroll
        toggleActions: 'play none none play'
      },
    })
  })
})


</script>

<style>

</style>