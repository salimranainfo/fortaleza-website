<template>
  <footer class="bg-gray-dark py-12 sm:py-8 xl:py-16 text-white">
    <div
      class="max-width pb-12 space-y-8 xl:space-y-0 xl:grid grid-cols-12 gap-x-8"
    >
      <div
        class="space-y-8 sm:space-y-0 sm:flex justify-between items-start xl:col-span-4"
      >
        <!-- logo -->
        <div class="sm:order-last sm:w-5/12 xl:hidden">
          <NuxtLink :to="props?.data?.logo?.url || ''">
            <SharedResponsiveImage
              :image="props?.data?.logo?.image || {}"
              class="h-28 sm:h-auto sm:w-full"
            />
          </NuxtLink>
        </div>

        <!-- title and description -->
        <div class="sm:w-7/12 sm:mr-8 xl:w-full">
          <h2
            class="text-[22px] xl:text-2xl font-medium text-center sm:text-left"
          >
            {{ props?.data?.title || '' }}
          </h2>

          <p
            class="mt-3 xl:mt-6 subtitle text-gray-light text-center sm:text-left"
          >
            {{ props?.data?.description || '' }}
          </p>
        </div>
      </div>

      <div
        class="space-y-8 sm:space-y-0 sm:grid grid-cols-3 gap-x-4 xl:col-span-8"
      >
        <div
          class="flex justify-between items-start sm:col-span-2 space-x-4 xl:space-x-8"
        >
          <!-- contact info -->
          <div class="w-3/5 sm:w-3/6">
            <h2
              class="text-[22px] xl:text-2xl font-medium text-center sm:text-left"
            >
              {{ props?.data?.contact_info?.title || '' }}
            </h2>

            <div
              class="mt-3 xl:mt-6 flex flex-col justify-center items-center sm:items-start space-y-3 xl:space-y-6"
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
          <div class="w-2/5 sm:w-3/6">
            <h2 class="text-[22px] xl:text-2xl font-medium">
              {{ props?.data?.hours?.title || '' }}
            </h2>

            <p class="subtitle mt-3 xl:mt-6">
              {{ props?.data?.hours?.week_days || '' }}
            </p>
            <p class="subtitle mt-3 xl:mt-6">
              {{ props?.data?.hours?.time || '' }}
            </p>
          </div>
        </div>

        <!-- social media links -->
        <div class="transform -translate-y-4 xl:translate-y-0">
          <div class="hidden xl:block">
            <NuxtLink :to="props?.data?.logo?.url || ''">
              <SharedResponsiveImage
                :image="props?.data?.logo?.image || {}"
                class="h-28 sm:h-auto sm:w-full"
              />
            </NuxtLink>
          </div>

          <div
            class="px-12 flex flex-wrap justify-center items-center sm:px-3 xl:mt-4 xl:px-0"
          >
            <a
              v-for="(item, i) in props?.data?.social_media_links || []"
              :key="i"
              :href="item?.url || ''"
              class="mt-4 mx-4"
            >
              <SharedResponsiveImage
                :image="item.image"
                class="h-8"
              ></SharedResponsiveImage>
            </a>
          </div>
        </div>
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
