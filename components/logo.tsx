import { cn } from '@/lib/utils'

/**
 * Wordmark "WRAP Interior" with a minimal folded-foil / cabinet-corner mark.
 * The same glyph is reused for the favicon and social avatar concept.
 */
export function FoilMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="3.25"
        y="3.25"
        width="25.5"
        height="25.5"
        rx="6"
        className="stroke-current"
        strokeWidth="2"
      />
      {/* folded corner / peeling foil */}
      <path
        d="M11 21 L11 11 L21 11"
        className="stroke-current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 21 L21 11 L21 21 Z"
        className="fill-current"
        opacity="0.9"
      />
    </svg>
  )
}

export function Logo({
  className,
  onNavigate,
}: {
  className?: string
  onNavigate?: () => void
}) {
  return (
    <a
      href="#top"
      onClick={onNavigate}
      className={cn(
        'group inline-flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className,
      )}
      aria-label="Wrap Interior — home"
    >
      <span className="flex size-9 items-center justify-center rounded-lg bg-pine text-paper transition-transform group-hover:-rotate-3">
        <FoilMark className="size-5" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-lg font-semibold tracking-tight text-ink">
          <span className="font-bold">WRAP</span>{' '}
          <span className="font-normal italic text-pine">Interior</span>
        </span>
        <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-moss">
          Costa Blanca
        </span>
      </span>
    </a>
  )
}
