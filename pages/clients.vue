<template>
  <div class="pb-20">
    <container>
      <ui-page-hader
        :title="clients.title"
        :subtitle="clients?.acf?.sub_title"
        :bg="clients?.featured_image"
        class="mb-12"
      />

      <!-- Tab Navigation -->
      <div class="flex border-b border-gray-200 mb-6">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTab = tab.id"
          :class="[
            'px-4 py-2 font-medium text-sm transition-colors duration-300 cursor-pointer',
            activeTab === tab.id
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-500 hover:text-gray-700',
          ]"
        >
          {{ tab.name }}
        </button>
      </div>

      <!-- Tab Content with Transition -->
      <transition name="fade-slide" mode="out-in">
        <div :key="activeTab" class="mb-10">
          <div
            v-if="currentTabId === 'rc'"
            class="p-4 bg-white rounded-xl border border-gray-200 flex flex-col gap-4"
          >
            <div>
              <div class="py-1 px-3 bg-primary text-white rounded-full text-sm mb-3 max-w-max">
                National
              </div>

              <div
                class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center items-center divide-gray-200"
              >
                <div v-for="(item, index) in currentTabData.national" :key="item.id">
                  <img
                    :src="item?.url"
                    alt=""
                    class="object-contain h-20 mx-auto transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            </div>
            <hr class="border-gray-300" />
            <div>
              <div class="py-1 px-3 bg-primary text-white rounded-full text-sm mb-3 max-w-max">
                International
              </div>
              <div
                class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center items-center divide-gray-200"
              >
                <div v-for="(item, index) in currentTabData.international" :key="item.id">
                  <img
                    :src="item?.url"
                    alt=""
                    class="object-contain h-20 mx-auto transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- end rc -->

          <div
            v-else
            class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 justify-center items-center divide-gray-200 bg-white rounded-xl border border-gray-200"
          >
            <div v-for="(item, index) in currentTabData" :key="item.id" class="p-4">
              <img
                :src="item?.url"
                alt=""
                class="object-contain h-20 mx-auto transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </transition>
    </container>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

// Tab configuration
const tabs = [
  { id: "ic", name: "Insurance Company" },
  { id: "rc", name: "Reinsurance Company" },
  { id: "jb", name: "Strategic Partners" },
];

const activeTab = ref("ic");

// Fetch data
//const { data: ic, status: icStatus } = await useApi("/posts/partner?per_page=100&taxonomy=client-category&term=insurance-company");
//const { data: jb, status: jbStatus } = await useApi("/posts/partner?per_page=100&taxonomy=client-category&term=joint-brokers");
//const { data: rc, status: rcStatus } = await useApi("/posts/partner?per_page=100&taxonomy=client-category&term=reinsurance-company");
const { data: clients, status: clientsStatus } = await useApi("/content/clients");
// Computed properties for active tab
const currentTabData = computed(() => {
  switch (activeTab.value) {
    case "ic":
      return clients.value?.acf?.insurance_company || [];
    case "rc":
      return clients.value?.acf?.reinsurance_company || {};
    case "jb":
      return clients.value?.acf?.strategic_patners || [];
    default:
      return [];
  }
});

const currentTabId = computed(() => {
  const tab = tabs.find((t) => t.id === activeTab.value);
  return tab ? tab.id : "";
});
</script>

<style scoped>
/* Transition effects */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Hover effect for images */
img {
  transition: transform 0.3s ease;
}
</style>
