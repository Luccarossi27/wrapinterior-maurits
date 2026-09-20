'use client'

import { Check, MessageCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { whatsappLink } from '@/lib/i18n/dictionaries'
import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function PricingPreview() {
  const { t } = useLanguage()

  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brass">
                {t.nav.pricing}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {t.pricing.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                {t.pricing.sub}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <Link
              href="/pricing"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-pine px-5 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              View full pricing
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
          {t.pricing.cards.map((card, i) => {
            const featured = !!card.popular

            return (
              <Reveal key={card.name} delay={0.1 + i * 0.07}>
                <div
                  className={cn(
                    'flex h-full flex-col rounded-3xl border p-6',
                    featured
                      ? 'border-pine bg-pine text-paper shadow-xl shadow-pine/20'
                      : 'border-border bg-card',
                  )}
                >
                  {featured && (
                    <span className="mb-4 inline-flex w-fit rounded-full bg-brass px-3 py-1 text-xs font-semibold text-ink">
                      {t.pricing.popularLabel}
                    </span>
                  )}

                  <h3
                    className={cn(
                      'font-serif text-xl font-semibold',
                      featured ? 'text-paper' : 'text-ink',
                    )}
                  >
                    {card.name}
                  </h3>

                  <p
                    className={cn(
                      'mt-1 text-sm',
                      featured
                        ? 'text-paper/70'
                        : 'text-muted-foreground',
                    )}
                  >
                    {card.scope}
                  </p>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span
                      className={cn(
                        'font-serif text-3xl font-semibold tracking-tight',
                        featured ? 'text-paper' : 'text-ink',
                      )}
                    >
                      {card.price}
                    </span>

                    <span
                      className={cn(
                        'text-xs font-medium',
                        featured
                          ? 'text-paper/70'
                          : 'text-muted-foreground',
                      )}
                    >
                      {t.pricing.vat}
                    </span>
                  </div>

                  <p
                    className={cn(
                      'mt-5 text-xs font-semibold uppercase tracking-wide',
                      featured ? 'text-brass' : 'text-moss',
                    )}
                  >
                    {t.pricing.includedTitle}
                  </p>

                  <ul className="mt-3 space-y-2.5">
                    {card.included.map((feature) => (
                      <li key={feature} className="flex gap-2.5 text-sm">
                        <Check
                          className={cn(
                            'mt-0.5 size-4 shrink-0',
                            featured ? 'text-brass' : 'text-pine',
                          )}
                        />
                        <span
                          className={
                            featured ? 'text-paper/90' : 'text-ink'
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappLink(
                      `${t.cta.getQuote} — ${card.name}`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5',
                      featured
                        ? 'mt-7 bg-paper text-pine hover:bg-sand'
                        : 'mt-7 bg-pine text-paper hover:bg-ink',
                    )}
                  >
                    <MessageCircle className="size-4" />
                    {t.cta.getQuote}
                  </a>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
            {t.pricing.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  )
}