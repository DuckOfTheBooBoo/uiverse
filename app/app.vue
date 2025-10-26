<template>
  <div>
    <header class="bg-[#fffaed] py-2 md:py-4">
      <nav
        class="container mx-auto flex justify-center items-center gap-x-4 md:gap-x-6 lg:gap-x-8"
      >
        <div class="flex items-center gap-x-4 md:gap-x-6 lg:gap-x-8">
          <NuxtLink
            v-for="item in leftNavItems"
            :key="item.label"
            :to="item.href"
            class="font-semibold text-[#4974ff] text-base md:text-lg tracking-wide whitespace-nowrap"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <NuxtLink to="/">
          <img
            class="h-52 md:h-12 lg:h-14"
            alt="Element"
            src="/9-20250714-054208-0000-1.png"
          />
        </NuxtLink>

        <div class="flex items-center gap-x-4 md:gap-x-6 lg:gap-x-8">
          <NuxtLink
            v-for="item in rightNavItems"
            :key="item.label"
            :to="item.href"
            class="font-semibold text-[#4974ff] text-base md:text-lg tracking-wide whitespace-nowrap"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </nav>
    </header>
    <NuxtPage />
    <footer class="bg-[#fffaed] relative pt-60 pb-0">
      <!-- Rectangle background -->
      <img src="/rectangle-76.svg" alt="Rectangle" class="absolute w-full left-0 right-0 bottom-0 h-36 z-0 m-0 p-0 select-none pointer-events-none" style="object-fit: cover" />
      <!-- Flowers -->
      <img class="absolute w-96 h-72 left-0 bottom-0 z-10 select-none pointer-events-none" alt="Flower Left" src="/flower.svg" />
      <img class="absolute w-96 h-72 right-0 bottom-0 z-10 scale-x-[-1] select-none pointer-events-none" alt="Flower Right" src="/flower.svg" />
      <div class="relative z-20 flex flex-col items-center justify-end min-h-[8rem]">
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const leftNavItems = computed(() => navigationItems.slice(0, 2));
const rightNavItems = computed(() => navigationItems.slice(2, 4));
console.log(leftNavItems.value);
console.log(rightNavItems.value);
</script>
