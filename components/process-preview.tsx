import Link from 'next/link'

export function ProcessPreview() {
  return (
    <section className="border-t border-border bg-muted/30 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">
            Our process
          </p>

          <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
            From first idea to finished transformation.
          </h2>

          <p className="mt-4 text-base leading-7 text-muted-foreground">
            A straightforward process designed to make transforming your
            interior simple and stress-free.
          </p>

          <Link
            href="/process"
            className="mt-7 inline-flex items-center rounded-full bg-pine px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            See how it works
          </Link>
        </div>
      </div>
    </section>
  )
}