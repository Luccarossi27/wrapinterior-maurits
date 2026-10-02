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
    materials: string
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
  eyebrow: string
  heading: string
  sub: string
  selectionNote: string
  search: string
  clearSearch: string
  filter: string
  category: string
  colour: string
  clear: string
  results: string
  noResults: string
  loadMore: string
  disclaimer: string
  close: string
  useMaterial: string
  ctaHeading: string
  ctaSub: string
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
  popularLabel: string
  vat: string
  cards: {
    name: string
    scope: string
    price: string
    popular?: boolean
  }[]
  disclaimer: string
  otherTitle: string
  otherSub: string
  quoteMessage: string
}
  reviews: {
  eyebrow: string
  heading: string
  sub: string
  googleBadge: string
  googleReviews: string
  showTranslation: string
  showOriginal: string
  readButton: string
  previousLabel: string
  nextLabel: string
  goToReview: string
  items: {
    quote: string
    translatedQuote?: string
    fullQuote?: string
    fullTranslatedQuote?: string
    name: string
    rating: number
  }[]
}
  faq: {
  heading: string
  sub: string
  contactText: string
  contactLink: string
  items: {
    q: string
    a: string
    link?: {
      label: string
      href: string
    }
  }[]
}
  contactPage: {
  eyebrow: string
  heading: string
  sub: string
  button: string

  whatsapp: {
    title: string
    text: string
    button: string
  }

  phone: {
    title: string
    text: string
    button: string
  }

  email: {
    title: string
    text: string
    button: string
  }

  whatsappMessage: string

  location: {
    eyebrow: string
    heading: string
    sub: string
    addressLabel: string
    directions: string
    mapTitle: string
  }

  bottomCta: {
    heading: string
    sub: string
    button: string
  }
},
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
      materials: 'Materialen',
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
        { value: '30 jaar', label: 'ervaring' },
        { value: '500+', label: 'kleuren & structuren' },
        { value: '4,9/5', label: 'Google beoordeling' },
      ],
    },
        homepageServices: {
      eyebrow: 'Wat we wrappen',
      heading: 'MEER DAN ALLEEN KEUKENS.',
      sub: 'Hoogwaardige interieurfolie kan oppervlakken in je hele woning transformeren en keukens, kasten, deuren en andere interieurelementen een compleet nieuwe uitstraling geven, zonder dat ze vervangen hoeven te worden.',
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
  eyebrow: 'Materialen',
  heading: 'KIES JE MATERIAAL.',
  sub: 'Ontdek onze selectie van kleuren, houtstructuren, steenlooks, metalen en andere materialen voor jouw interieur.',
  selectionNote:
  'Dit is slechts een selectie van onze beschikbare afwerkingen. We hebben meer dan 500 om uit te kiezen. Zie je niet wat je zoekt? Vraag het ons gerust.',
  search: 'Zoek op materiaal, kleur of code...',
  clearSearch: 'Zoekopdracht wissen',
  filter: 'Filters',
  colour: 'Kleur',
  clear: 'Wis filters',
  results: 'resultaten',
  noResults: 'Geen materialen gevonden.',
  loadMore: 'Meer laden',
  disclaimer:
    'Kleuren en structuren kunnen op het scherm iets afwijken van het echte materiaal. Fysieke samples zijn op aanvraag beschikbaar.',
  close: 'Sluiten',
  useMaterial: 'Gebruik dit materiaal voor mijn offerte',
  category: 'Categorie', 
  ctaHeading: 'EEN MATERIAAL GEVONDEN DAT JE MOOI VINDT?',
  ctaSub:
    'Stuur ons een foto van je interieur en vertel ons welk materiaal je aanspreekt. We helpen je het juiste materiaal voor jouw project te kiezen.',
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
  sub: 'Richtprijzen voor het wrappen van keukens, inclusief IVA. Voor deuren en andere interieuroppervlakken kunt u contact met ons opnemen voor een offerte op maat.',
  popularLabel: 'Meest gekozen',
  vat: 'incl. IVA',
  cards: [
    {
      name: 'Compacte keuken',
      scope: 'tot ±10 fronten',
      price: 'vanaf €1.400',
    },
    {
      name: 'Gemiddelde keuken',
      scope: '±11–18 fronten',
      price: '€1.800 – €2.800',
      popular: true,
    },
    {
      name: 'Grote keuken',
      scope: 'veel fronten, hoge kasten, eiland of vaste delen',
      price: 'vanaf €2.800',
    },
  ],
    disclaimer: 'De definitieve prijs is afhankelijk van het aantal fronten, het materiaal en de vaste delen.',
  otherTitle: 'Andere interieurs',
  otherSub: 'Deuren, kasten, meubels en andere interieuroppervlakken zijn beschikbaar op offertebasis.',
  quoteMessage: 'Hoi Maurits, ik wil graag een offerte aanvragen voor een project.',
},
    reviews: {
  eyebrow: 'Testimonials',
heading: 'WAT ONZE KLANTEN ZEGGEN',
sub: 'Ontdek wat onze klanten zeggen over hun ervaring met Maurits.',
googleBadge: 'Google Reviews',
googleReviews: 'Google Reviews',
  showOriginal: 'Toon origineel',
  showTranslation: 'Toon vertaling',
  readButton: 'Bekijk onze Google reviews',
  previousLabel: 'Vorige review',
  nextLabel: 'Volgende review',
  goToReview: 'Ga naar review',

  items: [
    {
      quote:
        'He tenido muy buena experiencia con Maurits. Le pedimos que nos buscara y pusiera cortinas de lamelas y enrollables en varias habitaciones y el resultado fue perfecto. A raíz de eso, le pedimos que también nos pidiese e instalase una persiana para una puerta y nos consiguió un modelo que además tiene mando a distancia. Estamos muy contentos con la calidad de su trabajo, la prioridad y rapidez que pone en sus proyectos y, cómo no, el precio comedido. Desde ese momento hemos decidido que es nuestro punto de contacto para nuestras reformas y actualizaciones y ya van varias. Espero que en el futuro pueda mantener la dedicación que ahora mismo tiene.',
      translatedQuote:
        'Ik heb een zeer goede ervaring gehad met Maurits. We vroegen hem om lamellen- en rolgordijnen voor verschillende kamers te zoeken en te plaatsen en het resultaat was perfect. Daarna vroegen we hem ook om een rolluik voor een deur te zoeken en te installeren, en hij vond een model dat bovendien met een afstandsbediening werkt. We zijn erg tevreden over de kwaliteit van zijn werk, de prioriteit en snelheid waarmee hij zijn projecten uitvoert en natuurlijk de redelijke prijs. Sindsdien hebben we besloten dat hij ons aanspreekpunt is voor onze verbouwingen en updates, en dat zijn er inmiddels meerdere. Ik hoop dat hij deze toewijding in de toekomst kan behouden.',
      name: 'Jose Lopez',
      rating: 5,
    },
    {
      quote:
        'Maurits is een echte vakman, werkt netjes en komt de afspraken na. Zet vaak net een stap extra om tot een mooi resultaat te komen, dankjewel Maurits.',
      name: 'Jurgen Brekelmans',
      rating: 5,
    },
    {
      quote:
        'Gezellige vakman, werkt gestaag en is optijd. Denkt mee en makkelijk communiceren. Dank je wel Maurits!',
      name: 'Angela de Groot',
      rating: 5,
    },
    {
      quote:
        'Blij dat we voor het wrappen van onze keuken hebben gekozen ipv een nieuwe installeren. Top resultaat en op Maurits kun je vertrouwen.',
      name: 'Lotte Mulder',
      rating: 5,
    },
    {
      quote:
        'Maurits is een vakman, werkt heel nauwkeurig. Helpt mee om je ideeën te realiseren. In ons geval, ziet de keuken er weer als nieuw uit. Bedankt, Maurits!',
      name: 'Andor Verbakel',
      rating: 4,
    },
  ],
},
    faq: {
  heading: 'Veelgestelde vragen',
  sub: 'Alles wat je wilt weten over interieurfolie, het resultaat en onze werkwijze.',
  contactText: 'Heb je nog een andere vraag? Neem gerust contact met ons op.',
  contactLink: 'Neem contact op',
  items: [
    {
      q: 'Hoe lang gaat interieurfolie mee?',
      a: 'Gemiddeld 7 tot 10 jaar, afhankelijk van gebruik, onderhoud en de omstandigheden waarin de folie wordt toegepast.',
    },
    {
      q: 'Is interieurfolie bestand tegen hitte en vocht?',
      a: 'Ja. Onze interieurfolie is hittebestendig en vochtwerend en is daarom uitstekend geschikt voor keukens en badkamers. De folie is echter niet bestand tegen extreme directe hitte, zoals een hete pan die rechtstreeks op het oppervlak wordt geplaatst.',
    },
    {
      q: 'Kan de folie later weer worden verwijderd?',
      a: 'In veel gevallen wel. Bij het verwijderen kunnen echter lichte sporen achterblijven, afhankelijk van het materiaal, de afwerking en de staat van de oorspronkelijke ondergrond. We beoordelen iedere ondergrond vooraf om het beste resultaat te garanderen.',
    },
    {
      q: 'Wat kost interieur wrappen?',
      a: 'Elke keuken en elk interieur is anders. Daarom werken we met een offerte op maat, gebaseerd op onder andere het aantal en formaat van de fronten, vaste delen, de staat van de ondergrond en de gekozen folie.',
      link: {
        label: 'Bekijk onze prijzen',
        href: '/pricing',
      },
    },
    {
      q: 'Moet ik mijn meubels of keuken zelf demonteren?',
      a: 'Nee. Waar nodig nemen wij de demontage voor onze rekening. Losse en eenvoudig te vervoeren delen nemen we zorgvuldig mee naar onze werkplaats, waar ze worden voorbereid en gewrapt. Vaste delen worden op locatie afgewerkt.',
    },
    {
      q: 'Kunnen paneeldeuren vlak worden gemaakt met folie?',
      a: 'Nee. Wrappen verandert de kleur en afwerking, maar niet de vorm van het oorspronkelijke oppervlak. Paneeldeuren, rondingen en andere vormen blijven intact; de folie wordt zorgvuldig om de bestaande vorm heen aangebracht.',
    },
  ],
},
    contactPage: {
  eyebrow: 'CONTACT',
  heading: 'Laten we je project bespreken.',
  sub: 'Heb je een vraag, wil je een eerste prijsindicatie of wil je weten wat er mogelijk is? Neem rechtstreeks contact op met Maurits.',
  button: 'Neem contact op',

  whatsapp: {
    title: 'WhatsApp',
    text: 'De snelste manier om te beginnen. Stuur een paar foto’s van je interieur en vertel kort wat je wilt laten wrappen.',
    button: 'Stuur een WhatsApp',
  },

  phone: {
    title: 'Bel ons',
    text: 'Liever even overleggen? Bel Maurits rechtstreeks.',
    button: 'Bel ons',
  },

  email: {
    title: 'E-mail',
    text: 'Voor algemene vragen of meer informatie kun je ons ook mailen.',
    button: 'Stuur een e-mail',
  },

  whatsappMessage:
    'Hoi Maurits, Ik wil graag een offerte aanvragen. Ik heb een aantal foto’s van mijn project bijgevoegd.',

  location: {
    eyebrow: 'ONZE WERKPLAATS',
    heading: 'Bezoek ons in Jávea.',
    sub: 'Onze werkplaats bevindt zich in Jávea, aan de Costa Blanca.',
    addressLabel: 'Adres',
    directions: 'Plan je route',
    mapTitle: 'Wrap Interior workshop in Jávea',
  },

  bottomCta: {
    heading: 'Klaar om je interieur te transformeren?',
    sub: 'Stuur ons een paar foto’s via WhatsApp en vertel ons wat je in gedachten hebt.',
    button: 'Stuur foto’s via WhatsApp',
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
      materials: 'Materials',
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
        { value: '30 yrs', label: 'of experience' },
        { value: '500+', label: 'colours & textures' },
        { value: '4.9/5', label: 'Google rating' },
      ],
    },
    homepageServices: {
      eyebrow: 'What we wrap',
      heading: 'MORE THAN JUST KITCHENS.',
      sub: 'Premium interior film can transform surfaces throughout your home, giving kitchens, cabinetry, doors and other interiors a completely new look without the need for replacement..',
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
  eyebrow: 'Materials',
  heading: 'CHOOSE YOUR MATERIAL.',
  sub: 'Explore our selection of colours, woodgrains, stone effects, metals and other materials for your interior.',
  selectionNote:
  "This is just a selection of our available finishes. We have over 500 to choose from. Don't see what you're looking for? Just ask.",
  search: 'Search materials, colours or codes...',
  clearSearch: 'Clear search',
  filter: 'Filters',
  colour: 'Colour',
  clear: 'Clear filters',
  results: 'results',
  noResults: 'No materials found.',
  loadMore: 'Load more',
  disclaimer:
    'Colours and textures may vary slightly on screen. Physical samples are available on request.',
  close: 'Close',
  useMaterial: 'Use this material in my quote',
  category: 'Category', 
  ctaHeading: 'FOUND A MATERIAL YOU LIKE?',
  ctaSub:
    'Send us a photo of your interior and tell us which material caught your eye. We’ll help you choose the right material for your project.',
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
  sub: 'Guide prices for kitchen wrapping, VAT included. For doors and other interior surfaces, contact us for a tailored quote.',
  popularLabel: 'Most chosen',
  vat: 'incl. VAT',
  cards: [
    {
      name: 'Compact kitchen',
      scope: 'up to ±10 fronts',
      price: 'from €1,400',
    },
    {
      name: 'Average kitchen',
      scope: '±11–18 fronts',
      price: '€1,800 – €2,800',
      popular: true,
    },
    {
      name: 'Large kitchen',
      scope: 'many fronts, tall units, island or fixed parts',
      price: 'from €2,800',
    },
  ],
    disclaimer: 'Final price depends on the number of fronts, material and fixed parts.',
  otherTitle: 'Other Interiors',
  otherSub: 'Doors, wardrobes, furniture and other interior surfaces are available on a quote basis.',
  quoteMessage: 'Hi Maurits, I’d like to request a quote for a project.',
},
    reviews: {
    eyebrow: 'Testimonials',
heading: 'WHAT CLIENTS SAY',
sub: 'See what our clients say about their experience with Maurits.',
googleBadge: 'Google Reviews',
googleReviews: 'Google Reviews',
  showOriginal: 'Show original',
  showTranslation: 'Show translation',
  readButton: 'Read our Google reviews',
  previousLabel: 'Previous review',
  nextLabel: 'Next review',
  goToReview: 'Go to review',

  items: [
    {
      quote:
        'He tenido muy buena experiencia con Maurits. Le pedimos que nos buscara y pusiera cortinas de lamelas y enrollables en varias habitaciones y el resultado fue perfecto. A raíz de eso, le pedimos que también nos pidiese e instalase una persiana para una puerta y nos consiguió un modelo que además tiene mando a distancia. Estamos muy contentos con la calidad de su trabajo, la prioridad y rapidez que pone en sus proyectos y, cómo no, el precio comedido. Desde ese momento hemos decidido que es nuestro punto de contacto para nuestras reformas y actualizaciones y ya van varias. Espero que en el futuro pueda mantener la dedicación que ahora mismo tiene.',
      translatedQuote:
        'I am very happy with my experience with Maurits. We asked him to source and install slatted and roller blinds in several rooms, and the result was perfect. As a result, we also asked him to source and install a blind for a door, and he found us a model that even has a remote control. We are very happy with the quality of his work, the priority and speed he gives to his projects, and of course the reasonable price. Since then, we have decided that he is our point of contact for our renovations and updates, and there have already been several. I hope he can maintain the dedication he currently shows in the future.',
      name: 'Jose Lopez',
      rating: 5,
    },
    {
      quote:
        'Maurits is een echte vakman, werkt netjes en komt de afspraken na. Zet vaak net een stap extra om tot een mooi resultaat te komen, dankjewel Maurits.',
      translatedQuote:
        'Maurits is a true professional, works neatly and keeps his promises. He often goes the extra mile to achieve a beautiful result. Thank you, Maurits.',
      name: 'Jurgen Brekelmans',
      rating: 5,
    },
    {
      quote:
        'Gezellige vakman, werkt gestaag en is optijd. Denkt mee en makkelijk communiceren. Dank je wel Maurits!',
      translatedQuote:
        'Pleasant professional, works steadily and is punctual. Thinks along with you and is easy to communicate with. Thank you, Maurits!',
      name: 'Angela de Groot',
      rating: 5,
    },
    {
      quote:
        'Blij dat we voor het wrappen van onze keuken hebben gekozen ipv een nieuwe installeren. Top resultaat en op Maurits kun je vertrouwen.',
      translatedQuote:
        'We are glad we chose to have our kitchen wrapped instead of installing a new one. Great result, and Maurits is someone you can rely on.',
      name: 'Lotte Mulder',
      rating: 5,
    },
    {
      quote:
        'Maurits is een vakman, werkt heel nauwkeurig. Helpt mee om je ideeën te realiseren. In ons geval, ziet de keuken er weer als nieuw uit. Bedankt, Maurits!',
      translatedQuote:
        'Maurits is a professional and works very precisely. He helps bring your ideas to life. In our case, the kitchen looks like new again. Thank you, Maurits!',
      name: 'Andor Verbakel',
      rating: 4,
    },
  ],
},
    faq: {
  heading: 'Frequently asked questions',
  sub: 'Everything you need to know about interior film, the finish and our process.',
  contactText: 'Have another question? Feel free to get in touch.',
  contactLink: 'Get in touch',
  items: [
    {
      q: 'How long does interior film last?',
      a: 'Typically 7–10 years, depending on use, care and the conditions in which the film is applied.',
    },
    {
      q: 'Is interior film resistant to heat and moisture?',
      a: 'Yes. Our interior film is heat-resistant and moisture-resistant, making it well suited to kitchens and bathrooms. However, it is not designed to withstand extreme direct heat, such as a hot pan placed directly on the surface.',
    },
    {
      q: 'Can the film be removed later?',
      a: 'In many cases, yes. However, removal may leave light traces depending on the material, finish and condition of the original surface. We assess each surface beforehand to ensure the best possible result.',
    },
    {
      q: 'How much does interior wrapping cost?',
      a: 'Every kitchen and interior is different, so we provide a tailored quote based on factors such as the number and size of fronts, fixed elements, the condition of the surface and the film selected.',
      link: {
        label: 'View our pricing',
        href: '/pricing',
      },
    },
    {
      q: 'Do I need to dismantle my furniture or kitchen?',
      a: 'No. We take care of the dismantling where required. Removable and easily transportable parts are carefully taken to our workshop, where they are prepared and wrapped. Fixed elements are finished on site.',
    },
    {
      q: 'Can panelled doors be made flat with wrapping?',
      a: 'No. Wrapping changes the colour and finish, but not the shape of the original surface. Panelled doors, curves and other contours remain intact, with the film carefully formed around the existing shape.',
    },
  ],
},
    contactPage: {
  eyebrow: 'GET IN TOUCH',
  heading: 'Let’s talk about your project.',
  sub: 'Have a question, want an initial quote or simply want to know what’s possible? Get in touch with Maurits directly.',
  button: 'Get in touch',

  whatsapp: {
    title: 'WhatsApp',
    text: 'The quickest way to get started. Send a few photos of your interior and tell us briefly what you would like to wrap.',
    button: 'Message us on WhatsApp',
  },

  phone: {
    title: 'Call us',
    text: 'Prefer to speak to someone? Call Maurits directly.',
    button: 'Call us',
  },

  email: {
    title: 'Email',
    text: 'For general enquiries or more information, you can also reach us by email.',
    button: 'Send an email',
  },

  whatsappMessage:
    'Hi Maurits, I’d like to request a quote. I’ve attached some photos of my project.',

  location: {
    eyebrow: 'OUR WORKSHOP',
    heading: 'Visit us in Jávea.',
    sub: 'Our workshop is based in Jávea, on the Costa Blanca.',
    addressLabel: 'Address',
    directions: 'Get directions',
    mapTitle: 'Wrap Interior workshop in Jávea',
  },

  bottomCta: {
    heading: 'Ready to transform your interior?',
    sub: 'Send us a few photos on WhatsApp and tell us what you have in mind.',
    button: 'Send photos via WhatsApp',
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
      materials: 'Materiales',
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
        { value: '30 años', label: 'de experiencia' },
        { value: '500+', label: 'colores y texturas' },
        { value: '4,9/5', label: 'valoración en Google' },
      ],
    },
    homepageServices: {
      eyebrow: 'Qué vinilamos',
      heading: 'MUCHO MÁS QUE COCINAS.',
      sub: 'El vinilo para interiores de alta calidad puede transformar las superficies de tu hogar y dar a cocinas, armarios, puertas y otros elementos interiores un aspecto completamente nuevo, sin necesidad de sustituirlos.',
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
  eyebrow: 'Materiales',
  heading: 'ELIGE TU MATERIAL.',
  sub: 'Descubre nuestra selección de colores, maderas, efectos piedra, metales y otros materiales para tu interior.',
  selectionNote:
  'Esta es solo una selección de nuestros acabados disponibles. Tenemos más de 500 para elegir. ¿No encuentras lo que buscas? Pregúntanos.',
  search: 'Buscar materiales, colores o códigos...',
  clearSearch: 'Borrar búsqueda',
  filter: 'Filtros',
  colour: 'Color',
  clear: 'Borrar filtros',
  results: 'resultados',
  noResults: 'No se han encontrado materiales.',
  loadMore: 'Cargar más',
  disclaimer:
    'Los colores y las texturas pueden variar ligeramente en pantalla. Hay muestras físicas disponibles bajo petición.',
  close: 'Cerrar',
  useMaterial: 'Usar este material en mi presupuesto',
  category: 'Categoría', 
  ctaHeading: '¿HAS ENCONTRADO UN MATERIAL QUE TE GUSTA?',
  ctaSub:
    'Envíanos una foto de tu interior y dinos qué material te gusta. Te ayudaremos a elegir el material adecuado para tu proyecto.',
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
  sub: 'Precios orientativos para el vinilado de cocinas, IVA incluido. Para puertas y otras superficies interiores, contáctanos para un presupuesto personalizado.',
  popularLabel: 'Más elegido',
  vat: 'IVA incl.',
  cards: [
    {
      name: 'Cocina compacta',
      scope: 'hasta ±10 frentes',
      price: 'desde 1.400 €',
    },
    {
      name: 'Cocina media',
      scope: '±11–18 frentes',
      price: '1.800 € – 2.800 €',
      popular: true,
    },
    {
      name: 'Cocina grande',
      scope: 'muchos frentes, columnas, isla o partes fijas',
      price: 'desde 2.800 €',
    },
  ],
    disclaimer: 'El precio final depende del número de frentes, el material y las partes fijas.',
  otherTitle: 'Otros interiores',
  otherSub: 'Puertas, armarios, muebles y otras superficies interiores están disponibles bajo presupuesto.',
  quoteMessage: 'Hi Maurits, I’d like to request a quote for a project.',
},
    reviews: {
    eyebrow: 'Testimonios',
heading: 'LO QUE DICEN NUESTROS CLIENTES',
sub: 'Descubre lo que nuestros clientes dicen sobre su experiencia con Maurits.',
googleBadge: 'Reseñas de Google',
googleReviews: 'Reseñas de Google',
  showOriginal: 'Ver original',
  showTranslation: 'Ver traducción',
  readButton: 'Leer nuestras reseñas en Google',
  previousLabel: 'Reseña anterior',
  nextLabel: 'Siguiente reseña',
  goToReview: 'Ir a la reseña',

  items: [
  {
  quote:
    'He tenido muy buena experiencia con Maurits. Le pedimos que nos buscara y pusiera cortinas de lamelas y enrollables en varias habitaciones y el resultado fue perfecto. A raíz de eso, le pedimos que también nos pidiese e instalase una persiana para una puerta y nos consiguió un modelo que además tiene mando a distancia. Estamos muy contentos con la calidad de su trabajo, la prioridad y rapidez que pone en sus proyectos y, cómo no, el precio comedido. Desde ese momento hemos decidido que es nuestro punto de contacto para nuestras reformas y actualizaciones y ya van varias. Espero que en el futuro pueda mantener la dedicación que ahora mismo tiene.',
  name: 'Jose Lopez',
  rating: 5,
},
    {
      quote:
        'Maurits is een echte vakman, werkt netjes en komt de afspraken na. Zet vaak net een stap extra om tot een mooi resultaat te komen, dankjewel Maurits.',
      translatedQuote:
        'Maurits es un auténtico profesional, trabaja con cuidado y cumple con lo acordado. A menudo da un paso más para conseguir un buen resultado. Gracias, Maurits.',
      name: 'Jurgen Brekelmans',
      rating: 5,
    },
    {
      quote:
        'Gezellige vakman, werkt gestaag en is optijd. Denkt mee en makkelijk communiceren. Dank je wel Maurits!',
      translatedQuote:
        'Un profesional muy agradable, trabaja de forma constante y es puntual. Piensa contigo y es fácil comunicarse con él. ¡Gracias, Maurits!',
      name: 'Angela de Groot',
      rating: 5,
    },
    {
      quote:
        'Blij dat we voor het wrappen van onze keuken hebben gekozen ipv een nieuwe installeren. Top resultaat en op Maurits kun je vertrouwen.',
      translatedQuote:
        'Estamos muy contentos de haber elegido renovar nuestra cocina con vinilo en lugar de instalar una nueva. Un resultado excelente y Maurits es una persona en la que puedes confiar.',
      name: 'Lotte Mulder',
      rating: 5,
    },
    {
      quote:
        'Maurits is een vakman, werkt heel nauwkeurig. Helpt mee om je ideeën te realiseren. In ons geval, ziet de keuken er weer als nieuw uit. Bedankt, Maurits!',
      translatedQuote:
        'Maurits es un profesional y trabaja con mucha precisión. Ayuda a hacer realidad tus ideas. En nuestro caso, la cocina vuelve a parecer nueva. ¡Gracias, Maurits!',
      name: 'Andor Verbakel',
      rating: 4,
    },
  ],
},
    faq: {
  heading: 'Preguntas frecuentes',
  sub: 'Todo lo que necesitas saber sobre el film decorativo, el acabado y nuestro proceso.',
  contactText: '¿Tienes alguna otra pregunta? No dudes en ponerte en contacto con nosotros.',
  contactLink: 'Contacta con nosotros',
  items: [
    {
      q: '¿Cuánto dura el film decorativo?',
      a: 'Normalmente, entre 7 y 10 años, dependiendo del uso, el cuidado y las condiciones en las que se aplique.',
    },
    {
      q: '¿El film es resistente al calor y la humedad?',
      a: 'Sí. Nuestro film decorativo es resistente al calor y a la humedad, por lo que es especialmente adecuado para cocinas y baños. Sin embargo, no está diseñado para soportar un calor extremo y directo, como el de una sartén caliente colocada directamente sobre la superficie.',
    },
    {
      q: '¿Se puede retirar el film más adelante?',
      a: 'En muchos casos, sí. Sin embargo, al retirarlo pueden quedar ligeros restos o marcas, dependiendo del material, el acabado y el estado de la superficie original. Evaluamos cada superficie antes de empezar para conseguir el mejor resultado posible.',
    },
    {
      q: '¿Cuánto cuesta vinilar un interior?',
      a: 'Cada cocina y cada interior son diferentes. Por eso ofrecemos presupuestos personalizados teniendo en cuenta factores como el número y tamaño de los frentes, las partes fijas, el estado de la superficie y el film elegido.',
      link: {
        label: 'Ver nuestros precios',
        href: '/pricing',
      },
    },
    {
      q: '¿Tengo que desmontar yo los muebles o la cocina?',
      a: 'No. Nos encargamos del desmontaje cuando sea necesario. Las piezas desmontables y fáciles de transportar se llevan cuidadosamente a nuestro taller, donde se preparan y vinilan. Las partes fijas se trabajan directamente en el lugar.',
    },
    {
      q: '¿Se pueden dejar lisas las puertas con molduras mediante vinilado?',
      a: 'No. El vinilado cambia el color y el acabado, pero no modifica la forma de la superficie original. Las puertas con molduras, curvas y otras formas mantienen su diseño, y el film se adapta cuidadosamente a ellas.',
    },
  ],
},
    contactPage: {
  eyebrow: 'CONTACTO',
  heading: 'Hablemos de tu proyecto.',
  sub: '¿Tienes alguna pregunta, quieres un presupuesto inicial o simplemente quieres saber qué es posible? Ponte en contacto directamente con Maurits.',
  button: 'Contacta con nosotros',

  whatsapp: {
    title: 'WhatsApp',
    text: 'La forma más rápida de empezar. Envíanos unas fotos de tu interior y cuéntanos brevemente qué te gustaría vinilar.',
    button: 'Escribir por WhatsApp',
  },

  phone: {
    title: 'Llámanos',
    text: '¿Prefieres hablar con nosotros? Llama directamente a Maurits.',
    button: 'Llamar',
  },

  email: {
    title: 'Email',
    text: 'Para consultas generales o más información, también puedes escribirnos por email.',
    button: 'Enviar un email',
  },

  whatsappMessage:
    'Hi Maurits, I’d like to request a quote. I’ve attached some photos of my project.',

  location: {
    eyebrow: 'NUESTRO TALLER',
    heading: 'Visítanos en Jávea.',
    sub: 'Nuestro taller está en Jávea, en la Costa Blanca.',
    addressLabel: 'Dirección',
    directions: 'Cómo llegar',
    mapTitle: 'Taller de Wrap Interior en Jávea',
  },

  bottomCta: {
    heading: '¿Listo para transformar tu interior?',
    sub: 'Envíanos unas fotos por WhatsApp y cuéntanos qué tienes en mente.',
    button: 'Enviar fotos por WhatsApp',
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
