'use client'

import Link from 'next/link'
import { Quote, Star, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'

export function ReviewsPreview() {
  const { t } = useLanguage()

  const reviews = t.reviews.items.slice(0, 3)

  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brass">
                {t.nav.reviews}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {t.reviews.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                {t.reviews.sub}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3">
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

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={`${review.name}-${i}`} delay={0.1 + i * 0.07}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-6">
                <Quote
                  className="size-7 text-brass"
                  aria-hidden="true"
                />

                <blockquote className="mt-4 flex-1 text-pretty text-base leading-relaxed text-ink">
                  {review.quote}
                </blockquote>

                <figcaption className="mt-6 border-t border-border pt-4">
                  <span className="block font-semibold text-ink">
                    {review.name}
                  </span>

                  <span className="mt-0.5 block text-sm text-muted-foreground">
                    {review.projectType} · {review.location}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 text-center">
            <Link
              href="/reviews"
              className="group inline-flex items-center gap-2 rounded-full bg-pine px-5 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              Read all reviews
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}