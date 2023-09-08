<template>
  <section class="relative h-[40vh] xl:h-[60vh] w-screen overflow-hidden z-0">
    <SharedResponsiveImage
      :image="props.data?.image"
      class="h-full w-full object-cover object-center z-0"
    ></SharedResponsiveImage>

    <div
      data-aos="fade-up"
      data-aos-offset="50"
      data-aos-duration="800"
      data-aos-once="true"
      data-aos-delay="0"
      class="absolute top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center px-4 pt-12 xl:pt-16"
    >
      <div class="max-w-[928px] mx-auto">
        <h1 class="headline-1 text-white text-center">
          {{ props?.data?.title || '' }}
        </h1>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IHero } from '~/types/contactPageTypes';

const props = defineProps({
  data: {
    type: Object as PropType<IHero>,
    required: true,
    default: () => ({}),
  },
});
</script>

<style scoped></style>
