<template>
    <div class="w-full max-w-sm mx-auto">
      <div class="relative w-full" style="padding-bottom: 125%">
        <img
          :src="imageUrl"
          alt="Speaker image"
          class="absolute inset-0 w-full h-full object- p-10 z-0"
        />
  
        <img
          src="/frame.svg"
          alt="Frame"
          class="absolute inset-0 w-full h-full z-10"
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
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    imageUrl: string;
    title: string;
    subtitle: string;
  }>();
  </script>