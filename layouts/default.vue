<template>
  <div>
    <Header :data="layoutData.header"></Header>

    <slot />
  </div>
</template>

<script setup lang="ts">
import qs from 'qs';
import { ILayout } from '@/types/generalTypes';

const $config = useRuntimeConfig();

const query = {
  populate: [
    '*',
    'header.logo.image.*',
    'header.nav_items.*',
    'footer.logo.*',
    'footer.contact_info.*',
    'footer.hours.*',
    'footer.social_media_links.image.*',
  ],
};

const { data }: any = await useAsyncData('layoutData', () => {
  return $fetch(`${$config?.public?.apiUrl}/layout?${qs.stringify(query)}`);
});

// console.log('layoutData', data?.value);

const layoutData = ref(data?.value || {}) as Ref<ILayout>;
</script>

<style scoped></style>
