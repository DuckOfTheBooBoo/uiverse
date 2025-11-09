<template>
  <div class="min-h-screen bg-[#fffaed] flex flex-col items-center pt-32 pb-8">
    <!-- Headline -->
    <h1 class="text-3xl md:text-4xl font-extrabold text-[#b30482] mb-8 text-center">Got Questions and Ideas?</h1>
    <!-- Form -->
    <form class="w-full max-w-xl flex flex-col gap-6 mb-12 items-center">
      <input type="text" placeholder="Name" class="w-full rounded-lg shadow-md px-6 py-4 bg-white placeholder-gray-400 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#f642a5]" />
      <input type="email" placeholder="Email" class="w-full rounded-lg shadow-md px-6 py-4 bg-white placeholder-gray-400 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#f642a5]" />
      <textarea rows="5" placeholder="Message" class="w-full rounded-lg shadow-md px-6 py-4 bg-white placeholder-gray-400 text-lg font-medium resize-none focus:outline-none focus:ring-2 focus:ring-[#f642a5]"></textarea>
      <button type="submit" class="bg-[#f642a5] hover:bg-[#b30482] transition text-white font-bold text-xl rounded-2xl px-14 py-3 mt-1 shadow-lg">SEND</button>
    </form>

    <!-- Collaborations -->
    <h2 class="text-2xl md:text-3xl font-extrabold text-[#b30482] mb-8 text-center">Open for Collaborations</h2>
    <div class="flex flex-row justify-center items-center gap-16 mb-8">
      <div class="flex flex-col items-center gap-2">
        <img src="/email-icon.svg" alt="E-mail" class="w-32 h-32 rounded-2xl" />
        <span class="mt-1 text-[#b30482] text-xl font-bold">E-mail</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <img src="/wa-icon.svg" alt="WhatsApp" class="w-32 h-32 rounded-2xl" />
        <span class="mt-1 text-[#b30482] text-xl font-bold">WhatsApp</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// Form can be made functional if needed.
</script>
