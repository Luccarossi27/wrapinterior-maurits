'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { useLanguage } from '@/lib/i18n/provider'

const links = [
  { number: '01', key: 'portfolio', href: '/portfolio' },
  { number: '02', key: 'materials', href: '/materials' },
  { number: '03', key: 'process', href: '/process' },
  { number: '04', key: 'pricing', href: '/pricing' },
  { number: '05', key: 'reviews', href: '/reviews' },
  { number: '06', key: 'faq', href: '/faq' },
  { number: '07', key: 'contact', href: '/contact' },
] as const

export function HomepageExplore() {
  const { t } = useLanguage()

  return (
    <section className="border-t border-border bg-ink text-paper">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">
                {t.homepageExplore.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-3 max-w-md text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-paper sm:text-4xl">
                {t.homepageExplore.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-paper/65">
                {t.homepageExplore.sub}
              </p>
            </Reveal>
          </div>

          <div className="border-t border-paper/15">
            {links.map((link, i) => (
              <Reveal key={link.href} delay={0.04 + i * 0.04}>
                <Link
                  href={link.href}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-paper/15 py-5 transition-colors hover:bg-paper/[0.04] sm:grid-cols-[3rem_1fr_auto] sm:gap-5 sm:py-6"
                >
                  <span className="font-mono text-xs tracking-[0.12em] text-brass">
                    {link.number}
                  </span>

                  <div>
                    <h3 className="font-serif text-lg font-semibold text-paper sm:text-xl">
  {t.homepageExplore.links[link.key].title}
</h3>

<p className="mt-1 text-sm leading-relaxed text-paper/50">
  {t.homepageExplore.links[link.key].description}
</p>
                  </div>

                  <ArrowRight className="size-5 text-paper/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brass" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
