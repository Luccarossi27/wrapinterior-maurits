export type MaterialCategory =
  | 'Wood'
  | 'Stone'
  | 'Solid Colour'
  | 'Metallic'
  | 'Leather'
  | 'Textile'
  | 'Painted Wood'
  | 'Abstract'

export type Material = {
  id: string
  name: string
  code: string
  category: MaterialCategory
  colour: string[]
  image: string
}

const imageUrl = (code: string) =>
  `https://www.resimdo.nl/shop/media/image/${code}-Uebersicht-Walltile-3000x2250_72dpi.jpg`

export const materials: Material[] = [
  {
    id: 'logium-wd001',
    name: 'Logium 2.0',
    code: 'WD001',
    category: 'Wood',
    colour: ['Beige'],
    image:
      'https://www.resimdo.nl/shop/media/image/WD001-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'braeloft-wd022',
    name: 'Braeloft',
    code: 'WD022',
    category: 'Wood',
    colour: ['Brown', 'Beige'], 
    image:
      'https://www.resimdo.nl/shop/media/image/WD022-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'spruns-wd017',
    name: 'Spruns',
    code: 'WD017',
    category: 'Wood',
    colour: ['Beige'], 
    image:
      'https://www.resimdo.nl/shop/media/image/WD017-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'caprea-w302',
    name: 'Caprea',
    code: 'W302',
    category: 'Wood',
    colour: ['Brown'],
    image: 'https://www.resimdo.es/shop/media/image/W302-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'hazel-w931',
    name: 'Hazel',
    code: 'W931',
    category: 'Wood',
    colour: ['Brown'],
    image: 'https://www.resimdo.es/shop/media/image/W931-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },

  {
    id: 'norvia-st061',
    name: 'Norvia',
    code: 'ST061',
    category: 'Stone',
    colour: ['Grey'],
    image:
      'https://www.resimdo.nl/shop/media/image/ST061-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'lumira-st062',
    name: 'Lumira',
    code: 'ST062',
    category: 'Stone',
    colour: ['Grey'],
    image:
      'https://www.resimdo.nl/shop/media/image/ST062-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'pale-aura-st063',
    name: 'Pale Aura',
    code: 'ST063',
    category: 'Stone',
    colour: ['Beige'],
    image:
      'https://www.resimdo.nl/shop/media/image/ST063-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'litus-ns121',
    name: 'Litus',
    code: 'NS121',
    category: 'Stone',
    colour: ['Beige'],
    image:
      'https://www.resimdo.es/shop/media/image/NS121-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'travertin-ns806',
    name: 'Travertin',
    code: 'NS806',
    category: 'Stone',
    colour: ['Beige'],
    image: 'https://www.resimdo.es/shop/media/image/NS806-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },

  {
    id: 'papilo-sand-smt04',
    name: 'Papilo Sand',
    code: 'SMT04',
    category: 'Solid Colour',
    colour: ['Beige'],
    image: 'https://www.resimdo.es/shop/media/image/SMT04-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'autemo-spw96',
    name: 'Autemo',
    code: 'SPW96',
    category: 'Wood',
    colour: ['Brown'],
    image: 'https://www.resimdo.es/shop/media/image/SPW96-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'moss-s202',
    name: 'Moss',
    code: 'S202',
    category: 'Solid Colour',
    colour: ['Green'],
    image: imageUrl('S202'),
  },
  {
    id: 'mint-s214',
    name: 'Mint',
    code: 'S214',
    category: 'Solid Colour',
    colour: ['Green'],
    image: imageUrl('S214'),
  },

  {
    id: 'syra-gold-me001',
    name: 'Syra Gold',
    code: 'ME001',
    category: 'Metallic',
    colour: ['Gold', 'Yellow'], 
    image:
      'https://www.resimdo.es/shop/media/image/ME403-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'syra-besh-me002',
    name: 'Syra Besh',
    code: 'ME002',
    category: 'Metallic',
    colour: ['Gold', 'Yellow'], 
    image:
      'https://www.resimdo.es/shop/media/image/ME404-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'corten-me005',
    name: 'Corten',
    code: 'ME005',
    category: 'Metallic',
    colour: ['Beige', 'Gold'], 
    image:
      'https://www.resimdo.nl/shop/media/image/ME005-Uebersicht-Walltile-3000x2250.jpg',
  },

  {
    id: 'mora-le012',
    name: 'Mora',
    code: 'LE012',
    category: 'Leather',
    colour: ['Beige'],
    image:
      'https://www.resimdo.nl/shop/media/image/LE012-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'riva-le013',
    name: 'Riva',
    code: 'LE013',
    category: 'Leather',
    colour: ['Beige'],
    image:
      'https://www.resimdo.nl/shop/media/image/LE013-Uebersicht-Walltile-3000x2250.jpg',
  },

  {
    id: 'tweed-night-rf007',
    name: 'Tweed Night',
    code: 'RF007',
    category: 'Textile',
    colour: ['Grey'],
    image: 'https://www.resimdo.es/shop/media/image/RF007-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'lion-s215',
    name: 'Lion',
    code: 'S215',
    category: 'Solid Colour',
    colour: ['Beige'],
    image: 'https://www.resimdo.es/shop/media/image/S215-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'pictis-mud-2-pw106',
    name: 'Pictis Mud 2.0',
    code: 'PW106',
    category: 'Painted Wood',
    colour: ['Brown'],
    image:
      'https://www.resimdo.nl/shop/media/image/PW106-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'pictis-alnix-pw111',
    name: 'Pictis Alnix',
    code: 'PW111',
    category: 'Painted Wood',
    colour: ['White'],
    image:
      'https://www.resimdo.nl/shop/media/image/PW111-Uebersicht-Walltile-3000x2250.jpg',
  },

  {
    id: 'rudis-dark-ns403',
    name: 'Rudis Dark',
    code: 'NS403',
    category: 'Stone',
    colour: ['Grey'],
    image:
      'https://www.resimdo.nl/shop/media/image/NS403-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },

  {
    id: 'papilo-snow-lux-sc015',
    name: 'Papilo Snow Lux',
    code: 'SC015',
    category: 'Solid Colour',
    colour: ['White'],
    image:
      'https://www.resimdo.nl/shop/media/image/SC015-Uebersicht-Walltile-3000x2250.jpg',
  },

  {
    id: 'ibis-w823',
    name: 'Ibis',
    code: 'W823',
    category: 'Wood',
    colour: ['Brown'],
    image:
      'https://www.resimdo.nl/shop/media/image/W823-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'eris-pz615',
    name: 'Eris',
    code: 'PZ615',
    category: 'Wood',
    colour: ['Brown'],
    image:
      'https://www.resimdo.nl/shop/media/image/PZ615-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'arbor-pz010',
    name: 'Arbor',
    code: 'PZ010',
    category: 'Wood',
    colour: ['Brown'],
    image:
      'https://www.resimdo.nl/shop/media/image/ZX125-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'milkshake-w944',
    name: 'Milkshake',
    code: 'W944',
    category: 'Wood',
    colour: ['Beige'],
    image:
      'https://www.resimdo.nl/shop/media/image/W944-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'vetus-2-st156',
    name: 'Vetus 2.0',
    code: 'ST156',
    category: 'Stone',
    colour: ['Beige'],
    image:
      'https://www.resimdo.nl/shop/media/image/ST156-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'calidum-spw17',
    name: 'Calidum',
    code: 'SPW17',
    category: 'Wood',
    colour: ['Brown', 'Beige'], 
    image:
      'https://www.resimdo.es/shop/media/image/SPW17-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },

  {
    id: 'woven-luma-te010',
    name: 'Woven Luma',
    code: 'TE010',
    category: 'Textile',
    colour: ['White'],
    image:
      'https://www.resimdo.nl/shop/media/image/TE010-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'woven-fina-te012',
    name: 'Woven Fina',
    code: 'TE012',
    category: 'Textile',
    colour: ['Beige'],
    image:
      'https://www.resimdo.nl/shop/media/image/TE012-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'woven-tana-te011',
    name: 'Woven Tana',
    code: 'TE011',
    category: 'Textile',
    colour: ['Beige'],
    image:
      'https://www.resimdo.nl/shop/media/image/TE011-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'woven-sable-te014',
    name: 'Woven Sable',
    code: 'TE014',
    category: 'Textile',
    colour: ['Beige', 'Grey'], 
    image:
      'https://www.resimdo.nl/shop/media/image/TE014-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'fibra-linen-te008',
    name: 'Fibra Linen',
    code: 'TE008',
    category: 'Textile',
    colour: ['Beige'],
    image:
      'https://www.resimdo.nl/shop/media/image/TE202-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'fibra-stone-te005',
    name: 'Fibra Stone',
    code: 'TE005',
    category: 'Textile',
    colour: ['Grey'],
    image:
      'https://www.resimdo.nl/shop/media/image/TE203-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'materia-ns820',
    name: 'Materia',
    code: 'NS820',
    category: 'Textile',
    colour: ['Brown', 'Grey'], 
    image:
      'https://www.resimdo.nl/shop/media/image/NS820-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'candor-pw011',
    name: 'Candor',
    code: 'PW011',
    category: 'Painted Wood',
    colour: ['White'],
    image:
      'https://www.resimdo.nl/shop/media/image/PW011-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'albulus-pw012',
    name: 'Albulus',
    code: 'PW012',
    category: 'Painted Wood',
    colour: ['White'],
    image:
      'https://www.resimdo.nl/shop/media/image/PW012-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'pure-alba-ps502',
    name: 'Pure Alba',
    code: 'PS502',
    category: 'Stone',
    colour: ['White'],
    image:
      'https://www.resimdo.nl/shop/media/image/PS502-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'woven-liora-te009',
    name: 'Woven Liora',
    code: 'TE009',
    category: 'Textile',
    colour: ['Beige'],
    image:
      'https://www.resimdo.nl/shop/media/image/TE009-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'fibra-bride-te001',
    name: 'Fibra Bride',
    code: 'TE001',
    category: 'Textile',
    colour: ['White'],
    image:
      'https://www.resimdo.nl/shop/media/image/TE201-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'tweed-beige-rf008',
    name: 'Tweed Beige',
    code: 'RF008',
    category: 'Textile',
    colour: ['Beige'],
    image:
      'https://www.resimdo.nl/shop/media/image/RF008-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'pictis-bone-pnt04',
    name: 'Pictis Bone',
    code: 'PNT04',
    category: 'Painted Wood',
    colour: ['Grey'],
    image:
      'https://www.resimdo.es/shop/media/image/PNT04-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'pictis-tornado-pnt09',
    name: 'Pictis Tornado',
    code: 'PNT09',
    category: 'Painted Wood',
    colour: ['Blue'],
    image:
      'https://www.resimdo.es/shop/media/image/PNT09-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },

  {
    id: 'animus-w358',
    name: 'Animus',
    code: 'W358',
    category: 'Wood',
    colour: ['Brown', 'Beige'], 
    image:
      'https://www.resimdo.es/shop/media/image/W358-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'avia-clara-zx144',
    name: 'Avia Clara',
    code: 'ZX144',
    category: 'Wood',
    colour: ['Brown', 'Beige'], 
    image:
      'https://www.resimdo.es/shop/media/image/ZX144-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'bar-zx160',
    name: 'Bar',
    code: 'ZX160',
    category: 'Wood',
    colour: ['Brown', 'Beige'], 
    image:
      'https://www.resimdo.es/shop/media/image/ZX160-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'lepus-w401',
    name: 'Lepus',
    code: 'W401',
    category: 'Wood',
    colour: ['Brown', 'Beige'], 
    image:
      'https://www.resimdo.es/shop/media/image/W401-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },

  {
    id: 'turtle-s157',
    name: 'Turtle',
    code: 'S157',
    category: 'Solid Colour',
    colour: ['Beige'],
    image:
      'https://www.resimdo.es/shop/media/image/S157-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'dune-sc160',
    name: 'Dune',
    code: 'SC160',
    category: 'Solid Colour',
    colour: ['Beige'],
    image:
      'https://www.resimdo.de/shop/media/image/SC160-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'cream-s178',
    name: 'Cream',
    code: 'S178',
    category: 'Solid Colour',
    colour: ['Beige'],
    image:
      'https://www.resimdo.es/shop/media/image/S178-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'galaxy-s211',
    name: 'Galaxy',
    code: 'S211',
    category: 'Solid Colour',
    colour: ['Grey', 'Black'], 
    image:
      'https://www.resimdo.es/shop/media/image/S211-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },

  {
    id: 'scala-light-2-st158',
    name: 'Scala Light 2.0',
    code: 'ST158',
    category: 'Stone',
    colour: ['Grey'],
    image:
      'https://www.resimdo.nl/shop/media/image/ST158-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'resum-w879',
    name: 'Resum',
    code: 'W879',
    category: 'Wood',
    colour: ['Brown', 'Beige'], 
    image:
      'https://www.resimdo.nl/shop/media/image/W879-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'legatus-spw18',
    name: 'Legatus',
    code: 'SPW18',
    category: 'Wood',
    colour: ['Brown'],
    image:
      'https://www.resimdo.nl/shop/media/image/SPW18-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'gold-crack-apz05',
    name: 'Gold Crack',
    code: 'APZ05',
    category: 'Metallic',
    colour: ['Gold', 'Yellow'],
    image:
      'https://www.resimdo.nl/shop/media/image/APZ05-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'grit-s181',
    name: 'Grit',
    code: 'S181',
    category: 'Solid Colour',
    colour: ['Beige'],
    image:
      'https://www.resimdo.es/shop/media/image/S181-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'fractura-grit-pnC50',
    name: 'Fractura Grit',
    code: 'PNC50',
    category: 'Stone',
    colour: ['Grey'],
    image:
      'https://www.resimdo.es/shop/media/image/PNC50-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'glandis-zx126',
    name: 'Glandis',
    code: 'ZX126',
    category: 'Wood',
    colour: ['Brown'],
    image:
      'https://www.resimdo.nl/shop/media/image/ZX126-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'radiant-night-pz613',
    name: 'Radiant Night',
    code: 'PZ613',
    category: 'Wood',
    colour: ['Black'],
    image:
      'https://www.resimdo.es/shop/media/image/ZX134-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'solvit-dark-pz904',
    name: 'Solvit Dark',
    code: 'PZ904',
    category: 'Wood',
    colour: ['Brown', 'Beige'], 
    image:
      'https://www.resimdo.nl/shop/media/image/PZ904-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'bokido-w376',
    name: 'Bokido',
    code: 'W376',
    category: 'Wood',
    colour: ['Brown'],
    image:
      'https://www.resimdo.nl/shop/media/image/W376-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'popcorn-zx148',
    name: 'Popcorn',
    code: 'ZX148',
    category: 'Wood',
    colour: ['Beige'],
    image:
      'https://www.resimdo.nl/shop/media/image/ZX148-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },

  {
    id: 'papilo-loxo-lux-sc020',
    name: 'Papilo Loxo Lux',
    code: 'SC020',
    category: 'Solid Colour',
    colour: ['White'],
    image:
      'https://www.resimdo.es/shop/media/image/SC020-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'papilo-cotton-lux-sc012',
    name: 'Papilo Cotton Lux',
    code: 'SC012',
    category: 'Solid Colour',
    colour: ['White'],
    image:
      'https://www.resimdo.es/shop/media/image/SC012-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'papilo-shark-lux-sc014',
    name: 'Papilo Shark Lux',
    code: 'SC014',
    category: 'Solid Colour',
    colour: ['Grey'],
    image:
      'https://www.resimdo.es/shop/media/image/SC014-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'papilo-stone-lux-sc013',
    name: 'Papilo Stone Lux',
    code: 'SC013',
    category: 'Solid Colour',
    colour: ['Beige'],
    image:
      'https://www.resimdo.es/shop/media/image/SC013-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'papilo-bone-lux-sc018',
    name: 'Papilo Bone Lux',
    code: 'SC018',
    category: 'Solid Colour',
    colour: ['Grey'],
    image:
      'https://www.resimdo.es/shop/media/image/SC018-Uebersicht-Walltile-3000x2250.jpg',
  },

  {
    id: 'atrox-w141',
    name: 'Atrox',
    code: 'W141',
    category: 'Wood',
    colour: ['Brown'],
    image:
      'https://www.resimdo.es/shop/media/image/W141-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'navis-w722',
    name: 'Navis',
    code: 'W722',
    category: 'Wood',
    colour: ['Brown'],
    image:
      'https://www.resimdo.es/shop/media/image/W722-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'terra-w731',
    name: 'Terra',
    code: 'W731',
    category: 'Wood',
    colour: ['Brown'],
    image:
      'https://www.resimdo.es/shop/media/image/W731-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'lupus-w932',
    name: 'Lupus',
    code: 'W932',
    category: 'Wood',
    colour: ['Beige'],
    image:
      'https://www.resimdo.es/shop/media/image/W932-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },

  {
    id: 'nero-marquina-ns804',
    name: 'Nero Marquina',
    code: 'NS804',
    category: 'Stone',
    colour: ['Black'],
    image:
      'https://www.resimdo.es/shop/media/image/NS804-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'lumen-w371',
    name: 'Lumen',
    code: 'W371',
    category: 'Wood',
    colour: ['Brown', 'Beige'], 
    image:
      'https://www.resimdo.es/shop/media/image/W371-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },

  {
    id: 'alvoro-st060',
    name: 'Alvoro',
    code: 'ST060',
    category: 'Stone',
    colour: ['Grey'],
    image:
      'https://www.resimdo.nl/shop/media/image/ST060-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'ivory-lux-sc062',
    name: 'Ivory Lux',
    code: 'SC062',
    category: 'Solid Colour',
    colour: ['White'],
    image:
      'https://www.resimdo.nl/shop/media/image/SC062-Uebersicht-Walltile-3000x2250.jpg',
  },

  {
    id: 'mapilo-wd018',
    name: 'Mapilo',
    code: 'WD018',
    category: 'Wood',
    colour: ['Brown', 'Beige'], 
    image:
      'https://www.resimdo.nl/shop/media/image/WD018-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'noctis-w705',
    name: 'Noctis',
    code: 'W705',
    category: 'Wood',
    colour: ['Black'],
    image:
      'https://www.resimdo.es/shop/media/image/W705-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'petum-light-pm016',
    name: 'Petum Light',
    code: 'PM016',
    category: 'Stone',
    colour: ['Grey'],
    image:
      'https://www.resimdo.es/shop/media/image/PM016-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'magusa-dark-2-st163',
    name: 'Magusa Dark 2.0',
    code: 'ST163',
    category: 'Stone',
    colour: ['Grey'],
    image:
      'https://www.resimdo.nl/shop/media/image/ST163-Uebersicht-Walltile-3000x2250.jpg',
  },

  {
    id: 'vikings-zx157',
    name: 'Vikings',
    code: 'ZX157',
    category: 'Wood',
    colour: ['Brown'],
    image:
      'https://www.resimdo.es/shop/media/image/ZX157-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'fabula-wd014',
    name: 'Fabula',
    code: 'WD014',
    category: 'Wood',
    colour: ['Brown'],
    image:
      'https://www.resimdo.es/shop/media/image/WO826-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'formica-w171',
    name: 'Formica',
    code: 'W171',
    category: 'Wood',
    colour: ['Red', 'Brown'],
    image:
      'https://www.resimdo.es/shop/media/image/W171-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'alius-zx161',
    name: 'Alius',
    code: 'ZX161',
    category: 'Wood',
    colour: ['Beige'],
    image:
      'https://www.resimdo.es/shop/media/image/ZX161-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },

  {
    id: 'muras-st009',
    name: 'Muras',
    code: 'ST009',
    category: 'Stone',
    colour: ['Brown', 'Red'], 
    image:
      'https://www.resimdo.es/shop/media/image/ST502-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'brava-st114',
    name: 'Brava',
    code: 'ST114',
    category: 'Stone',
    colour: ['Grey'],
    image:
      'https://www.resimdo.nl/shop/media/image/ST114-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'liora-st111',
    name: 'Liora',
    code: 'ST111',
    category: 'Stone',
    colour: ['Grey', 'Beige'], 
    image:
      'https://www.resimdo.nl/shop/media/image/ST111-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'teras-st116',
    name: 'Teras',
    code: 'ST116',
    category: 'Stone',
    colour: ['Beige'],
    image:
      'https://www.resimdo.nl/shop/media/image/ST116-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'rudis-vein-st010',
    name: 'Rudis Vein',
    code: 'ST010',
    category: 'Stone',
    colour: ['Grey'],
    image:
      'https://www.resimdo.nl/shop/media/image/ST010-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'pale-vein-st115',
    name: 'Pale Vein',
    code: 'ST115',
    category: 'Stone',
    colour: ['White'],
    image:
      'https://www.resimdo.nl/shop/media/image/ST115-Uebersicht-Walltile-3000x2250.jpg',
  },

  {
    id: 'fagis-wd302',
    name: 'Fagis',
    code: 'WD302',
    category: 'Wood',
    colour: ['Brown', 'Beige'], 
    image:
      'https://www.resimdo.es/shop/media/image/WO811-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'dusty-w948',
    name: 'Dusty',
    code: 'W948',
    category: 'Wood',
    colour: ['Beige', 'Brown'], 
    image:
      'https://www.resimdo.es/shop/media/image/W948-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'ramus-wd401',
    name: 'Ramus',
    code: 'WD401',
    category: 'Wood',
    colour: ['Brown'],
    image:
      'https://www.resimdo.es/shop/media/image/WO818-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'lineus-2-wd209',
    name: 'Lineus 2.0',
    code: 'WD209',
    category: 'Wood',
    colour: ['Brown'],
    image:
      'https://www.resimdo.nl/shop/media/image/WD209-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'irise-light-zx135',
    name: 'Irise Light',
    code: 'ZX135',
    category: 'Wood',
    colour: ['Brown'],
    image:
      'https://www.resimdo.es/shop/media/image/ZX135-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'tibos-wd402',
    name: 'Tibos',
    code: 'WD402',
    category: 'Wood',
    colour: ['Brown'],
    image:
      'https://www.resimdo.es/shop/media/image/WO821-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'spargo-wd208',
    name: 'Spargo',
    code: 'WD208',
    category: 'Wood',
    colour: ['Brown'],
    image:
      'https://www.resimdo.es/shop/media/image/WO820-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },

  {
    id: 'rock-veil-st117',
    name: 'Rock Veil',
    code: 'ST117',
    category: 'Stone',
    colour: ['Beige'],
    image:
      'https://www.resimdo.nl/shop/media/image/ST117-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'stone-veil-st118',
    name: 'Stone Veil',
    code: 'ST118',
    category: 'Stone',
    colour: ['Grey'],
    image:
      'https://www.resimdo.nl/shop/media/image/ST118-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'maris-st113',
    name: 'Maris',
    code: 'ST113',
    category: 'Stone',
    colour: ['Grey'],
    image:
      'https://www.resimdo.nl/shop/media/image/ST113-Uebersicht-Walltile-3000x2250.jpg',
  },

  {
    id: 'elara-me006',
    name: 'Elara',
    code: 'ME006',
    category: 'Metallic',
    colour: ['Brown'],
    image:
      'https://www.resimdo.nl/shop/media/image/ME006-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'syra-rose-me003',
    name: 'Syra Rosé',
    code: 'ME003',
    category: 'Metallic',
    colour: ['Pink'],
    image:
      'https://www.resimdo.es/shop/media/image/ME405-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'pluma-rose-lux-me007',
    name: 'Pluma Rosé Lux',
    code: 'ME007',
    category: 'Metallic',
    colour: ['Pink'],
    image:
      'https://www.resimdo.nl/shop/media/image/ME007-Uebersicht-Walltile-3000x2250.jpg',
  },

  {
    id: 'rustlin-wd019',
    name: 'Rustlin',
    code: 'WD019',
    category: 'Wood',
    colour: ['Beige'],
    image:
      'https://www.resimdo.nl/shop/media/image/WD019-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'tarnwell-wd020',
    name: 'Tarnwell',
    code: 'WD020',
    category: 'Wood',
    colour: ['Brown'],
    image:
      'https://www.resimdo.nl/shop/media/image/WD020-Uebersicht-Walltile-3000x2250.jpg',
  },

  {
    id: 'nival-st057',
    name: 'Nival',
    code: 'ST057',
    category: 'Stone',
    colour: ['Grey'],
    image:
      'https://www.resimdo.nl/shop/media/image/ST057-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'olera-st064',
    name: 'Olera',
    code: 'ST064',
    category: 'Stone',
    colour: ['Grey'],
    image:
      'https://www.resimdo.nl/shop/media/image/ST064-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'pavira-st058',
    name: 'Pavira',
    code: 'ST058',
    category: 'Stone',
    colour: ['Grey'],
    image:
      'https://www.resimdo.nl/shop/media/image/ST058-Uebersicht-Walltile-3000x2250.jpg',
  },

  {
    id: 'tedra-le007',
    name: 'Tedra',
    code: 'LE007',
    category: 'Leather',
    colour: ['Brown'],
    image:
      'https://www.resimdo.es/shop/media/image/LE301-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'chestnut-w207',
    name: 'Chestnut',
    code: 'W207',
    category: 'Wood',
    colour: ['Brown'],
    image:
      'https://www.resimdo.es/shop/media/image/W207-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  {
    id: 'ivy-s233',
    name: 'Ivy',
    code: 'S233',
    category: 'Solid Colour',
    colour: ['Green'],
    image:
      'https://www.resimdo.es/shop/media/image/S233-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },

  {
    id: 'syra-silver-me004',
    name: 'Syra Silver',
    code: 'ME004',
    category: 'Metallic',
    colour: ['Silver', 'Grey'],
    image:
      'https://www.resimdo.de/shop/media/image/ME401-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },

  {
    id: 'borealis-sc307',
    name: 'Borealis',
    code: 'SC307',
    category: 'Solid Colour',
    colour: ['Blue'],
    image:
      'https://www.resimdo.es/shop/media/image/SC307-Uebersicht-Walltile-3000x2250j8tiCE7wL07WI.jpg',
  },
  {
    id: 'pearl-sc057',
    name: 'Pearl',
    code: 'SC057',
    category: 'Solid Colour',
    colour: ['White'],
    image:
      'https://www.resimdo.es/shop/media/image/SC057-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'bride-2-0-sc051',
    name: 'Bride 2.0',
    code: 'SC051',
    category: 'Solid Colour',
    colour: ['White'],
    image:
      'https://www.resimdo.es/shop/media/image/SC051-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'blossom-sc058',
    name: 'Blossom',
    code: 'SC058',
    category: 'Solid Colour',
    colour: ['White'],
    image:
      'https://www.resimdo.es/shop/media/image/SC058-Uebersicht-Walltile-3000x2250.jpg',
  },
  {
    id: 'eggshell-2-0-sc059',
    name: 'Eggshell 2.0',
    code: 'SC059',
    category: 'Solid Colour',
    colour: ['White'],
    image:
      'https://www.resimdo.es/shop/media/image/SC059-Uebersicht-Walltile-3000x2250.jpg',
  },
{
    id: 'lancea-silver-dm036',
    name: 'Lancea Silver',
    code: 'DM036',
    category: 'Metallic',
    colour: ['Silver', 'Grey'],
    image:
      'https://www.resimdo.es/shop/media/image/DM036-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
{
    id: 'strawberry-s147',
    name: 'Strawberry',
    code: 'S147',
    category: 'Solid Colour',
    colour: ['Red'],
    image:
      'https://www.resimdo.es/shop/media/image/S147-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
{
    id: 'cherry-s218',
    name: 'Cherry',
    code: 'S218',
    category: 'Solid Colour',
    colour: ['Red'],
    image:
      'https://www.resimdo.es/shop/media/image/S218-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
{
    id: 'ignis-w276',
    name: 'Ignis',
    code: 'W276',
    category: 'Wood',
    colour: ['Red', 'Brown'],
    image:
      'https://www.resimdo.es/shop/media/image/W276-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
{
    id: 'hibiscus-s232',
    name: 'Hibiscus',
    code: 'S232',
    category: 'Solid Colour',
    colour: ['Pink'],
    image:
      'https://www.resimdo.es/shop/media/image/S232-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
{
    id: 'rosielle-sc360',
    name: 'Rosielle',
    code: 'SC360',
    category: 'Solid Colour',
    colour: ['Pink'],
    image:
      'https://www.resimdo.es/shop/media/image/SC360-Uebersicht-Walltile-3000x2250.jpg',
  },
{
    id: 'petaline-sc361',
    name: 'Petaline',
    code: 'SC361',
    category: 'Solid Colour',
    colour: ['Pink'],
    image:
      'https://www.resimdo.es/shop/media/image/SC361-Uebersicht-Walltile-3000x2250.jpg',
  },
{
    id: 'balm-rosé-s207',
    name: 'Balm Rosé',
    code: 'S207',
    category: 'Solid Colour',
    colour: ['Pink'],
    image:
      'https://www.resimdo.es/shop/media/image/S207-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
{
    id: 'piggy-s217',
    name: 'Piggy',
    code: 'S217',
    category: 'Solid Colour',
    colour: ['Pink'],
    image:
      'https://www.resimdo.es/shop/media/image/S217-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
{
    id: 'polar-2-sc303',
    name: 'Polar 2.0',
    code: 'SC303',
    category: 'Solid Colour',
    colour: ['Blue'],
    image:
      'https://www.resimdo.es/shop/media/image/SC303-Uebersicht-Walltile-3000x2250.jpg',
  },
{
    id: 'bahamas-2-sc214',
    name: 'Bahamas 2.0',
    code: 'SC214',
    category: 'Solid Colour',
    colour: ['Blue'],
    image:
      'https://www.resimdo.es/shop/media/image/SC214-Uebersicht-Walltile-3000x2250.jpg',
  },
{
    id: 'glacier-s186',
    name: 'Glacier',
    code: 'S186',
    category: 'Solid Colour',
    colour: ['Blue'],
    image:
      'https://www.resimdo.es/shop/media/image/S186-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
{
    id: 'orsa-sc208',
    name: 'Orsa',
    code: 'SC208',
    category: 'Solid Colour',
    colour: ['Blue'],
    image:
      'https://www.resimdo.es/shop/media/image/SC602-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
{
    id: 'nymora-sc220',
    name: 'Nymora',
    code: 'SC220',
    category: 'Solid Colour',
    colour: ['Blue'],
    image:
      'https://www.resimdo.es/shop/media/image/SC220-Uebersicht-Walltile-3000x2250.jpg',
  },
{
    id: 'orange-s169',
    name: 'Orange',
    code: 'S169',
    category: 'Solid Colour',
    colour: ['Orange'],
    image:
      'https://www.resimdo.es/shop/media/image/S169-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
{
    id: 'salmon-s213',
    name: 'Salmon',
    code: 'S213',
    category: 'Solid Colour',
    colour: ['Orange'],
    image:
      'https://www.resimdo.es/shop/media/image/S213-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
{
    id: 'sunflower-s146',
    name: 'Sunflower',
    code: 'S146',
    category: 'Solid Colour',
    colour: ['Yellow'],
    image:
      'https://www.resimdo.es/shop/media/image/S146-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
{
    id: 'mon-s188',
    name: 'Mon',
    code: 'S188',
    category: 'Solid Colour',
    colour: ['Yellow'],
    image:
      'https://www.resimdo.es/shop/media/image/S188-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
{
    id: 'beach-2-sc351',
    name: 'Beach 2.0',
    code: 'SC351',
    category: 'Solid Colour',
    colour: ['Yellow'],
    image:
      'https://www.resimdo.es/shop/media/image/SC351-Uebersicht-Walltile-3000x2250.jpg',
  },
{
    id: 'balm-cheese-2-sc364',
    name: 'Balm Cheese 2.0',
    code: 'SC364',
    category: 'Solid Colour',
    colour: ['Yellow'],
    image:
      'https://www.resimdo.es/shop/media/image/SC364-Uebersicht-Walltile-3000x2250.jpg',
  },
{
    id: 'yella-sc357',
    name: 'Yella',
    code: 'SC357',
    category: 'Solid Colour',
    colour: ['Yellow'],
    image:
      'https://www.resimdo.es/shop/media/image/SC357-Uebersicht-Walltile-3000x2250.jpg',
  },
{
    id: 'apple-s189',
    name: 'Apple',
    code: 'S189',
    category: 'Solid Colour',
    colour: ['Green'],
    image:
      'https://www.resimdo.es/shop/media/image/S189-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
{
    id: 'aria-pw117',
    name: 'Aria',
    code: 'PW117',
    category: 'Painted Wood',
    colour: ['Green'],
    image:
      'https://www.resimdo.es/shop/media/image/PW708-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
{
    id: 'pond-s201',
    name: 'Pond',
    code: 'S201',
    category: 'Solid Colour',
    colour: ['Green'],
    image:
      'https://www.resimdo.es/shop/media/image/S201-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
{
    id: 'pine-sc258',
    name: 'Pine',
    code: 'SC258',
    category: 'Solid Colour',
    colour: ['Green'],
    image:
      'https://www.resimdo.es/shop/media/image/SC258-Uebersicht-Walltile-3000x2250.jpg',
  },
{
    id: 'eucalyptus-s239',
    name: 'Eucalyptus',
    code: 'S239',
    category: 'Solid Colour',
    colour: ['Green'],
    image:
      'https://www.resimdo.es/shop/media/image/S239-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
{
    id: 'alga-s200',
    name: 'Alga',
    code: 'S200',
    category: 'Solid Colour',
    colour: ['Green'],
    image:
      'https://www.resimdo.es/shop/media/image/S200-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
{
    id: 'mandra-le008',
    name: 'Mandra',
    code: 'LE008',
    category: 'Leather',
    colour: ['Black'],
    image:
      'https://www.resimdo.es/shop/media/image/LE302-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
{
    id: 'niversa-pw008',
    name: 'Niversa',
    code: 'PW008',
    category: 'Painted Wood',
    colour: ['Black'],
    image:
      'https://www.resimdo.es/shop/media/image/PW703-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },  
{
    id: 'draculos-st110',
    name: 'Draculos',
    code: 'ST110',
    category: 'Stone',
    colour: ['Black'],
    image:
      'https://www.resimdo.es/shop/media/image/ST504-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },  
{
    id: 'cateno-silver-rm005',
    name: 'Cateno Silver',
    code: 'RM005',
    category: 'Metallic',
    colour: ['Silver', 'Grey'],
    image:
      'https://www.resimdo.es/shop/media/image/RM005-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },  
{
    id: 'solis-gold-rm007',
    name: 'Solis Gold',
    code: 'RM007',
    category: 'Metallic',
    colour: ['Gold', 'Yellow'],
    image:
      'https://www.resimdo.es/shop/media/image/RM007-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
{
    id: 'solis-copper-rm008',
    name: 'Solis Copper',
    code: 'RM008',
    category: 'Metallic',
    colour: ['Brown', 'Gold'],
    image:
      'https://www.resimdo.es/shop/media/image/RM008-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
{
    id: 'intensio-ns428',
    name: 'Intensio',
    code: 'NS428',
    category: 'Stone',
    colour: ['Brown', 'Black'],
    image:
      'https://www.resimdo.es/shop/media/image/NS428-Uebersicht-Walltile-3000x2250_72dpi.jpg',
  },
  
]
