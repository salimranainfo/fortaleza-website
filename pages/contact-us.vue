<template>
  <div class="overflow-hidden">
    <ContactHero :data="pageData.hero"></ContactHero>

    <ContactInformation
      :contact-info="pageData.contact_info"
      :contact-form="pageData.contact_form"
    ></ContactInformation>

    <SharedResponsiveImage
      :image="pageData.image"
      class="w-full object-cover object-center"
    ></SharedResponsiveImage>

    <SharedGallery :data="pageData.gallery"></SharedGallery>
  </div>
</template>

<script setup lang="ts">
import qs from 'qs';
import { IContactPage } from '~/types/contactPageTypes';

const $config = useRuntimeConfig();

const { data, error }: any = await useAsyncData('contactData', () => {
  const query = {
    populate: [
      '*',
      'hero.image.*',
      'contact_info.*',
      'contact_form.*',
      'contact_form.name.*',
      'contact_form.email.*',
      'contact_form.message.*',
      'image.*',
      'gallery.*',
      'seo.*',
    ],
  } as any;

  return $fetch(`${$config?.public?.apiUrl}/contact?${qs?.stringify(query)}`);
});

// if error then show error page
if (error?.value) {
  showError({
    statusCode: error?.value?.statusCode || 404,
    message: error?.value?.statusMessage || 'Something went wrong',
  });
}

const pageData = ref<IContactPage>(data?.value || {});
</script>

<style scoped></style>
