'use client'

import { useMemo, useState } from 'react'
import {
  Check,
  ChevronDown,
  MessageCircle,
  RotateCcw,
  Search,
  X,
} from 'lucide-react'
import { useLanguage } from '@/lib/i18n/provider'
import { whatsappLink } from '@/lib/i18n/dictionaries'
import { Reveal } from '@/components/reveal'
import {
  materials,
  type Material,
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
  'Silver',
  'Beige',
  'White',
  'Yellow',
  'Green',
  'Gold',
  'Light Brown',
  'Grey',
  'Orange',
  'Blue',
  'Bronze',
  'Dark Brown',
  'Black',
  'Red',
  'Pink',
  'Light Green',
  'Brown',
  'Light Blue',
]

const finishes = [
  'All',
  'Matte',
  'Satin',
  'Gloss',
  'Soft Touch',
  'Metallic',
]

const textures = [
  'All',
  'Smooth',
  'Real Touch',
  'Textured',
  'High Gloss',
  'Soft Touch',
]

const colourFamilies = [
  'All',
  'Unique Look',
  'Unique',
  'Painted Stone',
  'Painted Wood',
  'Washed',
  'Chalked',
  'Plaster',
  'Industrial',
  'Natural',
  'Marble',
  'Fabric',
  'Wild',
  'Elegance',
  'Gold',
  'Silver',
  'Brushed',
  'Rustic',
  'Parquet',
  'Fox',
  'Bright',
  'Pale',
  'Saturated',
  'Dark',
  'White Timber',
  'Black Timber',
  'Chalk',
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
  'Brazen',
  'Shimmer',
  'Raw',
]

const ITEMS_PER_PAGE = 12

