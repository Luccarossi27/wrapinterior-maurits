'use client'

import { useState, type FormEvent } from 'react'
import Image from 'next/image'
import { Camera, Check, MessageCircle, Phone } from 'lucide-react'
import { contact, whatsappLink } from '@/lib/i18n/dictionaries'
import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'

export function FinalCta() {
  const { t } = useLanguage()
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '')
    const phone = String(data.get('phone') ?? '')
    const message = String(data.get('message') ?? '')
    const composed = [
      name && `${t.finalCta.form.name}: ${name}`,
      phone && `${t.finalCta.form.phone}: ${phone}`,
      message,
    ]
      .filter(Boolean)
      .join('\n')
    setSent(true)
    window.open(whatsappLink(composed || t.finalCta.microcopy), '_blank', 'noopener')
  }

  return (
    <section id="contact" className="border-t border-border bg-pine text-paper">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16 lg:py-28">
        <div>
          <Reveal>
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-paper sm:text-4xl lg:text-5xl">
              {t.finalCta.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-paper/75 sm:text-lg">
              {t.finalCta.sub}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 flex items-center gap-2 text-sm text-paper/70">
              <Camera className="size-4 text-brass" />
              {t.finalCta.microcopy}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappLink(t.finalCta.microcopy)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-paper px-6 py-3.5 text-base font-semibold text-pine transition-transform hover:-translate-y-0.5 hover:bg-sand"
              >
                <MessageCircle className="size-5" />
                {t.cta.sendPhotos}
              </a>
              <a
                href={`tel:${contact.phoneHref}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/25 px-6 py-3.5 text-base font-semibold text-paper transition-colors hover:bg-paper/10"
              >
                <Phone className="size-5" />
                {t.cta.call}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-paper/12 bg-background p-6 text-ink shadow-2xl sm:p-8">
            <div className="relative mb-6 h-32 overflow-hidden rounded-2xl">
              <Image
                src="/images/portrait-team.png"
                alt="Wrap Interior craftsperson smoothing wrapping film onto a kitchen front"
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover object-center"
              />
            </div>

            {sent ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-pine">
                  <Check className="size-6" />
                </span>
                <p className="text-pretty text-base font-medium text-ink">
                  {t.finalCta.form.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-ink">
                    {t.finalCta.form.name}
                  </span>
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="rounded-xl border border-border bg-card px-4 py-2.5 text-ink outline-none transition-colors focus:border-pine focus:ring-2 focus:ring-pine/20"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-ink">
                    {t.finalCta.form.phone}
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="rounded-xl border border-border bg-card px-4 py-2.5 text-ink outline-none transition-colors focus:border-pine focus:ring-2 focus:ring-pine/20"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-ink">
                    {t.finalCta.form.message}
                  </span>
                  <textarea
                    name="message"
                    rows={3}
                    className="resize-none rounded-xl border border-border bg-card px-4 py-2.5 text-ink outline-none transition-colors focus:border-pine focus:ring-2 focus:ring-pine/20"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-pine px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink"
                >
                  <MessageCircle className="size-4" />
                  {t.finalCta.form.submit}
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  {t.finalCta.form.or}{' '}
                  <a
                    href={`tel:${contact.phoneHref}`}
                    className="font-medium text-pine underline-offset-2 hover:underline"
                  >
                    {contact.phoneDisplay}
                  </a>
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
