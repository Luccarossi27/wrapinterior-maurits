'use client'

import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'

const googleReviewsUrl =
  'https://maps.app.goo.gl/EyFc7M5abQFYoVk67'

export function ReviewsSection() {
  const { t } = useLanguage()

  return (
    <section id="reviews" className="border-t border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-6xl px-5 pt-4 pb-20 sm:px-8 lg:pt-10 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {t.reviews.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                {t.reviews.sub}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-5 border border-border bg-card px-5 py-4 transition-colors hover:border-pine"
            >
              <div className="flex flex-col gap-2">
                <div className="flex" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="text-lg leading-none text-brass"
                      aria-hidden="true"
                    >
                      ★
                    </span>
                  ))}
                </div>

                <span className="text-sm font-semibold text-ink">
                  {t.reviews.googleBadge}
                </span>
              </div>

              <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 border-y border-border py-12 text-center">
            <p className="font-serif text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {t.reviews.readMore}
            </p>

            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-pine px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink"
            >
              {t.reviews.readButton}
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
