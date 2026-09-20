import Link from 'next/link'

export function ReviewsPreview() {
  return (
    <section className="border-t border-border bg-muted/30 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">
              Reviews
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              See what our customers have to say.
            </h2>

            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Read feedback from customers who have transformed their
              interiors with Wrap Interior.
            </p>
          </div>

          <Link
            href="/reviews"
            className="inline-flex w-fit items-center rounded-full bg-pine px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Read reviews
          </Link>
        </div>
      </div>
    </section>
  )
}