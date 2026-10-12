'use client'

import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { MobileActionBar } from '@/components/mobile-action-bar'
import { SkipLink } from '@/components/skip-link'
import { useLanguage } from '@/lib/i18n/provider'

type LegalSection = {
  title: string
  paragraphs: string[]
}

type LegalContent = {
  title: string
  intro: string
  sections: LegalSection[]
}

type LegalPageProps = {
  type: 'legalNotice' | 'privacy' | 'cookies'
}

export function LegalPage({ type }: LegalPageProps) {
  const { t } = useLanguage()
  const page = t.legal[type] as LegalContent

  return (
    <>
      <SkipLink />
      <SiteHeader />

      <main id="main">
        <section className="bg-background">
          <div className="mx-auto w-full max-w-4xl px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28">
            <header className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-pine">
                Wrap Interior
              </p>

              <h1 className="font-heading text-4xl font-medium uppercase tracking-tight text-foreground sm:text-5xl">
                {page.title}
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                {page.intro}
              </p>
            </header>

            <div className="mt-12 space-y-10 border-t border-border pt-10 sm:mt-16 sm:space-y-12 sm:pt-12">
              {page.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-heading text-xl font-medium uppercase tracking-tight text-foreground sm:text-2xl">
                    {section.title}
                  </h2>

                  <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={`${section.title}-${index}`}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileActionBar />
    </>
  )
}
