'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'

const services = [
  {
    title: 'Kitchens',
    description: 'Refresh cabinet fronts, islands and panels without replacing them.',
  },
  {
    title: 'Furniture',
    description: 'Give existing furniture a completely new finish and character.',
  },
  {
    title: 'Doors',
    description: 'Transform interior doors and frames with a clean architectural finish.',
  },
  {
    title: 'Bathrooms',
    description: 'Update cabinet fronts and surfaces without a full renovation.',
  },
]

export function HomepageServices() {
  const { t } = useLanguage()

  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">
                What we wrap
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-3 max-w-md text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                Transform what you already have.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
                Premium interior film gives existing surfaces a completely new
                look without the cost, mess and disruption of replacement.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <Link
                href="/portfolio"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-pine underline decoration-brass decoration-2 underline-offset-4 transition-colors hover:text-ink"
              >
                See the transformations
                <ArrowUpRight className="size-4" />
              </Link>
            </Reveal>
          </div>

          <div className="grid border-t border-border sm:grid-cols-2 sm:border-t-0">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={0.05 + i * 0.05}>
                <Link
                  href="/portfolio"
                  className="group flex min-h-[150px] flex-col justify-between border-b border-border py-6 sm:border-t sm:px-6 sm:py-7 sm:first:border-l-0 sm:nth-[3]:border-b-0 lg:min-h-[170px]"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-xl font-semibold text-ink">
                        {service.title}
                      </h3>

                      <ArrowUpRight className="mt-0.5 size-5 shrink-0 text-brass transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>

                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}