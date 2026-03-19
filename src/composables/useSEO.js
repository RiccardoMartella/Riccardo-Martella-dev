import { useHead } from '@vueuse/head'

export const useSEO = (config = {}) => {
  const defaultConfig = {
    title: 'Assembly Station',
    description: 'Assembly Station is a powerful Unity asset that allows you to create interactive 3D assembly guides and documentation. Perfect for IKEA-style instructions, technical manuals, and educational content.',
    keywords: 'Unity asset, 3D assembly, interactive documentation, assembly guide, Unity tools, 3D tutorials, technical documentation, IKEA instructions, Unity package',
    image: 'https://www.assembly-station.com/images/logo.png',
    url: 'https://www.assembly-station.com/',
    type: 'website',
    locale: 'en_US',
    siteName: 'Assembly Station',
    robots: 'index, follow'
  }

  const seoConfig = { ...defaultConfig, ...config }

  // Build script content for structured data if provided
  const scripts = []
  if (seoConfig.structuredData) {
    scripts.push({
      type: 'application/ld+json',
      children: JSON.stringify(seoConfig.structuredData)
    })
  }

  useHead({
    title: seoConfig.title,
    meta: [
      // Basic SEO
      { name: 'description', content: seoConfig.description },
      { name: 'keywords', content: seoConfig.keywords },
      { name: 'author', content: 'Assembly Station' },
      { name: 'robots', content: seoConfig.robots },

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
    ],
    script: scripts
  })

  return {
    updateSEO: (newConfig) => {
      const updatedConfig = { ...seoConfig, ...newConfig }
      useSEO(updatedConfig)
    }
  }
}

