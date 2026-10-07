'use client'

import { ArrowRight, MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/i18n/dictionaries'
import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="relative h-[520px] overflow-hidden sm:h-[560px] lg:h-[600px]"
    >
      {/* Kitchen background */}
      <img
        src="/images/homepage.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Subtle gradient for text readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent"
      />

      {/* Content */}
      className="relative z-10 mx-auto flex h-full w-full max-w-6xl items-center px-5 py-16 sm:px-8 lg:py-20"
        <div className="max-w-2xl">

          {/* Main heading */}
          <Reveal delay={0.05}>
            <h1 className="max-w-2xl text-balance font-serif text-[2.9rem] font-bold uppercase leading-[0.94] tracking-[-0.045em] text-white sm:text-5xl lg:text-[4.65rem]">
              {t.hero.h1}
            </h1>
          </Reveal>

          {/* Supporting copy */}
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl whitespace-pre-line text-pretty text-base leading-[1.7] text-white/90 sm:text-lg">
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
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-pine"
              >
                {t.cta.viewProjects}
                <ArrowRight className="size-4" />
              </a>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
