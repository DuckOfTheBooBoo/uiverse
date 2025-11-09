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
          assetFileNames: (assetInfo) => {
            const name = assetInfo.name || '';
            const ext = name.split('.').pop()?.toLowerCase() || '';
            
            // Don't touch CSS or JS files - let Nuxt handle them
            if (ext === 'css' || ext === 'js') {
              return '_nuxt/[name].[hash][extname]';
            }
            
            // Sanitize spaces in other assets (images, fonts, etc.)
            const sanitized = name.replace(/\s+/g, '-');
            
            // Organize by type
            if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
              return `_nuxt/[name].[hash][extname]`;
            }
            if (/woff2?|ttf|eot|otf/i.test(ext)) {
              return `_nuxt/[name].[hash][extname]`;
            }
            
            return `_nuxt/[name].[hash][extname]`;
          },
          // Leave chunk and entry files alone
          chunkFileNames: '_nuxt/[name].[hash].js',
          entryFileNames: '_nuxt/[name].[hash].js'
        }
      }
    }
  }
});
