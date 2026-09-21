'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

// Language-independent metadata, aligned by index with the dictionary items.
const galleryMedia = [
  { src: '/images/hero-kitchen-after.png', tags: ['kitchen', 'color'] },
  { src: '/images/project-furniture.png', tags: ['furniture', 'wood'] },
  { src: '/images/project-door.png', tags: ['doors', 'color'] },
  { src: '/images/project-bathroom.png', tags: ['bathroom', 'color'] },
  { src: '/images/project-wardrobe.png', tags: ['furniture', 'wood'] },
  { src: '/images/project-island.png', tags: ['kitchen', 'stone'] },
]

export function GallerySection() {
  const { t } = useLanguage()
  const [active, setActive] = useState('all')

  const items = useMemo(
    () =>
      t.gallery.items.map((item, i) => ({
        ...item,
        media: galleryMedia[i] ?? galleryMedia[0],
      })),
    [t],
  )

  const filtered = items.filter(
    (item) => active === 'all' || item.media.tags.includes(active),
  )

  return (
    <section id="portfolio" className="border-t border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-6xl px-5 pt-4 pb-20 sm:px-8 lg:pt-10 lg:pb-28">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {t.gallery.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              {t.gallery.sub}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label={t.gallery.heading}>
            {t.gallery.filters.map((filter) => {
              const isActive = active === filter.key
              return (
                <button
                  key={filter.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(filter.key)}
                  className={cn(
                    'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                    isActive
                      ? 'border-pine bg-pine text-paper'
                      : 'border-border bg-card text-muted-foreground hover:border-pine hover:text-pine',
                  )}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06}>
              <figure className="group overflow-hidden rounded-3xl border border-border bg-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.media.src || '/placeholder.svg'}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-1.5 bg-gradient-to-t from-ink/80 to-transparent px-4 pb-3 pt-10 text-sm font-medium text-paper">
                    <MapPin className="size-3.5 text-brass" />
                    {item.location}
                  </figcaption>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <dl className="mt-3 grid grid-cols-1 gap-1.5 text-sm">
                    <Row label={t.gallery.scopeLabel} value={item.scope} />
                    <Row label={t.gallery.finishLabel} value={item.finish} />
                    <Row label={t.gallery.durationLabel} value={item.duration} />
                  </dl>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-right font-medium text-ink">{value}</dd>
    </div>
  )
}
