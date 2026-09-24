'use client'

import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'
import { BeforeAfterSlider } from '@/components/before-after-slider'

export function GallerySection() {
  const { t } = useLanguage()

  return (
    <section id="portfolio">
      <Reveal>
        <h1>{t.gallery.heading}</h1>
      </Reveal>

      <BeforeAfterSlider
        beforeSrc="/images/ben-before.jpeg"
        afterSrc="/images/ben-after.jpeg"
        beforeAlt="Before"
        afterAlt="After"
        beforeLabel={t.hero.beforeLabel}
        afterLabel={t.hero.afterLabel}
        dragHint={t.hero.dragHint}
        fit="contain"
        aspectRatio="h-[390px]"
      />
    </section>
  )
}