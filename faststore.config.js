
module.exports = {
  seo: {
  "title": "eMercado Faststore",
  "description": "A fast and performant store framework",
  "titleTemplate": "%s | FastStore",
  "author": "eMercado"
},

  // Theming
  theme: 'soft-blue',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "emercadopartnerbr",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "BRL",
      symbol: "R$",
    },
    locale: "pt-BR",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "BRA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://emercadopartnerbr.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/cozinha",
    search: "/s?q=OXFORD",
    pdp: "/ar-condicionado-split-hi-wall---12-000-btu-/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/ar-condicionado-split-hi-wall---12-000-btu-/p",
      collection: "/cozinha",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/ar-condicionado-split-hi-wall---12-000-btu-/p",
      collection: "/cozinha",
      collection_filtered: "/cozinha/?category-1=cozinha&brand=OXFORD&facets=category-1%2Cbrand%27",
      search: "/s?q=OXFORD",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://emercadopartnerbr.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