// Configurazioni predefinite per pagine specifiche — nested per locale
export const seoConfigs = {
  home: {
    en: {
      title: 'Assembly Station',
      description: 'Create stunning interactive 3D assembly guides with Assembly Station Unity asset. Perfect for technical documentation, educational content, and IKEA-style instructions.',
      keywords: 'Unity asset, 3D assembly, interactive documentation, assembly guide, Unity tools, 3D tutorials, technical documentation',
      url: 'https://www.assembly-station.com/'
    },
    it: {
      title: 'Assembly Station | Modular System to Bring Your Model to Life - Asset Unity per Assemblaggio 3D Interattivo',
      description: 'Crea guide di assemblaggio 3D interattive con l\'asset Unity Assembly Station. Perfetto per documentazione tecnica, contenuti educativi e istruzioni stile IKEA.',
      keywords: 'Asset Unity, assemblaggio 3D, documentazione interattiva, guida assemblaggio, strumenti Unity, tutorial 3D, documentazione tecnica',
      url: 'https://www.assembly-station.com/it',
      locale: 'it_IT'
    }
  },

  tutorials: {
    en: {
      title: 'Assembly Station Tutorials - Learn How to Create 3D Assembly Guides',
      description: 'Comprehensive tutorials for Assembly Station Unity asset. Learn how to create interactive 3D assembly documentation, setup FBX models, and customize your assembly guides.',
      keywords: 'Assembly Station tutorials, Unity asset tutorial, 3D assembly guide tutorial, FBX setup, Unity documentation',
      url: 'https://www.assembly-station.com/tutorials'
    },
    it: {
      title: 'Tutorial Assembly Station - Impara a Creare Guide di Assemblaggio 3D',
      description: 'Tutorial completi per l\'asset Unity Assembly Station. Impara a creare documentazione di assemblaggio 3D interattiva, configurare modelli FBX e personalizzare le tue guide.',
      keywords: 'Tutorial Assembly Station, tutorial asset Unity, tutorial guida assemblaggio 3D, configurazione FBX, documentazione Unity',
      url: 'https://www.assembly-station.com/it/tutorials',
      locale: 'it_IT'
    }
  },

  pricing: {
    en: {
      title: 'Assembly Station Pricing - Unity Asset for 3D Assembly Documentation - €29.44',
      description: 'Assembly Station Unity asset available for €29.44 one-time purchase. Create interactive 3D assembly guides and documentation. Professional tool for developers and educators.',
      keywords: 'Assembly Station price, Unity asset price, 3D assembly tool, Unity asset store, professional Unity tools',
      url: 'https://www.assembly-station.com/pricing'
    },
    it: {
      title: 'Prezzi Assembly Station - Asset Unity per Documentazione Assemblaggio 3D - €29.44',
      description: 'Asset Unity Assembly Station disponibile per €29.44 acquisto una tantum. Crea guide di assemblaggio 3D interattive e documentazione. Strumento professionale per sviluppatori ed educatori.',
      keywords: 'Prezzo Assembly Station, prezzo asset Unity, strumento assemblaggio 3D, Unity asset store, strumenti Unity professionali',
      url: 'https://www.assembly-station.com/it/pricing',
      locale: 'it_IT'
    }
  },

  docs: {
    en: {
      title: 'Assembly Station Documentation - Complete Guide',
      description: 'Complete documentation for Assembly Station Unity asset. Installation guide, best practices, and troubleshooting for creating 3D assembly documentation.',
      keywords: 'Assembly Station documentation, Unity asset docs, installation guide, 3D assembly documentation, user manual',
      url: 'https://www.assembly-station.com/docs'
    },
    it: {
      title: 'Documentazione Assembly Station - Guida Completa',
      description: 'Documentazione completa per l\'asset Unity Assembly Station. Guida all\'installazione, best practice e risoluzione problemi per creare documentazione di assemblaggio 3D.',
      keywords: 'Documentazione Assembly Station, docs asset Unity, guida installazione, documentazione assemblaggio 3D, manuale utente',
      url: 'https://www.assembly-station.com/it/docs',
      locale: 'it_IT'
    }
  },

  contacts: {
    en: {
      title: 'Contact Assembly Station - Support and Business Inquiries',
      description: 'Get in touch with the Assembly Station team. Contact us for support, business inquiries, feature requests, or general questions about our Unity asset.',
      keywords: 'Assembly Station contact, Unity asset support, business inquiries, technical support',
      url: 'https://www.assembly-station.com/contacts'
    },
    it: {
      title: 'Contatta Assembly Station - Supporto e Richieste Commerciali',
      description: 'Mettiti in contatto con il team di Assembly Station. Contattaci per supporto, richieste commerciali, richieste di funzionalità o domande generali sul nostro asset Unity.',
      keywords: 'Contatto Assembly Station, supporto asset Unity, richieste commerciali, supporto tecnico',
      url: 'https://www.assembly-station.com/it/contacts',
      locale: 'it_IT'
    }
  },

  hub: {
    en: {
      title: 'Unity Assets by Riccardo Martella - Assembly Station & Homing Missile',
      description: 'Explore Unity assets by Riccardo Martella. Assembly Station for interactive 3D assembly guides and Homing Missile for realistic homing missile systems.',
      keywords: 'Unity assets, Assembly Station, Homing Missile, Unity tools, game development, 3D assembly, missile system',
      url: 'https://www.assembly-station.com/'
    },
    it: {
      title: 'Unity Assets di Riccardo Martella - Assembly Station & Homing Missile',
      description: 'Esplora gli asset Unity di Riccardo Martella. Assembly Station per guide di assemblaggio 3D interattive e Homing Missile per sistemi di missili a ricerca realistica.',
      keywords: 'Asset Unity, Assembly Station, Homing Missile, strumenti Unity, sviluppo giochi, assemblaggio 3D, sistema missili',
      url: 'https://www.assembly-station.com/it',
      locale: 'it_IT'
    }
  },

  hmIntro: {
    en: {
      title: 'Homing Missile - Unity Asset for Realistic Missile Systems',
      description: 'Homing Missile is a Unity asset providing a complete homing missile system with launcher, HUD, and customizable flight parameters. Ready-to-use in any Unity project.',
      keywords: 'Homing Missile, Unity asset, missile system, homing missile Unity, game weapon, launcher system, HUD controller',
      url: 'https://www.assembly-station.com/homing-missile'
    },
    it: {
      title: 'Homing Missile - Asset Unity per Sistemi di Missili Realistici',
      description: 'Homing Missile è un asset Unity che fornisce un sistema completo di missili a ricerca con lanciatore, HUD e parametri di volo personalizzabili. Pronto all\'uso in qualsiasi progetto Unity.',
      keywords: 'Homing Missile, asset Unity, sistema missili, missile a ricerca Unity, arma gioco, sistema lanciatore, controller HUD',
      url: 'https://www.assembly-station.com/it/homing-missile',
      locale: 'it_IT'
    }
  },

  hmPricing: {
    en: {
      title: 'Homing Missile Pricing - Unity Asset for Missile Systems - $19',
      description: 'Homing Missile Unity asset available for $19 one-time purchase. Complete missile system with launcher, HUD, demo scenes, and full documentation.',
      keywords: 'Homing Missile price, Unity asset price, missile system tool, Unity asset store',
      url: 'https://www.assembly-station.com/homing-missile/pricing'
    },
    it: {
      title: 'Prezzi Homing Missile - Asset Unity per Sistemi di Missili - $19',
      description: 'Asset Unity Homing Missile disponibile a $19 acquisto una tantum. Sistema completo di missili con lanciatore, HUD, scene demo e documentazione completa.',
      keywords: 'Prezzo Homing Missile, prezzo asset Unity, strumento sistema missili, Unity asset store',
      url: 'https://www.assembly-station.com/it/homing-missile/pricing',
      locale: 'it_IT'
    }
  },

  hmDocs: {
    en: {
      title: 'Homing Missile Documentation - Complete Guide',
      description: 'Complete documentation for Homing Missile Unity asset. Script reference, setup checklist, integration guide, and technical notes for the homing missile system.',
      keywords: 'Homing Missile documentation, Unity asset docs, missile system guide, script reference, setup guide',
      url: 'https://www.assembly-station.com/homing-missile/docs'
    },
    it: {
      title: 'Documentazione Homing Missile - Guida Completa',
      description: 'Documentazione completa per l\'asset Unity Homing Missile. Riferimento script, checklist configurazione, guida integrazione e note tecniche per il sistema di missili.',
      keywords: 'Documentazione Homing Missile, docs asset Unity, guida sistema missili, riferimento script, guida configurazione',
      url: 'https://www.assembly-station.com/it/homing-missile/docs',
      locale: 'it_IT'
    }
  },

}
