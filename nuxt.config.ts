// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    https: true, // Enables HTTPS
  },
  app: {
    head: {
      script: [
        {
          src: "https://aframe.io/releases/1.3.0/aframe.min.js",
          defer: true,
        },
        {
          src: "https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js",
          defer: true,
        },
      ],
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("a-"), // Treat all A-Frame elements as custom elements
    },
  },
});
