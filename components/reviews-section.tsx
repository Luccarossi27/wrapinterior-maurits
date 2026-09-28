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

  const activeReview = reviews[activeIndex]

  return (
    <section
      id="reviews"
      className="border-t border-border bg-paper text-ink"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">

        {/* Header */}
        <Reveal>
          <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-pine">
                Google Reviews
              </p>

              <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {t.reviews.heading}
              </h2>
            </div>

            <p className="max-w-md text-base leading-relaxed text-muted-foreground lg:text-right">
              {t.reviews.sub}
            </p>
          </div>
        </Reveal>

        {/* Rating */}
        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:gap-5">
            <span className="font-serif text-6xl font-light leading-none tracking-tight text-pine sm:text-7xl">
              4.9
            </span>

            <div className="pb-1">
              <div
                className="flex gap-1"
                aria-label="4.9 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-4 fill-brass text-brass"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {t.reviews.googleBadge}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Reviews carousel */}
        <Reveal delay={0.15}>
          <div className="mt-14 border-y border-border">

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
                      <div className="relative px-2 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">

                        {/* Decorative quotation mark */}
                        <div
                          className="pointer-events-none absolute left-0 top-8 select-none font-serif text-7xl font-light leading-none text-pine/15 sm:left-4 sm:text-8xl"
                          aria-hidden="true"
                        >
                          “
                        </div>

                        <div className="relative mx-auto max-w-4xl text-center">

                          {/* Quote */}
                          <blockquote className="font-serif text-2xl font-light italic leading-[1.55] tracking-tight text-ink sm:text-3xl lg:text-4xl">
                            “{displayedQuote}”
                          </blockquote>

                          {/* Translation toggle */}
                          {hasTranslation && (
                            <div className="mt-8 flex justify-center">
                              <button
                                type="button"
                                onClick={() => {
                                  setShowOriginal(
                                    (current) => !current,
                                  )
                                }}
                                className="text-xs font-semibold uppercase tracking-[0.18em] text-pine underline-offset-4 transition-colors hover:text-ink hover:underline"
                              >
                                {showOriginal
                                  ? t.reviews.showTranslation
                                  : t.reviews.showOriginal}
                              </button>
                            </div>
                          )}

                          {/* Author */}
                          <div className="mt-10">
                            <div className="mx-auto mb-5 h-px w-10 bg-pine/40" />

                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-pine">
                              {review.name}
                            </p>

                            <div
                              className="mt-3 flex justify-center gap-1"
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
            <div className="flex items-center justify-between border-t border-border px-2 py-5 sm:px-8">

              <button
                type="button"
                onClick={goToPrevious}
                aria-label={t.reviews.previousLabel}
                className="group flex items-center gap-3 text-pine transition-colors hover:text-ink"
              >
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />

                <span className="hidden text-xs font-semibold uppercase tracking-[0.16em] sm:inline">
                  {t.reviews.previousLabel}
                </span>
              </button>

              <div className="flex items-center gap-3">
                <span className="font-serif text-sm text-pine">
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>

                <span className="h-px w-8 bg-border" />

                <span className="text-xs font-semibold tracking-[0.12em] text-muted-foreground">
                  {String(reviews.length).padStart(2, '0')}
                </span>
              </div>

              <button
                type="button"
                onClick={goToNext}
                aria-label={t.reviews.nextLabel}
                className="group flex items-center gap-3 text-pine transition-colors hover:text-ink"
              >
                <span className="hidden text-xs font-semibold uppercase tracking-[0.16em] sm:inline">
                  {t.reviews.nextLabel}
                </span>

                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Google CTA */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-pine px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-pine transition-all hover:bg-pine hover:text-paper"
            >
              {t.reviews.readButton}

              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
