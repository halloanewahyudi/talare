<template>
  <div>
  <Container>
    <UiPageHader
          title="Why Choose US"
          subtitle="loremipsum doloresitamet"
          bg="/img/about.jpg"
          class="mb-20"
        />

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 pb-20">
          <div v-for="item in whyUs" class="group">
            <Icon :name="item.icon" class="text-4xl text-primary group-hover:scale-125 hover:-animate-bounce duration-300" />
            <h4 class="text-lg font-bold mt-2 mb-2" v-html="item.title"></h4>
            <div v-html="item.description" class="text-gray-700"></div>
          </div>
        </div>
 </Container>
   
  </div>
</template>

<script lang="ts" setup>

const whyUs = ref([
  {
    title: "Extensive Experience",
    description: `With nearly two decades in the industry, PT Tala Reinsurance Brokers brings a wealth of expertise in reinsurance solutions, ensuring your business is supported by trusted and proven strategies.`,
    icon: "fluent:airplane-take-off-20-regular",
  },
  {
    title: "Regulatory Compliance",
    description: `We operate with full adherence to the regulations set forth by Otoritas Jasa Keuangan (OJK) and maintain alignment with Indonesia’s evolving insurance legislation. Our commitment to compliance offers peace of mind to our partners.`,
    icon: "fluent:stream-output-20-filled",
  },
  {
    title: "Tailored Solutions",
    description: `Every business is unique. That’s why we focus on understanding your specific needs and delivering customized reinsurance solutions that drive growth and mitigate risk effectively.`,
    icon: "fluent:align-straighten-20-regular",
  },
  {
    title: "Strong Industry Network",
    description: `Over the years, we have cultivated robust relationships with leading insurers, reinsurers, and industry associations. This network empowers us to offer competitive terms and comprehensive coverage options.`,
    icon: "fluent:connected-16-regular",
  },
  {
    title: "Client-Centric Approach",
    description: `At the heart of our operations is a commitment to our clients. We prioritize your business goals, providing responsive support and expert guidance at every step of your reinsurance journey.`,
    icon: "fluent:people-link-16-filled",
  },
  {
    title: "Innovation and Adaptability",
    description: `In an ever-changing market, staying ahead requires innovation. We embrace modern technologies and industry trends to provide cutting-edge solutions that meet today’s challenges and prepare for tomorrow's opportunities.`,
    icon: "fluent:lightbulb-filament-48-regular",
  },
  {
    title: "Commitment to Growth",
    description: `PT Tala Reinsurance Brokers is more than a service provider; we are your long-term partner. We aim to foster mutual growth and success, ensuring our services not only meet your needs but exceed your expectations.`,
    icon: "fluent:handshake-16-regular",
  },
]);
</script>

<style>

</style>