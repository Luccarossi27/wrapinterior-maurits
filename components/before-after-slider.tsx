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

  const isEditorial = accent === 'brass'

  const dividerClass = 'bg-pine'

  return (
    <div
      ref={containerRef}
      className={cn(
        'group/slider relative w-full touch-none select-none overflow-hidden bg-transparent',
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
        <div
          className="pointer-events-none absolute inset-0 z-20"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        >
          <span
            className={cn(
              'absolute right-4 top-4 font-serif text-[10px] font-medium uppercase tracking-[0.24em]',
              isEditorial ? 'text-white' : 'text-paper',
            )}
          >
            {afterLabel}
          </span>
        </div>
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
              'pointer-events-none absolute left-4 top-4 z-20 font-serif text-[10px] font-semibold uppercase tracking-[0.26em]',
              isEditorial ? 'text-white' : 'text-paper',
            )}
          >
            {beforeLabel}
          </span>
        )}
      </div>

      {/* MAIN DIVIDER */}
      <div
        className={cn(
          'absolute inset-y-0 z-30 w-[2px]',
          dividerClass,
        )}
        style={{
          left: `${pos}%`,
          transform: 'translateX(-50%)',
        }}
      >
        {/* SLIDER HANDLE */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 flex h-10 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2px] bg-pine">
          <span className="flex items-center gap-1">
            {/* LEFT TRIANGLE */}
            <span className="h-0 w-0 border-b-[3px] border-r-[5px] border-t-[3px] border-b-transparent border-t-transparent border-r-white" />

            {/* RIGHT TRIANGLE */}
            <span className="h-0 w-0 border-b-[3px] border-l-[5px] border-t-[3px] border-b-transparent border-t-transparent border-l-white" />
          </span>
        </div>

        {/* INVISIBLE DRAG CONTROL */}
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(pos)}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={dragHint}
          className="absolute left-1/2 top-1/2 h-[120%] w-[90px] -translate-x-1/2 -translate-y-1/2 cursor-ew-resize opacity-0"
        />
      </div>

      {/* DRAG HINT */}
      {showDragHint && (
        <span
          className={cn(
            'pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap font-serif text-[9px] font-medium uppercase tracking-[0.24em]',
            isEditorial ? 'text-white' : 'text-paper',
          )}
        >
          {dragHint}
        </span>
      )}
    </div>
  )
}