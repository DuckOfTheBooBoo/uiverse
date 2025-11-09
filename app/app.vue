<template>
  <div class="overflow-x-hidden">
    <header class="bg-[#fffaed] fixed top-0 left-0 right-0 z-50 py-2 px-2">
      <div class="relative">
        <!-- Mobile: Hamburger (left) + Centered Logo -->
        <div class="md:hidden h-16 flex items-center justify-center px-4">
          <!-- Hamburger button (absolute left) -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            aria-label="Toggle navigation"
            :aria-expanded="mobileMenuOpen"
            class="absolute left-4 p-2 rounded-md"
          >
            <svg
              v-if="!mobileMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-[#4974ff]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-[#4974ff]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Centered Logo -->
          <NuxtLink to="/" class="flex items-center">
            <img
              class="h-8 w-auto max-w-full"
              alt="Element"
              src="/9-20250714-054208-0000-1.png"
            />
          </NuxtLink>
        </div>

        <!-- Desktop: Logo on left, nav centered -->
        <div class="hidden md:flex md:items-center md:relative">
          <!-- Desktop Logo (left) -->
          <div class="absolute left-0 top-1/2 transform -translate-y-1/2">
            <NuxtLink to="/" class="flex items-center">
              <img
                class="h-12 lg:h-14 w-auto max-w-full"
                alt="Element"
                src="/9-20250714-054208-0000-1.png"
              />
            </NuxtLink>
          </div>

          <!-- Centered nav container -->
          <nav
            class="container mx-auto max-w-5xl flex justify-center items-center px-6 py-3 md:py-4"
          >
            <div class="flex items-center gap-x-6">
              <NuxtLink
                v-for="item in navigationItems"
                :key="item.label"
                :to="item.href"
                class="font-semibold text-[#4974ff] text-base md:text-lg tracking-wide whitespace-nowrap"
              >
                {{ item.label }}
              </NuxtLink>
            </div>
          </nav>
        </div>
      </div>

      <!-- Mobile collapsible menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden absolute left-0 right-0 top-full bg-[#fffaed] border-t shadow-sm z-40"
      >
        <nav class="px-4 pb-4 pt-2 flex flex-col gap-2">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.label"
            :to="item.href"
            @click="mobileMenuOpen = false"
            class="py-2 font-medium text-[#4974ff]"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>
    </header>

    <Transition name="page" mode="out-in">
      <NuxtPage />
    </Transition>

    <footer class="bg-[#fffaed] relative pt-60 pb-0">
      <!-- Rectangle background -->
      <img
        src="/rectangle-76.svg"
        alt="Rectangle"
        class="absolute w-full left-0 right-0 bottom-0 h-36 z-0 m-0 p-0 select-none pointer-events-none"
        style="object-fit: cover"
      />
      <!-- Flowers -->
      <img
        class="absolute w-96 h-72 left-0 bottom-0 z-10 select-none pointer-events-none"
        alt="Flower Left"
        src="/flower.svg"
      />
      <img
        class="absolute w-96 h-72 right-0 bottom-0 z-10 scale-x-[-1] select-none pointer-events-none"
        alt="Flower Right"
        src="/flower.svg"
      />
      <div
        class="relative z-20 flex flex-col items-center justify-end min-h-[8rem]"
      ></div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
  { label: "Articles", href: "/articles" },
];

const leftNavItems = computed(() => navigationItems.slice(0, 2));
const rightNavItems = computed(() => navigationItems.slice(2, 5));

// mobile menu state
const mobileMenuOpen = ref(false);

// close mobile menu on route change
const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    mobileMenuOpen.value = false;
  }
);
</script>
