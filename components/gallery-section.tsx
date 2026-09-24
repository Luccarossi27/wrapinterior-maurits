'use client'

import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'

const galleryMedia = [
  {
    before: '/images/ben-before.jpeg',
    after: '/images/ben-after.jpeg',
  },
  {
    before: '/images/bernard-before.jpg',
    after: '/images/bernard-after.jpg',
  },
  {
    before: '/images/chantal-before.JPEG',
    after: '/images/chantal-after.jpg',
  },
  {
    before: '/images/griffioen-d1-before.JPEG',
    after: '/images/griffioen-d1-after.jpg',
  },
  {
    before: '/images/griffioen-d3-before.jpg',
    after: '/images/griffioen-d3-after.jpg',
  },
  {
    before: '/images/griffioen-k-before.jpeg',
    after: '/images/griffioen-k-after.jpeg',
  },
  {
    before: '/images/hans-before.jpg',
    after: '/images/hans-after.jpg',
  },
  {
    before: '/images/minja-before.jpg',
    after: '/images/minja-after.JPEG',
  },
]

export function GallerySection() {
  const { t } = useLanguage()

  return (
    <section
      id="portfolio"
      className="border-t border-border bg-paper text-ink"
    >
      <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-14 lg:px-10 lg:pt-20">

        {/* HEADER */}
        <Reveal>
          <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[1fr_2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">
                Portfolio
              </p>

              <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {t.gallery.heading}
              </h1>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground lg:justify-self-end lg:text-lg">
              {t.gallery.sub}
            </p>
          </div>
        </Reveal>

        {/* GALLERY */}
        <div className="mt-12 flex flex-col gap-14 lg:mt-16 lg:gap-20">
          {t.gallery.items.map((item, i) => {
            const media = galleryMedia[i]

            if (!media) return null

            return (
              <Reveal key={item.title} delay={(i % 2) * 0.06}>
                <article className="group">
                  {/* IMAGES — natural aspect ratio, uniform height, varying widths */}
                  <div className="flex flex-wrap items-end gap-3 sm:gap-4">
                    <figure className="group/img relative">
                      <img
                        src={media.before || '/placeholder.svg'}
                        alt={`${item.title} — ${t.hero.beforeLabel}`}
                        loading={i < 3 ? 'eager' : 'lazy'}
                        className="h-[180px] w-auto max-w-full object-contain sm:h-[210px] lg:h-[240px]"
                      />
                      <figcaption className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                        {t.hero.beforeLabel}
                      </figcaption>
                    </figure>

                    <figure className="group/img relative">
                      <img
                        src={media.after || '/placeholder.svg'}
                        alt={`${item.title} — ${t.hero.afterLabel}`}
                        loading={i < 3 ? 'eager' : 'lazy'}
                        className="h-[180px] w-auto max-w-full object-contain sm:h-[210px] lg:h-[240px]"
                      />
                      <figcaption className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brass">
                        {t.hero.afterLabel}
                      </figcaption>
                    </figure>
                  </div>

                  {/* INFO — materials-style caption */}
                  <div className="mt-5 flex items-baseline justify-between gap-6 border-t border-border pt-4">
                    <h2 className="font-serif text-xl font-semibold uppercase tracking-tight transition-colors group-hover:text-brass">
                      {item.title}
                    </h2>

                    <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      {item.location}
                    </span>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
