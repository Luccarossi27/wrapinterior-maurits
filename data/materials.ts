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

const imageUrl = (code: string) =>
  `https://www.resimdo.nl/shop/media/image/${code}-Uebersicht-Walltile-3000x2250_72dpi.jpg`

export const materials: Material[] = [
  {
    id: 'logium-wd001',
    name: 'Logium 2.0',
    code: 'WD001',
    category: 'Wood',
    colour: 'Brown',
    colourFamily: 'Earth',
    finish: 'Matte',
    texture: 'Textured',
    image: 'https://www.resimdo.nl/shop/media/image/WD001-Uebersicht-Walltile-3000x2250.jpg',
    available: true,
  },
  {
    id: 'braeloft-wd022',
    name: 'Braeloft',
    code: 'WD022',
    category: 'Wood',
    colour: 'Light Brown',
    colourFamily: 'Rustic',
    finish: 'Matte',
    texture: 'Textured',
    image: 'https://www.resimdo.nl/shop/media/image/WD022-Uebersicht-Walltile-3000x2250.jpg',
    available: true,
  },
  {
    id: 'spruns-wd017',
    name: 'Spruns',
    code: 'WD017',
    category: 'Wood',
    colour: 'Brown',
    colourFamily: 'Rustic',
    finish: 'Matte',
    texture: 'Textured',
    image: 'https://www.resimdo.nl/shop/media/image/WD017-Uebersicht-Walltile-3000x2250.jpg',
    available: true,
  },
  {
    id: 'caprea-w302',
    name: 'Caprea',
    code: 'W302',
    category: 'Wood',
    colour: 'Brown',
    colourFamily: 'Natural',
    finish: 'Matte',
    texture: 'Textured',
    image: imageUrl('W302'),
    available: true,
  },
  {
    id: 'hazel-w931',
    name: 'Hazel',
    code: 'W931',
    category: 'Wood',
    colour: 'Dark Brown',
    colourFamily: 'Dark',
    finish: 'Matte',
    texture: 'Textured',
    image: imageUrl('W931'),
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
    image: 'https://www.resimdo.nl/shop/media/image/ST061-Uebersicht-Walltile-3000x2250.jpg',
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
    image: 'https://www.resimdo.nl/shop/media/image/ST062-Uebersicht-Walltile-3000x2250.jpg',
    available: true,
  },
  {
    id: 'pale-aura-st063',
    name: 'Pale Aura',
    code: 'ST063',
    category: 'Stone',
    colour: 'White',
    colourFamily: 'Pale',
    finish: 'Matte',
    texture: 'Textured',
    image: 'https://www.resimdo.nl/shop/media/image/ST063-Uebersicht-Walltile-3000x2250.jpg',
    available: true,
  },
  {
    id: 'litus-2-st102',
    name: 'Litus 2.0',
    code: 'ST102',
    category: 'Stone',
    colour: 'Grey',
    colourFamily: 'Industrial',
    finish: 'Satin',
    texture: 'Textured',
    image: imageUrl('ST102'),
    available: false,
  },
  {
    id: 'travertine-ns806',
    name: 'Travertine',
    code: 'NS806',
    category: 'Stone',
    colour: 'Beige',
    colourFamily: 'Natural',
    finish: 'Matte',
    texture: 'Smooth',
    image: imageUrl('NS806'),
    available: true,
  },

  {
    id: 'papilo-sand-sc007',
    name: 'Papilo Sand 2.0',
    code: 'SC007',
    category: 'Solid Colour',
    colour: 'Beige',
    colourFamily: 'Pale',
    finish: 'Matte',
    texture: 'Soft Touch',
    image: imageUrl('SC007'),
    available: false,
  },
  {
    id: 'autemo-2-spw96',
    name: 'Autemo 2.0',
    code: 'SPW96',
    category: 'Wood',
    colour: 'White',
    colourFamily: 'White Series',
    finish: 'Matte',
    texture: 'Textured',
    image: imageUrl('SPW96'),
    available: true,
  },
  {
    id: 'moss-s202',
    name: 'Moss',
    code: 'S202',
    category: 'Solid Colour',
    colour: 'Green',
    colourFamily: 'Forest',
    finish: 'Satin',
    texture: 'Textured',
    image: imageUrl('S202'),
    available: false,
  },
  {
    id: 'mint-s214',
    name: 'Mint',
    code: 'S214',
    category: 'Solid Colour',
    colour: 'Light Green',
    colourFamily: 'Forest',
    finish: 'Satin',
    texture: 'Textured',
    image: imageUrl('S214'),
    available: true,
  },

  {
    id: 'syra-gold-me403',
    name: 'Syra Gold',
    code: 'ME403',
    category: 'Metal',
    colour: 'Gold',
    colourFamily: 'Gold',
    finish: 'Satin',
    texture: 'Textured',
    image: imageUrl('ME403'),
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
    image: imageUrl('ME404'),
    available: true,
  },
  {
    id: 'corten-me005',
    name: 'Corten',
    code: 'ME005',
    category: 'Metal',
    colour: 'Brown',
    colourFamily: 'Raw',
    finish: 'Matte',
    texture: 'Textured',
    image: 'https://www.resimdo.nl/shop/media/image/ME005-Uebersicht-Walltile-3000x2250.jpg',
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
    image: 'https://www.resimdo.nl/shop/media/image/LE012-Uebersicht-Walltile-3000x2250.jpg',
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
    image: 'https://www.resimdo.nl/shop/media/image/LE013-Uebersicht-Walltile-3000x2250.jpg',
    available: true,
  },

  {
    id: 'tweed-rf007',
    name: 'Tweed',
    code: 'RF007',
    category: 'Textile',
    colour: 'Grey',
    colourFamily: 'Fabric',
    finish: 'Matte',
    texture: 'Textured',
    image: imageUrl('RF007'),
    available: true,
  },

  {
    id: 'pictis-caffora-pw109',
    name: 'Pictis Caffora',
    code: 'PW109',
    category: 'Painted Wood',
    colour: 'Brown',
    colourFamily: 'Painted Wood',
    finish: 'Matte',
    texture: 'Textured',
    image: 'https://www.resimdo.nl/shop/media/image/PW109-Uebersicht-Walltile-3000x2250.jpg',
    available: true,
  },

  {
    id: 'diamond-nix-sc053',
    name: 'Diamond Nix',
    code: 'SC053',
    category: 'Solid Colour',
    colour: 'White',
    colourFamily: 'White Series',
    finish: 'Matte',
    texture: 'Smooth',
    image: imageUrl('SC053'),
    available: false,
  },

  {
    id: 'lion-2-sc153',
    name: 'Lion 2.0',
    code: 'SC153',
    category: 'Solid Colour',
    colour: 'Beige',
    colourFamily: 'Pale',
    finish: 'Satin',
    texture: 'Textured',
    image: imageUrl('SC153'),
    available: false,
  },

    {
    id: 'rusticata-wd016',
    name: 'Rusticata',
    code: 'WD016',
    category: 'Wood',
    colour: 'Brown',
    colourFamily: 'Rustic',
    finish: 'Satin',
    texture: 'Textured',
    image:
      'https://www.resimdo.nl/shop/media/image/WD016-Uebersicht-Walltile-3000x2250.jpg',
    available: true,
  },

  {
    id: 'pictis-mud-2-pw106',
    name: 'Pictis Mud 2.0',
    code: 'PW106',
    category: 'Painted Wood',
    colour: 'Brown',
    colourFamily: 'Earth',
    finish: 'Matte',
    texture: 'Textured',
    image:
      'https://www.resimdo.nl/shop/media/image/PW106-Uebersicht-Walltile-3000x2250.jpg',
    available: true,
  },

  {
    id: 'pictis-alnix-pw111',
    name: 'Pictis Alnix',
    code: 'PW111',
    category: 'Painted Wood',
    colour: 'White',
    colourFamily: 'White Series',
    finish: 'Matte',
    texture: 'Textured',
    image:
      'https://www.resimdo.nl/shop/media/image/PW111-Uebersicht-Walltile-3000x2250.jpg',
    available: true,
  },

  {
    id: 'dark-concrete-ns403',
    name: 'Dark Concrete',
    code: 'NS403',
    category: 'Stone',
    colour: 'Grey',
    colourFamily: 'Dark',
    finish: 'Matte',
    texture: 'Textured',
    image:
      'https://www.resimdo.nl/shop/media/image/NS403-Uebersicht-Walltile-3000x2250_72dpi.jpg',
    available: true,
  },

  {
    id: 'papilo-snow-lux-sc015',
    name: 'Papilo Snow Lux',
    code: 'SC015',
    category: 'Solid Colour',
    colour: 'White',
    colourFamily: 'White Series',
    finish: 'Matte',
    texture: 'Soft Touch',
    image:
  'https://www.resimdo.nl/shop/media/image/SC015-Uebersicht-Walltile-3000x2250.jpg',
    available: true,
  },

   {
    id: 'ibis-w823',
    name: 'Ibis',
    code: 'W823',
    category: 'Wood',
    colour: 'Dark Brown',
    colourFamily: 'Dark',
    finish: 'Matte',
    texture: 'Textured',
    image:
      'https://www.resimdo.nl/shop/media/image/W823-Uebersicht-Walltile-3000x2250_72dpi.jpg',
    available: true,
  },

  {
    id: 'eris-pz615',
    name: 'Eris',
    code: 'PZ615',
    category: 'Wood',
    colour: 'Dark Brown',
    colourFamily: 'Dark',
    finish: 'Matte',
    texture: 'Textured',
    image:
      'https://www.resimdo.nl/shop/media/image/PZ615-Uebersicht-Walltile-3000x2250_72dpi.jpg',
    available: true,
  },

  {
    id: 'arbor-pz010',
    name: 'Arbor',
    code: 'PZ010',
    category: 'Wood',
    colour: 'Dark Brown',
    colourFamily: 'Dark',
    finish: 'Matte',
    texture: 'Textured',
    image:
  'https://www.resimdo.nl/shop/media/image/ZX125-Uebersicht-Walltile-3000x2250_72dpi.jpg',
    available: true,
  },

  {
    id: 'milkshake-w944',
    name: 'Milkshake',
    code: 'W944',
    category: 'Wood',
    colour: 'Beige',
    colourFamily: 'Pale',
    finish: 'Matte',
    texture: 'Textured',
    image:
      'https://www.resimdo.nl/shop/media/image/W944-Uebersicht-Walltile-3000x2250_72dpi.jpg',
    available: true,
  },

  {
    id: 'vetus-2-st156',
    name: 'Vetus 2.0',
    code: 'ST156',
    category: 'Stone',
    colour: 'Grey',
    colourFamily: 'Dark',
    finish: 'High Gloss',
    texture: 'Smooth',
    image:
  'https://www.resimdo.nl/shop/media/image/ST156-Uebersicht-Walltile-3000x2250.jpg',
    available: true,
  },

  {
    id: 'calidum-2-wd307',
    name: 'Calidum 2.0',
    code: 'WD307',
    category: 'Wood',
    colour: 'Brown',
    colourFamily: 'Natural',
    finish: 'Satin',
    texture: 'Textured',
    image:
  'https://www.resimdo.nl/shop/media/image/WD307-Uebersicht-Walltile-3000x2250.jpg',
    available: true,
  }, 

  {
  id: 'woven-luma-te010',
  name: 'Woven Luma',
  code: 'TE010',
  category: 'Textile',
  colour: 'White',
  colourFamily: 'Fabric',
  finish: 'Satin',
  texture: 'Textured',
  image:
    'https://www.resimdo.nl/shop/media/image/TE010-Uebersicht-Walltile-3000x2250.jpg',
  available: true,
},

{
  id: 'woven-fina-te012',
  name: 'Woven Fina',
  code: 'TE012',
  category: 'Textile',
  colour: 'Beige',
  colourFamily: 'Fabric',
  finish: 'Matte',
  texture: 'Textured',
  image:
    'https://www.resimdo.nl/shop/media/image/TE012-Uebersicht-Walltile-3000x2250.jpg',
  available: true,
},

{
  id: 'woven-tana-te011',
  name: 'Woven Tana',
  code: 'TE011',
  category: 'Textile',
  colour: 'Grey',
  colourFamily: 'Fabric',
  finish: 'Matte',
  texture: 'Textured',
  image:
    'https://www.resimdo.nl/shop/media/image/TE011-Uebersicht-Walltile-3000x2250.jpg',
  available: true,
},

{
  id: 'woven-sable-te014',
  name: 'Woven Sable',
  code: 'TE014',
  category: 'Textile',
  colour: 'Dark Brown',
  colourFamily: 'Fabric',
  finish: 'Satin',
  texture: 'Textured',
  image:
    'https://www.resimdo.nl/shop/media/image/TE014-Uebersicht-Walltile-3000x2250.jpg',
  available: true,
},

{
  id: 'fibra-linen-te008',
  name: 'Fibra Linen',
  code: 'TE008',
  category: 'Textile',
  colour: 'Beige',
  colourFamily: 'Fabric',
  finish: 'Satin',
  texture: 'Textured',
  image:
    'https://www.resimdo.nl/shop/media/image/TE202-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  available: true,
},

{
  id: 'fibra-stone-te005',
  name: 'Fibra Stone',
  code: 'TE005',
  category: 'Textile',
  colour: 'Grey',
  colourFamily: 'Fabric',
  finish: 'Satin',
  texture: 'Textured',
  image:
    'https://www.resimdo.nl/shop/media/image/TE203-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  available: true,
},

{
  id: 'materia-ns820',
  name: 'Materia',
  code: 'NS820',
  category: 'Textile',
  colour: 'Dark Brown',
  colourFamily: 'Fabric',
  finish: 'Matte',
  texture: 'Textured',
  image:
    'https://www.resimdo.nl/shop/media/image/NS820-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  available: true,
},

{
  id: 'candor-pw011',
  name: 'Candor',
  code: 'PW011',
  category: 'Painted Wood',
  colour: 'White',
  colourFamily: 'Painted Wood',
  finish: 'Satin',
  texture: 'Textured',
  image:
    'https://www.resimdo.nl/shop/media/image/PW011-Uebersicht-Walltile-3000x2250.jpg',
  available: true,
},

{
  id: 'albulus-pw012',
  name: 'Albulus',
  code: 'PW012',
  category: 'Painted Wood',
  colour: 'White',
  colourFamily: 'Painted Wood',
  finish: 'Matte',
  texture: 'Textured',
  image:
    'https://www.resimdo.nl/shop/media/image/PW012-Uebersicht-Walltile-3000x2250.jpg',
  available: true,
},

{
  id: 'pure-alba-ps502',
  name: 'Pure Alba',
  code: 'PS502',
  category: 'Decorative',
  colour: 'White',
  colourFamily: 'White Series',
  finish: 'Matte',
  texture: 'Textured',
  image:
    'https://www.resimdo.nl/shop/media/image/PS502-Uebersicht-Walltile-3000x2250.jpg',
  available: true,
},
]