'use client'

import { useEffect, useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import { contact, whatsappLink } from '@/lib/i18n/dictionaries'
import { useLanguage } from '@/lib/i18n/provider'
import { Logo } from '@/components/logo'
import { LanguageSwitcher } from '@/components/language-switcher'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const links = [
    { href: '/#portfolio', label: t.nav.portfolio },
    { href: '/#process', label: t.nav.process },
    { href: '/#pricing', label: t.nav.pricing },
    { href: '/reviews', label: t.nav.reviews },
    { href: '/#faq', label: t.nav.faq },
    { href: '/#contact', label: t.nav.contact },
  ]

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-colors duration-300',
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent bg-background/0',
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Logo />

        <nav
          aria-label={t.a11y.primaryNav}
          className="hidden items-center gap-7 lg:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-brass after:transition-all hover:after:w-full"
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
            className="hidden items-center gap-2 rounded-full bg-pine px-4 py-2 text-sm font-semibold text-paper shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-ink md:inline-flex"
          >
            <MessageCircle className="size-4" />
            {t.cta.whatsappQuote}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-ink lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 top-[61px] z-40 origin-top bg-background/98 backdrop-blur-md transition-all duration-300 lg:hidden',
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
              className="border-b border-border/60 py-4 font-serif text-2xl text-ink"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-6 flex items-center justify-between">
            <LanguageSwitcher />
            <a
              href={`tel:${contact.phoneHref}`}
              className="text-sm font-medium text-muted-foreground"
            >
              {contact.phoneDisplay}
            </a>
          </div>
          <a
            href={whatsappLink(t.finalCta.microcopy)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-pine px-5 py-3.5 text-base font-semibold text-paper"
          >
            <MessageCircle className="size-5" />
            {t.cta.whatsappQuote}
          </a>
        </nav>
      </div>
    </header>
  )
}
