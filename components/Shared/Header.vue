<template>
  <header
    class="fixed top-0 left-0 right-0 py-4 sm:py-6 z-40 transition duration-300 ease-in-out"
    :class="props.scrollY > 0 && 'bg-gray-dark'"
  >
    <button
      class="xl:hidden absolute top-1/2 transform -translate-y-1/2 left-4"
      @click="showMobileMenu = true"
    >
      <img src="@/assets/images/menu.svg" alt="menu" class="h-6 w-6" />
    </button>

    <div class="max-width flex justify-center xl:justify-between items-center">
      <NuxtLink to="/">
        <SharedResponsiveImage
          :image="props?.data?.logo?.image"
          class="h-10 xl:h-16"
        />
      </NuxtLink>

      <nav class="hidden xl:block">
        <ul class="flex justify-end items-center space-x-8">
          <template v-for="(item, i) in props?.data?.nav_items" :key="i">
            <li v-if="showHomepageNav(item.url)">
              <NuxtLink :to="item.url" class="leading-6 uppercase text-white">
                {{ item.label }}
              </NuxtLink>
            </li>
          </template>
        </ul>
      </nav>
    </div>

    <!-- mobile nav -->
    <Transition name="slide">
      <div
        v-if="showMobileMenu"
        class="fixed top-0 left-0 right-0 bottom-0 z-50 bg-white px-6 flex justify-center items-center"
      >
        <nav class="w-full">
          <ul class="flex flex-col justify-start items-start">
            <template v-for="(item, i) in props?.data?.nav_items" :key="i">
              <li
                v-if="showHomepageNav(item.url)"
                class="border-t last-of-type:border-b border-gray-light py-3 w-full flex justify-center items-center"
              >
                <NuxtLink
                  :to="item.url"
                  class="leading-6 uppercase"
                  @click.native="showMobileMenu = false"
                >
                  {{ item.label }}
                </NuxtLink>
              </li>
            </template>
          </ul>
        </nav>

        <button class="absolute top-4 right-4" @click="showMobileMenu = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { IHeader } from '@/types/generalTypes';

const $route = useRoute();

const props = defineProps({
  data: {
    type: Object as PropType<IHeader>,
    required: true,
    default: () => ({}),
  },
  scrollY: {
    type: Number,
    required: true,
    default: 0,
  },
});

const showMobileMenu = ref(false);

const showHomepageNav = (url: string) => {
  if (url.startsWith('#')) {
    if ($route.path === '/') {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>
