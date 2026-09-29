'use client'

import Image from 'next/image'
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from 'lucide-react'
import { contact, whatsappLink } from '@/lib/i18n/dictionaries'
import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'

export function FinalCta() {
  const { t } = useLanguage()

  const fullAddress = `${contact.address}, ${contact.postcode} ${contact.city}, ${contact.province}, Spain`
  const encodedAddress = encodeURIComponent(fullAddress)

  const mapSrc = `https://www.google.com/maps?q=${encodedAddress}&output=embed`
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`

  return (
    <section
      id="contact"
      className="border-t border-border bg-background text-ink"
    >
      {/* Intro / Meet Maurits */}
      <div className="mx-auto w-full max-w-6xl px-5 pt-4 pb-16 sm:px-8 sm:pt-6 lg:pt-8 lg:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Intro copy */}
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">
                {t.contactPage.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-3 text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                {t.contactPage.heading}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t.contactPage.sub}
              </p>
            </Reveal>
          </div>

          {/* Maurits photo */}
          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-sand shadow-xl">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[4/3]">
                <Image
                  src="/images/contact1.jpg"
                  alt="Maurits from Wrap Interior"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Contact methods */}
      <div className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="grid gap-4 md:grid-cols-3">
          {/* WhatsApp */}
          <Reveal delay={0.05}>
            <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 sm:p-7">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-pine text-paper">
                <MessageCircle className="size-5" />
              </div>

              <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">
                {t.contactPage.whatsapp.title}
              </h2>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t.contactPage.whatsapp.text}
              </p>

              <a
                href={whatsappLink(t.contactPage.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-pine px-5 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-ink"
              >
                {t.contactPage.whatsapp.button}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          {/* Phone */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 sm:p-7">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-sand text-pine">
                <Phone className="size-5" />
              </div>

              <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">
                {t.contactPage.phone.title}
              </h2>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t.contactPage.phone.text}
              </p>

              <a
                href={`tel:${contact.phoneHref}`}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-pine hover:bg-sand"
              >
                {t.contactPage.phone.button}
                <ArrowRight className="size-4" />
              </a>
            </div>
          </Reveal>

          {/* Email */}
          <Reveal delay={0.15}>
            <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 sm:p-7">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-sand text-pine">
                <Mail className="size-5" />
              </div>

              <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">
                {t.contactPage.email.title}
              </h2>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t.contactPage.email.text}
              </p>

              <a
                href={`mailto:${contact.email}`}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-pine hover:bg-sand"
              >
                {t.contactPage.email.button}
                <ArrowRight className="size-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Workshop / Map */}
      <div className="border-y border-border bg-sand/30">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:items-center lg:gap-14">
            {/* Location details */}
            <div>
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">
                  {t.contactPage.location.eyebrow}
                </p>
              </Reveal>

              <Reveal delay={0.05}>
                <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                  {t.contactPage.location.heading}
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  {t.contactPage.location.sub}
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-8 flex gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-pine text-paper">
                    <MapPin className="size-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brass">
                      {t.contactPage.location.addressLabel}
                    </p>

                    <address className="mt-2 not-italic text-sm leading-relaxed text-ink">
                      {contact.address}
                      <br />
                      {contact.postcode} {contact.city}
                      <br />
                      {contact.province}, Spain
                    </address>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-pine px-6 py-3.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-ink"
                >
                  <Navigation className="size-4" />
                  {t.contactPage.location.directions}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Reveal>
            </div>

            {/* Interactive map */}
            <Reveal delay={0.15}>
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
                <iframe
                  title={t.contactPage.location.mapTitle}
                  src={mapSrc}
                  className="h-[380px] w-full border-0 sm:h-[460px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <Reveal>
          <div className="rounded-3xl bg-pine px-6 py-12 text-center text-paper sm:px-10 sm:py-14">
            <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              {t.contactPage.bottomCta.heading}
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-paper/75 sm:text-base">
              {t.contactPage.bottomCta.sub}
            </p>

            <a
              href={whatsappLink(t.contactPage.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-paper px-6 py-3.5 text-sm font-semibold text-pine transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="size-4" />
              {t.contactPage.bottomCta.button}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
