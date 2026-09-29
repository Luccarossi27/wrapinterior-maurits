'use client'

import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'

export function ProofBar() {
  const { t } = useLanguage()

  return (
    <section aria-label={t.proof.note} className="border-y border-border bg-pine text-paper">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px overflow-hidden px-5 py-10 sm:px-8 lg:grid-cols-3">
        {t.proof.items.map((item, i) => (
          <Reveal
            key={item.label}
            delay={i * 0.06}
            className="flex flex-col items-center gap-1 px-2 text-center"
          >
            <span className="font-serif text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              {item.value}
            </span>
            <span className="text-xs font-medium uppercase tracking-wide text-paper/70 sm:text-sm">
              {item.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
