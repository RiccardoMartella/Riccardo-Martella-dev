import { useHead } from '@vueuse/head'

export const useSEO = (config = {}) => {
  const defaultConfig = {
    title: 'Assembly Station - Unity Asset for Interactive 3D Assembly Documentation',
    description: 'Assembly Station is a powerful Unity asset that allows you to create interactive 3D assembly guides and documentation. Perfect for IKEA-style instructions, technical manuals, and educational content.',
    keywords: 'Unity asset, 3D assembly, interactive documentation, assembly guide, Unity tools, 3D tutorials, technical documentation, IKEA instructions, Unity package',
    image: 'https://www.assembly-station.com/images/logo.png',
    url: 'https://www.assembly-station.com/',
    type: 'website',
    locale: 'en_US',
    siteName: 'Assembly Station'
  }

  const seoConfig = { ...defaultConfig, ...config }

  useHead({
    title: seoConfig.title,
    meta: [
      // Basic SEO
      { name: 'description', content: seoConfig.description },
      { name: 'keywords', content: seoConfig.keywords },
      { name: 'author', content: 'Assembly Station' },
      { name: 'robots', content: 'index, follow' },
      
      // Open Graph
      { property: 'og:title', content: seoConfig.title },
      { property: 'og:description', content: seoConfig.description },
      { property: 'og:type', content: seoConfig.type },
      { property: 'og:url', content: seoConfig.url },
      { property: 'og:image', content: seoConfig.image },
      { property: 'og:image:alt', content: 'Assembly Station' },
      { property: 'og:site_name', content: seoConfig.siteName },
      { property: 'og:locale', content: seoConfig.locale },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seoConfig.title },
      { name: 'twitter:description', content: seoConfig.description },
      { name: 'twitter:image', content: seoConfig.image },
      { name: 'twitter:image:alt', content: 'Assembly Station' }
    ],
    link: [
      { rel: 'canonical', href: seoConfig.url }
    ]
  })

  return {
    updateSEO: (newConfig) => {
      const updatedConfig = { ...seoConfig, ...newConfig }
      useSEO(updatedConfig)
    }
  }
}

// Configurazioni predefinite per pagine specifiche
export const seoConfigs = {
  home: {
    title: 'Assembly Station - Unity Asset for Interactive 3D Assembly Documentation',
    description: 'Create stunning interactive 3D assembly guides with Assembly Station Unity asset. Perfect for technical documentation, educational content, and IKEA-style instructions.',
    keywords: 'Unity asset, 3D assembly, interactive documentation, assembly guide, Unity tools, 3D tutorials, technical documentation',
    url: 'https://www.assembly-station.com/'
  },
  
  homeIT: {
    title: 'Assembly Station - Asset Unity per Documentazione Assemblaggio 3D Interattiva',
    description: 'Crea guide di assemblaggio 3D interattive con l\'asset Unity Assembly Station. Perfetto per documentazione tecnica, contenuti educativi e istruzioni stile IKEA.',
    keywords: 'Asset Unity, assemblaggio 3D, documentazione interattiva, guida assemblaggio, strumenti Unity, tutorial 3D, documentazione tecnica',
    url: 'https://www.assembly-station.com/it',
    locale: 'it_IT'
  },
  
  tutorials: {
    title: 'Assembly Station Tutorials - Learn How to Create 3D Assembly Guides',
    description: 'Comprehensive tutorials for Assembly Station Unity asset. Learn how to create interactive 3D assembly documentation, setup FBX models, and customize your assembly guides.',
    keywords: 'Assembly Station tutorials, Unity asset tutorial, 3D assembly guide tutorial, FBX setup, Unity documentation',
    url: 'https://www.assembly-station.com/tutorials'
  },
  
  tutorialsIT: {
    title: 'Tutorial Assembly Station - Impara a Creare Guide di Assemblaggio 3D',
    description: 'Tutorial completi per l\'asset Unity Assembly Station. Impara a creare documentazione di assemblaggio 3D interattiva, configurare modelli FBX e personalizzare le tue guide.',
    keywords: 'Tutorial Assembly Station, tutorial asset Unity, tutorial guida assemblaggio 3D, configurazione FBX, documentazione Unity',
    url: 'https://www.assembly-station.com/it/tutorials',
    locale: 'it_IT'
  },
  
  pricing: {
    title: 'Assembly Station Pricing - Unity Asset for 3D Assembly Documentation - €29.44',
    description: 'Assembly Station Unity asset available for €29.44 one-time purchase. Create interactive 3D assembly guides and documentation. Professional tool for developers and educators.',
    keywords: 'Assembly Station price, Unity asset price, 3D assembly tool, Unity asset store, professional Unity tools',
    url: 'https://www.assembly-station.com/pricing'
  },
  
  pricingIT: {
    title: 'Prezzi Assembly Station - Asset Unity per Documentazione Assemblaggio 3D - €29.44',
    description: 'Asset Unity Assembly Station disponibile per €29.44 acquisto una tantum. Crea guide di assemblaggio 3D interattive e documentazione. Strumento professionale per sviluppatori ed educatori.',
    keywords: 'Prezzo Assembly Station, prezzo asset Unity, strumento assemblaggio 3D, Unity asset store, strumenti Unity professionali',
    url: 'https://www.assembly-station.com/it/pricing',
    locale: 'it_IT'
  },
  
  docs: {
    title: 'Assembly Station Documentation - Complete Guide and API Reference',
    description: 'Complete documentation for Assembly Station Unity asset. Installation guide, API reference, best practices, and troubleshooting for creating 3D assembly documentation.',
    keywords: 'Assembly Station documentation, Unity asset docs, API reference, installation guide, 3D assembly documentation',
    url: 'https://www.assembly-station.com/docs'
  },
  
  docsIT: {
    title: 'Documentazione Assembly Station - Guida Completa e Riferimento API',
    description: 'Documentazione completa per l\'asset Unity Assembly Station. Guida all\'installazione, riferimento API, best practice e risoluzione problemi per creare documentazione di assemblaggio 3D.',
    keywords: 'Documentazione Assembly Station, docs asset Unity, riferimento API, guida installazione, documentazione assemblaggio 3D',
    url: 'https://www.assembly-station.com/it/docs',
    locale: 'it_IT'
  },
  
  contacts: {
    title: 'Contact Assembly Station - Support and Business Inquiries',
    description: 'Get in touch with the Assembly Station team. Contact us for support, business inquiries, feature requests, or general questions about our Unity asset.',
    keywords: 'Assembly Station contact, Unity asset support, business inquiries, technical support',
    url: 'https://www.assembly-station.com/contacts'
  },
  
  contactsIT: {
    title: 'Contatta Assembly Station - Supporto e Richieste Commerciali',
    description: 'Mettiti in contatto con il team di Assembly Station. Contattaci per supporto, richieste commerciali, richieste di funzionalità o domande generali sul nostro asset Unity.',
    keywords: 'Contatto Assembly Station, supporto asset Unity, richieste commerciali, supporto tecnico',
    url: 'https://www.assembly-station.com/it/contacts',
    locale: 'it_IT'
  }
}
