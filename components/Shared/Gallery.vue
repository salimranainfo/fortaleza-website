<template>
  <section class="grid grid-cols-7">
    <SharedResponsiveImage
      v-for="(image, i) in props?.data || []"
      :image="image || {}"
      class="h-60 object-cover object-center w-full"
    ></SharedResponsiveImage>
  </section>
</template>

<script setup lang="ts">
import { IStrapiImage } from '~/types/strapiImage';

const props = defineProps({
  data: {
    type: Array as PropType<IStrapiImage[]>,
    required: true,
    default: () => [],
  },
});
</script>

<style scoped></style>
