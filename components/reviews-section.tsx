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
const [showTranslation, setShowTranslation] = useState(false)
  const touchStartX = useRef<number | null>(null)
const touchEndX = useRef<number | null>(null)

const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
  touchStartX.current = event.touches[0].clientX
  touchEndX.current = null
}

const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
  touchEndX.current = event.touches[0].clientX
}

const handleTouchEnd = () => {
  if (touchStartX.current === null || touchEndX.current === null) return

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

  const reviews = t.reviews.items
  const activeReview = reviews[activeIndex]

  const goToPrevious = () => {
  setExpandedReview(false)
  setShowTranslation(false)

  setActiveIndex((current) =>
    current === 0 ? reviews.length - 1 : current - 1,
  )
}

const goToNext = () => {
  setExpandedReview(false)
  setShowTranslation(false)

  setActiveIndex((current) =>
    current === reviews.length - 1 ? 0 : current + 1,
  )
}

  return (
    <section id="reviews" className="border-t border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-6xl px-5 pt-4 pb-20 sm:px-8 lg:pt-10 lg:pb-28">
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {t.reviews.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                {t.reviews.sub}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-5 border border-border bg-card px-5 py-4 transition-colors hover:border-pine"
            >
              <div className="flex flex-col gap-2">
                <div
                  className="flex"
                  aria-label="5 star rating"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-brass text-brass"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <span className="text-sm font-semibold text-ink">
                  {t.reviews.googleBadge}
                </span>
              </div>

              <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        {/* REVIEW CAROUSEL */}
<Reveal delay={0.15}>
  <div className="mt-14 overflow-hidden border-y border-border">
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
          {reviews.map((review, index) => (
            <div
              key={`${review.name}-${index}`}
              className="w-full shrink-0"
            >
              <div className="grid min-h-[360px] items-center lg:grid-cols-[1fr_auto]">
                <div className="py-12 lg:py-16 lg:pr-16">
                  <div className="flex items-center gap-3">
                    <Quote
                      className="size-7 shrink-0 text-brass"
                      aria-hidden="true"
                    />

                    <div
                      className="flex gap-0.5"
                      aria-label={`${review.rating} out of 5 stars`}
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={
                            i < review.rating
                              ? 'size-4 fill-brass text-brass'
                              : 'size-4 text-border'
                          }
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 max-w-3xl">
  <blockquote className="font-serif text-lg font-medium leading-relaxed tracking-tight text-ink sm:text-xl lg:text-2xl">
    “
    {showTranslation && review.translatedQuote
      ? review.translatedQuote
      : expandedReview && review.fullQuote
        ? review.fullQuote
        : review.quote}
    ”
  </blockquote>

  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
    {review.translatedQuote && (
      <button
        type="button"
        onClick={() => {
          setShowTranslation((current) => !current)
          setExpandedReview(false)
        }}
        className="text-xs font-semibold uppercase tracking-[0.16em] text-pine underline-offset-4 transition-colors hover:text-ink hover:underline"
      >
        {showTranslation
          ? t.reviews.showOriginal
          : t.reviews.showTranslation}
      </button>
    )}

    {review.fullQuote && (
      <button
        type="button"
        onClick={() => {
          setExpandedReview((current) => !current)
          setShowTranslation(false)
        }}
        className="text-xs font-semibold uppercase tracking-[0.16em] text-pine underline-offset-4 transition-colors hover:text-ink hover:underline"
      >
        {expandedReview
          ? t.reviews.readLess
          : t.reviews.readMore}
      </button>
    )}
  </div>
</div>

                  <div className="mt-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">
                      {review.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTROLS */}
      <div className="flex items-center justify-between border-t border-border py-5 lg:absolute lg:bottom-0 lg:right-0 lg:w-44 lg:border-l lg:border-t-0 lg:px-6">
        <span className="font-serif text-sm font-medium tracking-[0.14em] text-muted-foreground">
          {String(activeIndex + 1).padStart(2, '0')} /{' '}
          {String(reviews.length).padStart(2, '0')}
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goToPrevious}
            aria-label={t.reviews.previousLabel}
            className="flex size-10 items-center justify-center border border-border text-ink transition-colors hover:border-pine hover:bg-pine hover:text-paper"
          >
            <ArrowLeft className="size-4" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            aria-label={t.reviews.nextLabel}
            className="flex size-10 items-center justify-center border border-border text-ink transition-colors hover:border-pine hover:bg-pine hover:text-paper"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>

    {/* PROGRESS */}
    <div className="flex border-t border-border">
      {reviews.map((review, index) => (
        <button
          key={`${review.name}-progress-${index}`}
          type="button"
          onClick={() => {
  setExpandedReview(false)
  setShowTranslation(false)
  setActiveIndex(index)
}}
          aria-label={`${t.reviews.goToReview} ${index + 1}`}
          className="group relative h-1 flex-1 bg-border"
        >
          <span
            className={`absolute inset-y-0 left-0 transition-all duration-500 ${
              index === activeIndex ? 'w-full bg-pine' : 'w-0'
            }`}
          />
        </button>
      ))}
    </div>
  </div>
</Reveal>

        {/* GOOGLE CTA */}
        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pine px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink"
            >
              {t.reviews.readButton}
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
