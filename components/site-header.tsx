'use client'

import { useEffect, useState } from 'react'
import { MessageCircle, Menu, X } from 'lucide-react'
import { contact, whatsappLink } from '@/lib/i18n/dictionaries'
import { useLanguage } from '@/lib/i18n/provider'
import { Logo } from '@/components/logo'
import { LanguageSwitcher } from '@/components/language-switcher'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

const links = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/process', label: 'Process' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-pine">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-2 sm:px-8">
        <Logo />

        <nav
          aria-label={t.a11y.primaryNav}
          className="hidden items-center gap-7 lg:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-white/90 transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-brass after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />

          <a
            href={whatsappLink(t.finalCta.microcopy)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-white/20 md:inline-flex"
          >
            <MessageCircle className="size-4" />
            {t.cta.whatsappQuote}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'fixed inset-0 top-[96px] z-40 origin-top bg-pine transition-all duration-300 lg:hidden',
          open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      >
        <nav
          aria-label={t.a11y.primaryNav}
          className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-6 sm:px-8"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/15 py-4 font-serif text-2xl text-white"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-6 flex items-center justify-between">
            <LanguageSwitcher />

            <a
              href={`tel:${contact.phoneHref}`}
              className="text-sm font-medium text-white/80"
            >
              {contact.phoneDisplay}
            </a>
          </div>

          <a
            href={whatsappLink(t.finalCta.microcopy)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/20"
          >
            <MessageCircle className="size-5" />
            {t.cta.whatsappQuote}
          </a>
        </nav>
      </div>
    </header>
  )
}