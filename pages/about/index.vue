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

    </Container>
  </div>
</template>

<script lang="ts" setup>

/* 
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
    }); */
</script>

<style></style>
