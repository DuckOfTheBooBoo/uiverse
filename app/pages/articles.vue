<template>
  <div class="min-h-screen flex flex-col bg-[#f7f7fb]">
    <main class="flex-1 w-full">
      <iframe
        src="https://uiverse-magazine.super.site"
        class="w-full h-dvh border-0"
        frameborder="0"
        allowfullscreen
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-modals allow-popups-to-escape-sandbox"
        title="Embedded Article"
      ></iframe>
    </main>
  </div>
</template>

<script setup lang="ts">
// Hardcoded embed; no dynamic src expected
</script>

<style scoped>
html, body, #__nuxt { height: 100%; }
iframe { min-height: 100%; }
</style>