<template>
  <div>
    <div v-if="status === 'pending'"><Loading /></div>
    <div v-else>
      <Container>
        <UiPageHader
          :title="pageTeam?.title"
          :subtitle="pageTeam?.acf?.sub_title"
          :bg="pageTeam?.featured_image"
          class="mb-20"
        />

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-max mx-auto justify-center items-center gap-6 mb-20"
        >
          <div
            v-for="(item, index) in management"
            :key="item.id"
            @mouseenter="hovered[index] = true"
            @mouseleave="hovered[index] = false"
          >
            <div
              class="bg-cover bg-center shrink-0 p-4 w-full max-w-[260px] h-[300px] bg-primary rounded-2xl overflow-hidden relative transition-all duration-300 flex flex-col justify-end"
              :style="{
                backgroundImage: `url(${
                  hovered[index] ? item.acf.second_image.url : item.featured_image
                })`,
              }"
            >
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
              ></div>
              <div class="text-white relative z-10">
                <h4 class="font-semibold text-white text-sm">{{ item.title }}</h4>
                <p class="text-xs mb-0 pb-0">{{ item.acf.position }}</p>

                  <div
                    class="text-xs border-t border-gray-300/50 pt-1 mt-1"
                    :class="
                      hovered[index] ? 'opacity-100 duration-300' : 'hidden opacity-0'
                    "
                  >
                    <!-- usia/pengalaman -->
                    <div class="flex items-center gap-1">
                      <span>Usia</span
                      ><span>{{ item.acf.team_description.usia }} Tahun</span>
                    </div>
                    <div class="flex items-center gap-1">
                      <span>Pengalaman</span
                      ><span>{{ item.acf.team_description.pengalaman }} Tahun</span>
                    </div>
                  </div>
                  <!-- end usia / pengalaman -->
           
              </div>
            </div>
          </div>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-max mx-auto justify-center items-center gap-6 mb-20"
        >
          <div
            v-for="(item, index) in staff"
            :key="item.id"
            @mouseenter="hovered[index] = true"
            @mouseleave="hovered[index] = false"
          >
            <div
              class="bg-cover bg-center shrink-0 p-4 w-full max-w-[260px] h-[300px] mx-auto bg-primary rounded-2xl overflow-hidden relative transition-all duration-300 flex flex-col justify-end"
              :style="{
                backgroundImage: `url(${
                  hovered[index] ? item.acf.second_image.url : item.featured_image
                })`,
              }"
            >
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
              ></div>
              <div class="text-white relative z-10">
                <h4 class="font-semibold text-white text-sm">{{ item.title }}</h4>
                <p class="text-xs mb-0 pb-0">{{ item.acf.position }}</p>
                <div class="text-xs border-t border-gray-300/50 pt-1 mt-1" :class="
                      hovered[index] ? 'opacity-100 duration-300' : 'hidden opacity-0'" >
                  <!-- usia/pengalaman -->
                  <div class="flex items-center gap-1">
                    <span>Usia</span
                    ><span>{{ item.acf.team_description.usia }} Tahun</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <span>Pengalaman</span
                    ><span>{{ item.acf.team_description.pengalaman }} Tahun</span>
                  </div>
                </div>
                <!-- end usia / pengalaman -->
              </div>
            </div>
          </div>
        </div>
        <!-- POPUP -->
        <div
          v-if="selectedItem"
          class="fixed inset-0 w-full h-full flex justify-center items-center bg-primary/90 z-50"
        >
          <div
            ref="popupRef"
            class="max-w-[480px] w-full max-h-[480px] h-full rounded-xl relative overflow-hidden bg-white p-6 shadow-2xl"
          >
            <button @click="closePopup" class="absolute top-4 right-4">
              <icon
                name="line-md:close"
                class="text-xl text-secondary bg-white rounded-full"
              />
            </button>
            <div class="flex gap-2 items-center">
              <img
                :src="selectedItem?.acf?.second_image.url"
                :alt="selectedItem?.title"
                class="h-24 w-24 object-cover rounded-full shrink-0 bg-primary"
              />
              <div class="">
                <h4 class="text-sm mb-1">{{ selectedItem?.title }}</h4>
                <p class="text-xs mb-0 pb-0">{{ selectedItem?.acf?.position }}</p>
              </div>
            </div>
            <hr class="border-t border-gray-300 my-4" />

            <div v-html="selectedItem?.acf?.team_description"></div>
          </div>
        </div>
      </Container>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeo({
  title: "Management PT Tala Reinsurance Brokers",
  description:
    "full service international reinsurance intermediary companies in Indonesia.",
  keywords: "Reinsurance, Reinsurance Brokers, talare",
  image: "/img/bg-hero.jpg",
  type: "page",
});

const { data: management, pending, error } = await useApi(
  "/posts/team?taxonomy=team-category&term=management"
);
const { data: staff, pending: staffPending, error: staffError } = await useApi(
  "/posts/team?taxonomy=team-category&term=staff"
);

const hovered = ref<Record<number, boolean>>({});

const { data: pageTeam } = await useApi("/content/team");

const popupRef = ref<HTMLElement | null>(null);
const selectedItem = ref<Record<string, any> | null>(null);

const selectedIndex = ref<number | null>(null);

// animasi
const { $gsap } = useNuxtApp();
const animateJelly = () => {
  if (!popupRef.value) return;
  $gsap.gsap.fromTo(
    popupRef.value,
    { scale: 0.8, rotate: -2 },
    {
      scale: 1,
      rotate: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
    }
  );
};


const selectItem = (item: Record<string, any>, index: number) => {
  selectedItem.value = item;
  selectedIndex.value = index;
  nextTick(() => animateJelly());
};

const closePopup = () => {
  selectedItem.value = null;
};


</script>
