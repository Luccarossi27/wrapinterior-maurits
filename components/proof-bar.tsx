
'use client'

import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'
import { WarrantyBadge } from '@/components/warranty-badge'

export function ProofBar() {
  const { t } = useLanguage()

  return (
    <section
      aria-label={t.proof.note}
      className="border-b border-border bg-pine text-paper"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-y-8 overflow-hidden px-5 py-10 sm:grid-cols-2 sm:gap-y-10 sm:px-8 lg:grid-cols-4 lg:gap-y-0">
        {t.proof.items.map((item, i) => (
          <Reveal
            key={item.label}
            delay={i * 0.06}
            className="flex flex-col items-center justify-center gap-1 px-2 text-center"
          >
            <span className="font-serif text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              {item.value}
            </span>

            <span className="text-xs font-medium uppercase tracking-wide text-paper/70 sm:text-sm">
              {item.label}
            </span>
          </Reveal>
        ))}

        <Reveal
          delay={0.18}
          className="flex flex-col items-center justify-center gap-1 px-2 text-center"
        >
          <WarrantyBadge />
        </Reveal>
      </div>
    </section>
  )
}
