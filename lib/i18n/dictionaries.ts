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
  services: {
    heading: string
    sub: string
    cards: { title: string; benefit: string; bestFor: string; finishes: string }[]
    cardCta: string
    bestForLabel: string
    finishesLabel: string
  }
  gallery: {
    heading: string
    sub: string
    filters: { key: string; label: string }[]
    locationLabel: string
    scopeLabel: string
    finishLabel: string
    durationLabel: string
    beforeAfter: string
    items: {
      cat: string
      title: string
      location: string
      scope: string
      finish: string
      duration: string
      alt: string
    }[]
  }
  materials: {
    heading: string
    sub: string
    note: string
    finishLabel: string
    swatches: { name: string; finish: string }[]
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
      viewProjects: 'Bekijk voor/na projecten',
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
    services: {
      heading: 'Wat we wrappen',
      sub: 'Eén techniek, een compleet vernieuwd interieur — precies afgewerkt en snel geplaatst.',
      cardCta: 'Vraag naar deze service',
      bestForLabel: 'Ideaal voor',
      finishesLabel: 'Afwerkingen',
      cards: [
        {
          title: 'Keuken wrappen',
          benefit: 'Een compleet nieuwe keukenlook zonder de keuken te vervangen.',
          bestFor: 'Verouderde maar goede keukens',
          finishes: 'Mat, super-mat, hout, steen',
        },
        {
          title: 'Meubels wrappen',
          benefit: 'Geef dressoirs, tafels en kasten een tweede leven.',
          bestFor: 'Vaste en losse meubels',
          finishes: 'Eiken, walnoot, effen kleuren',
        },
        {
          title: 'Deuren & kozijnen',
          benefit: 'Egale, strakke deuren die passen bij het interieur.',
          bestFor: 'Binnendeuren en kozijnen',
          finishes: 'Mat wit, warm grijs, hout',
        },
        {
          title: 'Badkamermeubels',
          benefit: 'Vochtbestendige folie voor een frisse badkamer.',
          bestFor: 'Wastafelmeubels en kasten',
          finishes: 'Mat, steen, effen kleuren',
        },
        {
          title: 'Kasten & wardrobes',
          benefit: 'Inbouwkasten die weer helemaal van nu zijn.',
          bestFor: 'Inbouw- en schuifkasten',
          finishes: 'Hout, effen, textiel-look',
        },
        {
          title: 'Hotels & verhuur',
          benefit: 'Snelle interieur-refresh met minimale sluitingstijd.',
          bestFor: 'Boutique hotels & vakantieverhuur',
          finishes: 'Op maat, duurzaam',
        },
      ],
    },
    gallery: {
      heading: 'Voor & na',
      sub: 'Echte transformaties, strak afgewerkt. Filter op type, materiaal of locatie.',
      locationLabel: 'Locatie',
      scopeLabel: 'Omvang',
      finishLabel: 'Afwerking',
      durationLabel: 'Duur',
      beforeAfter: 'Voor / na',
      filters: [
        { key: 'all', label: 'Alles' },
        { key: 'kitchen', label: 'Keuken' },
        { key: 'furniture', label: 'Meubels' },
        { key: 'doors', label: 'Deuren' },
        { key: 'bathroom', label: 'Badkamer' },
        { key: 'wood', label: 'Hout' },
        { key: 'stone', label: 'Steen' },
        { key: 'color', label: 'Kleur' },
      ],
      items: [
        {
          cat: 'kitchen',
          title: 'Keuken in mat salie',
          location: 'Jávea',
          scope: '14 fronten',
          finish: 'Super-mat saliegroen',
          duration: '3 dagen',
          alt: 'Keuken met matte saliegroene gewrapte fronten in een lichte villa in Jávea',
        },
        {
          cat: 'furniture',
          title: 'Dressoir in walnoot',
          location: 'Moraira',
          scope: 'Losse kast',
          finish: 'Walnoot houtlook',
          duration: '1 dag',
          alt: 'Dressoir gewrapt in warme walnoot houtfolie in een lichte woonkamer',
        },
        {
          cat: 'doors',
          title: 'Binnendeuren mat wit',
          location: 'Calpe',
          scope: '6 deuren + kozijnen',
          finish: 'Mat gebroken wit',
          duration: '2 dagen',
          alt: 'Binnendeur en kozijn gewrapt in mat gebroken wit in een lichte hal',
        },
        {
          cat: 'bathroom',
          title: 'Badkamermeubel salie',
          location: 'Benissa',
          scope: 'Wastafelmeubel',
          finish: 'Mat saliegroen',
          duration: '1 dag',
          alt: 'Badkamermeubel gewrapt in matte saliegroene folie met stenen blad',
        },
        {
          cat: 'furniture',
          title: 'Inbouwkast eiken',
          location: 'Altea',
          scope: 'Schuifkast',
          finish: 'Eiken houtlook',
          duration: '2 dagen',
          alt: 'Inbouwkast met schuifdeuren gewrapt in warme eiken houtfolie',
        },
        {
          cat: 'kitchen',
          title: 'Keukeneiland beton-look',
          location: 'Dénia',
          scope: 'Eiland + fronten',
          finish: 'Mat beton-look',
          duration: '3 dagen',
          alt: 'Keukeneiland gewrapt in matte beton-look folie in een open villa-keuken',
        },
      ],
    },
    materials: {
      heading: 'Materialen & structuren',
      sub: 'Honderden kleuren en structuren — van effen mat tot overtuigend hout en steen.',
      note: 'Onze folies zijn gekozen op duurzaamheid aan de kust: bestand tegen zon, warmte en vocht. Vraag naar stalen voor uw project.',
      finishLabel: 'Afwerking',
      swatches: [
        { name: 'Salie groen', finish: 'Super-mat' },
        { name: 'Pijnboom groen', finish: 'Mat' },
        { name: 'Gebroken wit', finish: 'Mat' },
        { name: 'Warm eiken', finish: 'Houtstructuur' },
        { name: 'Walnoot', finish: 'Houtstructuur' },
        { name: 'Natuursteen', finish: 'Steenstructuur' },
        { name: 'Beton', finish: 'Mineraal mat' },
        { name: 'Linnen', finish: 'Textiel-look' },
        { name: 'Leder', finish: 'Softtouch' },
        { name: 'Antraciet', finish: 'Super-mat' },
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
      viewProjects: 'View before/after projects',
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
    services: {
      heading: 'What we wrap',
      sub: 'One technique, a completely renewed interior — precisely finished and quickly installed.',
      cardCta: 'Ask about this service',
      bestForLabel: 'Best for',
      finishesLabel: 'Finishes',
      cards: [
        {
          title: 'Kitchen wrapping',
          benefit: 'A completely new kitchen look without replacing the kitchen.',
          bestFor: 'Dated but sound kitchens',
          finishes: 'Matte, super-matte, wood, stone',
        },
        {
          title: 'Furniture wrapping',
          benefit: 'Give sideboards, tables and cabinets a second life.',
          bestFor: 'Built-in and free-standing furniture',
          finishes: 'Oak, walnut, solid colours',
        },
        {
          title: 'Doors & frames',
          benefit: 'Even, crisp doors that match your interior.',
          bestFor: 'Interior doors and frames',
          finishes: 'Matte white, warm grey, wood',
        },
        {
          title: 'Bathroom cabinets',
          benefit: 'Moisture-resistant film for a fresh bathroom.',
          bestFor: 'Vanity units and cabinets',
          finishes: 'Matte, stone, solid colours',
        },
        {
          title: 'Wardrobes & closets',
          benefit: 'Built-in wardrobes brought fully up to date.',
          bestFor: 'Built-in and sliding wardrobes',
          finishes: 'Wood, solid, textile look',
        },
        {
          title: 'Hotels & rentals',
          benefit: 'A fast interior refresh with minimal downtime.',
          bestFor: 'Boutique hotels & holiday rentals',
          finishes: 'Bespoke, durable',
        },
      ],
    },
    gallery: {
      heading: 'Before & after',
      sub: 'Real transformations, crisply finished. Filter by type, material or location.',
      locationLabel: 'Location',
      scopeLabel: 'Scope',
      finishLabel: 'Finish',
      durationLabel: 'Duration',
      beforeAfter: 'Before / after',
      filters: [
        { key: 'all', label: 'All' },
        { key: 'kitchen', label: 'Kitchen' },
        { key: 'furniture', label: 'Furniture' },
        { key: 'doors', label: 'Doors' },
        { key: 'bathroom', label: 'Bathroom' },
        { key: 'wood', label: 'Wood' },
        { key: 'stone', label: 'Stone' },
        { key: 'color', label: 'Colour' },
      ],
      items: [
        {
          cat: 'kitchen',
          title: 'Kitchen in matte sage',
          location: 'Jávea',
          scope: '14 fronts',
          finish: 'Super-matte sage green',
          duration: '3 days',
          alt: 'Kitchen with matte sage-green wrapped fronts in a bright Jávea villa',
        },
        {
          cat: 'furniture',
          title: 'Walnut sideboard',
          location: 'Moraira',
          scope: 'Free-standing cabinet',
          finish: 'Walnut wood look',
          duration: '1 day',
          alt: 'Sideboard wrapped in warm walnut wood-look film in a bright living room',
        },
        {
          cat: 'doors',
          title: 'Matte white interior doors',
          location: 'Calpe',
          scope: '6 doors + frames',
          finish: 'Matte off-white',
          duration: '2 days',
          alt: 'Interior door and frame wrapped in matte off-white in a bright hallway',
        },
        {
          cat: 'bathroom',
          title: 'Sage bathroom vanity',
          location: 'Benissa',
          scope: 'Vanity unit',
          finish: 'Matte sage green',
          duration: '1 day',
          alt: 'Bathroom vanity wrapped in matte sage-green film with a stone top',
        },
        {
          cat: 'furniture',
          title: 'Oak built-in wardrobe',
          location: 'Altea',
          scope: 'Sliding wardrobe',
          finish: 'Oak wood look',
          duration: '2 days',
          alt: 'Built-in wardrobe with sliding doors wrapped in warm oak wood-look film',
        },
        {
          cat: 'kitchen',
          title: 'Concrete-look island',
          location: 'Dénia',
          scope: 'Island + fronts',
          finish: 'Matte concrete look',
          duration: '3 days',
          alt: 'Kitchen island wrapped in matte concrete-look film in an open villa kitchen',
        },
      ],
    },
    materials: {
      heading: 'Materials & textures',
      sub: 'Hundreds of colours and textures — from solid matte to convincing wood and stone.',
      note: 'Our films are chosen for coastal durability: resistant to sun, heat and moisture. Ask for samples for your project.',
      finishLabel: 'Finish',
      swatches: [
        { name: 'Sage green', finish: 'Super-matte' },
        { name: 'Pine green', finish: 'Matte' },
        { name: 'Off-white', finish: 'Matte' },
        { name: 'Warm oak', finish: 'Wood texture' },
        { name: 'Walnut', finish: 'Wood texture' },
        { name: 'Natural stone', finish: 'Stone texture' },
        { name: 'Concrete', finish: 'Mineral matte' },
        { name: 'Linen', finish: 'Textile look' },
        { name: 'Leather', finish: 'Soft touch' },
        { name: 'Anthracite', finish: 'Super-matte' },
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
      viewProjects: 'Ver proyectos antes/después',
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
    services: {
      heading: 'Qué viniladamos',
      sub: 'Una técnica, un interior totalmente renovado — con acabado preciso e instalación rápida.',
      cardCta: 'Consultar este servicio',
      bestForLabel: 'Ideal para',
      finishesLabel: 'Acabados',
      cards: [
        {
          title: 'Vinilado de cocinas',
          benefit: 'Una cocina totalmente nueva sin sustituirla.',
          bestFor: 'Cocinas anticuadas pero en buen estado',
          finishes: 'Mate, súper mate, madera, piedra',
        },
        {
          title: 'Vinilado de muebles',
          benefit: 'Da una segunda vida a aparadores, mesas y armarios.',
          bestFor: 'Muebles fijos y exentos',
          finishes: 'Roble, nogal, colores lisos',
        },
        {
          title: 'Puertas y marcos',
          benefit: 'Puertas lisas y precisas a juego con el interior.',
          bestFor: 'Puertas interiores y marcos',
          finishes: 'Blanco mate, gris cálido, madera',
        },
        {
          title: 'Muebles de baño',
          benefit: 'Vinilo resistente a la humedad para un baño renovado.',
          bestFor: 'Muebles de lavabo y armarios',
          finishes: 'Mate, piedra, colores lisos',
        },
        {
          title: 'Armarios y vestidores',
          benefit: 'Armarios empotrados totalmente actualizados.',
          bestFor: 'Armarios empotrados y correderos',
          finishes: 'Madera, liso, efecto textil',
        },
        {
          title: 'Hoteles y alquiler',
          benefit: 'Renovación rápida del interior con mínimo cierre.',
          bestFor: 'Hoteles boutique y alquiler vacacional',
          finishes: 'A medida, duradero',
        },
      ],
    },
    gallery: {
      heading: 'Antes y después',
      sub: 'Transformaciones reales, con acabado impecable. Filtra por tipo, material o localidad.',
      locationLabel: 'Localidad',
      scopeLabel: 'Alcance',
      finishLabel: 'Acabado',
      durationLabel: 'Duración',
      beforeAfter: 'Antes / después',
      filters: [
        { key: 'all', label: 'Todo' },
        { key: 'kitchen', label: 'Cocina' },
        { key: 'furniture', label: 'Muebles' },
        { key: 'doors', label: 'Puertas' },
        { key: 'bathroom', label: 'Baño' },
        { key: 'wood', label: 'Madera' },
        { key: 'stone', label: 'Piedra' },
        { key: 'color', label: 'Color' },
      ],
      items: [
        {
          cat: 'kitchen',
          title: 'Cocina en salvia mate',
          location: 'Jávea',
          scope: '14 frentes',
          finish: 'Verde salvia súper mate',
          duration: '3 días',
          alt: 'Cocina con frentes vinilados en verde salvia mate en una villa luminosa de Jávea',
        },
        {
          cat: 'furniture',
          title: 'Aparador en nogal',
          location: 'Moraira',
          scope: 'Mueble exento',
          finish: 'Efecto nogal',
          duration: '1 día',
          alt: 'Aparador vinilado en efecto nogal cálido en un salón luminoso',
        },
        {
          cat: 'doors',
          title: 'Puertas interiores blanco mate',
          location: 'Calpe',
          scope: '6 puertas + marcos',
          finish: 'Blanco roto mate',
          duration: '2 días',
          alt: 'Puerta interior y marco vinilados en blanco roto mate en un recibidor luminoso',
        },
        {
          cat: 'bathroom',
          title: 'Mueble de baño salvia',
          location: 'Benissa',
          scope: 'Mueble de lavabo',
          finish: 'Verde salvia mate',
          duration: '1 día',
          alt: 'Mueble de baño vinilado en verde salvia mate con encimera de piedra',
        },
        {
          cat: 'furniture',
          title: 'Armario empotrado roble',
          location: 'Altea',
          scope: 'Armario corredero',
          finish: 'Efecto roble',
          duration: '2 días',
          alt: 'Armario empotrado con puertas correderas vinilado en efecto roble cálido',
        },
        {
          cat: 'kitchen',
          title: 'Isla efecto hormigón',
          location: 'Dénia',
          scope: 'Isla + frentes',
          finish: 'Efecto hormigón mate',
          duration: '3 días',
          alt: 'Isla de cocina vinilada en efecto hormigón mate en una cocina abierta de villa',
        },
      ],
    },
    materials: {
      heading: 'Materiales y texturas',
      sub: 'Cientos de colores y texturas — del liso mate a maderas y piedras muy realistas.',
      note: 'Elegimos vinilos por su durabilidad en la costa: resistentes al sol, el calor y la humedad. Pide muestras para tu proyecto.',
      finishLabel: 'Acabado',
      swatches: [
        { name: 'Verde salvia', finish: 'Súper mate' },
        { name: 'Verde pino', finish: 'Mate' },
        { name: 'Blanco roto', finish: 'Mate' },
        { name: 'Roble cálido', finish: 'Textura madera' },
        { name: 'Nogal', finish: 'Textura madera' },
        { name: 'Piedra natural', finish: 'Textura piedra' },
        { name: 'Hormigón', finish: 'Mineral mate' },
        { name: 'Lino', finish: 'Efecto textil' },
        { name: 'Cuero', finish: 'Tacto suave' },
        { name: 'Antracita', finish: 'Súper mate' },
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
      serviceArea: `${areas} y toda la Costa Blanca / provincia de Alicante.`,
      languagesTitle: 'Idiomas',
      contactTitle: 'Contacto',
      legal: 'Privacidad · Cookies · Precios IVA incl. · [VERIFY] Empresa/CIF',
      rights: 'Todos los derechos reservados.',
    },
  },
}
