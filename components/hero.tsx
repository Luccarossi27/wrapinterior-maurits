'use client'

import { ArrowRight, Camera, MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/i18n/dictionaries'
import { useLanguage } from '@/lib/i18n/provider'
import { BeforeAfterSlider } from '@/components/before-after-slider'
import { Reveal } from '@/components/reveal'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Soft coastal wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_85%_-10%,var(--color-sand),transparent_55%)]"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-14 pt-4 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pb-24 lg:pt-10">
        <div>

          {/* Main heading */}
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-2xl text-balance font-serif text-[2.9rem] font-bold uppercase leading-[0.94] tracking-[-0.045em] text-ink sm:text-5xl lg:text-[4.65rem]">
              {t.hero.h1}
            </h1>
          </Reveal>

          {/* Supporting copy */}
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-[1.7] text-muted-foreground sm:text-lg">
              {t.hero.sub}
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappLink(t.finalCta.microcopy)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-pine px-6 py-3.5 text-base font-semibold text-paper shadow-lg shadow-pine/20 transition-transform hover:-translate-y-0.5 hover:bg-ink"
              >
                <MessageCircle className="size-5" />
                {t.cta.sendPhotos}
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:border-pine hover:text-pine"
              >
                {t.cta.viewProjects}
                <ArrowRight className="size-4" />
              </a>
            </div>
          </Reveal>

          {/* Trust / service points */}
          <Reveal delay={0.2}>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-5">
              {t.hero.chips.map((chip, i) => (
                <li
                  key={chip}
                  className="flex items-center gap-2 text-sm font-medium text-ink"
                >
                  {i === 3 ? (
                    <Camera className="size-4 text-brass" />
                  ) : (
                    <span className="size-1.5 rounded-full bg-brass" />
                  )}

                  {chip}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Before / After */}
        <Reveal delay={0.15}>
          <BeforeAfterSlider
            priority
            beforeSrc="/images/hero-kitchen-before.png"
            afterSrc="/images/hero-kitchen-after.png"
            beforeAlt="Dated kitchen fronts before interior wrapping"
            afterAlt="The same kitchen after wrapping the fronts in matte sage green film"
            beforeLabel={t.hero.beforeLabel}
            afterLabel={t.hero.afterLabel}
            dragHint={t.hero.dragHint}
          />
        </Reveal>
      </div>
    </section>
  )
}