```tsx
'use client'

import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'
import { BeforeAfterSlider } from '@/components/before-after-slider'

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
      className="border-t border-border bg-background"
    >
      <div className="mx-auto w-full max-w-6xl px-5 pb-20 pt-16 sm:px-8 lg:pb-28 lg:pt-20">
        {/* Header */}
        <div className="border-b border-border pb-8">
          <Reveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-brass">
              Portfolio
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="max-w-2xl text-balance font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {t.gallery.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
              {t.gallery.sub}
            </p>
          </Reveal>
        </div>

        {/* Projects */}
        <div className="mt-12 grid gap-x-12 gap-y-16 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
          {t.gallery.items.map((item, i) => {
            const media = galleryMedia[i]

            if (!media) return null

            return (
              <Reveal key={item.title} delay={(i % 2) * 0.06}>
                <article className="group">
                  <div className="relative">
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

                    <div className="mt-0 h-px w-full bg-border transition-colors duration-500 group-hover:bg-brass" />
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-6">
                    <div>
                      <h3 className="font-serif text-xl font-semibold tracking-tight text-ink">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-sm text-muted-foreground">
                        {item.location}
                      </p>
                    </div>

                    <span className="pt-1 text-xs tabular-nums text-muted-foreground">
                      {String(i + 1).padStart(2, '0')}
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
```
