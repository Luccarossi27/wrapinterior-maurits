'use client'

import { useMemo, useState } from 'react'
import { Check, ChevronDown, MessageCircle, RotateCcw } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/provider'
import { whatsappLink } from '@/lib/i18n/dictionaries'
import { Reveal } from '@/components/reveal'

type Material = {
  name: string
  category: string
  colour: string
  finish: string
  texture: string
  visual: string
}

const materials: Material[] = [
  {
    name: 'Warm Oak',
    category: 'Wood',
    colour: 'Brown',
    finish: 'Matte',
    texture: 'Textured',
    visual:
      'linear-gradient(90deg, #b88b5d 0%, #d1a878 18%, #9d714b 38%, #c49a6a 55%, #a87b51 75%, #d0a879 100%)',
  },
  {
    name: 'Natural Oak',
    category: 'Wood',
    colour: 'Light Brown',
    finish: 'Matte',
    texture: 'Textured',
    visual:
      'linear-gradient(90deg, #d0ad7e 0%, #e0c094 22%, #bd9566 40%, #d7b486 62%, #b78d5f 82%, #dfbd91 100%)',
  },
  {
    name: 'Dark Walnut',
    category: 'Wood',
    colour: 'Dark Brown',
    finish: 'Satin',
    texture: 'Textured',
    visual:
      'linear-gradient(90deg, #4b3327 0%, #694a38 18%, #39271f 36%, #624332 52%, #432d23 72%, #70503c 100%)',
  },
  {
    name: 'Soft White',
    category: 'Solid Colour',
    colour: 'White',
    finish: 'Matte',
    texture: 'Smooth',
    visual:
      'linear-gradient(135deg, #f5f2eb 0%, #e9e5dc 48%, #faf8f3 100%)',
  },
  {
    name: 'Warm Beige',
    category: 'Solid Colour',
    colour: 'Beige',
    finish: 'Matte',
    texture: 'Smooth',
    visual:
      'linear-gradient(135deg, #d8c7ae 0%, #cdbb9f 50%, #e2d5c2 100%)',
  },
  {
    name: 'Greige',
    category: 'Solid Colour',
    colour: 'Grey',
    finish: 'Matte',
    texture: 'Smooth',
    visual:
      'linear-gradient(135deg, #aaa59a 0%, #c1bbb0 50%, #969188 100%)',
  },
  {
    name: 'Graphite',
    category: 'Solid Colour',
    colour: 'Black',
    finish: 'Matte',
    texture: 'Smooth',
    visual:
      'linear-gradient(135deg, #272927 0%, #3b3d3a 50%, #1e211f 100%)',
  },
  {
    name: 'Forest Green',
    category: 'Solid Colour',
    colour: 'Green',
    finish: 'Matte',
    texture: 'Smooth',
    visual:
      'linear-gradient(135deg, #34483c 0%, #506355 50%, #293b31 100%)',
  },
  {
    name: 'Deep Blue',
    category: 'Solid Colour',
    colour: 'Blue',
    finish: 'Matte',
    texture: 'Smooth',
    visual:
      'linear-gradient(135deg, #344958 0%, #506777 50%, #263943 100%)',
  },
  {
    name: 'Soft Concrete',
    category: 'Stone',
    colour: 'Grey',
    finish: 'Matte',
    texture: 'Textured',
    visual:
      'radial-gradient(circle at 20% 30%, #d5d1c9 0 8%, transparent 9%), radial-gradient(circle at 75% 70%, #b7b3aa 0 10%, transparent 11%), linear-gradient(135deg, #c9c5bd, #aaa69f)',
  },
  {
    name: 'Light Marble',
    category: 'Stone',
    colour: 'White',
    finish: 'Satin',
    texture: 'Textured',
    visual:
      'linear-gradient(125deg, #f1eee7 0%, #dad6cc 35%, #f7f5ef 55%, #c8c4bb 58%, #eeeae2 100%)',
  },
  {
    name: 'Dark Marble',
    category: 'Stone',
    colour: 'Black',
    finish: 'Satin',
    texture: 'Textured',
    visual:
      'linear-gradient(125deg, #292b29 0%, #454742 35%, #20221f 52%, #696a64 55%, #30322f 100%)',
  },
  {
    name: 'Travertine',
    category: 'Stone',
    colour: 'Beige',
    finish: 'Matte',
    texture: 'Textured',
    visual:
      'linear-gradient(120deg, #d1bea0 0%, #bca788 28%, #dbc9ad 52%, #ae9879 75%, #d6c2a3 100%)',
  },
  {
    name: 'Brushed Brass',
    category: 'Metal',
    colour: 'Gold',
    finish: 'Satin',
    texture: 'Textured',
    visual:
      'linear-gradient(90deg, #8d7448, #c1a66f, #e0c789, #a78a57, #d0b779)',
  },
  {
    name: 'Brushed Steel',
    category: 'Metal',
    colour: 'Grey',
    finish: 'Satin',
    texture: 'Textured',
    visual:
      'linear-gradient(90deg, #747875, #c4c7c4, #929692, #d7d9d6, #777b78)',
  },
  {
    name: 'Soft Black',
    category: 'Solid Colour',
    colour: 'Black',
    finish: 'Soft Touch',
    texture: 'Soft Touch',
    visual:
      'linear-gradient(135deg, #202320, #303430 50%, #1b1d1b)',
  },
  {
    name: 'Dusty Rose',
    category: 'Solid Colour',
    colour: 'Pink',
    finish: 'Matte',
    texture: 'Smooth',
    visual:
      'linear-gradient(135deg, #b99a91, #c9afa7 50%, #a98780)',
  },
  {
    name: 'Olive',
    category: 'Solid Colour',
    colour: 'Green',
    finish: 'Matte',
    texture: 'Smooth',
    visual:
      'linear-gradient(135deg, #68705b, #7f866d 50%, #535b49)',
  },
  {
    name: 'Sandstone',
    category: 'Stone',
    colour: 'Beige',
    finish: 'Matte',
    texture: 'Textured',
    visual:
      'linear-gradient(135deg, #c9b18d, #dfc9a8 48%, #b69d7a)',
  },
  {
    name: 'Charcoal Concrete',
    category: 'Stone',
    colour: 'Grey',
    finish: 'Matte',
    texture: 'Textured',
    visual:
      'radial-gradient(circle at 65% 35%, #666761 0 7%, transparent 8%), linear-gradient(135deg, #575954, #3e403c 50%, #686a64)',
  },
]

