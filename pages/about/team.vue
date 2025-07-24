<template>
  <div>
    <div v-if="status === 'pending'"><Loading /></div>
    <div v-else>
      <Container>
        <UiPageHader
          :title="pageTeam.title"
          :subtitle="pageTeam.acf.sub_title"
          :bg="pageTeam.featured_image"
          class="mb-20"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 mb-20">
          <div
            v-for="(item, index) in team"
            :key="item.id"
            @mouseenter="hovered[index] = true"
            @mouseleave="hovered[index] = false"
          >
            <div
              class="bg-cover bg-center p-4 w-full h-[300px] bg-primary rounded-2xl overflow-hidden relative transition-all duration-300 flex flex-col justify-end"
              :style="{
                backgroundImage: `url(${
                  hovered[index] ? item.acf.second_image.url : item.featured_image
                })`,
              }"
            >
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"
              ></div>
              <div class="text-white relative z-10">
                <h4 class="font-semibold text-white text-sm">{{ item.title }}</h4>
                <p class="text-xs mb-0 pb-0">{{ item.acf.position }}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useApi } from "~/composables/api";
import { ref, computed } from "vue";

const { data, pending, error } = await useApi("/posts/team");
const team = computed(() => data.value || []);
const status = computed(() =>
  pending.value ? "pending" : error.value ? "error" : "success"
);

const hovered = ref<Record<number, boolean>>({});

const { data: pageTeam } = await useApi("/content/team");
</script>
