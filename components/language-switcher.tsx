'use client'

import { locales, type Locale } from '@/lib/i18n/dictionaries'
import { useLanguage } from '@/lib/i18n/provider'
import { cn } from '@/lib/utils'

const languages: Record<
  Locale,
  { label: string; flag: string }
> = {
  nl: { label: 'NL', flag: '🇳🇱' },
  en: { label: 'EN', flag: '🇬🇧' },
  es: { label: 'ES', flag: '🇪🇸' },
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t.a11y.langLabel}
      className={cn(
        'inline-flex items-center gap-0.5 rounded-full border border-border bg-card/70 p-0.5 backdrop-blur',
        className,
      )}
    >
      {locales.map((l) => {
        const active = l === locale
        const language = languages[l]

        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            aria-label={language.label}
            className={cn(
              'inline-flex min-w-11 items-center justify-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brass',
              active
                ? 'bg-pine text-paper'
                : 'text-muted-foreground hover:text-ink',
            )}
          >
            <span
              aria-hidden="true"
              className="text-[13px] leading-none"
            >
              {language.flag}
            </span>
            {language.label}
          </button>
        )
      })}
    </div>
  )
}
