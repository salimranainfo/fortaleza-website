<template>
  <section class="h-screen w-screen overflow-hidden">
    <SharedResponsiveImage
      :image="props.data?.image"
      class="h-full w-full object-cover object-center"
    ></SharedResponsiveImage>
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
