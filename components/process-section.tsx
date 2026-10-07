'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'

const stepImages = [
  '/images/process1.jpeg',
  '/images/process4.png',
  '/images/process5.png',
  '/images/process2.jpeg',
]

export function ProcessSection() {
  const { t } = useLanguage()

  return (
    <section id="process" className="border-y border-border bg-[#8F8277] text-paper">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-pine">
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

            <ol className="mt-9 space-y-6">
              {t.process.steps.map((step, i) => (
                <Reveal as="li" key={step.title} delay={i * 0.06} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-pine/40 bg-pine/10 font-serif text-base font-semibold text-pine">
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
          </div>

          <Reveal delay={0.15} className="grid grid-cols-2">
  {stepImages.map((src, i) => (
    <div
  key={i}
  className={`relative overflow-hidden rounded-3xl border border-paper/10 ${
    i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square'
  } ${i === 1 ? 'translate-y-[85px]' : ''} `}
>
      <Image
        src={src || '/placeholder.svg'}
        alt={t.process.steps[i]?.title ?? 'Wrapping process detail'}
        fill
        sizes="(max-width: 1024px) 45vw, 300px"
        className="object-cover"
      />
    </div>
  ))}
</Reveal>
        </div>
      </div>
    </section>
  )
}
