'use client'

import { ArrowLeft, ArrowRight, ArrowUpRight, Quote, Star } from 'lucide-react'
import { useRef, useState } from 'react'
import { useLanguage } from '@/lib/i18n/provider'
import { Reveal } from '@/components/reveal'

const googleReviewsUrl =
  'https://maps.app.goo.gl/EyFc7M5abQFYoVk67'

export function ReviewsSection() {
  const { t } = useLanguage()

  const [activeIndex, setActiveIndex] = useState(0)
  const [expandedReview, setExpandedReview] = useState(false)
  const [showOriginal, setShowOriginal] = useState(false)

  const reviews = t.reviews.items

  const goToPrevious = () => {
    setExpandedReview(false)
    setShowOriginal(false)

    setActiveIndex((current) =>
      current === 0 ? reviews.length - 1 : current - 1,
    )
  }

  const goToNext = () => {
    setExpandedReview(false)
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
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        {/* HEADER */}
        <Reveal>
          <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[1fr_2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">
                Google
              </p>

              <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
                {t.reviews.heading}
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground lg:justify-self-end lg:text-lg">
              {t.reviews.sub}
            </p>
          </div>
        </Reveal>

        {/* GOOGLE BADGE */}
        <Reveal delay={0.08}>
          <div className="mt-8 flex items-center gap-3">
            <div className="flex gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="size-3.5 fill-brass text-brass"
                />
              ))}
            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {t.reviews.googleBadge}
            </span>
          </div>
        </Reveal>

        {/* REVIEW CAROUSEL */}
        <Reveal delay={0.15}>
          <div className="mt-10 overflow-hidden border-y border-border">
            <div className="relative">
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
                  const isOriginalView = showOriginal || !review.translatedQuote

const displayedQuote = isOriginalView
  ? expandedReview && review.fullQuote
    ? review.fullQuote
    : review.quote
  : expandedReview && review.fullTranslatedQuote
    ? review.fullTranslatedQuote
    : review.translatedQuote

                    const hasTranslation =
                      !!review.translatedQuote

                    const hasReadMore =
                      !!review.fullQuote ||
                      !!review.fullTranslatedQuote

                    return (
                      <div
                        key={`${review.name}-${index}`}
                        className="w-full shrink-0"
                      >
                        <div className="grid min-h-[360px] items-center lg:grid-cols-[1fr_auto]">
                          <div className="py-12 lg:py-16 lg:pr-16">
                            {/* STARS */}
                            <div className="flex items-center gap-3">
                              <Quote
                                className="size-7 shrink-0 text-brass"
                                aria-hidden="true"
                              />

                              <div
                                className="flex gap-0.5"
                                aria-label={`${review.rating} out of 5 stars`}
                              >
                                {Array.from({ length: 5 }).map(
                                  (_, starIndex) => (
                                    <Star
                                      key={starIndex}
                                      className={
                                        starIndex < review.rating
                                          ? 'size-4 fill-brass text-brass'
                                          : 'size-4 text-border'
                                      }
                                      aria-hidden="true"
                                    />
                                  ),
                                )}
                              </div>
                            </div>

                            {/* QUOTE */}
                            <div className="mt-6 max-w-3xl">
                              <blockquote className="font-serif text-lg font-medium leading-relaxed tracking-tight text-ink sm:text-xl lg:text-2xl">
                                “{displayedQuote}”
                              </blockquote>

                              {/* LANGUAGE + READ MORE CONTROLS */}
                              {(hasTranslation || hasReadMore) && (
                                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                                  {hasTranslation && (
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setShowOriginal(
                                          (current) => !current,
                                        )
                                        setExpandedReview(false)
                                      }}
                                      className="text-xs font-semibold uppercase tracking-[0.16em] text-pine underline-offset-4 transition-colors hover:text-ink hover:underline"
                                    >
                                      {showOriginal
                                        ? t.reviews.showTranslation
                                        : t.reviews.showOriginal}
                                    </button>
                                  )}

                                  {hasReadMore && (
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setExpandedReview(
                                          (current) => !current,
                                        )
                                      }}
                                      className="text-xs font-semibold uppercase tracking-[0.16em] text-pine underline-offset-4 transition-colors hover:text-ink hover:underline"
                                    >
                                      {expandedReview
                                        ? t.reviews.readLess
                                        : t.reviews.readMore}
                                    </button>
                                  )}
                                </div>
                              )}
                            </div>

                            {/* NAME */}
                            <div className="mt-8">
                              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">
                                {review.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* CONTROLS */}
              <div className="flex items-center justify-between border-t border-border px-0 py-5">
                <div className="flex items-center gap-5">
                  <button
                    type="button"
                    onClick={goToPrevious}
                    aria-label={t.reviews.previousLabel}
                    className="group flex size-9 items-center justify-center border border-border text-ink transition-colors hover:border-pine hover:bg-pine hover:text-paper"
                  >
                    <ArrowLeft
                      className="size-4 transition-transform group-hover:-translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>

                  <button
                    type="button"
                    onClick={goToNext}
                    aria-label={t.reviews.nextLabel}
                    className="group flex size-9 items-center justify-center border border-border text-ink transition-colors hover:border-pine hover:bg-pine hover:text-paper"
                  >
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>

                  <span className="font-serif text-sm font-medium tracking-[0.12em] text-muted-foreground">
                    {String(activeIndex + 1).padStart(2, '0')}
                    {' / '}
                    {String(reviews.length).padStart(2, '0')}
                  </span>
                </div>

                {/* PROGRESS */}
                <div className="flex items-center gap-1.5">
                  {reviews.map((review, index) => (
                    <button
                      key={`${review.name}-progress`}
                      type="button"
                      onClick={() => {
                        setExpandedReview(false)
                        setShowOriginal(false)
                        setActiveIndex(index)
                      }}
                      aria-label={`${t.reviews.goToReview} ${index + 1}`}
                      className="group h-4 w-8"
                    >
                      <span
                        className={`block h-px w-full transition-all duration-300 ${
                          index === activeIndex
                            ? 'bg-pine'
                            : 'bg-border group-hover:bg-muted-foreground'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* GOOGLE CTA */}
        <Reveal delay={0.2}>
          <div className="mt-8 flex justify-center">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-pine underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              {t.reviews.readButton}
              <ArrowUpRight
                className="size-3.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
