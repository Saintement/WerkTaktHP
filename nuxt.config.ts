// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      title: 'WerkTakt — Takt für dein Handwerk',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'WerkTakt verbindet Kiosk-Zeiterfassung, Auftragssteuerung und Auswertung — für Betriebe, Freelancer und Heimwerker.',
        },
        { property: 'og:title', content: 'WerkTakt — Takt für dein Handwerk' },
        {
          property: 'og:description',
          content:
            'Einfach. Präzise. Modular. Die Software für Handwerk, Holzbau, Sanierung und private Projekte.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://werktakt.de' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300..900;1,14..32,300..900&display=swap',
        },
      ],
    },
  },
})
