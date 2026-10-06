'use client'

import { useState } from 'react'
import { ChevronDown, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function FaqSection() {
  const { t } = useLanguage()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="mx-auto w-full max-w-3xl px-5 pt-10 pb-20 sm:px-8 lg:pt-10 lg:pb-28"
    >
      <Reveal>
        <div className="text-center">
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t.faq.heading}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            {t.faq.sub}
          </p>
        </div>
      </Reveal>

      <div className="mt-10 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
        {t.faq.items.map((item, i) => {
          const isOpen = open === i

          return (
            <Reveal key={item.q}>
              <div
                className={cn(
                  'transition-colors duration-300',
                  isOpen && 'bg-[#8F8277]',
                )}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span
                      className={cn(
                        'font-serif text-lg font-medium transition-colors duration-300',
                        isOpen ? 'text-[#F4F1E8]' : 'text-ink',
                      )}
                    >
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
                    <div className="px-6 pb-6">
                      <p
                        className={cn(
                          'text-pretty leading-relaxed transition-colors duration-300',
                          isOpen
                            ? 'text-[#F4F1E8]/80'
                            : 'text-muted-foreground',
                        )}
                      >
                        {item.a}
                      </p>

                      {item.link && (
                        <a
                          href={item.link.href}
                          className={cn(
                            'group mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-colors',
                            isOpen
                              ? 'text-[#F4F1E8] hover:text-[#F4F1E8]/70'
                              : 'text-pine hover:text-brass',
                          )}
                        >
                          {item.link.label}

                          <ArrowUpRight
                            className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            {t.faq.contactText}
          </p>

          <a
            href="/contact"
            className="group mt-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-pine transition-colors hover:text-brass"
          >
            {t.faq.contactLink}

            <ArrowUpRight
              className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </Reveal>
    </section>
  )
}
