'use client'

import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/provider'
import { BeforeAfterSlider } from '@/components/before-after-slider'
import { Reveal } from '@/components/reveal'

export function HomepageServices() {
  const { t } = useLanguage()

  return (
    <section id="what-we-wrap" className="bg-sand text-ink">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">

          {/* Before / After */}
          <Reveal>
  <div className="mx-auto w-full max-w-sm lg:max-w-[380px]">
    <BeforeAfterSlider
      beforeSrc="/images/YOUR-WARDROBE-BEFORE.jpg"
      afterSrc="/images/YOUR-WARDROBE-AFTER.jpg"
      beforeAlt={t.homepageServices.imageBeforeAlt}
      afterAlt={t.homepageServices.imageAfterAlt}
      beforeLabel={t.hero.beforeLabel}
      afterLabel={t.hero.afterLabel}
      dragHint={t.hero.dragHint}
      aspectRatio="aspect-[3/4]"
    />
  </div>
</Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">
                {t.homepageServices.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                {t.homepageServices.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t.homepageServices.sub}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3 border-y border-ink/10 py-5 sm:grid-cols-3">
                {t.homepageServices.items.map((item) => (
                  <div
                    key={item}
                    className="text-sm font-semibold uppercase tracking-wide text-ink"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href="/portfolio"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-pine"
              >
                {t.homepageServices.link}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}