const categories = [
  'All',
  'Wood',
  'Stone',
  'Solid Colour',
  'Metal',
]

const colours = [
  'All',
  'Beige',
  'White',
  'Grey',
  'Light Brown',
  'Brown',
  'Dark Brown',
  'Black',
  'Green',
  'Blue',
  'Gold',
  'Pink',
]

const finishes = ['All', 'Matte', 'Satin', 'Gloss', 'Soft Touch']

const textures = ['All', 'Smooth', 'Textured', 'Soft Touch']

export function MaterialsSection() {
  const { t } = useLanguage()

  const [category, setCategory] = useState('All')
  const [colour, setColour] = useState('All')
  const [finish, setFinish] = useState('All')
  const [texture, setTexture] = useState('All')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filteredMaterials = useMemo(() => {
    return materials.filter((material) => {
      const categoryMatch =
        category === 'All' || material.category === category

      const colourMatch =
        colour === 'All' || material.colour === colour

      const finishMatch =
        finish === 'All' || material.finish === finish

      const textureMatch =
        texture === 'All' || material.texture === texture

      return categoryMatch && colourMatch && finishMatch && textureMatch
    })
  }, [category, colour, finish, texture])

  const resetFilters = () => {
    setCategory('All')
    setColour('All')
    setFinish('All')
    setTexture('All')
  }

  const activeFilterCount = [
    category,
    colour,
    finish,
    texture,
  ].filter((value) => value !== 'All').length

  return (
    <section
      id="materials"
      className="border-t border-border bg-paper text-ink"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brass">
              {t.materials.eyebrow}
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {t.materials.heading}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.materials.sub}
            </p>
          </div>
        </Reveal>

        {/* Material categories */}
        <Reveal delay={0.05}>
          <div className="mt-10 overflow-x-auto pb-2">
            <div className="flex min-w-max gap-2">
              {categories.map((item) => {
                const active = category === item

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={[
                      'rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors',
                      active
                        ? 'border-pine bg-pine text-paper'
                        : 'border-border bg-card text-ink hover:border-pine hover:text-pine',
                    ].join(' ')}
                  >
                    {item}
                  </button>
                )
              })}
            </div>
          </div>
        </Reveal>

        {/* Mobile filter button */}
        <div className="mt-6 lg:hidden">
          <button
            type="button"
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex w-full items-center justify-between rounded-2xl border border-border bg-card px-4 py-3.5 text-sm font-semibold"
          >
            <span className="flex items-center gap-2">
              {t.materials.filter}
              {activeFilterCount > 0 && (
                <span className="flex size-6 items-center justify-center rounded-full bg-pine text-xs text-paper">
                  {activeFilterCount}
                </span>
              )}
            </span>

            <ChevronDown
              className={[
                'size-4 transition-transform',
                filtersOpen ? 'rotate-180' : '',
              ].join(' ')}
            />
          </button>
        </div>

        <div
          className={[
            'mt-6',
            filtersOpen ? 'block' : 'hidden',
            'lg:block',
          ].join(' ')}
        >
          <div className="rounded-3xl border border-border bg-card p-5 sm:p-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <FilterGroup
                label={t.materials.colour}
                options={colours}
                value={colour}
                onChange={setColour}
              />

              <FilterGroup
                label={t.materials.finish}
                options={finishes}
                value={finish}
                onChange={setFinish}
              />

              <FilterGroup
                label={t.materials.texture}
                options={textures}
                value={texture}
                onChange={setTexture}
              />

              <div className="flex items-end">
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-pine"
                >
                  <RotateCcw className="size-4" />
                  {t.materials.clear}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {filteredMaterials.length} {t.materials.results}
          </p>

          {activeFilterCount > 0 && (
            <button
              type="button"
              onClick={resetFilters}
              className="hidden items-center gap-1.5 text-sm font-semibold text-pine lg:flex"
            >
              <RotateCcw className="size-3.5" />
              {t.materials.clear}
            </button>
          )}
        </div>

        {/* Swatch grid */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {filteredMaterials.map((material, index) => (
            <Reveal
              key={`${material.name}-${index}`}
              delay={(index % 4) * 0.03}
            >
              <article className="group overflow-hidden rounded-2xl border border-border bg-card">
                <div
                  className="aspect-[1.15/1] w-full"
                  style={{ background: material.visual }}
                  aria-hidden="true"
                />

                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-serif text-base font-semibold uppercase leading-tight">
                        {material.name}
                      </h3>

                      <p className="mt-1 text-xs text-muted-foreground">
                        {material.category}
                      </p>
                    </div>

                    <span
                      className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-border"
                      title={material.colour}
                      aria-label={material.colour}
                    >
                      <span
                        className="size-4 rounded-full border border-black/10"
                        style={{
                          background:
                            material.visual,
                        }}
                      />
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="rounded-full bg-secondary px-2 py-1 text-[10px] font-medium text-ink">
                      {material.finish}
                    </span>

                    <span className="rounded-full bg-secondary px-2 py-1 text-[10px] font-medium text-ink">
                      {material.texture}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {filteredMaterials.length === 0 && (
          <div className="rounded-3xl border border-dashed border-border bg-card px-6 py-16 text-center">
            <p className="font-serif text-xl font-semibold uppercase">
              {t.materials.noResults}
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-pine px-5 py-3 text-sm font-semibold text-paper"
            >
              <RotateCcw className="size-4" />
              {t.materials.clear}
            </button>
          </div>
        )}

        {/* CTA */}
        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-3xl bg-pine px-6 py-8 text-paper sm:px-10 sm:py-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="font-serif text-2xl font-semibold uppercase sm:text-3xl">
                  {t.materials.ctaHeading}
                </p>

                <p className="mt-2 text-sm leading-relaxed text-paper/75 sm:text-base">
                  {t.materials.ctaSub}
                </p>
              </div>

              <a
                href={whatsappLink(t.finalCta.microcopy)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-paper px-6 py-3.5 text-sm font-bold text-pine transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="size-4" />
                {t.cta.getQuote}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: string[]
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </p>

      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = value === option

          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={[
                'inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-medium transition-colors',
                active
                  ? 'border-pine bg-pine text-paper'
                  : 'border-border bg-background text-ink hover:border-pine hover:text-pine',
              ].join(' ')}
            >
              {active && <Check className="size-3" />}
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}