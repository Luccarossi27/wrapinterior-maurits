'use client'

import { Mail, MapPin, Phone } from 'lucide-react'
import { contact } from '@/lib/i18n/dictionaries'
import { useLanguage } from '@/lib/i18n/provider'
import { Logo } from '@/components/logo'
import { LanguageSwitcher } from '@/components/language-switcher'

export function SiteFooter() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo subtitle />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-ink">
                {t.footer.languagesTitle}
              </h3>
              <LanguageSwitcher className="mt-3" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">
              {t.footer.serviceAreaTitle}
            </h3>
            <p className="mt-4 flex gap-2 text-sm leading-relaxed text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brass" />
              {t.footer.serviceArea}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">
              {t.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-pine"
                >
                  <Phone className="size-4 text-brass" />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-pine"
                >
                  <Mail className="size-4 text-brass" />
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} Wrap Interior. {t.footer.rights}
          </p>
          <p>{t.footer.legal}</p>
        </div>
      </div>
      {/* spacer so the mobile action bar never covers footer content */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </footer>
  )
}
