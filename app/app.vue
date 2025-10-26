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
    <footer class="bg-[#fffaed] relative py-12">
      <div class="flex justify-between items-end px-4">
      </div>
      <!-- <div class="absolute bottom-0 left-0 right-0 text-center"> -->
        <div class="flex justify-center items-center w-full flex-col">
          <img class="" alt="Vector" src="/vector-4.svg" />
          <img class="h-96 w-full" alt="Rectangle" src="/rectangle-76.svg" />
          <img class="absolute w-[91px] h-[94px] bottom-14 right-96" alt="Group" src="/group-113.png" />
          <img class="absolute w-[91px] h-[94px] bottom-14 left-96" alt="Group" src="/group-112.png" />
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
