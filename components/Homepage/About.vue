<template>
  <section id="about">
    <div class="max-width py-8 xl:py-16">
      <h2 class="headline-2 text-center">{{ props?.data?.title || '' }}</h2>
      <p class="subtitle mt-3 text-center">{{ props?.data?.subtitle || '' }}</p>

      <div class="mt-8 xl:mt-16 xl:grid grid-cols-12 gap-4 relative">
        <div
          v-html="$md.render(props?.data?.description || '')"
          class="md-text xl:col-span-10"
        ></div>

        <div
          class="absolute top-0 -right-12 transform -translate-y-6 xl:transform-none xl:static xl:col-span-2"
        >
          <SharedResponsiveImage
            :image="props?.data?.image || {}"
            class="w-52 opacity-10 xl:opacity-100 xl:w-44"
          ></SharedResponsiveImage>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IAboutUs } from '~/types/homepageTypes';

const { $md }: any = useNuxtApp();

const props = defineProps({
  data: {
    type: Object as PropType<IAboutUs>,
    required: true,
  },
});
</script>

<style scoped></style>
