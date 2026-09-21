'use client'

import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'

const categoryStyles = [
  'bg-[#d8c4a8]',
  'bg-[#c8c2b8]',
  'bg-[#ece9e2]',
  'bg-[#8b8b82]',
  'bg-[#5d5148]',
  'bg-[#b7a89a]',
  'bg-[#cfc8bb]',
  'bg-[#a8a08f]',
]

export function MaterialsSection() {
  const { t } = useLanguage()

  return (
    <section
      id="materials"
      className="border-t border-border bg-paper"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">
              {t.materials.note}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {t.materials.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.materials.sub}
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.materials.categories.map((category, i) => (
            <Reveal
              key={category.name}
              delay={(i % 3) * 0.05}
            >
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card transition-transform duration-300 hover:-translate-y-1">
                <div
                  className={`relative h-24 overflow-hidden ${categoryStyles[i % categoryStyles.length]}`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-30"
                    style={
                      i === 0
                        ? {
                            backgroundImage:
                              'repeating-linear-gradient(90deg, transparent 0 28px, rgba(80,55,30,0.25) 29px 31px)',
                          }
                        : i === 1
                          ? {
                              backgroundImage:
                                'radial-gradient(circle at 20% 30%, rgba(80,80,80,0.2) 0 2px, transparent 3px), radial-gradient(circle at 70% 65%, rgba(80,80,80,0.18) 0 2px, transparent 3px)',
                            }
                          : i === 2
                            ? {
                                backgroundImage:
                                  'linear-gradient(135deg, rgba(255,255,255,0.5), transparent 45%, rgba(255,255,255,0.35))',
                              }
                            : i === 3
                              ? {
                                  backgroundImage:
                                    'repeating-linear-gradient(90deg, transparent 0 18px, rgba(255,255,255,0.18) 19px 20px)',
                                }
                              : i === 4
                                ? {
                                    backgroundImage:
                                      'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.12) 0 12px, transparent 13px)',
                                  }
                                : i === 5
                                  ? {
                                      backgroundImage:
                                        'repeating-linear-gradient(0deg, transparent 0 8px, rgba(80,60,50,0.12) 9px 10px)',
                                    }
                                  : {
                                      backgroundImage:
                                        'linear-gradient(120deg, rgba(255,255,255,0.3), transparent 35%, rgba(255,255,255,0.2))',
                                    }
                    }
                  />

                  <div className="absolute bottom-3 left-4 rounded-full bg-paper/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink backdrop-blur">
                    {category.name}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-serif text-xl font-semibold text-ink">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.finishes.map((finish) => (
                      <span
                        key={finish}
                        className="rounded-full border border-border bg-secondary/50 px-2.5 py-1 text-[11px] font-medium text-ink"
                      >
                        {finish}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {t.materials.sampleCta}
            </p>

            <a
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-pine"
            >
              {t.cta.getQuote}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}