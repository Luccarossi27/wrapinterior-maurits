```tsx
'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'

export function HomepageContact() {
  const { t } = useLanguage()

  return (
    <section
      className="border-t border-border bg-background text-ink"
      aria-labelledby="homepage-contact-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Text */}
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">
                {t.contactPage.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2
                id="homepage-contact-heading"
                className="mt-3 max-w-2xl font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
              >
                {t.contactPage.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t.contactPage.sub}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <a
                href="/contact"
                className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-pine px-6 py-3.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-ink"
              >
                {t.contactPage.button}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>

          {/* Maurits photo */}
          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-sand shadow-xl">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/contact1.jpg"
                  alt="Maurits from Wrap Interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
```
