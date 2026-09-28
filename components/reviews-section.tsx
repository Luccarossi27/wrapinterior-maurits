'use client'

import { ArrowLeft, ArrowRight, ArrowUpRight, Star } from 'lucide-react'
import { useRef, useState } from 'react'
import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'

const googleReviewsUrl =
  'https://maps.app.goo.gl/EyFc7M5abQFYoVk67'

export function ReviewsSection() {
  const { t } = useLanguage()

  const [activeIndex, setActiveIndex] = useState(0)
  const [showOriginal, setShowOriginal] = useState(false)

  const reviews = t.reviews.items

  const goToPrevious = () => {
    setShowOriginal(false)

    setActiveIndex((current) =>
      current === 0 ? reviews.length - 1 : current - 1,
    )
  }

  const goToNext = () => {
    setShowOriginal(false)

    setActiveIndex((current) =>
      current === reviews.length - 1 ? 0 : current + 1,
    )
  }

  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const handleTouchStart = (
    event: React.TouchEvent<HTMLDivElement>,
  ) => {
    touchStartX.current = event.touches[0].clientX
    touchEndX.current = null
  }

  const handleTouchMove = (
    event: React.TouchEvent<HTMLDivElement>,
  ) => {
    touchEndX.current = event.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null
    ) {
      return
    }

    const distance = touchStartX.current - touchEndX.current
    const minimumSwipeDistance = 50

    if (Math.abs(distance) >= minimumSwipeDistance) {
      if (distance > 0) {
        goToNext()
      } else {
        goToPrevious()
      }
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <section
      id="reviews"
      className="border-t border-border bg-paper text-ink"
    >
      <div className="mx-auto w-full max-w-6xl px-5 pt-8 pb-10 sm:px-8 sm:pt-12 sm:pb-14 lg:px-10">

        {/* Header */}
        <Reveal>
          <div className="grid gap-5 border-b border-border pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-pine">
                {t.reviews.eyebrow}
              </p>

              <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {t.reviews.heading}
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:text-right">
              {t.reviews.sub}
            </p>
          </div>
        </Reveal>

        {/* Rating */}
        <Reveal delay={0.08}>
          <div className="mt-7 flex items-center gap-4">
            <span className="font-serif text-4xl font-light leading-none tracking-tight text-pine sm:text-5xl">
              4.9
            </span>

            <div className="flex flex-col gap-1">
              <div
                className="flex gap-1"
                aria-label="4.9 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-3.5 fill-brass text-brass"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {t.reviews.googleBadge}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Reviews carousel */}
        <Reveal delay={0.15}>
          <div className="mt-8 overflow-hidden border-y border-border bg-pine/[0.035]">
            <div
              className="overflow-hidden touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                }}
              >
                {reviews.map((review, index) => {
                  const isOriginalView =
                    showOriginal || !review.translatedQuote

                  const displayedQuote = isOriginalView
                    ? review.fullQuote || review.quote
                    : review.fullTranslatedQuote ||
                      review.translatedQuote

                  const hasTranslation = !!review.translatedQuote

                  return (
                    <div
                      key={`${review.name}-${index}`}
                      className="w-full shrink-0"
                    >
                      <div className="relative px-5 py-12 sm:px-10 sm:py-14 lg:px-20 lg:py-16">

                        {/* Decorative quotation mark */}
                        <div
                          className="pointer-events-none absolute left-5 top-5 select-none font-serif text-6xl font-light leading-none text-pine/10 sm:left-8 sm:text-7xl"
                          aria-hidden="true"
                        >
                          “
                        </div>

                        <div className="relative mx-auto max-w-3xl text-center">

                          {/* Quote */}
                          <blockquote className="font-serif text-lg font-light italic leading-[1.6] tracking-tight text-ink sm:text-xl lg:text-2xl">
                            “{displayedQuote}”
                          </blockquote>

                          {/* Translation toggle */}
                          {hasTranslation && (
                            <div className="mt-6 flex justify-center">
                              <button
                                type="button"
                                onClick={() => {
                                  setShowOriginal(
                                    (current) => !current,
                                  )
                                }}
                                className="text-[10px] font-semibold uppercase tracking-[0.18em] text-pine underline-offset-4 transition-colors hover:text-ink hover:underline"
                              >
                                {showOriginal
                                  ? t.reviews.showTranslation
                                  : t.reviews.showOriginal}
                              </button>
                            </div>
                          )}

                          {/* Author */}
                          <div className="mt-7">
                            <div className="mx-auto mb-4 h-px w-8 bg-pine/40" />

                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-pine">
                              {review.name}
                            </p>

                            <div
                              className="mt-2 flex justify-center gap-1"
                              aria-label={`${review.rating} out of 5 stars`}
                            >
                              {Array.from({ length: 5 }).map(
                                (_, starIndex) => (
                                  <Star
                                    key={starIndex}
                                    className={
                                      starIndex < review.rating
                                        ? 'size-3 fill-brass text-brass'
                                        : 'size-3 text-border'
                                    }
                                    aria-hidden="true"
                                  />
                                ),
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Carousel controls */}
            <div className="flex items-center justify-between border-t border-border px-5 py-4 sm:px-8">

              <button
                type="button"
                onClick={goToPrevious}
                aria-label={t.reviews.previousLabel}
                className="group flex items-center gap-2 text-pine transition-colors hover:text-ink"
              >
                <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />

                <span className="hidden text-[10px] font-semibold uppercase tracking-[0.16em] sm:inline">
                  {t.reviews.previousLabel}
                </span>
              </button>

              <div className="flex items-center gap-3 font-sans text-[10px] font-semibold tracking-[0.16em] text-muted-foreground">
                <span className="text-pine">
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>

                <span className="h-px w-7 bg-border" />

                <span>
                  {String(reviews.length).padStart(2, '0')}
                </span>
              </div>

              <button
                type="button"
                onClick={goToNext}
                aria-label={t.reviews.nextLabel}
                className="group flex items-center gap-2 text-pine transition-colors hover:text-ink"
              >
                <span className="hidden text-[10px] font-semibold uppercase tracking-[0.16em] sm:inline">
                  {t.reviews.nextLabel}
                </span>

                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Google CTA */}
        <Reveal delay={0.2}>
          <div className="mt-8 flex justify-center">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-pine px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-pine transition-all hover:bg-pine hover:text-paper"
            >
              {t.reviews.googleReviews}

              <ArrowUpRight
                className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
