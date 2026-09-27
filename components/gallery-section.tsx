'use client'

import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'
import { BeforeAfterSlider } from '@/components/before-after-slider'

const galleryMedia = [
  {
    before: '/images/ben-before.jpeg',
    after: '/images/ben-after.jpeg',
    aspectRatio: 'aspect-[5/4]',
    colour: 'COLOUR TBC',
    code: 'CODE TBC',
  },
  {
    before: '/images/bernard-before.jpg',
    after: '/images/bernard-after.jpg',
    aspectRatio: 'aspect-[5/4]',
    colour: 'COLOUR TBC',
    code: 'CODE TBC',
  },
  {
    before: '/images/chantal-before.JPEG',
    after: '/images/chantal-after.jpg',
    aspectRatio: 'aspect-[4/5]',
    colour: 'COLOUR TBC',
    code: 'CODE TBC',
  },
  {
    before: '/images/griffioen-d1-before.JPEG',
    after: '/images/griffioen-d1-after.jpg',
    aspectRatio: 'aspect-[4/5]',
    colour: 'COLOUR TBC',
    code: 'CODE TBC',
  },
  {
    before: '/images/griffioen-d3-before.jpg',
    after: '/images/griffioen-d3-after.jpg',
    aspectRatio: 'aspect-[4/5]',
    colour: 'COLOUR TBC',
    code: 'CODE TBC',
  },
  {
    before: '/images/griffioen-k-before.jpeg',
    after: '/images/griffioen-k-after.jpeg',
    aspectRatio: 'aspect-[4/5]',
    colour: 'COLOUR TBC',
    code: 'CODE TBC',
  },
  {
    before: '/images/hans-before.jpg',
    after: '/images/hans-after.jpg',
    aspectRatio: 'aspect-[5/4]',
    colour: 'COLOUR TBC',
    code: 'CODE TBC',
  },
  {
    before: '/images/minja-before.jpg',
    after: '/images/minja-after.JPEG',
    aspectRatio: 'aspect-[4/5]',
    colour: 'COLOUR TBC',
    code: 'CODE TBC',
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

        {/* GALLERY GRID */}
        <div className="mt-12 grid gap-x-10 gap-y-14 lg:mt-16 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-20">
          {t.gallery.items.map((item, i) => {
            const media = galleryMedia[i]

            if (!media) return null

            return (
              <Reveal key={item.title} delay={(i % 2) * 0.06}>
                <article className="group">

                  <div
                    className={cn(
                      'relative mx-auto overflow-hidden',
                      media.aspectRatio === 'aspect-[4/5]'
                        ? 'w-[55%]'
                        : 'w-[75%]',
                    )}
                  >
                    <BeforeAfterSlider
                      beforeSrc={media.before}
                      afterSrc={media.after}
                      beforeAlt={item.alt}
                      afterAlt={item.alt}
                      beforeLabel={t.hero.beforeLabel}
                      afterLabel={t.hero.afterLabel}
                      dragHint={t.hero.dragHint}
                      fit="contain"
                      chrome
                      showLabels
                      showDragHint
                      accent="brass"
                      aspectRatio={media.aspectRatio}
                    />
                  </div>

                  {/* PROJECT INFORMATION */}
                  <div className="mt-5 flex items-baseline justify-between gap-6 border-t border-border pt-4">
                    <h2 className="font-serif text-xl font-semibold uppercase tracking-tight">
                      {media.colour}
                    </h2>

                    <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      {media.code}
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
