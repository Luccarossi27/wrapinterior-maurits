
export function WarrantyBadge() {
  return (
    <div
      role="img"
      aria-label="5 year warranty"
      className="flex flex-col items-center justify-center"
    >
      <svg
        viewBox="0 0 160 160"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[112px] w-[112px] sm:h-[120px] sm:w-[120px]"
        aria-hidden="true"
      >
        {/* Warm ivory badge background */}
        <circle cx="80" cy="80" r="76" fill="#F4F0E8" />

        {/* Fine double outline */}
        <circle
          cx="80"
          cy="80"
          r="72"
          fill="none"
          stroke="#24463B"
          strokeWidth="1.5"
        />
        <circle
          cx="80"
          cy="80"
          r="67"
          fill="none"
          stroke="#24463B"
          strokeWidth="0.6"
        />

        {/* Subtle decorative star */}
        <path
          d="M80 18 L82.5 24 L89 24.5 L84 29 L85.5 35 L80 31.5 L74.5 35 L76 29 L71 24.5 L77.5 24 Z"
          fill="#24463B"
        />

        {/* Top lettering */}
        <text
          x="80"
          y="48"
          textAnchor="middle"
          fontSize="6.5"
          letterSpacing="1.5"
          fill="#24463B"
          fontFamily="Arial, sans-serif"
        >
          PEACE OF MIND
        </text>

        {/* Main lettering */}
        <text
          x="80"
          y="83"
          textAnchor="middle"
          fontSize="30"
          fontWeight="600"
          letterSpacing="-1.5"
          fill="#24463B"
          fontFamily="Arial, sans-serif"
        >
          5 YEAR
        </text>

        {/* Divider */}
        <line
          x1="43"
          y1="94"
          x2="117"
          y2="94"
          stroke="#24463B"
          strokeWidth="0.8"
        />

        {/* Warranty text */}
        <text
          x="80"
          y="108"
          textAnchor="middle"
          fontSize="10"
          fontWeight="600"
          letterSpacing="2"
          fill="#24463B"
          fontFamily="Arial, sans-serif"
        >
          WARRANTY
        </text>

        {/* Minimal bottom flourish */}
        <path
          d="M65 120 Q80 128 95 120"
          fill="none"
          stroke="#24463B"
          strokeWidth="0.8"
        />
      </svg>
    </div>
  )
}

