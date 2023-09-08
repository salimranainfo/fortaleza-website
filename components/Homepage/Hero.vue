<template>
  <section
    data-aos="zoom-out"
    data-aos-duration="800"
    data-aos-offset="100"
    data-aos-once="true"
    data-aos-delay="0"
    data-aos-anchor-placement="center"
    class="relative h-screen w-screen overflow-hidden z-0"
  >
    <SharedResponsiveImage
      :image="props.data?.image"
      class="h-full w-full object-cover object-center z-0"
    ></SharedResponsiveImage>

    <div
      data-aos="fade-up"
      data-aos-offset="5"
      data-aos-duration="800"
      data-aos-once="true"
      data-aos-delay="100"
      class="absolute top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center px-4"
    >
      <div class="max-w-[928px] mx-auto">
        <h1 class="headline-1 text-white text-center">
          {{ props?.data?.title || '' }}
        </h1>

        <p class="mt-4 sm:mt-6 text-white sm:text-xl leading-6 text-center">
          {{ props?.data?.description || '' }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IHero } from '~/types/homepageTypes';

const props = defineProps({
  data: {
    type: Object as PropType<IHero>,
    required: true,
    default: () => ({}),
  },
});
</script>

<style scoped></style>
