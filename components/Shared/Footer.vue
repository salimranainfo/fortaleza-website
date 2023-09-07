<template>
  <footer class="bg-gray-dark py-12 sm:py-8 xl:py-16 text-white">
    <div class="max-width">
      <div>
        <NuxtLink :to="props?.data?.logo?.url || ''">
          <SharedResponsiveImage
            :image="props?.data?.logo?.image || {}"
            class="h-28"
          />
        </NuxtLink>
      </div>

      <!-- title and description -->
      <div>
        <h2 class="text-[22px] xl:text-2xl font-medium">
          {{ props?.data?.title || '' }}
        </h2>

        <p class="mt-3 xl:mt-6 subtitle text-gray-light">
          {{ props?.data?.description || '' }}
        </p>
      </div>

      <!-- contact info -->
      <div>
        <h2 class="text-[22px] xl:text-2xl font-medium">
          {{ props?.data?.contact_info?.title || '' }}
        </h2>

        <div
          class="mt-3 xl:mt-6 flex flex-col justify-center items-start space-y-3 xl:space-y-6"
        >
          <a
            :href="`mailto:${props?.data?.contact_info?.email?.url || ''}`"
            class="subtitle"
          >
            {{ props?.data?.contact_info?.email?.label || '' }}
          </a>

          <a
            :href="`tel:+${props?.data?.contact_info?.phone?.url || ''}`"
            class="subtitle"
          >
            {{ props?.data?.contact_info?.phone?.label || '' }}
          </a>

          <a
            :href="props?.data?.contact_info?.website?.url || ''"
            class="subtitle"
          >
            {{ props?.data?.contact_info?.website?.label || '' }}
          </a>
        </div>
      </div>

      <!-- hours -->
      <div>
        <h2 class="text-[22px] xl:text-2xl font-medium">
          {{ props?.data?.hours?.title || '' }}
        </h2>

        <p class="subtitle">{{ props?.data?.hours?.week_days || '' }}</p>
        <p class="subtitle">{{ props?.data?.hours?.time || '' }}</p>
      </div>
    </div>
    <p class="subtitle text-center">{{ props?.data?.copy_rights || '' }}</p>
  </footer>
</template>

<script setup lang="ts">
import { IFooter } from '~/types/generalTypes';

const props = defineProps({
  data: {
    type: Object as PropType<IFooter>,
    required: true,
    default: () => ({}),
  },
});
</script>

<style scoped></style>
