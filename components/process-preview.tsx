'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'

const stepImages = [
  '/images/detail-edge.png',
  '/images/process-clean.png',
  '/images/process-wrapping.png',
  '/images/detail-edge.png',
]

export function ProcessPreview() {
  const { t } = useLanguage()

  return (
    <section className="border-t border-border bg-ink text-paper">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brass">
                {t.nav.process}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
                {t.process.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 text-pretty text-base leading-relaxed text-paper/70">
                {t.process.sub}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <Link
              href="/process"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-brass px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              See the full process
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
          <ol className="space-y-5">
            {t.process.steps.map((step, i) => (
              <Reveal
                as="li"
                key={step.title}
                delay={0.1 + i * 0.06}
                className="flex gap-4 rounded-2xl border border-paper/10 bg-paper/5 p-4"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-brass/40 bg-brass/10 font-serif text-base font-semibold text-brass">
                  {i + 1}
                </span>

                <div>
                  <h3 className="font-serif text-lg font-semibold text-paper">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-paper/65">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal
            delay={0.15}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {stepImages.map((src, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-3xl border border-paper/10 ${
                  i === 0
                    ? 'aspect-[3/4]'
                    : i === 3
                      ? 'aspect-[3/4]'
                      : 'aspect-square'
                }`}
              >
                <Image
                  src={src}
                  alt={t.process.steps[i]?.title ?? 'Wrapping process detail'}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 40vw, 300px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}