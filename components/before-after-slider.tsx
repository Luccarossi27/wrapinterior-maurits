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

  /*
   * Portfolio/editorial treatment:
   * accent="brass" now uses a monochrome black/white treatment.
   *
   * The existing pine treatment remains available for the Home page.
   */
  const isEditorial = accent === 'brass'

  const lineClass = isEditorial ? 'bg-black/80' : 'bg-paper'

  const handleClass = isEditorial
    ? 'border-black/80 bg-paper'
    : 'border-paper bg-pine'

  return (
    <div
      ref={containerRef}
      className={cn(
        'group/slider relative w-full touch-none select-none overflow-hidden bg-transparent',
        chrome && 'border border-black/20',
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
      onPointerCancel={() => {
        dragging.current = false
      }}
      onPointerLeave={() => {
        dragging.current = false
      }}
    >
      {/* AFTER IMAGE */}
      <Image
        src={afterSrc || '/placeholder.svg'}
        alt={afterAlt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 520px"
        className={imageFitClass}
        draggable={false}
      />

      {/* AFTER LABEL */}
      {showLabels && (
        <span
          className={cn(
            'pointer-events-none absolute right-3 top-3 text-[10px] font-semibold uppercase tracking-[0.2em]',
            isEditorial
              ? 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)]'
              : 'text-paper drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)]',
          )}
        >
          {afterLabel}
        </span>
      )}

      {/* BEFORE IMAGE */}
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

        {/* BEFORE LABEL */}
        {showLabels && (
          <span
            className={cn(
              'pointer-events-none absolute left-3 top-3 text-[10px] font-semibold uppercase tracking-[0.2em]',
              isEditorial
                ? 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)]'
                : 'text-paper drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)]',
            )}
          >
            {beforeLabel}
          </span>
        )}
      </div>

      {/* EDITORIAL DIVIDER */}
      <div
        className={cn(
          'absolute inset-y-0 z-10 w-px',
          lineClass,
        )}
        style={{
          left: `${pos}%`,
          transform: 'translateX(-50%)',
        }}
      >
        {/* MINIMAL RECTANGULAR HANDLE */}
        <div
          className={cn(
            'pointer-events-none absolute left-1/2 top-1/2 h-12 w-1 -translate-x-1/2 -translate-y-1/2 border-x',
            handleClass,
          )}
        />

        {/* INVISIBLE DRAG CONTROL */}
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(pos)}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={dragHint}
          className="absolute left-1/2 top-1/2 h-[120%] w-[80px] -translate-x-1/2 -translate-y-1/2 cursor-ew-resize opacity-0"
        />
      </div>

      {/* SUBTLE EDITORIAL BOTTOM LINE */}
      <div
        className={cn(
          'pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-px origin-left scale-x-0 transition-transform duration-500 group-hover/slider:scale-x-100',
          lineClass,
        )}
      />

      {/* DRAG HINT */}
      {showDragHint && (
        <span
          className={cn(
            'pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 text-[9px] font-medium uppercase tracking-[0.2em]',
            isEditorial
              ? 'text-white opacity-80 drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)]'
              : 'text-paper opacity-80 drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)]',
          )}
        >
          {dragHint}
        </span>
      )}
    </div>
  )
}