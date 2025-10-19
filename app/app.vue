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
  </div>
</template>

<script>
import { computed } from "vue";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const leftNavItems = computed(() => navigationItems.slice(0, 2));

const rightNavItems = computed(() => navigationItems.slice(2, 4));
</script>
