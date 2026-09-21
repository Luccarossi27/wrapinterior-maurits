import { cn } from '@/lib/utils'

export function Logo({
  className,
  onNavigate,
  href = '/',
}: {
  className?: string
  onNavigate?: () => void
  href?: string
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
        src="/wrap-interior.png"
        alt="Wrap Interior"
        className="h-16 w-auto shrink-0 object-contain"
      />
    </a>
  )
}

export function BrandLockup({
  className,
}: {
  className?: string
}) {
  return (
    <div className={cn('flex flex-col items-start', className)}>
      <img
        src="/wrap-interior.png"
        alt="Wrap Interior"
        className="h-12 w-auto object-contain"
      />
    </div>
  )
}