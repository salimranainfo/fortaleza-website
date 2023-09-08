<template>
  <section>
    <div class="max-width pt-8 pb-12 xl:pt-16 xl:pb-32">
      <h2 class="headline-2 text-center">
        {{ props?.contactInfo?.title || '' }}
      </h2>
      <p class="subtitle mt-3 text-center">
        {{ props?.contactInfo?.subtitle || '' }}
      </p>

      <div class="mt-8 lg:mt-12 lg:grid grid-cols-12 gap-4 relative">
        <div class="lg:col-span-4">
          <h3 class="headline-2 text-center lg:text-left">
            {{ props.contactForm.title }}
          </h3>
          <h3 class="headline-2 text-center lg:text-left">
            {{ props.contactForm.subtitle }}
          </h3>
        </div>

        <form action="" class="mt-4 lg:mt-0 space-y-6 lg:col-span-8">
          <div
            class="space-y-6 sm:space-y-0 sm:flex justify-between items-center sm:space-x-6"
          >
            <input
              type="text"
              name="name"
              id="name"
              :placeholder="props?.contactForm?.name?.placeholder || ''"
              class="w-full px-3 py-2 bg-gray-light rounded-lg placeholder:text-gray-darker"
            />
            <input
              type="email"
              name="email"
              id="email"
              :placeholder="props?.contactForm?.email?.placeholder || ''"
              class="w-full px-3 py-2 bg-gray-light rounded-lg placeholder:text-gray-darker"
            />
          </div>

          <textarea
            name="message"
            id="message"
            :placeholder="props?.contactForm?.message?.placeholder || ''"
            class="w-full px-3 py-2 bg-gray-light rounded-lg placeholder:text-gray-darker h-36"
          ></textarea>

          <button class="px-4 py-1.5 bg-primary-dark text-white rounded">
            {{ props?.contactForm?.submit_button || '' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IContactForm } from '~/types/contactPageTypes';
import { IContactInfo } from '~/types/generalTypes';

const props = defineProps({
  contactInfo: {
    type: Object as PropType<IContactInfo>,
    required: true,
    default: () => ({}),
  },
  contactForm: {
    type: Object as PropType<IContactForm>,
    required: true,
    default: () => ({}),
  },
});
</script>

<style scoped></style>
