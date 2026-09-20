```tsx
import { cn } from '@/lib/utils'

export function BuildingMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 44"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6 41 L6 18 L18 5 L30 18"
        className="stroke-ink"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="31"
        y="14"
        width="3.6"
        height="27"
        rx="1"
        className="fill-brass"
      />
      <rect
        x="37"
        y="18"
        width="3.6"
        height="23"
        rx="1"
        className="fill-brass"
      />
      <rect
        x="43"
        y="22"
        width="3.6"
        height="19"
        rx="1"
        className="fill-brass"
      />
    </svg>
  )
}

export function Logo({
  className,
  onNavigate,
  href = '/',
  subtitle = false,
}: {
  className?: string
  onNavigate?: () => void
  href?: string
  subtitle?: boolean
}) {
  return (
    <a
      href={href}
      onClick={onNavigate}
      className={cn(
        'group inline-flex items-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className,
      )}
      aria-label="Wrap Interior — home"
    >
      <img
        src="/wrap-interior-logo.png"
        alt="Wrap Interior"
        className="h-9 w-auto shrink-0 object-contain"
      />
    </a>
  )
}

export function BrandLockup({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col items-start', className)}>
      <div className="flex items-center gap-3">
        <BuildingMark className="size-12 shrink-0" />
        <span className="text-xl font-semibold uppercase tracking-[0.22em] text-ink sm:text-2xl">
          Wrap Interior
        </span>
      </div>

      <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.28em] text-moss">
        Kitchen &amp; Home Interior Wrapping
      </span>

      <span className="mt-2 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.3em] text-brass">
        <span aria-hidden="true" className="h-px w-6 bg-brass" />
        Costa Blanca
      </span>
    </div>
  )
}
```
