'use client'

import { MessageCircle, Phone } from 'lucide-react'
import { contact, whatsappLink } from '@/lib/i18n/dictionaries'
import { useLanguage } from '@/lib/i18n/provider'

export function MobileActionBar() {
  const { t } = useLanguage()

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 p-3 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2">
        <a
          href={whatsappLink(t.finalCta.microcopy)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-pine px-4 py-3 text-sm font-semibold text-paper"
        >
          <MessageCircle className="size-4" />
          {t.cta.whatsappQuote}
        </a>
        <a
          href={`tel:${contact.phoneHref}`}
          aria-label={t.cta.call}
          className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-card text-pine"
        >
          <Phone className="size-5" />
        </a>
      </div>
    </div>
  )
}
