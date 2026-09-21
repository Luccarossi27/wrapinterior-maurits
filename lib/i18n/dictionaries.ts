export type Locale = 'nl' | 'en' | 'es'

export const locales: Locale[] = ['nl', 'en', 'es']
export const defaultLocale: Locale = 'nl'

export const contact = {
  whatsapp: '34675153105',
  phoneDisplay: '+34 675 153 105',
  phoneHref: '+34675153105',
  email: 'info@wrap-interior.com',
  city: 'Jávea',
  region: 'Costa Blanca, Alicante',
  address: "Avinguda del Trenc d'Alba, 6",
  postcode: '03730',
  province: 'Alicante',
} as const

export function whatsappLink(message: string) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`
}

type Dict = {
  meta: { title: string; description: string }
  nav: {
    portfolio: string
    process: string
    pricing: string
    reviews: string
    faq: string
    contact: string
  }
  a11y: {
    skip: string
    openMenu: string
    closeMenu: string
    langLabel: string
    primaryNav: string
  }
  cta: {
    whatsappQuote: string
    sendPhotos: string
    viewProjects: string
    call: string
    prices: string
    getQuote: string
  }
  hero: {
    eyebrow: string
    h1: string
    sub: string
    chips: string[]
    locationLine: string
    beforeLabel: string
    afterLabel: string
    dragHint: string
  }
  proof: {
    note: string
    items: { value: string; label: string }[]
  }
    homepageServices: {
    eyebrow: string
    heading: string
    sub: string
    items: string[]
    link: string
    imageBeforeAlt: string
    imageAfterAlt: string
  }
  gallery: {
    heading: string
    sub: string
    locationLabel: string
    beforeAfter: string
    items: {
      title: string
      location: string
      alt: string
    }[]
  }
  materials: {
  heading: string
  sub: string
  note: string
  sampleCta: string
  categories: {
    name: string
    description: string
    finishes: string[]
  }[]
}
  process: {
    heading: string
    sub: string
    callout: string
    steps: { title: string; desc: string }[]
  }
  pricing: {
    heading: string
    sub: string
    includedTitle: string
    popularLabel: string
    vat: string
    cards: {
      name: string
      scope: string
      price: string
      popular?: boolean
      included: string[]
    }[]
    disclaimer: string
  }
  reviews: {
    heading: string
    sub: string
    googleBadge: string
    projectLabel: string
    items: {
      quote: string
      name: string
      location: string
      projectType: string
      finish: string
      duration: string
    }[]
  }
  faq: {
    heading: string
    sub: string
    items: { q: string; a: string }[]
  }
  finalCta: {
    heading: string
    sub: string
    microcopy: string
    form: {
      name: string
      phone: string
      message: string
      submit: string
      success: string
      or: string
    }
  }
  footer: {
    tagline: string,
    serviceAreaTitle: string
    serviceArea: string
    languagesTitle: string
    contactTitle: string
    legal: string
    rights: string
  }
}

const areas = 'Jávea · Moraira · Calpe · Benissa · Altea · Dénia'

export const dictionaries: Record<Locale, Dict> = {
  nl: {
    meta: {
      title: 'Wrap Interior — Interieurfolie zonder verbouwen | Jávea & Costa Blanca',
      description:
        'Premium interieurwrapping voor keukens, meubels, deuren en badkamermeubels in Jávea, Moraira, Calpe en de Costa Blanca. Strakke afwerking, meestal binnen enkele dagen, zonder hak- of breekwerk.',
    },
    nav: {
      portfolio: 'Portfolio',
      process: 'Werkwijze',
      pricing: 'Prijzen',
      reviews: 'Reviews',
      faq: 'FAQ',
      contact: 'Contact',
    },
    a11y: {
      skip: 'Direct naar inhoud',
      openMenu: 'Menu openen',
      closeMenu: 'Menu sluiten',
      langLabel: 'Taal kiezen',
      primaryNav: 'Hoofdnavigatie',
    },
    cta: {
      whatsappQuote: 'WhatsApp offerte',
      sendPhotos: "Offerte aanvragen via WhatsApp",
      viewProjects: 'Ontdek transformaties',
      call: 'Bellen',
      prices: 'Prijzen',
      getQuote: 'Offerte aanvragen',
    },
    hero: {
      eyebrow: 'Interieurfolie zonder verbouwen — Jávea & Costa Blanca',
      h1: 'FRISSE INTERIEURS. ZONDER DE VERBOUWING.',
      sub: 'Geef je keuken, meubels, deuren of badkamerkasten een compleet nieuwe uitstraling, zonder de kosten, rommel of overlast van een volledige renovatie. Premium interieurfolie is een slim en kosteneffectief alternatief voor vervanging en geeft je bestaande interieur een tweede leven met een verfijnde, duurzame afwerking. \nGevestigd in Jávea, werkzaam aan de Costa Blanca.',
      chips: [
        'Vanaf €1.400 incl. IVA',
        'Honderden kleuren & structuren',
        'Geen hak- of breekwerk',
        "Offerte via foto's",
      ],
      locationLine: areas,
      beforeLabel: 'Voor',
      afterLabel: 'Na',
      dragHint: 'Sleep om te vergelijken',
    },
    proof: {
      note: 'Alle cijfers zijn plaatshouders — vervang met geverifieerde waarden.',
      items: [
        { value: '[X]+', label: 'projecten afgerond' },
        { value: '[X] jaar', label: 'ervaring' },
        { value: '500+', label: 'kleuren & structuren' },
        { value: '[4,9/5]', label: 'Google beoordeling' },
      ],
    },
        homepageServices: {
      eyebrow: 'Wat we wrappen',
      heading: 'MEER DAN ALLEEN KEUKENS.',
      sub: 'Premium interieurfolie kan bestaande oppervlakken in je hele woning transformeren — van keukens en kasten tot deuren en andere interieurelementen, zonder ze te vervangen.',
      items: [
        'Keukens',
        'Kasten',
        'Inloopkasten',
        'Deuren',
        'Badkamers',
        'Meubels',
      ],
      link: 'Ontdek transformaties',
      imageBeforeAlt: 'Kastdeur vóór het wrappen',
      imageAfterAlt: 'Kastdeur getransformeerd met premium interieurfolie',
    },
gallery: {
  heading: 'Voor & na',
  sub: 'Echte transformaties. Sleep de schuifregelaar om het verschil te zien.',
  locationLabel: 'Locatie',
  beforeAfter: 'Voor / na',
  items: [
    {
      title: 'Ben',
      location: 'Costa Blanca',
      alt: 'Interieur vóór en na het wrappen',
    },
    {
      title: 'Bernard',
      location: 'Costa Blanca',
      alt: 'Interieur vóór en na het wrappen',
    },
    {
      title: 'Chantal',
      location: 'Costa Blanca',
      alt: 'Interieur vóór en na het wrappen',
    },
    {
      title: 'Griffioen — Deuren 1',
      location: 'Costa Blanca',
      alt: 'Deuren vóór en na het wrappen',
    },
    {
      title: 'Griffioen — Deuren 3',
      location: 'Costa Blanca',
      alt: 'Deuren vóór en na het wrappen',
    },
    {
      title: 'Griffioen — Keuken',
      location: 'Costa Blanca',
      alt: 'Keuken vóór en na het wrappen',
    },
    {
      title: 'Hans',
      location: 'Costa Blanca',
      alt: 'Interieur vóór en na het wrappen',
    },
    {
      title: 'Minja',
      location: 'Costa Blanca',
      alt: 'Interieur vóór en na het wrappen',
    },
  ],
},
    materials: {
  heading: 'MATERIALEN & TEXTUREN',
  sub: 'Kies uit een uitgebreide collectie interieurfolie met realistische hout-, steen-, metaal- en andere decoratieve afwerkingen.',
  note: 'Materialen & texturen',
  sampleCta: 'Resimdo biedt meer dan 300 decors. We kunnen je helpen de juiste afwerking voor jouw project te kiezen en indien gewenst een fysiek staal te regelen.',
  categories: [
    {
      name: 'Hout',
      description: 'Realistische houtdecors met zichtbare nerven en verschillende natuurlijke en geschilderde uitstraling.',
      finishes: ['Eiken', 'Walnoot', 'Natuurlijk', 'Rustiek', 'Geschilderd hout'],
    },
    {
      name: 'Steen & marmer',
      description: 'Steenachtige oppervlakken met realistische structuren voor een hoogwaardige, eigentijdse uitstraling.',
      finishes: ['Marmer', 'Steen', 'Beton', 'Natuur', 'Pleister'],
    },
    {
      name: 'Effen kleuren',
      description: 'Een brede keuze aan effen kleuren, van zachte neutrale tinten tot diepe en uitgesproken kleuren.',
      finishes: ['Mat', 'Zijdeglans', 'Soft Touch', 'Licht', 'Verzadigd'],
    },
    {
      name: 'Metaal',
      description: 'Metaalachtige decors voor moderne, industriële en verfijnde interieurs.',
      finishes: ['Goud', 'Zilver', 'Brons', 'Geborsteld', 'Metaalachtig'],
    },
    {
      name: 'Textiel',
      description: 'Voelbare textieldecors met een verfijnde, geweven uitstraling.',
      finishes: ['Stof', 'Geweven', 'Tactiel', 'Mat', 'Zijdeglans'],
    },
    {
      name: 'Leer',
      description: 'Leerachtige structuren die meubels en andere interieurelementen een rijkere uitstraling geven.',
      finishes: ['Leer', 'Tactiel', 'Mat', 'Structuur'],
    },
    {
      name: 'Geschilderd hout',
      description: 'Geschilderde houtlooks die de karakteristieke structuur van hout combineren met een kleurafwerking.',
      finishes: ['Painted Wood', 'Painted Nature', 'Zacht', 'Natuurlijk'],
    },
    {
      name: 'Decoratief',
      description: 'Bijzondere patronen en abstracte decors voor opvallende en persoonlijke interieuraccenten.',
      finishes: ['Abstract', 'Patronen', 'Unique Look', 'Decoratief'],
    },
  ],
},
    process: {
      heading: 'Onze werkwijze',
      sub: 'Zes zorgvuldige stappen. De afwerking bepaalt het resultaat.',
      callout: 'De afwerking bepaalt het resultaat.',
      steps: [
        { title: 'Demonteren', desc: 'We nemen de fronten en losse delen zorgvuldig af.' },
        { title: 'Reinigen & ontvetten', desc: 'Elk oppervlak wordt grondig schoongemaakt en ontvet.' },
        { title: 'Wrappen in het atelier', desc: 'Losse delen wrappen we onder ideale omstandigheden.' },
        { title: 'Vaste delen op locatie', desc: 'Vaste kasten en panelen werken we netjes ter plaatse af.' },
        { title: 'Precieze randen & hoeken', desc: 'Randen en hoeken worden strak en duurzaam afgewerkt.' },
        { title: 'Terugplaatsen & controle', desc: 'Alles wordt teruggeplaatst en gecontroleerd op perfectie.' },
      ],
    },
    pricing: {
      heading: 'Transparante prijzen',
      sub: 'Richtprijzen voor keukens, inclusief IVA. Een exacte offerte volgt op basis van foto’s.',
      includedTitle: 'Altijd inbegrepen',
      popularLabel: 'Meest gekozen',
      vat: 'incl. IVA',
      cards: [
        {
          name: 'Compacte keuken',
          scope: 'tot ±10 fronten',
          price: 'vanaf €1.400',
          included: ['Demontage & montage', 'Reinigen & ontvetten', 'Premium folie naar keuze', 'Strakke randafwerking'],
        },
        {
          name: 'Gemiddelde keuken',
          scope: '±11–18 fronten',
          price: '€1.800 – €2.800',
          popular: true,
          included: ['Alles uit Compact', 'Grepen (de)monteren', 'Vaste delen op locatie', 'Eindcontrole & nazorg'],
        },
        {
          name: 'Uitgebreide keuken',
          scope: 'veel fronten, hoge kasten, eiland of vaste delen',
          price: 'vanaf €2.800',
          included: ['Alles uit Gemiddeld', 'Eiland & hoge kasten', 'Complexe vaste delen', 'Projectplanning op maat'],
        },
      ],
      disclaimer: 'Definitieve prijs afhankelijk van aantal fronten, materiaal en vaste delen.',
    },
    reviews: {
      heading: 'Wat klanten zeggen',
      sub: 'Plaatsvervangende reviews — vervang met echte, geverifieerde teksten.',
      googleBadge: '[VERIFY] Google beoordeling',
      projectLabel: 'Project',
      items: [
        {
          quote: '[VERIFY] Placeholder-review. Voeg hier een echte klantbeoordeling toe.',
          name: '[Naam]',
          location: 'Jávea',
          projectType: 'Keuken wrappen',
          finish: 'Mat salie',
          duration: '3 dagen',
        },
        {
          quote: '[VERIFY] Placeholder-review. Voeg hier een echte klantbeoordeling toe.',
          name: '[Naam]',
          location: 'Moraira',
          projectType: 'Meubels wrappen',
          finish: 'Walnoot',
          duration: '1 dag',
        },
        {
          quote: '[VERIFY] Placeholder-review. Voeg hier een echte klantbeoordeling toe.',
          name: '[Naam]',
          location: 'Calpe',
          projectType: 'Deuren & kozijnen',
          finish: 'Mat wit',
          duration: '2 dagen',
        },
      ],
    },
    faq: {
      heading: 'Veelgestelde vragen',
      sub: 'Duurzaamheid aan de Costa Blanca en alles rond het wrappen.',
      items: [
        {
          q: 'Hoe lang gaat folie mee aan de Costa Blanca?',
          a: 'Bij normaal gebruik en goed onderhoud gaan premium interieurfolies vele jaren mee. [VERIFY] Vermeld hier de exacte verwachte levensduur en eventuele garantie.',
        },
        {
          q: 'Is het geschikt voor zon, zout zeeklimaat en vocht?',
          a: 'We kiezen folies die bestand zijn tegen warmte en vocht. Voor plekken met direct fel zonlicht adviseren we de meest UV-stabiele opties.',
        },
        {
          q: 'Kan ik blijven wonen tijdens het wrappen?',
          a: 'Meestal wel. Losse delen wrappen we in ons atelier; vaste delen werken we netjes en stofarm op locatie af.',
        },
        {
          q: 'Welke foliemerken gebruiken jullie?',
          a: '[VERIFY] Vul hier de merken in die u daadwerkelijk gebruikt.',
        },
        {
          q: 'Is het verwijderbaar?',
          a: 'Ja. De folie kan later worden verwijderd; de onderliggende fronten blijven intact bij correcte toepassing.',
        },
        {
          q: 'Hoe onderhoud ik gewrapte fronten?',
          a: 'Reinigen met een zachte doek en een mild, niet-schurend middel is voldoende. Vermijd agressieve schoonmaakmiddelen.',
        },
        {
          q: 'Wat als een front beschadigd is?',
          a: 'Losse delen kunnen doorgaans opnieuw worden gewrapt zonder de hele keuken te vervangen. Neem contact op voor herstel.',
        },
      ],
    },
    finalCta: {
      heading: "Stuur 3–5 foto's via WhatsApp en ontvang een eerste indicatie.",
      sub: 'Vertel ons kort over uw project — wij denken graag mee.',
      microcopy: "Stuur 3–5 duidelijke foto's van de fronten en eventuele vaste delen.",
      form: {
        name: 'Naam',
        phone: 'Telefoon of WhatsApp',
        message: 'Vertel over uw project',
        submit: 'Verstuur aanvraag',
        success: 'Bedankt! We nemen zo snel mogelijk contact op.',
        or: 'of',
      },
    },
    footer: {
      tagline: '',
      serviceAreaTitle: 'Werkgebied',
      serviceArea: `${areas} en de wijdere Costa Blanca / provincie Alicante.`,
      languagesTitle: 'Talen',
      contactTitle: 'Contact',
      legal: 'Privacy · Cookies · Prijzen incl. IVA · [VERIFY] KvK/CIF',
      rights: 'Alle rechten voorbehouden.',
    },
  },

  en: {
    meta: {
      title: 'Wrap Interior — Interior wrapping without renovation | Jávea & Costa Blanca',
      description:
        'Premium interior wrapping for kitchens, furniture, doors and bathroom cabinets in Jávea, Moraira, Calpe and the Costa Blanca. Crisp finish, usually within a few days, with no demolition.',
    },
    nav: {
      portfolio: 'Portfolio',
      process: 'Process',
      pricing: 'Pricing',
      reviews: 'Reviews',
      faq: 'FAQ',
      contact: 'Contact',
    },
    a11y: {
      skip: 'Skip to content',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      langLabel: 'Choose language',
      primaryNav: 'Primary navigation',
    },
    cta: {
      whatsappQuote: 'WhatsApp quote',
      sendPhotos: 'Get quote via WhatsApp',
      viewProjects: 'Explore Transformations',
      call: 'Call',
      prices: 'Pricing',
      getQuote: 'Request a quote',
    },
    hero: {
      eyebrow: 'Interior wrapping without renovation — Jávea & Costa Blanca',
      h1: 'FRESH INTERIORS. WITHOUT THE RENOVATION.',
      sub: 'Give your kitchen, furniture, doors or bathroom cabinets a completely new look, without the cost, mess or disruption of a full renovation. Premium interior film is a smart, cost-effective alternative to replacement, giving your existing interiors a second life with a refined, durable finish. \nBased in Jávea, covering the Costa Blanca.',
      chips: [
        'From €1,400 incl. VAT',
        'Hundreds of colours & textures',
        'No demolition or mess',
        'Quote from photos',
      ],
      locationLine: areas,
      beforeLabel: 'Before',
      afterLabel: 'After',
      dragHint: 'Drag to compare',
    },
    proof: {
      note: 'All figures are placeholders — replace with verified values.',
      items: [
        { value: '[X]+', label: 'projects completed' },
        { value: '[X] yrs', label: 'of experience' },
        { value: '500+', label: 'colours & textures' },
        { value: '[4.9/5]', label: 'Google rating' },
      ],
    },
    homepageServices: {
      eyebrow: 'What we wrap',
      heading: 'MORE THAN JUST KITCHENS.',
      sub: 'Premium interior film can transform existing surfaces throughout your home — giving kitchens, cabinetry, doors and other interiors a completely new look without replacing them.',
      items: [
        'Kitchens',
        'Cabinetry',
        'Wardrobes',
        'Doors',
        'Bathrooms',
        'Furniture',
      ],
      link: 'Explore Transformations',
      imageBeforeAlt: 'Wardrobe door before interior wrapping',
      imageAfterAlt: 'Wardrobe door transformed with premium interior wrapping film',
    },
gallery: {
  heading: 'Before & after',
  sub: 'Real transformations. Drag the slider to see the difference.',
  locationLabel: 'Location',
  beforeAfter: 'Before / after',
  items: [
    {
      title: 'Ben',
      location: 'Costa Blanca',
      alt: 'Interior before and after wrapping',
    },
    {
      title: 'Bernard',
      location: 'Costa Blanca',
      alt: 'Interior before and after wrapping',
    },
    {
      title: 'Chantal',
      location: 'Costa Blanca',
      alt: 'Interior before and after wrapping',
    },
    {
      title: 'Griffioen — Doors 1',
      location: 'Costa Blanca',
      alt: 'Doors before and after wrapping',
    },
    {
      title: 'Griffioen — Doors 3',
      location: 'Costa Blanca',
      alt: 'Doors before and after wrapping',
    },
    {
      title: 'Griffioen — Kitchen',
      location: 'Costa Blanca',
      alt: 'Kitchen before and after wrapping',
    },
    {
      title: 'Hans',
      location: 'Costa Blanca',
      alt: 'Interior before and after wrapping',
    },
    {
      title: 'Minja',
      location: 'Costa Blanca',
      alt: 'Interior before and after wrapping',
    },
  ],
},
    materials: {
  heading: 'MATERIALS & TEXTURES',
  sub: 'Choose from an extensive collection of interior films with realistic wood, stone, metal and decorative finishes.',
  note: 'Materials & textures',
  sampleCta: 'Resimdo offers more than 300 decors. We can help you choose the right finish for your project and arrange a physical sample where needed.',
  categories: [
    {
      name: 'Wood',
      description: 'Realistic wood decors with visible grain and a range of natural and painted appearances.',
      finishes: ['Oak', 'Walnut', 'Natural', 'Rustic', 'Painted wood'],
    },
    {
      name: 'Stone & marble',
      description: 'Stone-inspired surfaces with realistic structures for a refined, contemporary finish.',
      finishes: ['Marble', 'Stone', 'Concrete', 'Natural', 'Plaster'],
    },
    {
      name: 'Single colours',
      description: 'A broad choice of solid colours, from soft neutrals to deeper and more expressive tones.',
      finishes: ['Matte', 'Satin', 'Soft Touch', 'Pale', 'Saturated'],
    },
    {
      name: 'Metal',
      description: 'Metal-inspired decors for modern, industrial and refined interiors.',
      finishes: ['Gold', 'Silver', 'Bronze', 'Brushed', 'Metallic'],
    },
    {
      name: 'Textile',
      description: 'Tactile textile decors with a refined woven and fabric-inspired appearance.',
      finishes: ['Fabric', 'Woven', 'Tactile', 'Matte', 'Satin'],
    },
    {
      name: 'Leather',
      description: 'Leather-inspired textures that give furniture and other interiors a richer appearance.',
      finishes: ['Leather', 'Tactile', 'Matte', 'Textured'],
    },
    {
      name: 'Painted wood',
      description: 'Painted wood effects combining the characteristic structure of wood with a coloured finish.',
      finishes: ['Painted Wood', 'Painted Nature', 'Soft', 'Natural'],
    },
    {
      name: 'Decorative',
      description: 'Distinctive patterns and abstract decors for more expressive and personalised interiors.',
      finishes: ['Abstract', 'Patterns', 'Unique Look', 'Decorative'],
    },
  ],
},
    process: {
      heading: 'Our process',
      sub: 'Six careful steps. The finish defines the result.',
      callout: 'The finish defines the result.',
      steps: [
        { title: 'Dismantle', desc: 'We carefully remove fronts and removable parts.' },
        { title: 'Clean & degrease', desc: 'Every surface is thoroughly cleaned and degreased.' },
        { title: 'Wrap in the workshop', desc: 'Removable parts are wrapped under ideal conditions.' },
        { title: 'Fixed parts on location', desc: 'Fixed cabinets and panels are finished neatly on site.' },
        { title: 'Precise edges & corners', desc: 'Edges and corners are finished crisply and durably.' },
        { title: 'Remount & quality check', desc: 'Everything is remounted and checked for perfection.' },
      ],
    },
    pricing: {
      heading: 'Transparent pricing',
      sub: 'Guide prices for kitchens, VAT included. An exact quote follows based on your photos.',
      includedTitle: 'Always included',
      popularLabel: 'Most chosen',
      vat: 'incl. VAT',
      cards: [
        {
          name: 'Compact kitchen',
          scope: 'up to ±10 fronts',
          price: 'from €1,400',
          included: ['Dismantling & mounting', 'Cleaning & degreasing', 'Premium film of your choice', 'Crisp edge finishing'],
        },
        {
          name: 'Average kitchen',
          scope: '±11–18 fronts',
          price: '€1,800 – €2,800',
          popular: true,
          included: ['Everything in Compact', 'Handles (dis)assembled', 'Fixed parts on location', 'Final check & aftercare'],
        },
        {
          name: 'Extended kitchen',
          scope: 'many fronts, tall units, island or fixed parts',
          price: 'from €2,800',
          included: ['Everything in Average', 'Island & tall units', 'Complex fixed parts', 'Bespoke project planning'],
        },
      ],
      disclaimer: 'Final price depends on the number of fronts, material and fixed parts.',
    },
    reviews: {
      heading: 'What clients say',
      sub: 'Placeholder reviews — replace with real, verified text.',
      googleBadge: '[VERIFY] Google rating',
      projectLabel: 'Project',
      items: [
        {
          quote: '[VERIFY] Placeholder review. Add a real customer review here.',
          name: '[Name]',
          location: 'Jávea',
          projectType: 'Kitchen wrapping',
          finish: 'Matte sage',
          duration: '3 days',
        },
        {
          quote: '[VERIFY] Placeholder review. Add a real customer review here.',
          name: '[Name]',
          location: 'Moraira',
          projectType: 'Furniture wrapping',
          finish: 'Walnut',
          duration: '1 day',
        },
        {
          quote: '[VERIFY] Placeholder review. Add a real customer review here.',
          name: '[Name]',
          location: 'Calpe',
          projectType: 'Doors & frames',
          finish: 'Matte white',
          duration: '2 days',
        },
      ],
    },
    faq: {
      heading: 'Frequently asked questions',
      sub: 'Coastal durability and everything about the wrapping process.',
      items: [
        {
          q: 'How long does the film last on the Costa Blanca?',
          a: 'With normal use and good care, premium interior films last many years. [VERIFY] State the exact expected lifespan and any warranty here.',
        },
        {
          q: 'Is it suitable for sun, salty sea air and moisture?',
          a: 'We select films that resist heat and moisture. For spots in direct strong sunlight we recommend the most UV-stable options.',
        },
        {
          q: 'Can I stay in my home during the wrapping?',
          a: 'Usually yes. Removable parts are wrapped in our workshop; fixed parts are finished neatly and with minimal dust on location.',
        },
        {
          q: 'Which film brands do you use?',
          a: '[VERIFY] List the brands you actually use here.',
        },
        {
          q: 'Is it removable?',
          a: 'Yes. The film can be removed later; the underlying fronts stay intact when applied correctly.',
        },
        {
          q: 'How do I maintain wrapped fronts?',
          a: 'A soft cloth and a mild, non-abrasive cleaner are enough. Avoid aggressive cleaning products.',
        },
        {
          q: 'What if a front gets damaged?',
          a: 'Individual parts can usually be re-wrapped without replacing the whole kitchen. Contact us for repairs.',
        },
      ],
    },
    finalCta: {
      heading: 'Send 3–5 photos via WhatsApp and get a first indication.',
      sub: 'Tell us briefly about your project — we are happy to advise.',
      microcopy: 'Send 3–5 clear photos of the fronts and any fixed parts.',
      form: {
        name: 'Name',
        phone: 'Phone or WhatsApp',
        message: 'Tell us about your project',
        submit: 'Send request',
        success: 'Thank you! We will be in touch as soon as possible.',
        or: 'or',
      },
    },
    footer: {
      tagline: '',
      serviceAreaTitle: 'Service area',
      serviceArea: `${areas} and the wider Costa Blanca / Alicante province.`,
      languagesTitle: 'Languages',
      contactTitle: 'Contact',
      legal: 'Privacy · Cookies · Prices incl. VAT · [VERIFY] Company/CIF',
      rights: 'All rights reserved.',
    },
  },

  es: {
    meta: {
      title: 'Wrap Interior — Vinilado de interiores sin obras | Jávea y Costa Blanca',
      description:
        'Vinilado premium de interiores para cocinas, muebles, puertas y muebles de baño en Jávea, Moraira, Calpe y la Costa Blanca. Acabado impecable, normalmente en pocos días y sin obras.',
    },
    nav: {
      portfolio: 'Portfolio',
      process: 'Proceso',
      pricing: 'Precios',
      reviews: 'Opiniones',
      faq: 'FAQ',
      contact: 'Contacto',
    },
    a11y: {
      skip: 'Ir al contenido',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      langLabel: 'Elegir idioma',
      primaryNav: 'Navegación principal',
    },
    cta: {
      whatsappQuote: 'Presupuesto WhatsApp',
      sendPhotos: 'Pedir presupuesto por WhatsApp',
      viewProjects: 'Descubre transformaciones',
      call: 'Llamar',
      prices: 'Precios',
      getQuote: 'Pedir presupuesto',
    },
    hero: {
      eyebrow: 'Vinilado de interiores sin obras — Jávea y Costa Blanca',
      h1: 'INTERIORES RENOVADOS. SIN OBRAS.',
      sub: 'Dale un aspecto completamente nuevo a tu cocina, muebles, puertas o armarios de baño, sin los costes, el desorden ni las molestias de una reforma completa. El revestimiento con film decorativo premium es una alternativa inteligente y rentable a la sustitución, dando una segunda vida a tus interiores con un acabado elegante y duradero. \nCon base en Jávea, trabajamos en toda la Costa Blanca.',
      chips: [
        'Desde 1.400 € IVA incl.',
        'Cientos de colores y texturas',
        'Sin obras ni escombros',
        'Presupuesto con fotos',
      ],
      locationLine: areas,
      beforeLabel: 'Antes',
      afterLabel: 'Después',
      dragHint: 'Arrastra para comparar',
    },
    proof: {
      note: 'Todas las cifras son marcadores — sustitúyelas por valores verificados.',
      items: [
        { value: '[X]+', label: 'proyectos realizados' },
        { value: '[X] años', label: 'de experiencia' },
        { value: '500+', label: 'colores y texturas' },
        { value: '[4,9/5]', label: 'valoración en Google' },
      ],
    },
    homepageServices: {
      eyebrow: 'Qué vinilamos',
      heading: 'MUCHO MÁS QUE COCINAS.',
      sub: 'El film decorativo premium puede transformar superficies existentes en toda tu vivienda — desde cocinas y armarios hasta puertas y otros elementos del interior, sin necesidad de sustituirlos.',
      items: [
        'Cocinas',
        'Muebles',
        'Armarios',
        'Puertas',
        'Baños',
        'Mobiliario',
      ],
      link: 'Descubre transformaciones',
      imageBeforeAlt: 'Puerta de armario antes del vinilado',
      imageAfterAlt: 'Puerta de armario transformada con film decorativo premium',
    },
gallery: {
  heading: 'Antes y después',
  sub: 'Transformaciones reales. Arrastra el deslizador para ver la diferencia.',
  locationLabel: 'Localidad',
  beforeAfter: 'Antes / después',
  items: [
    {
      title: 'Ben',
      location: 'Costa Blanca',
      alt: 'Interior antes y después del vinilado',
    },
    {
      title: 'Bernard',
      location: 'Costa Blanca',
      alt: 'Interior antes y después del vinilado',
    },
    {
      title: 'Chantal',
      location: 'Costa Blanca',
      alt: 'Interior antes y después del vinilado',
    },
    {
      title: 'Griffioen — Puertas 1',
      location: 'Costa Blanca',
      alt: 'Puertas antes y después del vinilado',
    },
    {
      title: 'Griffioen — Puertas 3',
      location: 'Costa Blanca',
      alt: 'Puertas antes y después del vinilado',
    },
    {
      title: 'Griffioen — Cocina',
      location: 'Costa Blanca',
      alt: 'Cocina antes y después del vinilado',
    },
    {
      title: 'Hans',
      location: 'Costa Blanca',
      alt: 'Interior antes y después del vinilado',
    },
    {
      title: 'Minja',
      location: 'Costa Blanca',
      alt: 'Interior antes y después del vinilado',
    },
  ],
},
    materials: {
  heading: 'MATERIALES Y TEXTURAS',
  sub: 'Elige entre una amplia colección de films decorativos con acabados realistas de madera, piedra, metal y otros efectos decorativos.',
  note: 'Materiales y texturas',
  sampleCta: 'Resimdo ofrece más de 300 decoraciones. Podemos ayudarte a elegir el acabado adecuado para tu proyecto y gestionar una muestra física cuando sea necesario.',
  categories: [
    {
      name: 'Madera',
      description: 'Decoraciones de madera realistas con vetas visibles y diferentes acabados naturales y lacados.',
      finishes: ['Roble', 'Nogal', 'Natural', 'Rústico', 'Madera pintada'],
    },
    {
      name: 'Piedra y mármol',
      description: 'Superficies inspiradas en piedra con estructuras realistas para un acabado contemporáneo y sofisticado.',
      finishes: ['Mármol', 'Piedra', 'Hormigón', 'Natural', 'Yeso'],
    },
    {
      name: 'Colores lisos',
      description: 'Una amplia selección de colores lisos, desde tonos neutros suaves hasta colores más intensos.',
      finishes: ['Mate', 'Satinado', 'Soft Touch', 'Claros', 'Intensos'],
    },
    {
      name: 'Metal',
      description: 'Decoraciones inspiradas en metales para interiores modernos, industriales y sofisticados.',
      finishes: ['Dorado', 'Plateado', 'Bronce', 'Cepillado', 'Metálico'],
    },
    {
      name: 'Textil',
      description: 'Decoraciones textiles táctiles con un aspecto tejido y refinado.',
      finishes: ['Tejido', 'Tramado', 'Táctil', 'Mate', 'Satinado'],
    },
    {
      name: 'Cuero',
      description: 'Texturas inspiradas en el cuero para aportar una apariencia más rica a muebles y otros elementos.',
      finishes: ['Cuero', 'Táctil', 'Mate', 'Texturizado'],
    },
    {
      name: 'Madera pintada',
      description: 'Efectos de madera pintada que combinan la estructura característica de la madera con un acabado de color.',
      finishes: ['Painted Wood', 'Painted Nature', 'Suave', 'Natural'],
    },
    {
      name: 'Decorativo',
      description: 'Patrones distintivos y diseños abstractos para interiores más expresivos y personalizados.',
      finishes: ['Abstracto', 'Patrones', 'Unique Look', 'Decorativo'],
    },
  ],
},
    process: {
      heading: 'Nuestro proceso',
      sub: 'Seis pasos cuidadosos. El acabado define el resultado.',
      callout: 'El acabado define el resultado.',
      steps: [
        { title: 'Desmontar', desc: 'Retiramos con cuidado los frentes y las piezas desmontables.' },
        { title: 'Limpiar y desengrasar', desc: 'Cada superficie se limpia y desengrasa a fondo.' },
        { title: 'Vinilar en el taller', desc: 'Las piezas desmontables se vinilan en condiciones ideales.' },
        { title: 'Partes fijas in situ', desc: 'Los muebles y paneles fijos se acaban con esmero en casa.' },
        { title: 'Bordes y esquinas precisos', desc: 'Bordes y esquinas con un acabado impecable y duradero.' },
        { title: 'Montar y revisar', desc: 'Se vuelve a montar todo y se revisa hasta la perfección.' },
      ],
    },
    pricing: {
      heading: 'Precios transparentes',
      sub: 'Precios orientativos para cocinas, IVA incluido. El presupuesto exacto se calcula con tus fotos.',
      includedTitle: 'Siempre incluido',
      popularLabel: 'Más elegido',
      vat: 'IVA incl.',
      cards: [
        {
          name: 'Cocina compacta',
          scope: 'hasta ±10 frentes',
          price: 'desde 1.400 €',
          included: ['Desmontaje y montaje', 'Limpieza y desengrase', 'Vinilo premium a elegir', 'Bordes con acabado preciso'],
        },
        {
          name: 'Cocina media',
          scope: '±11–18 frentes',
          price: '1.800 € – 2.800 €',
          popular: true,
          included: ['Todo lo de Compacta', 'Tiradores (des)montados', 'Partes fijas in situ', 'Revisión final y postventa'],
        },
        {
          name: 'Cocina amplia',
          scope: 'muchos frentes, columnas, isla o partes fijas',
          price: 'desde 2.800 €',
          included: ['Todo lo de Media', 'Isla y columnas', 'Partes fijas complejas', 'Planificación a medida'],
        },
      ],
      disclaimer: 'El precio final depende del número de frentes, el material y las partes fijas.',
    },
    reviews: {
      heading: 'Lo que dicen los clientes',
      sub: 'Opiniones de ejemplo — sustitúyelas por textos reales y verificados.',
      googleBadge: '[VERIFY] Valoración en Google',
      projectLabel: 'Proyecto',
      items: [
        {
          quote: '[VERIFY] Opinión de ejemplo. Añade aquí una reseña real de cliente.',
          name: '[Nombre]',
          location: 'Jávea',
          projectType: 'Vinilado de cocina',
          finish: 'Salvia mate',
          duration: '3 días',
        },
        {
          quote: '[VERIFY] Opinión de ejemplo. Añade aquí una reseña real de cliente.',
          name: '[Nombre]',
          location: 'Moraira',
          projectType: 'Vinilado de muebles',
          finish: 'Nogal',
          duration: '1 día',
        },
        {
          quote: '[VERIFY] Opinión de ejemplo. Añade aquí una reseña real de cliente.',
          name: '[Nombre]',
          location: 'Calpe',
          projectType: 'Puertas y marcos',
          finish: 'Blanco mate',
          duration: '2 días',
        },
      ],
    },
    faq: {
      heading: 'Preguntas frecuentes',
      sub: 'Durabilidad en la costa y todo sobre el proceso de vinilado.',
      items: [
        {
          q: '¿Cuánto dura el vinilo en la Costa Blanca?',
          a: 'Con un uso normal y buen cuidado, los vinilos premium de interior duran muchos años. [VERIFY] Indica aquí la vida útil exacta y la garantía.',
        },
        {
          q: '¿Es apto para sol, aire marino salino y humedad?',
          a: 'Elegimos vinilos resistentes al calor y la humedad. Para zonas con sol directo intenso recomendamos las opciones más estables a los rayos UV.',
        },
        {
          q: '¿Puedo seguir viviendo en casa durante el vinilado?',
          a: 'Normalmente sí. Las piezas desmontables se vinilan en el taller; las fijas se acaban con esmero y poco polvo en casa.',
        },
        {
          q: '¿Qué marcas de vinilo usáis?',
          a: '[VERIFY] Indica aquí las marcas que utilizas realmente.',
        },
        {
          q: '¿Se puede quitar?',
          a: 'Sí. El vinilo se puede retirar más adelante; los frentes originales quedan intactos si se aplica correctamente.',
        },
        {
          q: '¿Cómo mantengo los frentes vinilados?',
          a: 'Basta con un paño suave y un limpiador suave no abrasivo. Evita productos de limpieza agresivos.',
        },
        {
          q: '¿Y si se daña un frente?',
          a: 'Las piezas sueltas suelen poder revinilarse sin sustituir toda la cocina. Contáctanos para repararlo.',
        },
      ],
    },
    finalCta: {
      heading: 'Envía 3–5 fotos por WhatsApp y recibe una primera orientación.',
      sub: 'Cuéntanos brevemente tu proyecto — te asesoramos encantados.',
      microcopy: 'Envía 3–5 fotos claras de los frentes y de las partes fijas.',
      form: {
        name: 'Nombre',
        phone: 'Teléfono o WhatsApp',
        message: 'Cuéntanos tu proyecto',
        submit: 'Enviar solicitud',
        success: '¡Gracias! Te contactaremos lo antes posible.',
        or: 'o',
      },
    },
    footer: {
  tagline: '',
  serviceAreaTitle: 'Zona de servicio',
  serviceArea: `${areas} y toda la Costa Blanca / provincia de Alicante.`,
  languagesTitle: 'Idiomas',
  contactTitle: 'Contacto',
  legal: 'Privacidad · Cookies · Precios IVA incl. · [VERIFY] Empresa/CIF',
  rights: 'Todos los derechos reservados.',
},
  },
}
