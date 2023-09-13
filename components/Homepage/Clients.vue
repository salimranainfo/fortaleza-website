<template>
  <section id="clients" class="scroll-fix">
    <div class="max-width py-8 xl:pt-16 xl:pb-32">
      <h2 class="headline-2 text-center">{{ props?.data?.title || '' }}</h2>
      <p class="subtitle mt-3 text-center">{{ props?.data?.subtitle || '' }}</p>

      <div
        class="mt-8 xl:mt-16 flex flex-col justify-center items-center space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6 xl:space-x-16"
      >
        <a v-for="(item, i) in props?.data?.client_list || ''" :href="item.url" target="_blank">
          <SharedResponsiveImage
            :image="item.image || {}"
            class="h-40 w-full object-contain object-center"
          ></SharedResponsiveImage>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IClients } from '~/types/homepageTypes'

const props = defineProps({
  data: {
    type: Object as PropType<IClients>,
    required: true,
  },
})
</script>

<style scoped></style>
