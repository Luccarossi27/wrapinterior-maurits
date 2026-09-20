'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function FaqPreview() {
  const { t } = useLanguage()
  const [open, setOpen] = useState<number | null>(0)

  const items = t.faq.items.slice(0, 4)

  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-3xl px-5 py-20 sm:px-8 lg:py-24">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-brass">
            {t.nav.faq}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-3 text-balance text-center font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t.faq.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-2xl text-center text-pretty leading-relaxed text-muted-foreground">
            Find answers to some of the most common questions about our
            interior wrapping service.
          </p>
        </Reveal>

        <div className="mt-10 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
          {items.map((item, i) => {
            const isOpen = open === i

            return (
              <Reveal key={item.q}>
                <div>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-serif text-lg font-medium text-ink">
                        {item.q}
                      </span>

                      <ChevronDown
                        className={cn(
                          'size-5 shrink-0 text-brass transition-transform duration-300',
                          isOpen && 'rotate-180',
                        )}
                      />
                    </button>
                  </h3>

                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-pretty leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="group inline-flex items-center gap-2 rounded-full bg-pine px-5 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              View all FAQs
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}