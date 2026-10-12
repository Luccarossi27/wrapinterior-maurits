export type Locale = 'nl' | 'en' | 'es'

export const locales: Locale[] = ['nl', 'en', 'es']
export const defaultLocale: Locale = 'nl'

export const contact = {
  whatsapp: '34675153105',
  phoneDisplay: '+34 675 153 105',
  phoneHref: '+34675153105',
  email: 'info@wrap-interior.com',
  city: 'Els Poblets',
  region: 'Alicante',
  address: 'Avinguda Jaume I, 23b',
  postcode: '03779',
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
  homepageExplore: {
  eyebrow: string
  heading: string
  sub: string
  links: {
    portfolio: { title: string; description: string }
    materials: { title: string; description: string }
    process: { title: string; description: string }
    pricing: { title: string; description: string }
    reviews: { title: string; description: string }
    faq: { title: string; description: string }
    contact: { title: string; description: string }
  }
}
  gallery: {
    heading: string
    sub: string
    locationLabel: string
    beforeAfter: string
    alt: string
  }
  materials: {
  eyebrow: string
  heading: string
  sub: string
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
  legal: {
  legalNotice: {
    title: string
    intro: string
    sections: {
      title: string
      paragraphs: string[]
    }[]
  }
  privacy: {
    title: string
    intro: string
    sections: {
      title: string
      paragraphs: string[]
    }[]
  }
  cookies: {
    title: string
    intro: string
    sections: {
      title: string
      paragraphs: string[]
    }[]
  }
}
  footer: {
  tagline: string
  basedIn: string
  coveringArea: string
  serviceAreaTitle: string
  serviceArea: string
  languagesTitle: string
  contactTitle: string
  legalNotice: string
  privacy: string
  cookies: string
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
    homepageExplore: {
  eyebrow: 'Ontdek Wrap Interior',
  heading: 'Alles wat je nodig hebt, op één plek.',
  sub: 'Bekijk ons werk, ontdek hoe het proces verloopt, bekijk de richtprijzen en vind antwoorden op je vragen voordat je begint.',
  links: {
    portfolio: {
      title: 'Projecten',
      description: 'Bekijk afgeronde transformaties en verschillende afwerkingen.',
    },
    materials: {
      title: 'Materialen',
      description: 'Ontdek ons aanbod aan kleuren, houtstructuren, steen, metaal en meer.',
    },
    process: {
      title: 'Werkwijze',
      description: 'Ontdek hoe een project verloopt van het eerste contact tot de laatste afwerking.',
    },
    pricing: {
      title: 'Prijzen',
      description: 'Bekijk de richtprijzen van projecten voordat je contact opneemt.',
    },
    reviews: {
      title: 'Reviews',
      description: 'Lees wat klanten vertellen over hun ervaring.',
    },
    faq: {
      title: 'Veelgestelde vragen',
      description: 'Antwoorden op de vragen die we het vaakst krijgen.',
    },
    contact: {
      title: 'Contact',
      description: 'Stuur foto’s van je ruimte en neem contact met ons op.',
    },
  },
},
gallery: {
  heading: 'Voor & na',
  sub: 'Echte transformaties. Sleep de schuifregelaar om het verschil te zien.',
  locationLabel: 'Locatie',
  beforeAfter: 'Voor / na',
  alt: 'Interieur vóór en na het wrappen',
},
materials: {
  eyebrow: 'Materialen',
  heading: 'KIES JE MATERIAAL.',
  sub: 'Ontdek onze selectie van kleuren, houtstructuren, steenlooks, metalen en andere materialen voor jouw interieur.',
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
  ctaHeading: 'IETS ANDERS IN GEDACHT?',
  ctaSub:
    'We hebben meer dan 500 afwerkingen om uit te kiezen. Staat jouw ideale materiaal er hier niet tussen? Vraag het ons gerust. Stuur ons een foto van je interieur en vertel ons wat je in gedachten hebt. We helpen je graag het juiste materiaal voor jouw project te vinden.',
},
    process: {
      heading: 'Onze werkwijze',
      sub: 'Zes zorgvuldige stappen. De afwerking bepaalt het resultaat.',
      callout: 'De afwerking bepaalt het resultaat.',
      steps: [
        { title: 'Demonteren', desc: 'We demonteren alle losse delen zorgvuldig om ze mee te nemen.' },
        { title: 'Reinigen & ontvetten', desc: 'Alle losse delen worden grondig gereinigd in ons atelier.' },
        { title: 'Wrappen in het atelier', desc: 'De delen worden daarna onder ideale omstandigheden ge-wrapped.' },
        { title: 'Precieze Randen & Hoeken', desc: 'Randen en hoeken worden strak en duurzaam afgewerkt.' },
        { title: 'Vaste Delen Op Locatie', desc: 'Vaste delen en panelen werken we netjes ter plaatse af.' },
        { title: 'Terugplaatsen & controle', desc: 'Alles word terug gemonteerd, afgesteld en gecontroleerd.' },
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
      price: 'vanaf €1.200',
    },
    {
      name: 'Gemiddelde keuken',
      scope: '±11–18 fronten',
      price: '€1.700 – €2.500',
      popular: true,
    },
    {
      name: 'Grote keuken',
      scope: 'veel fronten, hoge kasten, eiland of vaste delen',
      price: 'vanaf €2.500',
    },
  ],
  warrantyTitle: '5 jaar garantie',
  warrantyText:
  'Op onze interieurfolie bieden wij 5 jaar garantie op materiaal- en montagefouten. Er gelden uitzonderingen; bekijk onze FAQ voor de volledige garantievoorwaarden.',
  disclaimer: 'De definitieve prijs is afhankelijk van het aantal fronten, het materiaal en de vaste delen.',
  otherTitle: 'Andere interieurs',
  otherSub: 'Deuren, kasten, meubels en andere interieuroppervlakken zijn beschikbaar op offertebasis.',
  quoteMessage: 'Hoi Maurits, ik wil graag een offerte aanvragen voor een project.',
},
    reviews: {
  eyebrow: 'Klantervaringen',
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
        'Estoy encantada con el trabajo de Maurits. Le pedí cambiar el color del mostrador de mi centro de estética con vinilo y el resultado ha sido espectacular: pasó de un gris apagado a un tono dorado elegante que encaja perfectamente con la imagen de Onix. Trabajo limpio, acabados impecables y muy profesional en todo momento. Además, es una opción mucho más económica que cambiar el mueble. ¡100% recomendable! ⭐⭐⭐⭐⭐',
      translatedQuote:
        'Ik ben ontzettend blij met het werk van Maurits. Ik vroeg hem om de toonbank van mijn schoonheidsinstituut met interieurfolie een nieuwe kleur te geven, en het resultaat is werkelijk prachtig! De toonbank ging van een saaie grijstint naar een elegante goudkleur die perfect past bij de uitstraling van Onix. Het werk is netjes uitgevoerd, de afwerking is perfect en Maurits was de hele tijd zeer professioneel. Bovendien is het een veel voordeligere oplossing dan het meubel vervangen. Absoluut een aanrader! ⭐⭐⭐⭐⭐',
      name: 'Oana Onix',
      rating: 5,
    },
    {
      quote:
        'Maurits werkt netjes, snel en het resultaat is goed! De communicatie is goed en het werken met Maurits is betrouwbaar. Hij is erg behulpzaam en kundig! Ik kan regelmatig bij hem terecht.',
      name: 'Chantal Dijkhuizen',
      rating: 5,
    },
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
      q: 'Bieden jullie garantie?',
      a: 'Wij bieden 5 jaar garantie op materiaal- en montagefouten van de door ons aangebrachte interieurfolie. Schade door verkeerd gebruik of onderhoud, krassen, stoten, scherpe voorwerpen of direct contact met hete voorwerpen valt buiten de garantie. Deze garantie doet geen afbreuk aan de wettelijke rechten van de consument.',
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
    heading: 'Bezoek ons in op afspraak Els Poblets.',
    sub: 'Onze werkplaats is in Els Poblets, tussen Dénia en Ondara.',
    addressLabel: 'Adres',
    directions: 'Plan je route',
    mapTitle: 'Werkplaats van Wrap Interior in Els Poblets',
  },

  bottomCta: {
    heading: 'Klaar om je interieur te transformeren?',
    sub: 'Stuur ons een paar foto’s via WhatsApp en vertel ons wat je in gedachten hebt.',
    button: 'Stuur foto’s via WhatsApp',
  },
},
    legal: {
  legalNotice: {
    title: 'Juridische informatie',
    intro:
      'Deze website wordt beheerd door Maurits van der Aa, handelend onder de naam Wrap Interior, als autónomo gevestigd in Spanje.',

    sections: [
      {
        title: 'Exploitant van de website',
        paragraphs: [
          'Naam: Maurits van der Aa',
          'Handelsnaam: Wrap Interior',
          'NIE / NIF: Z1441902Z',
          'Bedrijfsadres: Avinguda Jaume I, 23b, 03779 Els Poblets, Alicante, Spanje',
          'E-mail: info@wrap-interior.com',
          'Telefoon: +34 675 153 105',
        ],
      },
      {
        title: 'Over deze website',
        paragraphs: [
          'Wrap Interior biedt informatie over interieurwrapping en aanverwante diensten voor keukens, meubels, deuren, badkamermeubels en andere interieuroppervlakken.',
          'De website is bedoeld om informatie te geven over onze diensten, materialen, werkwijze, richtprijzen, uitgevoerde projecten en contactmogelijkheden.',
        ],
      },
      {
        title: 'Prijzen en btw',
        paragraphs: [
          'De prijzen op deze website zijn inclusief toepasselijke btw, tenzij uitdrukkelijk anders vermeld. Richtprijzen zijn indicatief en worden bevestigd na beoordeling van het specifieke project, de gekozen materialen en de benodigde werkzaamheden.',
        ],
      },
      {
        title: 'Intellectueel eigendom',
        paragraphs: [
          "De inhoud van deze website, waaronder teksten, foto's, afbeeldingen, grafische elementen, huisstijl en logo's, kan beschermd zijn door intellectuele-eigendomsrechten. Deze rechten behoren toe aan de respectieve rechthebbenden. Materialen van derden worden weergegeven of gebruikt in overeenstemming met de toepasselijke toestemmingen en licenties. Voor het verveelvoudigen of hergebruiken van beschermd materiaal is de vereiste toestemming nodig, tenzij een wettelijke uitzondering van toepassing is.",
          'Je mag de website bekijken en gebruiken voor persoonlijke en informatieve doeleinden. Het zonder voorafgaande toestemming kopiëren, verspreiden, wijzigen of commercieel gebruiken van inhoud van deze website is niet toegestaan.',
        ],
      },
      {
        title: 'Gebruik van de website',
        paragraphs: [
          'Bezoekers dienen deze website op een rechtmatige manier te gebruiken en mogen de werking of beveiliging ervan niet verstoren en geen rechten van Wrap Interior of derden schenden.',
          'De informatie op deze website is bedoeld als algemene informatie. Hoewel we proberen de informatie actueel en correct te houden, moeten de geschiktheid van een bepaalde oplossing, prijzen, materialen en planning vóór het aangaan van een opdracht rechtstreeks met Wrap Interior worden bevestigd.',
        ],
      },
      {
        title: 'Externe links',
        paragraphs: [
          'Deze website kan links bevatten naar diensten of websites van derden, waaronder communicatie-, kaart- en socialmediaplatforms. Deze diensten hanteren hun eigen voorwaarden en privacybeleid. Wrap Interior is niet verantwoordelijk voor hun inhoud of werkwijze.',
        ],
      },
      {
        title: 'Aansprakelijkheid',
        paragraphs: [
          'Wrap Interior doet er redelijkerwijs alles aan om de website beschikbaar en de informatie correct te houden. We kunnen echter niet garanderen dat de website altijd beschikbaar, foutloos of vrij van technische problemen is.',
          'Niets op deze website vormt een garantie dat een bepaalde oplossing, materiaalkeuze of dienst geschikt is voor ieder project. De geschiktheid wordt per project beoordeeld.',
        ],
      },
      {
        title: 'Toepasselijk recht',
        paragraphs: [
          'Op deze website en het gebruik ervan is het toepasselijke Spaanse recht van toepassing, onverminderd dwingende consumentenrechten die volgens de toepasselijke wetgeving gelden.',
        ],
      },
    ],
  },

  privacy: {
    title: 'Privacybeleid',
    intro:
      'Wrap Interior respecteert je privacy en verwerkt persoonsgegevens volgens de toepasselijke privacywetgeving, waaronder de Algemene Verordening Gegevensbescherming (AVG/GDPR) en de Spaanse privacywetgeving.',

    sections: [
      {
        title: 'Wie is verantwoordelijk voor je gegevens?',
        paragraphs: [
          'Verwerkingsverantwoordelijke: Maurits van der Aa, handelend onder de naam Wrap Interior.',
          'NIE / NIF: Z1441902Z',
          'Bedrijfsadres: Avinguda Jaume I, 23b, 03779 Els Poblets, Alicante, Spanje',
          'E-mail: info@wrap-interior.com',
          'Telefoon: +34 675 153 105',
        ],
      },
      {
        title: 'Welke persoonsgegevens kunnen we ontvangen?',
        paragraphs: [
          'Wanneer je contact opneemt met Wrap Interior kunnen we gegevens ontvangen zoals je naam, e-mailadres, telefoonnummer, de inhoud van je vraag en informatie over je project.',
          'Als je foto’s, informatie over de woning, afmetingen, een adres of andere projectgegevens verstrekt in verband met een aanvraag of offerte, kunnen ook deze gegevens worden verwerkt voor zover dat nodig is om je te antwoorden of de gevraagde dienst voor te bereiden.',
        ],
      },
      {
        title: 'Hoe ontvangen we je gegevens?',
        paragraphs: [
          'Deze website gebruikt momenteel geen contactformulier en heeft geen nieuwsbriefinschrijving.',
          'Je kunt rechtstreeks contact opnemen met Wrap Interior via e-mail, telefoon of WhatsApp. Informatie die je via deze kanalen verstrekt, wordt verwerkt om met je te communiceren en je aanvraag te behandelen.',
        ],
      },
      {
        title: 'Waarom gebruiken we je gegevens?',
        paragraphs: [
          'We gebruiken persoonsgegevens om vragen te beantwoorden, mogelijke projecten te bespreken, informatie te verstrekken, offertes op te stellen, diensten te plannen of uit te voeren, met klanten en potentiële klanten te communiceren en te voldoen aan wettelijke verplichtingen.',
          'Afhankelijk van de situatie kan verwerking noodzakelijk zijn om op jouw verzoek stappen te zetten vóór het sluiten van een overeenkomst, om een overeenkomst uit te voeren, om aan een wettelijke verplichting te voldoen of op basis van een gerechtvaardigd belang. Wanneer specifieke toestemming vereist is, wordt deze afzonderlijk gevraagd.',
        ],
      },
      {
        title: 'Website-analyse',
        paragraphs: [
          'Deze website gebruikt Vercel Web Analytics om inzicht te krijgen in het gebruik van de website, bijvoorbeeld welke pagina’s worden bekeken en algemene verkeerspatronen.',
          'Volgens Vercel gebruikt Web Analytics geen cookies. Er wordt gebruikgemaakt van een kortstondige identificatie op basis van het binnenkomende verzoek, ontworpen om permanente tracking over verschillende websites te voorkomen. Analytische informatie kan onder meer bestaan uit paginaweergaven, verwijzende informatie en algemene informatie over browser, apparaat, besturingssysteem en geografische locatie.',
        ],
      },
      {
        title: 'Met wie kunnen we je gegevens delen?',
        paragraphs: [
          'Persoonsgegevens kunnen worden verwerkt door dienstverleners die nodig zijn om de website te laten functioneren of om met je te communiceren. Dit kan onder meer hosting- en analysediensten omvatten en communicatiediensten die je zelf kiest, zoals WhatsApp.',
          'We verkopen je persoonsgegevens niet en gebruiken deze niet voor advertenties of marketingdoeleinden.',
        ],
      },
      {
        title: 'Hoe lang bewaren we je gegevens?',
        paragraphs: [
          'Persoonsgegevens worden alleen bewaard zolang dit redelijkerwijs nodig is voor het doel waarvoor ze zijn verzameld, waaronder het behandelen van een aanvraag, het leveren van diensten en het voldoen aan wettelijke, administratieve of contractuele verplichtingen.',
          'Wanneer persoonsgegevens niet langer nodig zijn, worden ze waar passend verwijderd of veilig vernietigd.',
        ],
      },
      {
        title: 'Je rechten',
        paragraphs: [
          'Afhankelijk van de toepasselijke wetgeving kun je het recht hebben om inzage, correctie, verwijdering, beperking van verwerking, bezwaar tegen bepaalde verwerkingen en dataportabiliteit te verzoeken.',
          'Je kunt je rechten uitoefenen door contact op te nemen via info@wrap-interior.com. We kunnen redelijke informatie vragen om je identiteit te verifiëren voordat we een verzoek verwerken.',
          'Je hebt ook het recht om een klacht in te dienen bij de Spaanse privacytoezichthouder, de Agencia Española de Protección de Datos (AEPD), wanneer je van mening bent dat je privacyrechten niet zijn gerespecteerd.',
        ],
      },
      {
        title: 'Wijzigingen in dit privacybeleid',
        paragraphs: [
          'Dit privacybeleid kan van tijd tot tijd worden aangepast om wijzigingen in de website, diensten of toepasselijke wetgeving weer te geven. De meest recente versie wordt altijd op deze pagina gepubliceerd.',
        ],
      },
    ],
  },

  cookies: {
    title: 'Cookies',
    intro:
      'Deze website is ontworpen om slechts beperkt gebruik te maken van browsertechnologieën en gebruikt momenteel geen advertentie- of marketingcookies.',

    sections: [
      {
        title: 'Cookies op deze website',
        paragraphs: [
          'Wrap Interior gebruikt momenteel geen advertentie-, marketing- of socialmediatrackingcookies op deze website.',
          'Voor website-statistieken wordt Vercel Web Analytics gebruikt. Volgens Vercel maakt Web Analytics geen gebruik van cookies, maar van een kortstondige identificatie op basis van het inkomende verzoek.',
        ],
      },
      {
        title: 'Taalvoorkeur',
        paragraphs: [
          'De website slaat je gekozen taal lokaal op in je browser met behulp van localStorage. Hierdoor kan de website onthouden of je Nederlands, Engels of Spaans hebt geselecteerd wanneer je terugkomt.',
          'Deze informatie wordt lokaal in je browser opgeslagen en is geen cookie of marketingtracker.',
        ],
      },
      {
        title: 'Diensten van derden',
        paragraphs: [
          'Deze website kan links bevatten naar diensten van derden, zoals WhatsApp, Google Maps of andere externe platforms. Zodra je de website van Wrap Interior verlaat of rechtstreeks met deze diensten communiceert, kunnen hun eigen cookies, privacybeleid en technologieën van toepassing zijn.',
        ],
      },
      {
        title: 'Browseropslag beheren',
        paragraphs: [
          'Je kunt localStorage en andere browsergegevens verwijderen via de instellingen van je browser. Wanneer je browseropslag blokkeert of wist, kan dit invloed hebben op de mogelijkheid van de website om je taalvoorkeur te onthouden.',
        ],
      },
      {
        title: 'Wijzigingen',
        paragraphs: [
          'Als in de toekomst aanvullende cookies of vergelijkbare technologieën worden toegevoegd, wordt deze pagina bijgewerkt en worden eventuele toepasselijke toestemmingsvereisten nageleefd.',
        ],
      },
    ],
  },
},
    footer: {
  tagline: 'Frisse interieurs. Zonder de verbouwing.',
  basedIn: 'Gevestigd in Jávea',
  coveringArea: 'Werkzaam aan de Costa Blanca',
  serviceAreaTitle: 'Werkgebied',
  serviceArea: `${areas} en de wijdere Costa Blanca / provincie Alicante.`,
  languagesTitle: 'Talen',
  contactTitle: 'Contact',
  legalNotice: 'Juridische informatie',
  privacy: 'Privacybeleid',
  cookies: 'Cookies',
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
    homepageExplore: {
  eyebrow: 'Explore Wrap Interior',
  heading: 'Everything you need, in one place.',
  sub: 'Explore our work, understand the process, see typical pricing, and find answers before you get started.',
  links: {
    portfolio: {
      title: 'Portfolio',
      description: 'See completed transformations and finishes.',
    },
    materials: {
      title: 'Materials',
      description: 'Explore our range of colours, woodgrains, stone, metals and more.',
    },
    process: {
      title: 'Process',
      description: 'See how a project goes from first contact to final finish.',
    },
    pricing: {
      title: 'Pricing',
      description: 'Understand typical project costs before getting in touch.',
    },
    reviews: {
      title: 'Reviews',
      description: 'Read what clients have said about their experience.',
    },
    faq: {
      title: 'FAQ',
      description: 'Answers to the questions we hear most often.',
    },
    contact: {
      title: 'Contact',
      description: 'Send photos of your space and start your enquiry.',
    },
  },
},
gallery: {
  heading: 'Before & after',
  sub: 'Real transformations. Drag the slider to see the difference.',
  locationLabel: 'Location',
  beforeAfter: 'Before / after',
  alt: 'Interior before and after wrapping',
},
materials: {
  eyebrow: 'Materials',
  heading: 'CHOOSE YOUR MATERIAL.',
  sub: 'Explore our selection of colours, woodgrains, stone effects, metals and other materials for your interior.',
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
  ctaHeading: 'ENVISIONED SOMETHING ELSE?',
  ctaSub:
    'We have over 500 finishes to choose from, so if you don’t see what you’re looking for here, just ask. Send us a photo of your interior and tell us what you have in mind. We’ll help you find the right material for your project.',
},
    process: {
      heading: 'Our process',
      sub: 'Six careful steps. The finish defines the result.',
      callout: 'The finish defines the result.',
      steps: [
        { title: 'Dismantle', desc: 'We carefully remove all removable parts and take them to our workshop.' },
        { title: 'Clean & degrease', desc: 'All removable parts are thoroughly cleaned and degreased in our workshop.' },
        { title: 'Wrap in the workshop', desc: 'The parts are then wrapped in ideal workshop conditions for the best possible finish.' },
        { title: 'Precise edges & corners', desc: 'Edges and corners are wrapped with precision for a clean, durable finish.' },
        { title: 'Fixed parts on location', desc: 'Fixed panels and parts are carefully wrapped and finished on site.' },
        { title: 'Remount & quality check', desc: 'Everything is carefully reinstalled, adjusted and thoroughly checked.' },
      ],
    },
    pricing: {
  heading: 'Transparent pricing',
  sub: 'Guide prices for kitchen wrapping, VAT included. For doors and other interior surfaces, contact us for a tailored quote.',
  popularLabel: 'Most popular',
  vat: 'incl. VAT',
  cards: [
    {
      name: 'Compact kitchen',
      scope: 'up to ±10 fronts',
      price: 'from €1,200',
    },
    {
      name: 'Average kitchen',
      scope: '±11–18 fronts',
      price: '€1,700 – €2,500',
      popular: true,
    },
    {
      name: 'Large kitchen',
      scope: 'many fronts, tall units, island or fixed parts',
      price: 'from €2,500',
    },
  ],
  warrantyTitle: '5-year warranty',
  warrantyText:
  'Our interior wrapping comes with a 5-year warranty covering material defects and installation faults. Exclusions apply; see our FAQ for the full warranty terms.',
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
        'Estoy encantada con el trabajo de Maurits. Le pedí cambiar el color del mostrador de mi centro de estética con vinilo y el resultado ha sido espectacular: pasó de un gris apagado a un tono dorado elegante que encaja perfectamente con la imagen de Onix. Trabajo limpio, acabados impecables y muy profesional en todo momento. Además, es una opción mucho más económica que cambiar el mueble. ¡100% recomendable! ⭐⭐⭐⭐⭐',
      translatedQuote:
        "I’m absolutely delighted with Maurits’s work. I asked him to transform the countertop at my beauty salon using interior wrapping film, and the result is stunning! It went from a dull grey to an elegant gold finish that perfectly complements Onix’s look and feel. The work was clean, the finish is flawless, and Maurits was professional throughout. On top of that, it’s a much more affordable option than replacing the furniture. 100% recommended! ⭐⭐⭐⭐⭐",
      name: 'Oana Onix',
      rating: 5,
    },
    {
      quote:
        'Maurits werkt netjes, snel en het resultaat is goed! De communicatie is goed en het werken met Maurits is betrouwbaar. Hij is erg behulpzaam en kundig! Ik kan regelmatig bij hem terecht.',
      name: 'Chantal Dijkhuizen',
      translatedQuote: 
        "Maurits works neatly and efficiently, and the results are excellent! Communication is great, and Maurits is reliable and trustworthy to work with. He’s very helpful and knowledgeable, and I can always count on him when I need him.", 
      rating: 5,
    },
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
      q: 'Do you offer a warranty?',
      a: "We provide a 5-year warranty covering material defects and installation faults in the interior film we apply. Damage caused by improper use or cleaning, scratches, impacts, sharp objects or direct contact with hot items is not covered. This warranty does not affect the consumer's statutory rights.",
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
    heading: 'Visit us by appointment only in Els Poblets.',
    sub: 'Our workshop is located in Els Poblets, between Dénia and Ondara.',
    addressLabel: 'Address',
    directions: 'Get directions',
    mapTitle: 'Wrap Interior workshop in Els Poblets',
  },

  bottomCta: {
    heading: 'Ready to transform your interior?',
    sub: 'Send us a few photos on WhatsApp and tell us what you have in mind.',
    button: 'Send photos via WhatsApp',
  },
},
    legal: {
  legalNotice: {
    title: 'Legal Notice',
    intro:
      'This website is operated by Maurits van der Aa, trading as Wrap Interior, an autónomo based in Spain.',

    sections: [
      {
        title: 'Website operator',
        paragraphs: [
          'Name: Maurits van der Aa',
          'Business name: Wrap Interior',
          'NIE / NIF: Z1441902Z',
          'Business address: Avinguda Jaume I, 23b, 03779 Els Poblets, Alicante, Spain',
          'Email: info@wrap-interior.com',
          'Telephone: +34 675 153 105',
        ],
      },
      {
        title: 'About this website',
        paragraphs: [
          'Wrap Interior provides information about interior wrapping and related services for kitchens, furniture, doors, bathroom furniture and other interior surfaces.',
          'The website is intended to provide information about our services, materials, process, indicative pricing, completed projects and ways to contact us.',
        ],
      },
      {
        title: 'Prices and VAT',
        paragraphs: [
          'Prices displayed on this website include applicable VAT unless expressly stated otherwise. Prices shown as indicative are subject to confirmation following assessment of the specific project, materials and work required.',
        ],
      },
      {
        title: 'Intellectual property',
        paragraphs: [
          'Website content, including text, photographs, graphics, branding and logos, may be protected by intellectual property rights. Such rights belong to their respective owners. Third-party materials are reproduced or displayed subject to the applicable permissions and licences. Reproduction or reuse of protected material requires the relevant authorisation, unless an exception under applicable law applies.',
          'You may view and use the website for personal and informational purposes. Reproduction, distribution, modification or commercial use of website content without prior permission is not permitted.',
        ],
      },
      {
        title: 'Use of the website',
        paragraphs: [
          'Visitors agree to use this website lawfully and in a way that does not interfere with its operation, compromise its security or infringe the rights of Wrap Interior or third parties.',
          'Information on this website is provided for general information. While we aim to keep it accurate and up to date, specific project suitability, pricing, materials and timescales should be confirmed directly with Wrap Interior before work is agreed.',
        ],
      },
      {
        title: 'External links',
        paragraphs: [
          'This website may contain links to third-party services or websites, including communication, mapping and social-media services. These services operate under their own terms and privacy policies, and Wrap Interior is not responsible for their content or practices.',
        ],
      },
      {
        title: 'Liability',
        paragraphs: [
          'Wrap Interior takes reasonable care to ensure that the website is available and that its content is accurate. However, we cannot guarantee that the website will always be available, error-free or free from technical issues.',
          'Nothing on this website constitutes a guarantee that a particular result, material or service will be suitable for every project. Suitability is assessed on a project-by-project basis.',
        ],
      },
      {
        title: 'Applicable law',
        paragraphs: [
          'This website and its use are governed by applicable Spanish law, without prejudice to any mandatory rights that may apply to consumers under applicable legislation.',
        ],
      },
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    intro:
      'Wrap Interior respects your privacy and processes personal data in accordance with applicable data-protection legislation, including the EU General Data Protection Regulation (GDPR) and Spanish data-protection law.',

    sections: [
      {
        title: 'Who is responsible for your data?',
        paragraphs: [
          'Data controller: Maurits van der Aa, trading as Wrap Interior.',
          'NIE / NIF: Z1441902Z',
          'Business address: Avinguda Jaume I, 23b, 03779 Els Poblets, Alicante, Spain',
          'Email: info@wrap-interior.com',
          'Telephone: +34 675 153 105',
        ],
      },
      {
        title: 'What personal data may we receive?',
        paragraphs: [
          'If you contact Wrap Interior, we may receive information such as your name, email address, telephone number, the content of your enquiry and information about your project.',
          'If you provide photographs, property information, measurements, an address or other project details in connection with an enquiry or quotation, those details may also be processed where necessary to respond to you or prepare the requested service.',
        ],
      },
      {
        title: 'How do we receive your information?',
        paragraphs: [
          'This website does not currently use a contact form or newsletter subscription.',
          'You may contact Wrap Interior directly by email, telephone or WhatsApp. Information you choose to provide through those channels is processed in order to communicate with you and deal with your enquiry.',
        ],
      },
      {
        title: 'Why do we use your data?',
        paragraphs: [
          'We use personal data to respond to enquiries, discuss potential projects, provide information, prepare quotations, arrange or provide services, communicate with customers and prospective customers, and comply with applicable legal obligations.',
          'Depending on the circumstances, processing may be necessary to take steps at your request before entering into a contract, to perform a contract, to comply with a legal obligation or on the basis of a legitimate interest. Where consent is specifically required, it will be requested separately.',
        ],
      },
      {
        title: 'Website analytics',
        paragraphs: [
          'This website uses Vercel Web Analytics to understand how visitors use the website, such as which pages are viewed and general traffic patterns.',
          'Vercel states that its Web Analytics does not use cookies. It uses a short-lived identifier derived from the incoming request and is designed to prevent persistent cross-site tracking. Analytics information may include information such as page views, referrer information and general browser, device, operating-system and geographic information.',
        ],
      },
      {
        title: 'Who may receive your data?',
        paragraphs: [
          'Personal data may be processed by service providers used to operate the website or communicate with you, where necessary for those services to function. This may include website hosting and analytics providers and communication services that you choose to use, such as WhatsApp.',
          'We do not sell your personal data or use it for advertising or marketing purposes.',
        ],
      },
      {
        title: 'How long do we keep your data?',
        paragraphs: [
          'Personal data is kept only for as long as reasonably necessary for the purpose for which it was collected, including dealing with an enquiry, providing services and meeting applicable legal, accounting or contractual obligations.',
          'When personal data is no longer required, it will be deleted or securely disposed of where appropriate.',
        ],
      },
      {
        title: 'Your rights',
        paragraphs: [
          'Subject to applicable law, you may have the right to request access to your personal data, correction of inaccurate data, deletion, restriction of processing, objection to certain processing and portability of data where applicable.',
          'To exercise your rights, contact us at info@wrap-interior.com. We may need to request reasonable information to verify your identity before processing a request.',
          'You also have the right to lodge a complaint with the Spanish Data Protection Agency (Agencia Española de Protección de Datos — AEPD) if you believe your data-protection rights have not been respected.',
        ],
      },
      {
        title: 'Changes to this policy',
        paragraphs: [
          'This Privacy Policy may be updated from time to time to reflect changes to the website, services or applicable legal requirements. The latest version will always be published on this page.',
        ],
      },
    ],
  },

  cookies: {
    title: 'Cookies',
    intro:
      'This website is designed to use only limited browser technologies and does not currently use advertising or marketing cookies.',

    sections: [
      {
        title: 'Cookies used by this website',
        paragraphs: [
          'Wrap Interior does not currently use advertising, marketing or social-media tracking cookies on this website.',
          'Vercel Web Analytics is used for website statistics. Vercel states that its Web Analytics does not use cookies and instead uses a short-lived request-based identifier for analytics purposes.',
        ],
      },
      {
        title: 'Language preference',
        paragraphs: [
          'The website stores your selected language in your browser using localStorage. This allows the website to remember whether you selected Dutch, English or Spanish when you return.',
          'This information is stored locally in your browser and is not a cookie or a marketing tracker.',
        ],
      },
      {
        title: 'Third-party services',
        paragraphs: [
          'This website may link to third-party services such as WhatsApp, Google Maps or other external platforms. Once you leave the Wrap Interior website or interact directly with those services, their own cookies, privacy policies and technologies may apply.',
        ],
      },
      {
        title: 'Managing browser storage',
        paragraphs: [
          'You can clear localStorage and other browser data through your browser settings. Blocking or clearing browser storage may affect the website’s ability to remember your language preference.',
        ],
      },
      {
        title: 'Updates',
        paragraphs: [
          'If additional cookies or similar technologies are introduced in the future, this page will be updated and any consent requirements that apply will be addressed.',
        ],
      },
    ],
  },
},
    footer: {
  tagline: 'Fresh interiors. Without the renovation.',
  basedIn: 'Based in Jávea',
  coveringArea: 'Covering the Costa Blanca',
  serviceAreaTitle: 'Service area',
  serviceArea: `${areas} and the wider Costa Blanca / Alicante province.`,
  languagesTitle: 'Languages',
  contactTitle: 'Contact',
  legalNotice: 'Legal Notice',
  privacy: 'Privacy Policy',
  cookies: 'Cookies',
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
    homepageExplore: {
  eyebrow: 'Descubre Wrap Interior',
  heading: 'Todo lo que necesitas, en un solo lugar.',
  sub: 'Descubre nuestros proyectos, conoce el proceso, consulta los precios orientativos y encuentra respuestas antes de empezar.',
  links: {
    portfolio: {
      title: 'Proyectos',
      description: 'Descubre transformaciones y acabados de proyectos realizados.',
    },
    materials: {
      title: 'Materiales',
      description: 'Explora nuestra gama de colores, maderas, piedra, metales y mucho más.',
    },
    process: {
      title: 'Proceso',
      description: 'Descubre cómo se desarrolla un proyecto desde el primer contacto hasta el acabado final.',
    },
    pricing: {
      title: 'Precios',
      description: 'Consulta los precios orientativos de nuestros proyectos antes de contactar.',
    },
    reviews: {
      title: 'Opiniones',
      description: 'Lee lo que nuestros clientes cuentan sobre su experiencia.',
    },
    faq: {
      title: 'Preguntas frecuentes',
      description: 'Respuestas a las preguntas que recibimos con más frecuencia.',
    },
    contact: {
      title: 'Contacto',
      description: 'Envíanos fotos de tu espacio y empieza tu consulta.',
    },
  },
},
gallery: {
  heading: 'Antes y después',
  sub: 'Transformaciones reales. Arrastra el deslizador para ver la diferencia.',
  locationLabel: 'Localidad',
  beforeAfter: 'Antes / después',
  alt: 'Interior antes y después del vinilado',
},
materials: {
  eyebrow: 'Materiales',
  heading: 'ELIGE TU MATERIAL.',
  sub: 'Descubre nuestra selección de colores, maderas, efectos piedra, metales y otros materiales para tu interior.',
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
  ctaHeading: '¿TIENES ALGO DISTINTO EN MENTE?',
  ctaSub:
    'Tenemos más de 500 acabados entre los que elegir. Si no encuentras aquí lo que buscas, pregúntanos. Envíanos una foto de tu interior y cuéntanos qué tienes en mente. Te ayudaremos a encontrar el material adecuado para tu proyecto.',
},
    process: {
      heading: 'Nuestro proceso',
      sub: 'Seis pasos cuidadosos. El acabado define el resultado.',
      callout: 'El acabado define el resultado.',
      steps: [
        { title: 'Desmontar', desc: 'Desmontamos cuidadosamente todas las piezas desmontables y las llevamos a nuestro taller.' },
        { title: 'Limpiar y desengrasar', desc: 'Todas las piezas desmontables se limpian y desengrasan a fondo en nuestro taller.' },
        { title: 'Vinilar en el taller', desc: 'A continuación, las piezas se vinilan en las condiciones ideales del taller para conseguir el mejor acabado posible.' },
        { title: 'Bordes y esquinas precisos', desc: 'Los bordes y las esquinas se rematan con precisión para conseguir un acabado limpio y duradero.' },
        { title: 'Partes fijas in situ', desc: 'Los paneles y piezas fijas se vinilan y se rematan cuidadosamente in situ.' },
        { title: 'Montar y revisar', desc: 'Todo se vuelve a instalar, ajustar y revisar cuidadosamente.' },
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
      price: 'desde 1.200 €',
    },
    {
      name: 'Cocina media',
      scope: '±11–18 frentes',
      price: '1.700 € – 2.500 €',
      popular: true,
    },
    {
      name: 'Cocina grande',
      scope: 'muchos frentes, columnas, isla o partes fijas',
      price: 'desde 2.500 €',
    },
  ],
  warrantyTitle: '5 años de garantía',
  warrantyText:
  'Nuestro servicio de vinilado incluye 5 años de garantía frente a defectos del material y errores de instalación. Se aplican exclusiones; consulta nuestras preguntas frecuentes para conocer todas las condiciones.',
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
        'Estoy encantada con el trabajo de Maurits. Le pedí cambiar el color del mostrador de mi centro de estética con vinilo y el resultado ha sido espectacular: pasó de un gris apagado a un tono dorado elegante que encaja perfectamente con la imagen de Onix. Trabajo limpio, acabados impecables y muy profesional en todo momento. Además, es una opción mucho más económica que cambiar el mueble. ¡100% recomendable! ⭐⭐⭐⭐⭐',
      name: 'Oana Onix',
      rating: 5,
    },
    {
      quote:
        'Maurits werkt netjes, snel en het resultaat is goed! De communicatie is goed en het werken met Maurits is betrouwbaar. Hij is erg behulpzaam en kundig! Ik kan regelmatig bij hem terecht.',
      name: 'Chantal Dijkhuizen',
      translatedQuote: 
        "¡Maurits trabaja de forma limpia y eficiente, y el resultado es excelente! La comunicación es muy buena y trabajar con él es una garantía de confianza. Es muy atento, servicial y profesional, y siempre puedo contar con él cuando lo necesito.", 
      rating: 5,
    },
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
  q: '¿Ofrecéis garantía?',
  a: 'Ofrecemos 5 años de garantía frente a defectos del material y errores de instalación del vinilo decorativo aplicado por nosotros. Quedan excluidos los daños causados por un uso o mantenimiento inadecuado, arañazos, golpes, objetos afilados o el contacto directo con objetos calientes. Esta garantía no afecta a los derechos legales del consumidor.',
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
    heading: 'Visítanos solo con cita previa en Els Poblets.',
    sub: 'Nuestro taller está situado en Els Poblets, entre Dénia y Ondara.',
    addressLabel: 'Dirección',
    directions: 'Cómo llegar',
    mapTitle: 'Taller de Wrap Interior en Els Poblets',
  },

  bottomCta: {
    heading: '¿Listo para transformar tu interior?',
    sub: 'Envíanos unas fotos por WhatsApp y cuéntanos qué tienes en mente.',
    button: 'Enviar fotos por WhatsApp',
  },
},
    legal: {
  legalNotice: {
    title: 'Aviso Legal',
    intro:
      'Este sitio web es gestionado por Maurits van der Aa, que desarrolla su actividad como autónomo bajo el nombre comercial Wrap Interior.',

    sections: [
      {
        title: 'Titular del sitio web',
        paragraphs: [
          'Nombre: Maurits van der Aa',
          'Nombre comercial: Wrap Interior',
          'NIE / NIF: Z1441902Z',
          'Domicilio/establecimiento: Avinguda Jaume I, 23b, 03779 Els Poblets, Alicante, España',
          'Email: info@wrap-interior.com',
          'Teléfono: +34 675 153 105',
        ],
      },
      {
        title: 'Sobre este sitio web',
        paragraphs: [
          'Wrap Interior ofrece información sobre servicios de vinilado y revestimiento de interiores para cocinas, muebles, puertas, muebles de baño y otras superficies interiores.',
          'El sitio web tiene como finalidad informar sobre nuestros servicios, materiales, proceso de trabajo, precios orientativos, proyectos realizados y formas de contacto.',
        ],
      },
      {
        title: 'Precios e IVA',
        paragraphs: [
          'Los precios mostrados en este sitio web incluyen el IVA aplicable, salvo que se indique expresamente lo contrario. Los precios orientativos están sujetos a confirmación después de valorar el proyecto concreto, los materiales elegidos y el trabajo necesario.',
        ],
      },
      {
        title: 'Propiedad intelectual',
        paragraphs: [
          'Los contenidos de este sitio web, incluidos los textos, las fotografías, las imágenes, los elementos gráficos, la identidad visual y los logotipos, pueden estar protegidos por derechos de propiedad intelectual. Dichos derechos pertenecen a sus respectivos titulares. Los materiales de terceros se reproducen o muestran de conformidad con las autorizaciones y licencias aplicables. La reproducción o reutilización de material protegido requiere la autorización correspondiente, salvo que resulte aplicable una excepción legal.',
          'Puedes consultar y utilizar el sitio web con fines personales e informativos. No está permitida la reproducción, distribución, modificación o utilización comercial de los contenidos del sitio sin autorización previa.',
        ],
      },
      {
        title: 'Uso del sitio web',
        paragraphs: [
          'Los visitantes deben utilizar este sitio web de forma lícita y no podrán interferir en su funcionamiento, comprometer su seguridad ni infringir los derechos de Wrap Interior o de terceros.',
          'La información de este sitio web se proporciona con carácter general. Aunque procuramos mantenerla actualizada y correcta, la idoneidad de una solución, los precios, materiales y plazos deben confirmarse directamente con Wrap Interior antes de contratar un servicio.',
        ],
      },
      {
        title: 'Enlaces externos',
        paragraphs: [
          'Este sitio web puede incluir enlaces a servicios o sitios web de terceros, incluidos servicios de comunicación, mapas y redes sociales. Estos servicios tienen sus propias condiciones y políticas de privacidad, y Wrap Interior no se responsabiliza de sus contenidos o prácticas.',
        ],
      },
      {
        title: 'Responsabilidad',
        paragraphs: [
          'Wrap Interior procura razonablemente que el sitio web esté disponible y que su contenido sea correcto. Sin embargo, no podemos garantizar que el sitio esté siempre disponible, libre de errores o de problemas técnicos.',
          'Nada de lo indicado en este sitio web constituye una garantía de que un determinado resultado, material o servicio sea adecuado para todos los proyectos. La idoneidad se valora en cada proyecto de forma individual.',
        ],
      },
      {
        title: 'Legislación aplicable',
        paragraphs: [
          'Este sitio web y su utilización se rigen por la legislación española aplicable, sin perjuicio de los derechos imperativos que correspondan a los consumidores conforme a la normativa aplicable.',
        ],
      },
    ],
  },

  privacy: {
    title: 'Política de Privacidad',
    intro:
      'Wrap Interior respeta tu privacidad y trata los datos personales de acuerdo con la normativa aplicable en materia de protección de datos, incluido el Reglamento General de Protección de Datos (RGPD) y la legislación española.',

    sections: [
      {
        title: '¿Quién es el responsable del tratamiento?',
        paragraphs: [
          'Responsable: Maurits van der Aa, que desarrolla su actividad bajo el nombre comercial Wrap Interior.',
          'NIE / NIF: Z1441902Z',
          'Domicilio/establecimiento: Avinguda Jaume I, 23b, 03779 Els Poblets, Alicante, España',
          'Email: info@wrap-interior.com',
          'Teléfono: +34 675 153 105',
        ],
      },
      {
        title: '¿Qué datos personales podemos recibir?',
        paragraphs: [
          'Cuando contactas con Wrap Interior, podemos recibir información como tu nombre, dirección de email, número de teléfono, el contenido de tu consulta y datos relacionados con tu proyecto.',
          'Si proporcionas fotografías, información sobre la vivienda, medidas, una dirección u otros datos del proyecto en relación con una consulta o presupuesto, estos datos también podrán tratarse cuando sean necesarios para responderte o preparar el servicio solicitado.',
        ],
      },
      {
        title: '¿Cómo recibimos tus datos?',
        paragraphs: [
          'Este sitio web no utiliza actualmente un formulario de contacto ni ofrece una suscripción a newsletter.',
          'Puedes contactar directamente con Wrap Interior por email, teléfono o WhatsApp. La información que decidas proporcionar a través de estos canales se tratará para comunicarnos contigo y gestionar tu consulta.',
        ],
      },
      {
        title: '¿Para qué utilizamos tus datos?',
        paragraphs: [
          'Utilizamos los datos personales para responder consultas, hablar sobre posibles proyectos, proporcionar información, preparar presupuestos, organizar o prestar servicios, comunicarnos con clientes y potenciales clientes y cumplir obligaciones legales aplicables.',
          'Dependiendo de la situación, el tratamiento puede ser necesario para adoptar medidas a petición tuya antes de formalizar un contrato, ejecutar un contrato, cumplir una obligación legal o atender un interés legítimo. Cuando sea necesario obtener un consentimiento específico, se solicitará por separado.',
        ],
      },
      {
        title: 'Analítica web',
        paragraphs: [
          'Este sitio web utiliza Vercel Web Analytics para comprender cómo se utiliza la web, por ejemplo, qué páginas se visitan y cuáles son los patrones generales de tráfico.',
          'Según Vercel, Web Analytics no utiliza cookies. Utiliza un identificador de corta duración derivado de la solicitud recibida y diseñado para evitar el seguimiento persistente entre diferentes sitios web. La información analítica puede incluir datos como páginas visitadas, información de referencia y datos generales sobre navegador, dispositivo, sistema operativo y ubicación geográfica.',
        ],
      },
      {
        title: '¿Con quién podemos compartir tus datos?',
        paragraphs: [
          'Los datos personales pueden ser tratados por proveedores de servicios necesarios para el funcionamiento de la web o para comunicarnos contigo. Esto puede incluir proveedores de alojamiento y analítica y servicios de comunicación que tú decidas utilizar, como WhatsApp.',
          'No vendemos tus datos personales ni los utilizamos con fines publicitarios o de marketing.',
        ],
      },
      {
        title: '¿Cuánto tiempo conservamos tus datos?',
        paragraphs: [
          'Los datos personales se conservarán únicamente durante el tiempo razonablemente necesario para la finalidad para la que fueron recogidos, incluida la gestión de consultas, la prestación de servicios y el cumplimiento de obligaciones legales, administrativas o contractuales.',
          'Cuando los datos personales ya no sean necesarios, se eliminarán o destruirán de forma segura cuando corresponda.',
        ],
      },
      {
        title: 'Tus derechos',
        paragraphs: [
          'De acuerdo con la legislación aplicable, puedes tener derecho a solicitar el acceso a tus datos personales, su rectificación, supresión, limitación del tratamiento, oposición a determinados tratamientos y portabilidad de los datos cuando corresponda.',
          'Para ejercer tus derechos, puedes contactar con nosotros en info@wrap-interior.com. Podemos solicitar información razonable para verificar tu identidad antes de tramitar una solicitud.',
          'También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si consideras que no se han respetado tus derechos en materia de protección de datos.',
        ],
      },
      {
        title: 'Cambios en esta política',
        paragraphs: [
          'Esta Política de Privacidad puede actualizarse ocasionalmente para reflejar cambios en el sitio web, los servicios o la legislación aplicable. La versión más reciente estará siempre publicada en esta página.',
        ],
      },
    ],
  },

  cookies: {
    title: 'Cookies',
    intro:
      'Este sitio web está diseñado para utilizar únicamente tecnologías limitadas del navegador y actualmente no utiliza cookies publicitarias ni de marketing.',

    sections: [
      {
        title: 'Cookies utilizadas en este sitio web',
        paragraphs: [
          'Wrap Interior no utiliza actualmente cookies publicitarias, de marketing ni de seguimiento de redes sociales en este sitio web.',
          'Para obtener estadísticas de uso se utiliza Vercel Web Analytics. Según Vercel, su servicio de analítica no utiliza cookies, sino un identificador de corta duración basado en la solicitud recibida.',
        ],
      },
      {
        title: 'Preferencia de idioma',
        paragraphs: [
          'El sitio web guarda el idioma seleccionado en el navegador mediante localStorage. Esto permite recordar si has elegido neerlandés, inglés o español cuando vuelves a visitar la web.',
          'Esta información se almacena localmente en tu navegador y no es una cookie ni un sistema de seguimiento con fines comerciales.',
        ],
      },
      {
        title: 'Servicios de terceros',
        paragraphs: [
          'Este sitio web puede enlazar con servicios de terceros como WhatsApp, Google Maps u otras plataformas externas. Cuando abandonas el sitio web de Wrap Interior o interactúas directamente con estos servicios, pueden aplicarse sus propias cookies, políticas de privacidad y tecnologías.',
        ],
      },
      {
        title: 'Gestión del almacenamiento del navegador',
        paragraphs: [
          'Puedes eliminar localStorage y otros datos del navegador desde la configuración de tu navegador. Bloquear o eliminar el almacenamiento del navegador puede afectar a la capacidad de la web para recordar tu preferencia de idioma.',
        ],
      },
      {
        title: 'Actualizaciones',
        paragraphs: [
          'Si en el futuro se añaden cookies o tecnologías similares, esta página se actualizará y se aplicarán los requisitos de consentimiento que correspondan.',
        ],
      },
    ],
  },
},
    footer: {
  tagline: 'Interiores renovados. Sin obras.',
  basedIn: 'Con base en Jávea',
  coveringArea: 'Trabajamos en toda la Costa Blanca',
  serviceAreaTitle: 'Zona de servicio',
  serviceArea: `${areas} y toda la Costa Blanca / provincia de Alicante.`,
  languagesTitle: 'Idiomas',
  contactTitle: 'Contacto',
  legalNotice: 'Aviso Legal',
  privacy: 'Política de Privacidad',
  cookies: 'Cookies',
},
  },
}
