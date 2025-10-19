<template>
  <div class="w-full max-w-sm mx-auto">
    <div class="relative w-full" style="padding-bottom: 125%">

      <div class="absolute inset-0 z-0 flex items-center justify-center">
        <img
          :src="imageUrl"
          alt="Speaker image"
          class="w-full h-full object-cover scale-100"
          :style="{ maskImage: 'url(/frame_mask.svg)', maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }"
          />
      </div>

      <img
        src="/frame.svg"
        alt="Frame"
        class="absolute inset-0 w-full h-full z-10 pointer-events-none"
      />
    </div>

    <div class="text-center mt-4">
      <h3
        class="[font-family:'Montserrat',Helvetica] font-black text-black text-3xl"
      >
        {{ title }}
      </h3>
      <p
        class="[font-family:'Glacial_Indifference-Regular',Helvetica] text-black text-lg"
      >
        {{ subtitle }}
      </p>
      <p
        class="[font-family:'Glacial_Indifference-Regular',Helvetica] text-black text-lg"
      >
        {{ subtitle2 }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageUrl: string;
  title: string;
  subtitle: string;
  subtitle2: string | undefined;
  imageClass: string | undefined;
}>();

defineOptions({
  inheritAttrs: false,
});
</script>