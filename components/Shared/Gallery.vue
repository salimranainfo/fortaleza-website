<template>
  <section v-if="props?.data?.length">
    <ClientOnly>
      <Splide :options="options" :extensions="{ AutoScroll }">
        <SplideSlide v-for="(image, i) in props?.data || []" :key="i">
          <SharedResponsiveImage
            :image="image || {}"
            class="h-60 object-cover object-center w-full"
          ></SharedResponsiveImage>
        </SplideSlide>
      </Splide>
    </ClientOnly>
  </section>
</template>

<script setup lang="ts">
import { IStrapiImage } from '~/types/strapiImage';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const props = defineProps({
  data: {
    type: Array as PropType<IStrapiImage[]>,
    required: true,
    default: () => [],
  },
});

const options: any = ref({
  type: 'loop',
  arrows: false,
  pagination: false,
  drag: 'free',
  focus: 'center',
  perPage: 6,
  autoScroll: {
    speed: 1,
    autoStart: true,
    rewind: false,
    pauseOnHover: true,
  },
  breakpoints: {
    640: {
      perPage: 2,
    },
    768: {
      perPage: 3,
    },
    1024: {
      perPage: 4,
    },
  },
});
</script>

<style scoped></style>
