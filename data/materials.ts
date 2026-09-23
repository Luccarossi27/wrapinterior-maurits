export type MaterialCategory =
  | 'Wood'
  | 'Stone'
  | 'Solid Colour'
  | 'Metal'
  | 'Leather'
  | 'Textile'
  | 'Decorative'
  | 'Painted Wood'

export type Material = {
  id: string
  name: string
  code: string
  category: MaterialCategory
  colour: string
  colourFamily: string
  finish: string
  texture: string
  image: string
  available: boolean
}

export const materials: Material[] = [
  {
    id: 'arbor-zx125',
    name: 'Arbor',
    code: 'ZX125',
    category: 'Wood',
    colour: 'Dark Brown',
    colourFamily: 'Earth',
    finish: 'Matte',
    texture: 'Textured',
    image:
      'https://www.resimdo.nl/shop/media/image/ZX125-Uebersicht-Walltile-3000x2250_72dpi.jpg',
    available: false,
  },
  {
    id: 'ignis-w276',
    name: 'Ignis',
    code: 'W276',
    category: 'Wood',
    colour: 'Brown',
    colourFamily: 'Earth',
    finish: 'Matte',
    texture: 'Textured',
    image:
      'https://www.resimdo.nl/shop/media/image/W276-Uebersicht-Walltile-3000x2250_72dpi.jpg',
    available: false,
  },
  {
    id: 'logium-wd001',
    name: 'Logium 2.0',
    code: 'WD001',
    category: 'Wood',
    colour: 'Brown',
    colourFamily: 'Earth',
    finish: 'Matte',
    texture: 'Textured',
    image:
      'https://www.resimdo.nl/shop/media/image/WD001-Uebersicht-Walltile-3000x2250.jpg',
    available: true,
  },
  {
    id: 'braeloft-wd022',
    name: 'Braeloft',
    code: 'WD022',
    category: 'Wood',
    colour: 'Light Brown',
    colourFamily: 'Earth',
    finish: 'Matte',
    texture: 'Textured',
    image:
      'https://www.resimdo.nl/shop/media/image/WD022-Uebersicht-Walltile-3000x2250.jpg',
    available: true,
  },
  {
    id: 'spruns-wd017',
    name: 'Spruns',
    code: 'WD017',
    category: 'Wood',
    colour: 'Brown',
    colourFamily: 'Earth',
    finish: 'Matte',
    texture: 'Textured',
    image:
      'https://www.resimdo.nl/shop/media/image/WD017-Uebersicht-Walltile-3000x2250.jpg',
    available: true,
  },
  {
    id: 'norvia-st061',
    name: 'Norvia',
    code: 'ST061',
    category: 'Stone',
    colour: 'Grey',
    colourFamily: 'Earth',
    finish: 'Matte',
    texture: 'Textured',
    image:
      'https://www.resimdo.nl/shop/media/image/ST061-Uebersicht-Walltile-3000x2250.jpg',
    available: true,
  },
  {
    id: 'lumira-st062',
    name: 'Lumira',
    code: 'ST062',
    category: 'Stone',
    colour: 'Grey',
    colourFamily: 'Earth',
    finish: 'Matte',
    texture: 'Textured',
    image:
      'https://www.resimdo.nl/shop/media/image/ST062-Uebersicht-Walltile-3000x2250.jpg',
    available: true,
  },
  {
    id: 'pale-aura-st063',
    name: 'Pale Aura',
    code: 'ST063',
    category: 'Stone',
    colour: 'White',
    colourFamily: 'White Series',
    finish: 'Matte',
    texture: 'Textured',
    image:
      'https://www.resimdo.nl/shop/media/image/ST063-Uebersicht-Walltile-3000x2250.jpg',
    available: true,
  },
  {
    id: 'syra-gold-me403',
    name: 'Syra Gold',
    code: 'ME403',
    category: 'Metal',
    colour: 'Gold',
    colourFamily: 'Summer',
    finish: 'Satin',
    texture: 'Textured',
    image:
      'https://www.resimdo.nl/shop/media/image/ME403-Uebersicht-Walltile-3000x2250_72dpi.jpg',
    available: true,
  },
  {
    id: 'syra-besh-me404',
    name: 'Syra Besh',
    code: 'ME404',
    category: 'Metal',
    colour: 'Gold',
    colourFamily: 'Summer',
    finish: 'Satin',
    texture: 'Textured',
    image:
      'https://www.resimdo.nl/shop/media/image/ME404-Uebersicht-Walltile-3000x2250.jpg',
    available: true,
  },
  {
    id: 'corten-me005',
    name: 'Corten',
    code: 'ME005',
    category: 'Metal',
    colour: 'Brown',
    colourFamily: 'Earth',
    finish: 'Matte',
    texture: 'Textured',
    image:
      'https://www.resimdo.nl/shop/media/image/ME005-Uebersicht-Walltile-3000x2250.jpg',
    available: true,
  },
  {
    id: 'mora-le012',
    name: 'Mora',
    code: 'LE012',
    category: 'Leather',
    colour: 'Brown',
    colourFamily: 'Earth',
    finish: 'Matte',
    texture: 'Textured',
    image:
      'https://www.resimdo.nl/shop/media/image/LE012-Uebersicht-Walltile-3000x2250.jpg',
    available: true,
  },
  {
    id: 'riva-le013',
    name: 'Riva',
    code: 'LE013',
    category: 'Leather',
    colour: 'Brown',
    colourFamily: 'Earth',
    finish: 'Matte',
    texture: 'Textured',
    image:
      'https://www.resimdo.nl/shop/media/image/LE013-Uebersicht-Walltile-3000x2250.jpg',
    available: true,
  },
]