<template>
  <main
    class="bg-[#fffaed] overflow-hidden w-full min-w-[390px] h-[1602px] relative"
  >
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
            class="h-10 md:h-12 lg:h-14"
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

    <section>
      <img class="" alt="Clip path group" src="/Vector-index.svg" />
    </section>

    <img
      class="absolute top-[390px] -left-10 w-[455px] h-[209px]"
      alt="Vector"
      src="/vector.svg"
    />

    <img
      class="absolute w-[9.30%] h-[2.17%] top-[23.97%] left-[10.51%]"
      alt="Vector"
      src="/vector-6.svg"
    />

    <img
      class="absolute top-[683px] left-[37px] w-[106px] h-[97px]"
      alt="Group"
      src="/group-111.png"
    />

    <div
      class="absolute top-[697px] left-[calc(50.00%_-_50px)] w-[185px] [font-family:'Montserrat',Helvetica] font-black text-transparent text-[16.1px] text-center tracking-[0] leading-[normal]"
    >
      <span class="text-[#aa007a]"> OPEN RECRUITMENT <br /> </span>
      <span class="text-[#ff60b6]">JOIN THE TEAM</span>
    </div>

    <div
      class="absolute top-[1167px] left-[84px] w-[228px] [font-family:'Montserrat',Helvetica] font-black text-[#aa007a] text-[12.3px] tracking-[0] leading-[normal]"
    >
      SUBSCRIBE TO OUR NEWSLETTER
    </div>

    <UiButton
      class="absolute top-[1208px] left-[236px] w-[63px] h-[27px] bg-[#ff60b6] rounded-[7.71px] shadow-[0px_1.03px_1.03px_#00000040] h-auto"
    >
      <span
        class="[font-family:'Montserrat',Helvetica] font-semibold text-[#98077bb2] text-[12.3px] tracking-[0] leading-[normal]"
      >
        Submit
      </span>
    </UiButton>

    <UiInput
      class="absolute top-[1208px] left-[84px] w-36 h-[27px] bg-[#fffdfd] rounded-[15.42px] border-[0.26px] border-solid border-[#9f9f9f] shadow-[0px_1.03px_1.03px_#00000040]"
      placeholder="Insert your e-mail"
    />

    <div
      class="absolute top-[887px] left-[calc(50.00%_-_125px)] w-64 [font-family:'Montserrat',Helvetica] font-black text-[#ab007b] text-[12.3px] text-center tracking-[0] leading-[normal]"
    >
      MEDIA PARTNER & PARTNERSHIP
    </div>

    <img
      class="absolute top-[870px] left-[9px] w-[372px] h-px"
      alt="Vector"
      src="/vector-7.svg"
    />

    <img
      class="absolute top-[870px] left-[9px] w-[372px] h-px"
      alt="Vector"
      src="/vector-7.svg"
    />

    <img
      class="absolute top-[1120px] left-[7px] w-[383px] h-px"
      alt="Vector"
      src="/vector-7.svg"
    />

    <div
      class="absolute top-[1279px] left-[calc(50.00%_-_119px)] w-[244px] [font-family:'Glacial_Indifference-Bold',Helvetica] font-bold text-[#ed50ac] text-[12.3px] text-center tracking-[0] leading-[normal]"
    >
      Stay updated with the latest opportunities that matter: paid, unpaid, and
      everything in between.&nbsp;&nbsp;Plus, scholarships and cool highlights
      designed for ambitious high school and college students like you!
    </div>

    <img
      v-for="(logo, index) in partnerLogos"
      :key="`partner-logo-${index}`"
      :class="`absolute ${logo.className}`"
      :alt="logo.alt"
      :src="logo.src"
    />

    <img
      class="absolute w-[14.82%] h-[3.75%] top-[87.09%] left-[42.54%]"
      alt="Vector"
      src="/vector-4.svg"
    />

    <img
      class="absolute top-[1552px] left-[13px] w-[370px] h-[50px]"
      alt="Rectangle"
      src="/rectangle-76.svg"
    />

    <UiButton
      class="absolute top-[744px] left-[calc(50.00%_-_58px)] w-[198px] h-[31px] bg-[#ff60b6] rounded-[13.45px] shadow-[0px_1.34px_1.34px_#00000040] h-auto"
    >
      <span
        class="[font-family:'Montserrat',Helvetica] font-black text-[#ab007b] text-[12.1px] text-center tracking-[0] leading-[normal]"
      >
        CLICK HERE TO JOIN US
      </span>
    </UiButton>

    <img
      class="absolute w-[5.69%] h-0 top-[42.13%] left-[27.85%]"
      alt="Vector"
      src="/vector-5.svg"
    />

    <img
      class="absolute w-[3.47%] h-0 top-[43.02%] left-[31.21%]"
      alt="Vector"
      src="/vector-2.svg"
    />

    <img
      class="absolute top-[1505px] left-[286px] w-[91px] h-[94px]"
      alt="Group"
      src="/group-112.png"
    />

    <img
      class="absolute top-[1502px] left-6 w-[91px] h-[94px]"
      alt="Group"
      src="/group-113.png"
    />

    <div
      class="top-[714px] left-[101px] absolute w-[15px] h-[11px] bg-[#ff6f6fd9] rounded-[7.73px/5.38px] blur-[7.48px]"
    />

    <div
      class="top-[712px] left-16 absolute w-[15px] h-[11px] bg-[#ff6f6fd9] rounded-[7.73px/5.38px] blur-[7.48px]"
    />

    <div
      class="absolute top-[342px] left-[186px] [font-family:'Montserrat',Helvetica] font-normal text-black text-[10.8px] tracking-[0] leading-[normal]"
    ></div>

    <div class="absolute top-[322px] left-[-255px] w-[692px] h-[21px]">
      <div
        class="absolute top-1 left-[568px] w-[93px] [font-family:'Glacial_Indifference-Bold',Helvetica] font-bold text-white text-[10.8px] tracking-[0] leading-[normal] whitespace-nowrap"
      >
        We Are Your Niche
      </div>

      <div class="absolute top-0 left-0 w-[680px] h-[21px] bg-[#a9a9ed]" />

      <div
        class="absolute top-[3px] left-[411px] w-[132px] [font-family:'Glacial_Indifference-Bold',Helvetica] font-bold text-white text-[10.8px] tracking-[0] leading-[normal] whitespace-nowrap"
      >
        We Are The One You Need
      </div>

      <div
        class="absolute top-[3px] left-[138px] w-[132px] [font-family:'Glacial_Indifference-Bold',Helvetica] font-bold text-white text-[10.8px] tracking-[0] leading-[normal] whitespace-nowrap"
      >
        We Are The One You Need
      </div>

      <div
        class="left-[297px] absolute top-[3px] w-[93px] [font-family:'Glacial_Indifference-Bold',Helvetica] font-bold text-white text-[10.8px] tracking-[0] leading-[normal] whitespace-nowrap"
      >
        We Are Your Niche
      </div>

      <div
        class="left-[22px] absolute top-[3px] w-[93px] [font-family:'Glacial_Indifference-Bold',Helvetica] font-bold text-white text-[10.8px] tracking-[0] leading-[normal] whitespace-nowrap"
      >
        We Are Your Niche
      </div>

      <img
        class="absolute w-0 h-[42.49%] top-[25.82%] left-[56.87%]"
        alt="Vector"
        src="/vector-1.svg"
      />

      <img
        class="absolute w-0 h-[42.49%] top-[-1569.41%] left-[36.83%]"
        alt="Vector"
        src="/vector-3.svg"
      />

      <img
        class="absolute w-[2.03%] h-[46.45%] top-[22.39%] left-[78.85%]"
        alt="Group"
        src="/group-46.png"
      />

      <img
        class="absolute w-[2.03%] h-[46.45%] top-[23.49%] left-[39.78%]"
        alt="Group"
        src="/group-70.png"
      />

      <img
        class="absolute w-[2.03%] h-[46.45%] top-[-1569.41%] left-[36.83%]"
        alt="Group"
        src="/group-71.png"
      />

      <div
        class="left-[567px] absolute top-[3px] w-[93px] [font-family:'Glacial_Indifference-Bold',Helvetica] font-bold text-white text-[10.8px] tracking-[0] leading-[normal] whitespace-nowrap"
      >
        We Are Your Niche
      </div>

      <img
        class="absolute w-0 h-[42.49%] top-[-1569.41%] left-[36.83%]"
        alt="Vector"
        src="/vector-8.svg"
      />
    </div>

    <img
      class="absolute w-[15.75%] h-[4.00%] top-[23.53%] left-[78.21%]"
      alt="Group"
      src="/group-102.png"
    />

    <img
      class="absolute top-[390px] left-[5px] w-[380px] h-[170px]"
      alt="Group"
      src="/group-107.png"
    />
  </main>
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

