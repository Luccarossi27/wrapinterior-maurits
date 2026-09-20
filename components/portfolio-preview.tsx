'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'

const portfolioMedia = [
  '/images/hero-kitchen-after.png',
  '/images/project-furniture.png',
  '/images/project-door.png',
]

export function PortfolioPreview() {
  const { t } = useLanguage()

  const items = t.gallery.items.slice(0, 3)

  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">
                Portfolio
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {t.gallery.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                {t.gallery.sub}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <Link
              href="/portfolio"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-pine px-5 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              View full portfolio
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={0.1 + i * 0.06}>
              <Link
                href="/portfolio"
                className="group block overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={portfolioMedia[i]}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80" />

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-sm font-medium text-paper/80">
                      {item.location}
                    </p>

                    <h3 className="mt-1 font-serif text-xl font-semibold text-paper">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}