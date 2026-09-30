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
  'Metallic',
  'Leather',
  'Textile',
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
  'Grey',
  'Orange',
  'Blue',
  'Bronze',
  'Black',
  'Red',
  'Pink',
  'Brown',
]

const ITEMS_PER_PAGE = 24

export function MaterialsSection() {
  const { t } = useLanguage()

  const [category, setCategory] = useState('All')
  const [colour, setColour] = useState('All')
  const [search, setSearch] = useState('')
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [visibleCount, setVisibleCount] =
    useState(ITEMS_PER_PAGE)
  const [selectedMaterial, setSelectedMaterial] =
    useState<Material | null>(null)

  const filteredMaterials = useMemo(() => {
    const query = search.trim().toLowerCase()

    return materials.filter((material) => {
      const categoryMatch =
        category === 'All' ||
        material.category === category

      const colourMatch =
        colour === 'All' ||
        material.colour === colour

      const searchMatch =
        !query ||
        [
          material.name,
          material.code,
          material.category,
          material.colour,
        ]
          .join(' ')
          .toLowerCase()
          .includes(query)

      return (
        categoryMatch &&
        colourMatch &&
        searchMatch
      )
    })
  }, [category, colour, search])

  const visibleMaterials = filteredMaterials.slice(
    0,
    visibleCount,
  )

  const hasMore =
    visibleCount < filteredMaterials.length

  const resetFilters = () => {
    setCategory('All')
    setColour('All')
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
  ].filter((value) => value !== 'All').length

  const quoteText = selectedMaterial
    ? `Hi, I'm interested in having my interior wrapped. I'm interested in the ${selectedMaterial.name} (${selectedMaterial.code}) material. I'd like to send some photos and get a quote.`
    : t.contactPage.whatsappMessage

  return (
    <section
      id="materials"
      className="border-t border-border bg-paper text-ink"
    >
      <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-14 lg:px-10 lg:pt-20">

        {/* HEADER */}
        <Reveal>
          <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[1fr_2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">
                {t.materials.eyebrow}
              </p>

              <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {t.materials.heading}
              </h1>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground lg:justify-self-end lg:text-lg">
              {t.materials.sub}
            </p>
          </div>
        </Reveal>

        {/* SEARCH */}
        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-col gap-5 border-b border-border pb-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full max-w-xl">
              <Search className="pointer-events-none absolute left-0 top-1/2 size-5 -translate-y-1/2 text-brass" />

              <input
                type="search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                  setVisibleCount(ITEMS_PER_PAGE)
                }}
                placeholder={t.materials.search}
                aria-label={t.materials.search}
                className="h-12 w-full border-0 border-b border-border bg-transparent pl-8 pr-10 text-sm text-ink outline-none transition-colors placeholder:text-muted-foreground focus:border-brass focus:ring-0"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch('')
                    setVisibleCount(ITEMS_PER_PAGE)
                  }}
                  aria-label={t.materials.clearSearch}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-brass"
                >
                  <X className="size-5" />
                </button>
              )}
            </div>

            <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              {filteredMaterials.length} {t.materials.results}
            </p>
          </div>
        </Reveal>

        {/* CATEGORY NAV */}
        <Reveal delay={0.08}>
          <div className="border-b border-border py-5">
            <div className="flex flex-wrap gap-x-7 gap-y-3">
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
                      'relative pb-1 text-xs font-bold uppercase tracking-[0.12em] transition-colors',
                      active
                        ? 'text-brass'
                        : 'text-muted-foreground hover:text-ink',
                    ].join(' ')}
                  >
                    {item}

                    {active && (
                      <span className="absolute -bottom-[21px] left-0 right-0 h-px bg-brass" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </Reveal>

        {/* FILTERS */}
        <div className="border-b border-border">
          <button
            type="button"
            onClick={() =>
              setFiltersOpen((open) => !open)
            }
            aria-expanded={filtersOpen}
            className="flex w-full items-center justify-between py-5 text-xs font-bold uppercase tracking-[0.15em] text-ink transition-colors hover:text-brass"
          >
            <span className="flex items-center gap-3">
              <span>{t.materials.filter}</span>

              {activeFilterCount > 0 && (
                <span className="text-brass">
                  ({activeFilterCount})
                </span>
              )}
            </span>

            <ChevronDown
              className={[
                'size-4 transition-transform duration-200',
                filtersOpen
                  ? 'rotate-180 text-brass'
                  : '',
              ].join(' ')}
            />
          </button>

          {filtersOpen && (
            <div className="border-t border-border py-7">
              <div className="grid gap-8 sm:grid-cols-2">
                <FilterGroup
                  label={t.materials.colour}
                  options={colours}
                  value={colour}
                  onChange={(value) =>
                    updateFilter(setColour, value)
                  }
                />
              </div>

              {activeFilterCount > 0 && (
                <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
                  <p className="text-xs text-muted-foreground">
                    {activeFilterCount} {t.materials.filter}
                  </p>

                  <button
                    type="button"
                    onClick={resetFilters}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-brass"
                  >
                    <RotateCcw className="size-3.5" />
                    {t.materials.clear}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* RESULTS / CLEAR */}
        <div className="mt-8 flex items-center justify-between">
          <div />

          {activeFilterCount > 0 || search ? (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-brass"
            >
              <RotateCcw className="size-3.5" />
              {t.materials.clear}
            </button>
          ) : null}
        </div>

        {/* MATERIAL GRID */}
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-14">
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
                className="group block w-full text-left focus:outline-none"
              >
                {/* IMAGE */}
                <div className="relative aspect-[1.15/1] overflow-hidden bg-muted">
                  <img
                    src={material.image}
                    alt={`${material.name} ${material.code}`}
                    loading={index < 8 ? 'eager' : 'lazy'}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-brass transition-all duration-500 group-hover:w-full" />
                </div>

                {/* INFO */}
<div className="pt-4">
  <div className="flex items-baseline justify-between gap-3">
    <h2 className="font-serif text-base font-semibold uppercase leading-tight transition-colors group-hover:text-brass sm:text-lg">
      {material.name}
    </h2>

    <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
      {material.code}
    </span>
  </div>

  <div className="mt-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
    <span>{material.category}</span>
    <span className="text-brass">·</span>
    <span>{material.colour}</span>
  </div>
</div>

        {/* EMPTY */}
        {filteredMaterials.length === 0 && (
          <div className="border-y border-border px-6 py-20 text-center">
            <p className="font-serif text-xl font-semibold uppercase">
              {t.materials.noResults}
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 inline-flex items-center gap-2 border-b border-brass pb-1 text-xs font-bold uppercase tracking-[0.12em] text-brass"
            >
              <RotateCcw className="size-4" />
              {t.materials.clear}
            </button>
          </div>
        )}

        {/* LOAD ALL */}
        {hasMore && (
          <div className="mt-16 flex justify-center border-t border-border pt-10">
            <button
              type="button"
              onClick={() =>
                setVisibleCount(filteredMaterials.length)
              }
              className="border-b border-brass pb-1 text-xs font-bold uppercase tracking-[0.15em] text-ink transition-colors hover:text-brass"
            >
              {t.materials.loadMore}
            </button>
          </div>
        )}

        {/* DISCLAIMER */}
        <p className="mx-auto mt-12 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          {t.materials.disclaimer}
        </p>

        {/* CTA */}
        <Reveal delay={0.1}>
          <div className="mt-16 border-y border-brass bg-pine px-6 py-10 text-paper sm:px-10 sm:py-12">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="font-serif text-2xl font-semibold uppercase sm:text-3xl">
                  {t.materials.ctaHeading}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-paper/75 sm:text-base">
                  {t.materials.ctaSub}
                </p>
              </div>

              <a
                href={whatsappLink(
                  t.contactPage.whatsappMessage,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 bg-paper px-6 py-3.5 text-sm font-bold text-pine transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="size-4" />
                {t.cta.getQuote}
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* MATERIAL MODAL */}
      {selectedMaterial && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={selectedMaterial.name}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedMaterial(null)
            }
          }}
        >
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-auto bg-paper shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedMaterial(null)}
              aria-label={t.materials.close}
              className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center bg-ink/80 text-paper backdrop-blur transition-colors hover:bg-brass hover:text-ink"
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

              <div className="mt-7 border border-border bg-paper">
                <MaterialDetail
                  label={t.materials.colour}
                  value={selectedMaterial.colour}
                />
              </div>

              <a
                href={whatsappLink(quoteText)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-pine px-6 py-4 text-sm font-bold text-paper transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                <MessageCircle className="size-4" />
                {t.materials.useMaterial}
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
      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </p>

      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {options.map((option) => {
          const active = value === option

          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={[
                'inline-flex items-center gap-1.5 border-b pb-1 text-xs transition-colors',
                active
                  ? 'border-brass text-brass'
                  : 'border-transparent text-muted-foreground hover:border-brass hover:text-ink',
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
    <div className="bg-paper p-3">
      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-ink">
        {value}
      </p>
    </div>
  )
}
