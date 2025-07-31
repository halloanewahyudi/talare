<template>
  <div>
    <container>
      <ui-page-hader
        title="What We Do"
        subtitle="loremipsum doloresitamet"
        bg="/img/about.jpg"
        class="mb-20"
      />
      <div class="mb-20">
        <div class="flex items-center gap-2 mb-5">
          <div class="line w-10 lg:w-20 h-1 bg-primary"></div>
          <h2 class="text-4xl text-primary font-bold">What We Do</h2>
        </div>

        <p>
          PT Tala Reinsurance Brokers, we specialize in providing comprehensive and
          innovative reinsurance solutions to meet the unique needs of our clients. Our
          services include:
        </p>
        <ul
          class="flex flex-col gap-4 p-6 lg:p-10 rounded-xl bg-gradient-to-tr from-white to-neutral-100 hover:shadow-2xl duration-300 ease-in-out border border-neutral-200"
        >
          <li class="flex gap-2">
            <icon
              name="fluent:checkmark-circle-12-filled"
              class="text-2xl text-primary"
            />
            Treaty Reinsurance Placement: Structuring and placing proportional and
            non-proportional treaties tailored to our clients' risk portfolios.
          </li>
          <li class="flex gap-2">
            <icon
              name="fluent:checkmark-circle-12-filled"
              class="text-2xl text-primary"
            />
            Facultative Reinsurance: Facilitating single-risk placements for complex or
            high-value exposures across diverse industries.
          </li>
          <li class="flex gap-2">
            <icon
              name="fluent:checkmark-circle-12-filled"
              class="text-2xl text-primary"
            />
            Advisory Services: Offering expert guidance on risk assessment, portfolio
            management, and reinsurance strategies to optimize protection and
            profitability.
          </li>
          <li class="flex gap-2">
            <icon
              name="fluent:checkmark-circle-12-filled"
              class="text-2xl text-primary"
            />
            Claims Management Support: Assisting clients in navigating the claims process
            efficiently, ensuring swift settlements and client satisfaction.
          </li>
          <li class="flex gap-2">
            <icon
              name="fluent:checkmark-circle-12-filled"
              class="text-2xl text-primary"
            />
            Market Access: Leveraging our extensive network of local and international
            reinsurers to secure competitive terms and comprehensive coverage.
          </li>
        </ul>
      </div>

      <div class="mb-20">
        <div class="flex items-center gap-2 mb-5">
          <div class="line w-10 lg:w-20 h-1 bg-primary"></div>
          <h2 class="text-4xl text-primary font-bold">How we do it</h2>
        </div>
        <p>
          Our approach is rooted in collaboration, expertise, and innovation. Here’s how
          we deliver value to our clients:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="item in weDoIts" class="group">
            <icon
              :name="item.icon"
              class="text-4xl text-primary group-hover:scale-125 hover:-animate-bounce duration-300"
            />
            <h4 class="text-lg font-bold mt-2 mb-2" v-html="item.title"></h4>
            <div v-html="item.description" class="text-gray-700"></div>
          </div>
        </div>
      </div>
    </container>
  </div>
</template>

<script lang="ts" setup>

const { $gsap } = useNuxtApp();
let ctx; // To manage GSAP Context

onMounted(() => {
  // Create a GSAP Context to manage animations within the component
  ctx = $gsap.gsap.context(() => {
    $gsap.gsap.from(".line", {
      width: 0,
      duration: 1,
      delay:1,
      scrollTrigger: {
        trigger: ".line",
        start: "top bottom",
        scrub: true,
      },
    });
  });
});

onUnmounted(() => {
  // Revert the GSAP Context on component unmount to prevent memory leaks
  ctx && ctx.revert();
});

const weDoIts = [
  {
    title: "Client-Centric Strategy",
    description:
      "We listen carefully to understand each client’s unique needs and challenges, ensuring tailored solutions.",
    icon: "material-symbols:center-focus-weak-sharp",
  },
  {
    title: "Data-Driven Insights",
    description:
      "Using advanced analytics and market research, we provide data-backed recommendations to optimize reinsurance structures.",
    icon: "material-symbols:data-exploration",
  },
  {
    title: "Global Network",
    description:
      "With strong connections to reinsurers worldwide, we secure the most suitable and competitive reinsurance programs.",
    icon: "eos-icons:network",
  },
  {
    title: "Compliance and Integrity",
    description:
      "Adhering to regulations set by the Financial Services Authority (Otoritas Jasa Keuangan/OJK) and international standards, we prioritize ethical practices and transparency.",
    icon: "carbon:ibm-cloud-security-compliance-center-workload-protection",
  },
  {
    title: "Continuous Innovation",
    description:
      "Embracing the latest technologies and market trends, we adapt quickly to the ever-changing reinsurance landscape",
    icon: "icon-park-outline:auto-focus",
  },
];
</script>

<style></style>
