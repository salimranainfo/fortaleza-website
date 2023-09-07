<template>
  <div class="overflow-x-hidden">
    <HomepageHero :data="pageData.hero"></HomepageHero>
    <HomepageAbout :data="pageData.about_us"></HomepageAbout>
    <HomepageServices :data="pageData.services"></HomepageServices>
    <HomepageClients :data="pageData.clients"></HomepageClients>
    <SharedGallery :data="pageData.gallery"></SharedGallery>
  </div>
</template>

<script setup lang="ts">
import qs from 'qs';
import { IHomepage } from '~/types/homepageTypes';

const $config = useRuntimeConfig();

const { data, error }: any = await useAsyncData('homepageData', () => {
  const query = {
    populate: [
      '*',
      'hero.image.*',
      'about_us.image.*',
      'services.image.*',
      'clients.client_list.image.*',
      'gallery.*',
      'seo.*',
    ],
  } as any;

  return $fetch(`${$config?.public?.apiUrl}/homepage?${qs?.stringify(query)}`);
});

// if error then show error page
if (error?.value) {
  showError({
    statusCode: error?.value?.statusCode || 404,
    message: error?.value?.statusMessage || 'Something went wrong',
  });
}

const pageData = ref<IHomepage>(data?.value || {});
</script>

<style scoped></style>
