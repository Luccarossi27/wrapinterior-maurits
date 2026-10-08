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
    <footer className="bg-pine text-paper">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr] md:gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center text-center">
  <Logo />

  <p className="mt-3 max-w-xs font-serif text-sm font-medium leading-snug text-paper/80">
    {t.footer.tagline}
  </p>

  <div className="mt-5">
    <LanguageSwitcher />
  </div>
</div>

          {/* Service area */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
              {t.footer.serviceAreaTitle}
            </h3>

            <div className="mt-3 flex gap-2.5 text-sm leading-relaxed text-paper/75">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brass" />

              <div>
                <p className="font-medium text-paper">
                  {t.footer.basedIn}
                </p>
                <p className="mt-0.5">
                  {t.footer.coveringArea}
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
              {t.footer.contactTitle}
            </h3>

            <ul className="mt-3 space-y-2.5 text-sm">
              <li>
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="flex items-center gap-2.5 text-paper/75 transition-colors hover:text-paper"
                >
                  <Phone className="size-4 shrink-0 text-brass" />
                  {contact.phoneDisplay}
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2.5 text-paper/75 transition-colors hover:text-paper"
                >
                  <Mail className="size-4 shrink-0 text-brass" />
                  {contact.email}
                </a>
              </li>

              <li>
  <a
    href="https://www.google.com/maps/search/?api=1&query=Avinguda+Jaume+I%2C+23b%2C+03779+Setla%2C+Alicante"
    target="_blank"
    rel="noopener noreferrer"
    className="flex gap-2.5 text-paper/60 transition-colors hover:text-paper"
  >
    <MapPin className="mt-0.5 size-4 shrink-0 text-brass" />
    <span>
      Avinguda Jaume I, 23b
      <br />
      03779 Els Poblets, Alicante
    </span>
  </a>
</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} Wrap Interior. {t.footer.rights}
          </p>

          <p>{t.footer.legal}</p>
        </div>
      </div>

      {/* Spacer so the mobile action bar never covers footer content */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </footer>
  )
}
