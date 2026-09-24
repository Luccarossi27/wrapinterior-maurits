'use client'

import { useCallback, useRef, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel,
  afterLabel,
  dragHint,
  priority = false,
  className,
  aspectRatio = 'aspect-[4/3]',
  fit = 'cover',
  chrome = true,
  showLabels = true,
  showDragHint = true,
  accent = 'pine',
}: {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  beforeLabel: string
  afterLabel: string
  dragHint: string
  priority?: boolean
  className?: string
  aspectRatio?: string
  fit?: 'cover' | 'contain'
  chrome?: boolean
  showLabels?: boolean
  showDragHint?: boolean
  accent?: 'pine' | 'brass'
}) {
  const [pos, setPos] = useState(52)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100

    setPos(Math.min(100, Math.max(0, next)))
  }, [])

  const imageFitClass =
    fit === 'contain' ? 'object-contain' : 'object-cover'

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full touch-none select-none overflow-hidden bg-transparent',
        chrome && 'rounded-3xl border border-border shadow-xl',
        aspectRatio,
        className,
      )}
      onPointerDown={(e) => {
        dragging.current = true
        ;(e.target as Element).setPointerCapture?.(e.pointerId)
        setFromClientX(e.clientX)
      }}
      onPointerMove={(e) => {
        if (dragging.current) {
          setFromClientX(e.clientX)
        }
      }}
      onPointerUp={() => {
        dragging.current = false
      }}
      onPointerLeave={() => {
        dragging.current = false
      }}
    >
      <Image
        src={afterSrc || '/placeholder.svg'}
        alt={afterAlt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 520px"
        className={imageFitClass}
        draggable={false}
      />

      {showLabels && (
        <span className="absolute right-3 top-3 rounded-full bg-pine/90 px-3 py-1 text-xs font-semibold text-paper backdrop-blur">
          {afterLabel}
        </span>
      )}

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={beforeSrc || '/placeholder.svg'}
          alt={beforeAlt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 520px"
          className={cn(imageFitClass, 'grayscale-[0.15]')}
          draggable={false}
        />

        {showLabels && (
          <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-paper backdrop-blur">
            {beforeLabel}
          </span>
        )}
      </div>

      <div
        className={cn(
          'absolute inset-y-0 z-10 flex w-0.5 items-center justify-center',
          accent === 'brass' ? 'bg-brass' : 'bg-paper',
        )}
        style={{
          left: `${pos}%`,
          transform: 'translateX(-50%)',
        }}
      >
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(pos)}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={dragHint}
          className="absolute h-full w-[100vw] cursor-ew-resize opacity-0"
        />

        <span
          className={cn(
            'pointer-events-none flex size-11 items-center justify-center rounded-full border-2 border-paper shadow-lg',
            accent === 'brass' ? 'bg-brass text-ink' : 'bg-pine text-paper',
          )}
        >
          <svg
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="m9 7-5 5 5 5M15 7l5 5-5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      {showDragHint && (
        <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-background/80 px-3 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur">
          {dragHint}
        </span>
      )}
    </div>
  )
}
