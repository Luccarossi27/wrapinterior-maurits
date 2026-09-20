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
        'group inline-flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-background',
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