'use client'

import {
  ArrowUpRight,
  ChefHat,
  DoorClosed,
  Hotel,
  Sofa,
  Bath,
  Package,
} from 'lucide-react'
import type { ComponentType } from 'react'
import { whatsappLink } from '@/lib/i18n/dictionaries'
import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'

const icons: ComponentType<{ className?: string }>[] = [
  ChefHat,
  Sofa,
  DoorClosed,
  Bath,
  Package,
  Hotel,
]

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="max-w-2xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brass">
            {t.nav.portfolio}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t.services.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            {t.services.sub}
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.services.cards.map((card, i) => {
          const Icon = icons[i] ?? ChefHat
          return (
            <Reveal key={card.title} delay={(i % 3) * 0.06}>
              <a
                href={whatsappLink(`${t.services.cardCta}: ${card.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-pine hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-pine transition-colors group-hover:bg-pine group-hover:text-paper">
                    <Icon className="size-5" />
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-pine" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-ink">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.benefit}
                </p>
                <dl className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium text-moss">
                      {t.services.bestForLabel}:
                    </dt>
                    <dd className="text-ink">{card.bestFor}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium text-moss">
                      {t.services.finishesLabel}:
                    </dt>
                    <dd className="text-ink">{card.finishes}</dd>
                  </div>
                </dl>
              </a>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
