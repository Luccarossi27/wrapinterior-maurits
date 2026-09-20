'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Quote, Star } from 'lucide-react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
}

export interface AnimatedTestimonialsProps {
  title?: string
  subtitle?: string
  badgeText?: string
  testimonials?: Testimonial[]
  autoRotateInterval?: number
  trustedCompanies?: string[]
  trustedCompaniesTitle?: string
  className?: string
}

export function AnimatedTestimonials({
  title = 'Loved by clients',
  subtitle,
  badgeText,
  testimonials = [],
  autoRotateInterval = 6000,
  trustedCompanies = [],
  trustedCompaniesTitle,
  className,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  }

  useEffect(() => {
    if (isInView) controls.start('visible')
  }, [isInView, controls])

  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, autoRotateInterval)
    return () => clearInterval(interval)
  }, [autoRotateInterval, testimonials.length])

  if (testimonials.length === 0) return null

  return (
    <section
      ref={sectionRef}
      className={cn('overflow-hidden py-20 lg:py-28', className)}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid w-full grid-cols-1 gap-14 md:grid-cols-2 lg:gap-20"
        >
          {/* Left: heading and navigation */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              {badgeText ? (
                <div className="inline-flex items-center gap-1.5 rounded-full bg-sand px-3.5 py-1.5 text-xs font-semibold text-ink">
                  <Star className="size-3.5 fill-brass text-brass" />
                  <span>{badgeText}</span>
                </div>
              ) : null}

              <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                {title}
              </h2>

              {subtitle ? (
                <p className="max-w-[560px] text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                  {subtitle}
                </p>
              ) : null}

              <div className="flex items-center gap-3 pt-2">
                {testimonials.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      'h-2.5 rounded-full transition-all duration-300',
                      activeIndex === index
                        ? 'w-10 bg-brass'
                        : 'w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50',
                    )}
                    aria-label={`View review ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: testimonial cards */}
          <motion.div
            variants={itemVariants}
            className="relative min-h-[320px] md:min-h-[380px]"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  scale: activeIndex === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                style={{ zIndex: activeIndex === index ? 10 : 0 }}
                aria-hidden={activeIndex !== index}
              >
                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-sm">
                  <div className="mb-6 flex gap-1.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="size-5 fill-brass text-brass" />
                    ))}
                  </div>

                  <div className="relative mb-6 flex-1">
                    <Quote
                      className="absolute -left-1 -top-2 size-8 rotate-180 text-brass/25"
                      aria-hidden="true"
                    />
                    <p className="relative z-10 text-pretty text-lg font-medium leading-relaxed text-ink">
                      {testimonial.content}
                    </p>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex items-center gap-4">
                    <Avatar className="size-12 border border-border">
                      {testimonial.avatar ? (
                        <AvatarImage
                          src={testimonial.avatar || '/placeholder.svg'}
                          alt={testimonial.name}
                        />
                      ) : null}
                      <AvatarFallback className="bg-secondary font-semibold text-ink">
                        {testimonial.name.replace(/[^A-Za-z]/g, '').charAt(0) ||
                          'W'}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-ink">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} · {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {trustedCompanies.length > 0 ? (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={controls}
            className="mt-20 text-center"
          >
            {trustedCompaniesTitle ? (
              <h3 className="mb-8 text-sm font-medium text-muted-foreground">
                {trustedCompaniesTitle}
              </h3>
            ) : null}
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
              {trustedCompanies.map((company) => (
                <div
                  key={company}
                  className="text-lg font-semibold uppercase tracking-[0.2em] text-muted-foreground/60"
                >
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  )
}
