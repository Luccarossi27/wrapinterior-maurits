'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function FaqSection() {
  const { t } = useLanguage()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto w-full max-w-3xl px-5 pt-4 pb-20 sm:px-8 lg:pt-10 lg:pb-28">
      <Reveal>
        <h2 className="text-balance text-center font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {t.faq.heading}
        </h2>
      </Reveal>

      <div className="mt-10 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
        {t.faq.items.map((item, i) => {
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
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
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
    </section>
  )
}
