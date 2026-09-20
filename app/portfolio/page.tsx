import { SiteHeader } from '@/components/site-header'

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="bg-pine px-5 py-24 text-white sm:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brass">
              Portfolio
            </p>

            <h1 className="max-w-3xl font-serif text-5xl leading-tight sm:text-6xl">
              Voor & na projecten
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Bekijk echte interieurtransformaties uit Jávea en de Costa Blanca.
            </p>
          </div>
        </section>

        {/* Move your existing portfolio section here */}
        <section className="px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            {/* Your existing portfolio content goes here */}
          </div>
        </section>
      </main>
    </>
  )
}