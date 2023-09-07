<template>
  <section>
    <div
      class="max-width py-8 xl:py-16 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4"
    >
      <!-- service cards -->
      <div v-for="(item, i) in props?.data || []" :key="i" class="p-2">
        <div class="h-40 w-full">
          <SharedResponsiveImage
            :image="item?.image"
            class="w-full h-full object-contain object-bottom"
          ></SharedResponsiveImage>
        </div>

        <p class="mt-6 text-[22px] leading-7 font-medium text-primary-dark">
          {{ item.category || '' }}
        </p>

        <h4 class="mt-2 headline-2">
          {{ item.name || '' }}
        </h4>

        <p class="mt-2 subtitle">{{ item.description || '' }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IService } from '~/types/homepageTypes';

const props = defineProps({
  data: {
    type: Array as PropType<IService[]>,
    required: true,
    default: () => [],
  },
});
</script>

<style scoped></style>
