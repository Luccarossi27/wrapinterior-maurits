'use client'

import { useState, type FormEvent } from 'react'
import Image from 'next/image'
import { ArrowRight, Camera, Check, MessageCircle, Phone } from 'lucide-react'
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

    window.open(
      whatsappLink(composed || t.finalCta.microcopy),
      '_blank',
      'noopener',
    )
  }

  return (
    <section id="contact" className="border-t border-border bg-background text-ink">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          {/* Left side */}
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">
                Get in touch
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-3 max-w-2xl text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
                {t.finalCta.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t.finalCta.sub}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-6 flex max-w-lg items-start gap-3 rounded-2xl border border-border bg-sand/50 px-4 py-4">
                <Camera className="mt-0.5 size-5 shrink-0 text-brass" />

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t.finalCta.microcopy}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={whatsappLink(t.finalCta.microcopy)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-pine px-6 py-3.5 text-base font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-ink"
                >
                  <MessageCircle className="size-5" />
                  {t.cta.sendPhotos}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>

                <a
                  href={`tel:${contact.phoneHref}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:border-pine hover:bg-sand"
                >
                  <Phone className="size-5" />
                  {t.cta.call}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Quote form */}
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-border bg-card p-5 text-ink shadow-2xl sm:p-7">
              <div className="relative mb-6 h-36 overflow-hidden rounded-2xl sm:h-40">
                <Image
                  src="/images/portrait-team.png"
                  alt="Wrap Interior craftsperson smoothing wrapping film onto a kitchen front"
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
              </div>

              {sent ? (
                <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 py-8 text-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-secondary text-pine">
                    <Check className="size-7" />
                  </span>

                  <div>
                    <p className="text-lg font-semibold text-ink">
                      {t.finalCta.form.success}
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      WhatsApp should now be open with your enquiry ready to
                      send.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-ink">
                      {t.cta.getQuote}
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      Send us a few details and we'll take it from there.
                    </p>
                  </div>

                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="font-medium text-ink">
                      {t.finalCta.form.name}
                    </span>

                    <input
                      name="name"
                      type="text"
                      autoComplete="name"
                      className="rounded-xl border border-border bg-card px-4 py-2.5 text-ink outline-none transition-colors placeholder:text-muted-foreground focus:border-pine focus:ring-2 focus:ring-pine/20"
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
                      className="rounded-xl border border-border bg-card px-4 py-2.5 text-ink outline-none transition-colors placeholder:text-muted-foreground focus:border-pine focus:ring-2 focus:ring-pine/20"
                    />
                  </label>

                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="font-medium text-ink">
                      {t.finalCta.form.message}
                    </span>

                    <textarea
                      name="message"
                      rows={3}
                      className="resize-none rounded-xl border border-border bg-card px-4 py-2.5 text-ink outline-none transition-colors placeholder:text-muted-foreground focus:border-pine focus:ring-2 focus:ring-pine/20"
                    />
                  </label>

                  <button
                    type="submit"
                    className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-pine px-5 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-ink"
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
      </div>
    </section>
  )
}