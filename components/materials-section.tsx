'use client'

import { useMemo, useState } from 'react'
import {
  Check,
  ChevronDown,
  MessageCircle,
  RotateCcw,
} from 'lucide-react'
import { useLanguage } from '@/lib/i18n/provider'
import { whatsappLink } from '@/lib/i18n/dictionaries'
import { Reveal } from '@/components/reveal'
import {
  materials,
  type MaterialCategory,
} from '@/data/materials'

const categories: Array<'All' | MaterialCategory> = [
  'All',
  'Wood',
  'Stone',
  'Solid Colour',
  'Metal',
  'Leather',
  'Textile',
  'Decorative',
  'Painted Wood',
]

const colours = [
  'All',
  'Beige',
  'White',
  'Yellow',
  'Green',
  'Light Brown',
  'Grey',
  'Orange',
  'Blue',
  'Dark Brown',
  'Black',
  'Red',
  'Pink',
  'Brown',
  'Light Green',
  'Light Blue',
  'Gold',
]

const finishes = [
  'All',
  'Matte',
  'Satin',
  'Gloss',
  'Soft Touch',
]

const textures = [
  'All',
  'Smooth',
  'Textured',
  'High Gloss',
  'Soft Touch',
]

const colourFamilies = [
  'All',
  'Soft Touch',
  'White Series',
  'Black Series',
  'Earth',
  'Provence',
  'Forest',
  'Iceland',
  'Summer',
  'Neon',
  'Tides',
]

export function MaterialsSection() {
  const { t } = useLanguage()

  const [category, setCategory] = useState('All')
  const [colour, setColour] = useState('All')
  const [finish, setFinish] = useState('All')
  const [texture, setTexture] = useState('All')
  const [colourFamily, setColourFamily] = useState('All')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filteredMaterials = useMemo(() => {
    return materials.filter((material) => {
      const categoryMatch =
        category === 'All' ||
        material.category === category

      const colourMatch =
        colour === 'All' ||
        material.colour === colour

      const finishMatch =
        finish === 'All' ||
        material.finish === finish

      const textureMatch =
        texture === 'All' ||
        material.texture === texture

      const colourFamilyMatch =
        colourFamily === 'All' ||
        material.colourFamily === colourFamily

      return (
        categoryMatch &&
        colourMatch &&
        finishMatch &&
        textureMatch &&
        colourFamilyMatch
      )
    })
  }, [
    category,
    colour,
    finish,
    texture,
    colourFamily,
  ])

  const resetFilters = () => {
    setCategory('All')
    setColour('All')
    setFinish('All')
    setTexture('All')
    setColourFamily('All')
  }

  const activeFilterCount = [
    category,
    colour,
    finish,
    texture,
    colourFamily,
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

        {/* Category navigation */}
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

        {/* Mobile filters */}
        <div className="mt-6 lg:hidden">
          <button
            type="button"
            onClick={() => setFiltersOpen((open) => !open)}
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

        {/* Filters */}
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

              <FilterGroup
                label={t.materials.colourFamily}
                options={colourFamilies}
                value={colourFamily}
                onChange={setColourFamily}
              />
            </div>

            <div className="mt-6 border-t border-border pt-5">
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

        {/* Results */}
        <div className="mt-8 flex items-center justify-between">
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

        {/* Material grid */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {filteredMaterials.map((material, index) => (
            <Reveal
              key={material.id}
              delay={(index % 4) * 0.03}
            >
              <article className="group overflow-hidden rounded-2xl border border-border bg-card">
                <div className="aspect-[1.15/1] overflow-hidden bg-muted">
                  <img
                    src={material.image}
                    alt={`${material.name} ${material.code}`}
                    loading={index < 8 ? 'eager' : 'lazy'}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-serif text-base font-semibold uppercase leading-tight">
                        {material.name}
                      </h3>

                      <p className="mt-1 text-xs font-medium text-muted-foreground">
                        {material.code}
                      </p>
                    </div>

                    <span
                      className="shrink-0 rounded-full bg-secondary px-2 py-1 text-[10px] font-semibold text-ink"
                    >
                      {material.category}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="rounded-full bg-secondary px-2 py-1 text-[10px] font-medium">
                      {material.colour}
                    </span>

                    <span className="rounded-full bg-secondary px-2 py-1 text-[10px] font-medium">
                      {material.finish}
                    </span>

                    <span className="rounded-full bg-secondary px-2 py-1 text-[10px] font-medium">
                      {material.texture}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Empty state */}
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