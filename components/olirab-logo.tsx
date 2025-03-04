interface LogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export function OlirabLogo({ className = "", showText = true, size = "md" }: LogoProps) {
  // Size mappings
  const sizes = {
    sm: { container: "h-6", icon: "h-6 w-6", text: "text-lg" },
    md: { container: "h-8", icon: "h-8 w-8", text: "text-xl" },
    lg: { container: "h-10", icon: "h-10 w-10", text: "text-2xl" },
  }

  return (
    <div className={`flex items-center gap-2 ${sizes[size].container} ${className}`}>
      {/* Burger icon with steam */}
      <div className={`relative ${sizes[size].icon}`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          {/* Gold gradient for the entire logo */}
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#F2D675" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
          </defs>

          {/* Steam lines */}
          <path
            d="M20 25C25 20 30 25 30 20M40 25C45 20 50 25 50 20M60 25C65 20 70 25 70 20"
            stroke="url(#goldGradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Burger bun top */}
          <path
            d="M15 40C15 32 25 25 50 25C75 25 85 32 85 40C85 48 75 50 50 50C25 50 15 48 15 40Z"
            fill="url(#goldGradient)"
          />

          {/* Burger filling */}
          <path
            d="M20 55C20 52 25 50 50 50C75 50 80 52 80 55C80 58 75 60 50 60C25 60 20 58 20 55Z"
            fill="url(#goldGradient)"
          />

          {/* Burger bun bottom */}
          <path
            d="M15 70C15 62 25 60 50 60C75 60 85 62 85 70C85 78 75 80 50 80C25 80 15 78 15 70Z"
            fill="url(#goldGradient)"
          />

          {/* Burger sticks/utensils */}
          <path d="M10 65H90M10 75H90" stroke="url(#goldGradient)" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col items-start">
          <span
            className={`font-bold leading-none ${sizes[size].text} bg-clip-text text-transparent bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-700`}
          >
            O'<span className="font-extrabold">LIRAB</span>
          </span>
          {size !== "sm" && (
            <span className="text-xs font-medium tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-700">
              FAST FOOD
            </span>
          )}
        </div>
      )}
    </div>
  )
}

