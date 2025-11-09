// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "UIVerse Magazine",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Montserrat:400,900,600|Antonio:600",
        },
      ],
    },
  },
  ssr: true,
  vite: {
    build: {
      rollupOptions: {
        output: {
          // Sanitize asset filenames
          assetFileNames: (assetInfo) => {
            let name = assetInfo.name || "asset";
            // Replace spaces with hyphens or underscores
            name = name.replace(/\s+/g, "-");

            const extType = name.split(".").pop();
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType || "")) {
              return `assets/images/[name]-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          },
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
        },
      },
    },
  },
});
