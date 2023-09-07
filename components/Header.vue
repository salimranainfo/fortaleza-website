<template>
  <header class="fixed top-0 left-0 right-0 py-4 sm:py-6 z-40">
    <button
      class="xl:hidden absolute top-1/2 transform -translate-y-1/2 left-4"
    >
      <img src="@/assets/images/menu.svg" alt="menu" class="h-6 w-6" />
    </button>

    <div class="max-width flex justify-center xl:justify-between items-center">
      <NuxtLink to="/">
        <SharedResponsiveImage
          :image="props?.data?.logo?.image"
          class="h-10 xl:h-auto"
        />
      </NuxtLink>

      <nav class="hidden xl:block">
        <ul class="flex justify-end items-center space-x-8">
          <li v-for="(item, i) in props?.data?.nav_items" :key="i">
            <NuxtLink :to="item.url" class="leading-6 uppercase text-white">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { IHeader } from '@/types/generalTypes';

const props = defineProps({
  data: {
    type: Object as PropType<IHeader>,
    required: true,
    default: () => ({}),
  },
});
</script>

<style scoped></style>