const partnerLogos = [
  {
    src: "/logo-peta-careers.png",
    alt: "Logo peta careers",
    className: "top-[993px] left-0 w-[149px] h-[149px] object-cover",
  },
  {
    src: "/logo-sayinc.png",
    alt: "Logo SAYINC",
    className: "top-[920px] left-56 w-[136px] h-[39px]",
  },
  {
    src: "/logo-ink---talk.png",
    alt: "Logo ink talk",
    className: "top-[959px] left-11 w-[89px] h-[88px] object-cover",
  },
  {
    src: "/logo-girl-up-ui.png",
    alt: "Logo girl up UI",
    className: "top-[1016px] left-[229px] w-[81px] h-[101px] object-cover",
  },
  {
    src: "/logo-frothe.png",
    alt: "Logo frothe",
    className: "top-[1026px] left-[137px] w-[85px] h-[84px] object-cover",
  },
  {
    src: "/logo-doteens.png",
    alt: "Logo doteens",
    className: "top-[1029px] left-[305px] w-[84px] h-[84px] object-cover",
  },
  {
    src: "/logo-yot.png",
    alt: "Logo YOT",
    className: "top-[929px] left-[157px] w-[77px] h-6 object-cover",
  },
  {
    src: "/logo-youth-ranger-jakarta-.png",
    alt: "Logo youth ranger",
    className:
      "top-[895px] left-[calc(50.00%_-_137px)] w-[75px] h-[75px] object-cover",
  },
  {
    src: "/logo-wewaw.png",
    alt: "Logo WEWAW",
    className: "top-[971px] left-[216px] w-16 h-[63px] object-cover",
  },
  {
    src: "/image-40.png",
    alt: "Image",
    className: "top-[959px] left-[278px] w-[90px] h-[90px] object-cover",
  },
  {
    src: "/img-20250507-wa0069-1.png",
    alt: "Img",
    className: "top-[971px] left-[140px] w-16 h-16 object-cover",
  },
];
</script>
