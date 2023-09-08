<template>
  <div>
    <SharedHeader :data="layoutData.header" :scroll-y="scrollY"></SharedHeader>

    <slot />

    <SharedFooter :data="layoutData.footer"></SharedFooter>
  </div>
</template>

<script setup lang="ts">
import qs from 'qs';
import { ILayout } from '@/types/generalTypes';

const $config = useRuntimeConfig();

const scrollY = ref(0);

const query = {
  populate: [
    '*',
    'header.logo.image.*',
    'header.nav_items.*',
    'footer.logo.image.*',
    'footer.contact_info.email.*',
    'footer.contact_info.phone.*',
    'footer.contact_info.website.*',
    'footer.hours.*',
    'footer.social_media_links.image.*',
  ],
};

const { data }: any = await useAsyncData('layoutData', () => {
  return $fetch(`${$config?.public?.apiUrl}/layout?${qs.stringify(query)}`);
});

const layoutData = ref(data?.value || {}) as Ref<ILayout>;

onMounted(() => {
  scrollY.value = window.scrollY;

  window.addEventListener('scroll', () => {
    scrollY.value = window.scrollY;
  });
});
</script>

<style scoped></style>
