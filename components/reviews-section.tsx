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
      {/* Header */}
      <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
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
      </div>

      {/* Editorial testimonial field */}
      <Reveal delay={0.12}>
        <div
          className="border-y border-[#B5B9A3] bg-[#8F8277] text-[#F4F1E8]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
            <div className="relative flex min-h-[460px] flex-col justify-between py-12 sm:min-h-[440px] sm:py-14 lg:min-h-[460px] lg:py-16">
              {/* Decorative quotation mark */}
              <div
                className="pointer-events-none absolute -left-1 -top-2 select-none font-serif text-[7rem] font-light leading-none text-[#F4F1E8]/10 sm:left-1 sm:-top-4 sm:text-[8rem]"
                aria-hidden="true"
              >
                “
              </div>

              {/* Review */}
              <div className="relative flex flex-1 items-center justify-center">
                <div className="w-full max-w-4xl text-center">
                  {reviews.map((review, index) => {
                    const isActive = index === activeIndex

                    if (!isActive) {
                      return null
                    }

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
                        className="flex flex-col items-center"
                      >
                        <blockquote className="max-w-4xl font-serif text-xl font-light italic leading-[1.5] tracking-tight sm:text-2xl lg:text-[1.65rem] lg:leading-[1.5]">
                          “{displayedQuote}”
                        </blockquote>

                        {hasTranslation && (
                          <button
                            type="button"
                            onClick={() => {
                              setShowOriginal(
                                (current) => !current,
                              )
                            }}
                            className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F4F1E8]/70 underline-offset-4 transition-colors hover:text-[#F4F1E8] hover:underline"
                          >
                            {showOriginal
                              ? t.reviews.showTranslation
                              : t.reviews.showOriginal}
                          </button>
                        )}

                        <div className="mt-7">
                          <div className="mx-auto mb-4 h-px w-8 bg-[#F4F1E8]/40" />

                          <p className="text-[10px] font-bold uppercase tracking-[0.2em]">
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
                                      ? 'size-3 fill-[#F4F1E8] text-[#F4F1E8]'
                                      : 'size-3 text-[#F4F1E8]/30'
                                  }
                                  aria-hidden="true"
                                />
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Navigation */}
              <div className="relative mt-10 flex items-center justify-between border-t border-[#F4F1E8]/15 pt-5">
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label={t.reviews.previousLabel}
                  className="group flex items-center gap-2 text-[#F4F1E8]/80 transition-colors hover:text-[#F4F1E8]"
                >
                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />

                  <span className="hidden text-[10px] font-semibold uppercase tracking-[0.16em] sm:inline">
                    {t.reviews.previousLabel}
                  </span>
                </button>

                <div className="flex items-center gap-3 font-sans text-[10px] font-semibold tracking-[0.16em] text-[#F4F1E8]/60">
                  <span className="text-[#F4F1E8]">
                    {String(activeIndex + 1).padStart(2, '0')}
                  </span>

                  <span className="h-px w-8 bg-[#F4F1E8]/30" />

                  <span>
                    {String(reviews.length).padStart(2, '0')}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={goToNext}
                  aria-label={t.reviews.nextLabel}
                  className="group flex items-center gap-2 text-[#F4F1E8]/80 transition-colors hover:text-[#F4F1E8]"
                >
                  <span className="hidden text-[10px] font-semibold uppercase tracking-[0.16em] sm:inline">
                    {t.reviews.nextLabel}
                  </span>

                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Google rating */}
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        <Reveal delay={0.2}>
          <div className="flex justify-center py-10 sm:py-12">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 text-pine transition-colors hover:text-ink"
            >
              <span className="font-serif text-2xl font-light tracking-tight">
                4.9
              </span>

              <span className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-3.5 fill-brass text-brass"
                    aria-hidden="true"
                  />
                ))}
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                {t.reviews.googleBadge}
              </span>

              <ArrowUpRight
                className="size-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
