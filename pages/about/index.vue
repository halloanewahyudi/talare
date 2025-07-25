<template>
  <div>
    <Container>
      <UiPageHader
        title="About"
        subtitle="Information about the About page"
        bg="./img/about.jpg"
        class="mb-16"
      />

      <section class="mb-16">
        <div>
          <p>
            PT Tala Reinsurance Brokers. Established on April 25, 2005, we are a trusted
            partner in the reinsurance broking industry in Indonesia. With nearly two
            decades of experience, PT Tala Reinsurance Brokers has consistently delivered
            tailored solutions to meet the dynamic needs of the insurance market.
          </p>
          <p>
            As a dedicated reinsurance broker, our role goes beyond connecting insurers
            and reinsurers. We serve as strategic advisors, assisting our clients in
            managing risks effectively while optimizing their reinsurance portfolios. We
            understand that in now fast-evolving insurance landscape, compliance with
            regulatory standards and adherence to industry best practices are crucial.
          </p>
          <p>
            Operating under the regulatory framework of the Otoritas Jasa Keuangan/OJK, we
            ensure that all our activities align with the highest standards of governance
            and professionalism. We actively collaborate with national insurance
            associations to contribute to the growth and development of the insurance
            industry in Indonesia.
          </p>
          <p>
            Our commitment to excellence is reflected in our ability to adapt to market
            changes, embrace innovation, and maintain a client-focused approach. Whether
            you are looking for treaty reinsurance, facultative reinsurance, or
            specialized advisory services, PT Tala Reinsurance Brokers is here to support
            your success.
          </p>
          <p>
            At PT Tala Reinsurance Brokers, we take pride in fostering long-term
            relationships built on trust, transparency, and mutual growth. Let us navigate
            the complexities of reinsurance together and drive sustainable growth for your
            business.
          </p>
        </div>

      </section>
      <section class="mb-16 my-section">
      <div class="flex items-center gap-4 max-h-max">
       <div class="line w-[150px] h-1 bg-primary"></div>
        <h2 class="text-3xl lg:text-4xl font-bold text-primary uppercase font-bold">Why Choose Us</h2>
      </div>
       
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 py-10">
          <div v-for="item in whyUs" class="">
            <Icon :name="item.icon" class="text-4xl text-primary" />
            <h4 class="text-lg font-bold mt-2 mb-2" v-html="item.title"></h4>
            <div v-html="item.description"></div>
          </div>
        </div>
        
      </section>
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

const { $gsap } = useNuxtApp();
    let ctx; // To manage GSAP Context

onMounted(() => {
      // Create a GSAP Context to manage animations within the component
      ctx = $gsap.gsap.context(() => {
        $gsap.gsap.from(".line", { 
          width:0, duration: 1,
          scrollTrigger: {
            trigger: ".line",
            start: "top 80%",
            scrub: true,
          },
         });

      });
    });

    onUnmounted(() => {
      // Revert the GSAP Context on component unmount to prevent memory leaks
      ctx && ctx.revert();
    });
</script>

<style></style>
