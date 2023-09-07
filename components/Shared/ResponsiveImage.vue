<template>
  <picture v-if="props?.image">
    <source
      :srcSet="getImageUrl(props?.image?.formats?.small?.url || '')"
      media="(max-width: 450px)"
    />
    <source
      :srcSet="getImageUrl(props?.image?.formats?.medium?.url || '')"
      media="(max-width: 1300px)"
    />
    <source
      :srcSet="getImageUrl(props?.image?.formats?.large?.url || '')"
      media="(max-width: 1600px)"
    />
    <img
      :src="getImageUrl(props?.image?.url || '')"
      :alt="props?.image?.alternativeText || ''"
      :class="(props && props?.class) || ''"
      :loading="(props && props?.loading) || ''"
      height="100%"
      width="100%"
    />
  </picture>
</template>

<script setup lang="ts">
import { IStrapiImage } from '@/types/strapiImage';

const props = defineProps({
  image: Object as PropType<IStrapiImage>,
  class: String,
  loading: Boolean,
});

const $config = useRuntimeConfig();

const getImageUrl = (url: string) => {
  if (!url) return '';

  return `${$config?.public?.imageUrl}${url}`;
};
</script>

<style scoped></style>
