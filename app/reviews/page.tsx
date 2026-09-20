'use client'

import { ArrowRight, MapPin, MessageCircle, Star } from 'lucide-react'
import { whatsappLink } from '@/lib/i18n/dictionaries'
import { useLanguage } from '@/lib/i18n/provider'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileActionBar } from '@/components/mobile-action-bar'
import { SkipLink } from '@/components/skip-link'
import { Reveal } from '@/components/reveal'
import {
  AnimatedTestimonials,
  type Testimonial,
} from '@/components/blocks/animated-testimonials'

export default function ReviewsPage() {
  const { t } = useLanguage()

  const testimonials: Testimonial[] = t.reviews.items.map((item, i) => ({
    id: i + 1,
    name: item.name,
    role: item.projectType,
    company: item.location,
    content: item.quote,
    rating: 5,
  }))

  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main">
        {/* Page hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_85%_-10%,var(--color-sand),transparent_55%)]"
          />
          <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-xs font-medium text-moss backdrop-blur">
                <MapPin className="size-3.5 text-brass" />
                {t.hero.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 max-w-3xl text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl">
                {t.reviews.heading}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t.reviews.sub}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-7 flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 w-fit">
                <div className="flex" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-brass text-brass" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-ink">
                  {t.reviews.googleBadge}
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        <AnimatedTestimonials
          className="bg-secondary/40"
          title={t.reviews.heading}
          subtitle={t.reviews.sub}
          badgeText={t.reviews.googleBadge}
          testimonials={testimonials}
        />

        {/* CTA back to quote flow */}
        <section className="border-t border-border bg-background">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-balance font-serif text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {t.finalCta.heading}
              </h2>
              <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
                {t.finalCta.sub}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
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
                href="/#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:border-pine hover:text-pine"
              >
                {t.cta.viewProjects}
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  )
}
