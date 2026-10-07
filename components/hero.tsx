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
      className="relative h-[640px] overflow-hidden sm:h-[620px] lg:h-[680px]"
    >
      {/* Kitchen background */}
      <img
        src="/images/homepage.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center animate-[heroZoom_14s_ease-out_forwards]"
      />

      {/* Responsive cinematic overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 via-60% to-black/10 sm:bg-gradient-to-r sm:from-black/60 sm:via-black/20 sm:to-transparent"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl items-start px-5 pt-20 pb-16 sm:items-end sm:px-8 sm:pt-0 sm:pb-20 lg:pb-24">
        <div className="w-full max-w-3xl">

          {/* Main heading */}
          <Reveal delay={0.05}>
            <h1 className="max-w-3xl text-balance font-serif text-[3.2rem] font-bold uppercase leading-[0.9] tracking-[-0.05em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-[5.4rem]">
              {t.hero.h1}
            </h1>
          </Reveal>

          {/* Supporting copy */}
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-xl whitespace-pre-line text-pretty text-base leading-[1.65] text-white/95 sm:text-lg">
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
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-pine shadow-xl transition-all hover:-translate-y-0.5 hover:bg-paper"
              >
                <MessageCircle className="size-5" />
                {t.cta.sendPhotos}
              </a>

              <a
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-6 py-3.5 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10"
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
