import Link from 'next/link'

export function PricingPreview() {
  return (
    <section className="border-t border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">
            Pricing
          </p>

          <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
            A smarter way to transform your space.
          </h2>

          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Explore our pricing and find out what your project could cost.
          </p>

          <Link
            href="/pricing"
            className="mt-7 inline-flex items-center rounded-full bg-pine px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            View pricing
          </Link>
        </div>
      </div>
    </section>
  )
}