import Link from 'next/link'

export function FaqPreview() {
  return (
    <section className="border-t border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">
          FAQ
        </p>

        <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
          Have questions?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          Find answers to the most common questions about interior wrapping,
          materials, installation and pricing.
        </p>

        <Link
          href="/faq"
          className="mt-7 inline-flex items-center rounded-full bg-pine px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          View FAQs
        </Link>
      </div>
    </section>
  )
}