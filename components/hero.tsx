'use client'

import { ArrowRight, MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/i18n/dictionaries'
import { useLanguage } from '@/lib/i18n/provider'
import { BeforeAfterSlider } from '@/components/before-after-slider'
import { Reveal } from '@/components/reveal'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Kitchen background */}
      <img
        src="/images/homepage.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-pine/55"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-14 pt-10 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pb-24 lg:pt-16">
        <div>

          {/* Main heading */}
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-2xl text-balance font-serif text-[2.9rem] font-bold uppercase leading-[0.94] tracking-[-0.045em] text-white sm:text-5xl lg:text-[4.65rem]">
              {t.hero.h1}
            </h1>
          </Reveal>

          {/* Supporting copy */}
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl whitespace-pre-line text-pretty text-base leading-[1.7] text-white/85 sm:text-lg">
              {t.hero.sub}
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappLink(t.contactPage.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-pine shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-paper"
              >
                <MessageCircle className="size-5" />
                {t.cta.sendPhotos}
              </a>

              <a
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-pine"
              >
                {t.cta.viewProjects}
                <ArrowRight className="size-4" />
              </a>
            </div>
          </Reveal>

        </div>

        {/* Before / After */}
        <Reveal delay={0.15}>
          <BeforeAfterSlider
            priority
            beforeSrc="/images/ben-before.jpeg"
            afterSrc="/images/ben-after.jpeg"
            beforeAlt="Dated kitchen fronts before interior wrapping"
            afterAlt="The same kitchen after wrapping the fronts in interior film"
            beforeLabel={t.hero.beforeLabel}
            afterLabel={t.hero.afterLabel}
            dragHint={t.hero.dragHint}
          />
        </Reveal>
      </div>
    </section>
  )
}
