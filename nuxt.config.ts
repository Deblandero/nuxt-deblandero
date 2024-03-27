// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/deblanderoLogoMinimalistWhite.svg' }],
      title: 'Deblandero',
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0"},
        { name: "description", content: "Donnez vie à votre marque avec des identités virtuelles uniques. Nous sommes experts dans la création d'expériences en ligne captivantes et de logos originaux, reflétant parfaitement votre vision et votre essence. Découvrez comment notre équipe talentueuse peut aider à façonner votre présence numérique."},
        { name: "keywords", content: "identités virtuelles, création en ligne, logos originaux, présence numérique, branding, expérience utilisateur"},
        { property: "og:title", content: "Création d'Identités Virtuelles Uniques | Votre Marque Digitale"}, 
        { property: "og:description", content: "Donnez vie à votre marque avec des identités virtuelles uniques. Experts en expériences en ligne captivantes et logos originaux."}, 
        { property: "og:image", content: "/images/gobeletBlancLight.svg"}, 
        { property: "og:url", content: "https://deblandero.be"}
      ]
    }
  },

  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/image"]
})