'use client'

import { Info } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'

// Aligned by index with dictionary swatches.
const swatchColors = [
  'linear-gradient(135deg,#8a9a82,#6f7f72)', // sage
  'linear-gradient(135deg,#3a5245,#243530)', // pine
  'linear-gradient(135deg,#f2ede4,#e2dccf)', // off-white
  'linear-gradient(135deg,#ca9f66,#a97c47)', // warm oak
  'linear-gradient(135deg,#7a5334,#4f3722)', // walnut
  'linear-gradient(135deg,#d3c8b2,#b5a98d)', // natural stone
  'linear-gradient(135deg,#a6a69f,#86867f)', // concrete
  'linear-gradient(135deg,#ddd1bb,#c7b99c)', // linen
  'linear-gradient(135deg,#9a6544,#6f4227)', // leather
  'linear-gradient(135deg,#3c4143,#282c2d)', // anthracite
]

export function MaterialsSection() {
  const { t } = useLanguage()

  return (
    <section id="materials" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div>
          <Reveal>
            <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {t.materials.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              {t.materials.sub}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 flex gap-3 rounded-2xl border border-border bg-secondary/50 p-4 text-sm leading-relaxed text-ink">
              <Info className="mt-0.5 size-5 shrink-0 text-brass" />
              <span>{t.materials.note}</span>
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {t.materials.swatches.map((swatch, i) => (
            <Reveal key={swatch.name} delay={(i % 4) * 0.05}>
              <figure className="group">
                <div
                  className="aspect-square w-full rounded-2xl border border-border shadow-inner transition-transform group-hover:-translate-y-1"
                  style={{ backgroundImage: swatchColors[i] ?? swatchColors[0] }}
                />
                <figcaption className="mt-2.5">
                  <span className="block text-sm font-semibold text-ink">
                    {swatch.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {swatch.finish}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
