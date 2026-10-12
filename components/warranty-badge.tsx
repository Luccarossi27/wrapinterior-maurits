
'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/provider'

const warrantyBadges = {
  en: '/English.png',
  nl: '/NL.png',
  es: '/Spanish.png',
} as const

export function WarrantyBadge() {
  const { locale } = useLanguage()
  const badge = warrantyBadges[locale] ?? warrantyBadges.en

  return (
    <div className="flex items-center justify-center">
      <Image
        src={badge}
        alt="5 year warranty"
        width={160}
        height={160}
        className="h-[112px] w-auto object-contain sm:h-[120px]"
      />
    </div>
  )
}
