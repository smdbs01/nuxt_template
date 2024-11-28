// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
  ],

  colorMode: {
    preference: "system",
    fallback: "dark",
    classSuffix: "",
  },
});