export function MaterialsSection() {
  const { t } = useLanguage()

  const [category, setCategory] = useState('All')
  const [colour, setColour] = useState('All')
  const [finish, setFinish] = useState('All')
  const [texture, setTexture] = useState('All')
  const [colourFamily, setColourFamily] = useState('All')
  const [search, setSearch] = useState('')
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [visibleCount, setVisibleCount] =
    useState(ITEMS_PER_PAGE)
  const [selectedMaterial, setSelectedMaterial] =
    useState<Material | null>(null)

  const filteredMaterials = useMemo(() => {
    const query = search.trim().toLowerCase()

    return materials.filter((material) => {
      if (!material.available) return false

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

      const searchMatch =
        !query ||
        [
          material.name,
          material.code,
          material.category,
          material.colour,
          material.colourFamily,
          material.finish,
          material.texture,
        ]
          .join(' ')
          .toLowerCase()
          .includes(query)

      return (
        categoryMatch &&
        colourMatch &&
        finishMatch &&
        textureMatch &&
        colourFamilyMatch &&
        searchMatch
      )
    })
  }, [
    category,
    colour,
    finish,
    texture,
    colourFamily,
    search,
  ])

  const visibleMaterials = filteredMaterials.slice(
    0,
    visibleCount,
  )

  const hasMore =
    visibleCount < filteredMaterials.length

  const resetFilters = () => {
    setCategory('All')
    setColour('All')
    setFinish('All')
    setTexture('All')
    setColourFamily('All')
    setSearch('')
    setVisibleCount(ITEMS_PER_PAGE)
  }

  const updateFilter = (
    setter: (value: string) => void,
    value: string,
  ) => {
    setter(value)
    setVisibleCount(ITEMS_PER_PAGE)
  }

  const activeFilterCount = [
    category,
    colour,
    finish,
    texture,
    colourFamily,
  ].filter((value) => value !== 'All').length

  const quoteText = selectedMaterial
    ? `Hi, I'm interested in having my interior wrapped. I'm interested in the ${selectedMaterial.name} (${selectedMaterial.code}) finish. I'd like to send some photos and get a quote.`
    : t.finalCta.microcopy

  return (
    <section
      id="materials"
      className="border-t border-border bg-paper text-ink"
    >
      <div className="mx-auto w-full max-w-6xl px-5 pb-20 pt-8 sm:px-8 sm:pb-28 sm:pt-12 lg:pt-16">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brass">
              {t.materials.eyebrow}
            </p>

            <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {t.materials.heading}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.materials.sub}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="relative mt-10 max-w-2xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />

            <input
              type="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setVisibleCount(ITEMS_PER_PAGE)
              }}
              placeholder={t.materials.search}
              aria-label={t.materials.search}
              className="h-14 w-full rounded-2xl border border-border bg-card pl-12 pr-12 text-sm text-ink outline-none transition-shadow placeholder:text-muted-foreground focus:border-pine focus:ring-2 focus:ring-pine/10"
            />

            {search && (
              <button
                type="button"
                onClick={() => {
                  setSearch('')
                  setVisibleCount(ITEMS_PER_PAGE)
                }}
                aria-label={t.materials.clearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-ink"
              >
                <X className="size-5" />
              </button>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 overflow-x-auto pb-2">
            <div className="flex min-w-max gap-2">
              {categories.map((item) => {
                const active = category === item

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      updateFilter(setCategory, item)
                    }
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

        <div className="mt-6 lg:hidden">
          <button
            type="button"
            onClick={() =>
              setFiltersOpen((open) => !open)
            }
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
                onChange={(value) =>
                  updateFilter(setColour, value)
                }
              />

              <FilterGroup
                label={t.materials.finish}
                options={finishes}
                value={finish}
                onChange={(value) =>
                  updateFilter(setFinish, value)
                }
              />

              <FilterGroup
                label={t.materials.texture}
                options={textures}
                value={texture}
                onChange={(value) =>
                  updateFilter(setTexture, value)
                }
              />

              <FilterGroup
                label={t.materials.colourFamily}
                options={colourFamilies}
                value={colourFamily}
                onChange={(value) =>
                  updateFilter(setColourFamily, value)
                }
              />
            </div>

            {activeFilterCount > 0 && (
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
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            {filteredMaterials.length} {t.materials.results}
          </p>

          {activeFilterCount > 0 || search ? (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-pine"
            >
              <RotateCcw className="size-3.5" />
              {t.materials.clear}
            </button>
          ) : null}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {visibleMaterials.map((material, index) => (
            <Reveal
              key={material.id}
              delay={(index % 4) * 0.03}
            >
              <button
                type="button"
                onClick={() =>
                  setSelectedMaterial(material)
                }
                className="group block w-full overflow-hidden rounded-2xl border border-border bg-card text-left transition-shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pine/30"
              >
                <div className="aspect-[1.15/1] overflow-hidden bg-muted">
                  <img
                    src={material.image}
                    alt={`${material.name} ${material.code}`}
                    loading={index < 8 ? 'eager' : 'lazy'}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h2 className="font-serif text-base font-semibold uppercase leading-tight">
                        {material.name}
                      </h2>

                      <p className="mt-1 text-xs font-medium text-muted-foreground">
                        {material.code}
                      </p>
                    </div>

                    <span className="shrink-0 rounded-full bg-secondary px-2 py-1 text-[10px] font-semibold text-ink">
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
                  </div>
                </div>
              </button>
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

        {hasMore && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() =>
                setVisibleCount(
                  (count) => count + ITEMS_PER_PAGE,
                )
              }
              className="rounded-full border border-pine bg-transparent px-7 py-3.5 text-sm font-bold text-pine transition-colors hover:bg-pine hover:text-paper"
            >
              {t.materials.loadMore}
            </button>
          </div>
        )}

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          {t.materials.disclaimer}
        </p>

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

      {selectedMaterial && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={selectedMaterial.name}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedMaterial(null)
            }
          }}
        >
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-3xl bg-paper shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedMaterial(null)}
              aria-label={t.materials.close}
              className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-ink/80 text-paper backdrop-blur transition-colors hover:bg-pine"
            >
              <X className="size-5" />
            </button>

            <div className="aspect-[1.4/1] overflow-hidden bg-muted">
              <img
                src={selectedMaterial.image}
                alt={`${selectedMaterial.name} ${selectedMaterial.code}`}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brass">
                {selectedMaterial.category}
              </p>

              <h2 className="mt-2 font-serif text-3xl font-semibold uppercase sm:text-4xl">
                {selectedMaterial.name}
              </h2>

              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {selectedMaterial.code}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <MaterialDetail
                  label={t.materials.colour}
                  value={selectedMaterial.colour}
                />

                <MaterialDetail
                  label={t.materials.finish}
                  value={selectedMaterial.finish}
                />

                <MaterialDetail
                  label={t.materials.texture}
                  value={selectedMaterial.texture}
                />

                <MaterialDetail
                  label={t.materials.colourFamily}
                  value={selectedMaterial.colourFamily}
                />
              </div>

              <a
                href={whatsappLink(quoteText)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-pine px-6 py-4 text-sm font-bold text-paper transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                <MessageCircle className="size-4" />
                {t.materials.useFinish}
              </a>
            </div>
          </div>
        </div>
      )}
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

function MaterialDetail({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="rounded-2xl bg-secondary p-3">
      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-ink">
        {value}
      </p>
    </div>
  )
}