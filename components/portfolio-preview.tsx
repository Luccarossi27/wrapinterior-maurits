import Link from 'next/link'

export function PortfolioPreview() {
  return (
    <section className="border-t border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">
              Portfolio
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              See what a wrap can do.
            </h2>

            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Explore our previous transformations and discover the finishes
              and materials available for your interior.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex w-fit items-center rounded-full bg-pine px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            View portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}