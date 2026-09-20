'use client'

import { useLanguage } from '@/lib/i18n/provider'

export function SkipLink() {
  const { t } = useLanguage()

  return (
    <a
      href="#main"
      className="sr-only left-4 top-4 z-[100] rounded-full bg-pine px-4 py-2 text-sm font-semibold text-paper focus:not-sr-only focus:fixed focus:outline-none focus:ring-2 focus:ring-brass"
    >
      {t.a11y.skip}
    </a>
  )
}
