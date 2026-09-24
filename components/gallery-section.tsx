'use client'

import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'
import { BeforeAfterSlider } from '@/components/before-after-slider'

const galleryMedia = [
  { before: '/images/ben-before.jpeg', after: '/images/ben-after.jpeg' },
  { before: '/images/bernard-before.jpg', after: '/images/bernard-after.jpg' },
  { before: '/images/chantal-before.JPEG', after: '/images/chantal-after.jpg' },
  { before: '/images/griffioen-d1-before.JPEG', after: '/images/griffioen-d1-after.jpg' },
  { before: '/images/griffioen-d3-before.jpg', after: '/images/griffioen-d3-after.jpg' },
  { before: '/images/griffioen-k-before.jpeg', after: '/images/griffioen-k-after.jpeg' },
  { before: '/images/hans-before.jpg', after: '/images/hans-after.jpg' },
  { before: '/images/minja-before.jpg', after: '/images/minja-after.JPEG' },
]

export function GallerySection() {
  const { t } = useLanguage()

  return (
    <section id="portfolio" className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-5 pb-20 pt-16 sm:px-8 lg:pb-28 lg:pt-20">
        <Reveal>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t.gallery.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {t.gallery.sub}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {t.gallery.items.map((item, i) => {
            const media = galleryMedia[i]

            if (!media) return null

            return (
              <article key={item.title}>
                <BeforeAfterSlider
                  beforeSrc={media.before}
                  afterSrc={media.after}
                  beforeAlt={item.alt}
                  afterAlt={item.alt}
                  beforeLabel={t.hero.beforeLabel}
                  afterLabel={t.hero.afterLabel}
                  dragHint={t.hero.dragHint}
                  fit="contain"
                  aspectRatio="aspect-[4/3] h-[300px] sm:h-[360px] lg:h-[400px]"
                />

                <div className="mt-5">
                  <h3 className="font-serif text-xl font-semibold text-ink">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.location}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}