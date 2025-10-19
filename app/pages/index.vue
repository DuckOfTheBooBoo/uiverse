<template>
  <main class="bg-[#fffaed] overflow-x-hidden w-full min-w-[390px]">
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

    <!-- Hero Section -->
    <section class="relative">
      <img
        class="w-full h-auto"
        alt="Clip path group"
        src="/Vector-index.svg"
      />
    </section>

    <!-- Scrolling Text Banner -->
    <section class="bg-[#a9a9ed] py-1 overflow-hidden whitespace-nowrap">
      <div class="flex animate-scroll">
        <div v-for="i in 4" :key="i" class="flex items-center space-x-8 px-4">
          <span
            class="[font-family:'Glacial_Indifference-Bold',Helvetica] font-bold text-white"
            style="font-size: clamp(1rem, 2vw, 2rem)"
          >
            We Are Your Niche
          </span>
          <img
            alt="Group"
            src="/group-71.png"
            style="height: clamp(1rem, 2vw, 2rem)"
          />
          <span
            class="[font-family:'Glacial_Indifference-Bold',Helvetica] font-bold text-white"
            style="font-size: clamp(1rem, 2vw, 2rem)"
          >
            We Are The One You Need
          </span>
          <img class="h-2" alt="Group" src="/group-70.png" />
        </div>
      </div>
    </section>

    <section class="relative my-32">
      <div class="absolute inset-0">
        <img
          class="absolute top-[5%] left-[10%]"
          alt="Vector"
          src="/vector-6.svg"
        />
        <img
          class="absolute top-[5%] right-[5%]"
          alt="Group"
          src="/group-102.png"
        />

        <div v-for="(speaker, index) in speakerList" :key="index" class="absolute z-10" :style="{top: speaker.position.top, left: speaker.position.left}">
          <ImageFrame :image-url="speaker.imageUrl" :title="speaker.title" :subtitle="speaker.name" :subtitle2="speaker.major" :imageClass="speaker.addClass"/>
        </div>

      </div>
      <img class="w-full" alt="Vector" src="/vector.svg" />
    </section>

    <!-- Open Recruitment Section -->
    <section
      class="container mx-auto px-4 py-8 flex items-center justify-center gap-4"
    >
      <img class="w-1/3" alt="Group" src="/Group 121.png" />
      <div class="text-center">
        <div class="[font-family:'Montserrat',Helvetica] font-black text-transparent text-sm sm:text-lg md:text-2xl lg:text-6xl">
          <span class="text-[#aa007a] block">
            OPEN RECRUITMENT
          </span>
          <span class="text-[#ff60b6] block">
            JOIN THE TEAM
          </span>
        </div>
        <UiButton
          class="mt-4 lg:w-fit px-5 bg-[#ff60b6] rounded-[13.45px] shadow-[0px_1.34px_1.34px_#00000040]"
        >
          <span
            class="[font-family:'Montserrat',Helvetica] font-black text-[#ab007b] lg:text-2xl"
          >
            CLICK HERE TO JOIN US
          </span>
        </UiButton>
      </div>
    </section>

    <!-- Divider -->
    <div class="px-2">
      <img class="w-full" alt="Vector" src="/vector-7.svg" />
    </div>

    <!-- Media Partner & Partnership Section -->
    <section class="container mx-auto px-4 py-8 text-center">
      <h2
        class="[font-family:'Montserrat',Helvetica] font-black text-[#ab007b] text-5xl mb-8"
      >
        MEDIA PARTNER & PARTNERSHIP
      </h2>
      <div
        class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 items-center justify-items-center"
      >
        <img
          v-for="(logo, index) in partnerLogos"
          :key="`partner-logo-${index}`"
          :alt="logo.alt"
          :src="logo.src"
          class="max-w-full h-auto object-contain"
        />
      </div>
    </section>

    <!-- Divider -->
    <div class="px-2">
      <img class="w-full" alt="Vector" src="/vector-7.svg" />
    </div>

    <!-- Newsletter Section -->
    <section class="container mx-auto px-4 py-8 text-center">
      <h2
        class="[font-family:'Montserrat',Helvetica] font-black text-[#aa007a] text-5xl"
      >
        SUBSCRIBE TO OUR NEWSLETTER
      </h2>
      <form class="mt-4 flex justify-center items-center gap-2">
        <UiInput
          class="h-16 max-w-96 bg-[#fffdfd] rounded-[15.42px] border-[0.26px] border-solid border-[#9f9f9f] shadow-[0px_1.03px_1.03px_#00000040] text-2xl"
          placeholder="Insert your e-mail"
        />
        <UiButton
          class="h-16 w-20 bg-[#ff60b6] rounded-[7.71px] shadow-[0px_1.03px_1.03px_#00000040]"
        >
          <span
            class="[font-family:'Montserrat',Helvetica] font-semibold text-[#98077bb2] text-lg"
          >
            Submit
          </span>
        </UiButton>
      </form>
      <p
        class="mt-4 max-w-2xl mx-auto [font-family:'Glacial_Indifference-Bold',Helvetica] font-bold text-[#ed50ac] text-xl"
      >
        Stay updated with the latest opportunities that matter: paid, unpaid,
        and everything in between. Plus, scholarships and cool highlights
        designed for ambitious high school and college students like you!
      </p>
    </section>

    <!-- Divider -->
    <div class="px-2">
      <img class="w-full" alt="Vector" src="/vector-7.svg" />
    </div>

    <!-- Footer -->
    <footer class="relative py-12 mt-8">
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
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { speakerList } from "~/static/data";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const leftNavItems = computed(() => navigationItems.slice(0, 2));

const rightNavItems = computed(() => navigationItems.slice(2, 4));

const partnerLogos = [
  {
    src: "/logo-peta-careers.png",
    alt: "Logo peta careers",
  },
  {
    src: "/logo-sayinc.png",
    alt: "Logo SAYINC",
  },
  {
    src: "/logo-ink---talk.png",
    alt: "Logo ink talk",
  },
  {
    src: "/logo-girl-up-ui.png",
    alt: "Logo girl up UI",
  },
  {
    src: "/logo-frothe.png",
    alt: "Logo frothe",
  },
  {
    src: "/logo-doteens.png",
    alt: "Logo doteens",
  },
  {
    src: "/logo-yot.png",
    alt: "Logo YOT",
  },
  {
    src: "/logo-youth-ranger-jakarta-.png",
    alt: "Logo youth ranger",
  },
  {
    src: "/logo-wewaw.png",
    alt: "Logo WEWAW",
  },
  {
    src: "/image-40.png",
    alt: "Image",
  },
  {
    src: "/img-20250507-wa0069-1.png",
    alt: "Img",
  },
];
</script>

<style>
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
.animate-scroll {
  animation: scroll 20s linear infinite;
  display: flex;
  width: 200%; /* to make it seamless */
}
</style>
