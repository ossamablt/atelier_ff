<<<<<<< HEAD
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
=======
import type React from "react"

interface OlirabLogoProps {
  size?: "sm" | "md" | "lg"
  className?: string
  showText?: boolean
}

export const OlirabLogo: React.FC<OlirabLogoProps> = ({ size = "md", className = "", showText = true }) => {
  let logoSize = "24"
  let textSize = "text-lg"

  switch (size) {
    case "sm":
      logoSize = "20"
      textSize = "text-sm"
      break
    case "md":
      logoSize = "32"
      textSize = "text-xl"
      break
    case "lg":
      logoSize = "48"
      textSize = "text-2xl"
      break
  }

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        {/* Burger Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={logoSize} height={logoSize}>
          {/* Bun top */}
          <path
            d="M8,20 C8,12 16,8 32,8 C48,8 56,12 56,20 L56,22 C56,22 48,26 32,26 C16,26 8,22 8,22 L8,20 Z"
            fill="#FF6B35"
          />
          {/* Lettuce */}
          <path
            d="M6,27 C6,27 12,33 32,33 C52,33 58,27 58,27 L58,30 C58,30 50,34 32,34 C14,34 6,30 6,30 L6,27 Z"
            fill="#4CAF50"
          />
          {/* Cheese */}
          <path
            d="M7,37 C7,37 13,41 32,41 C51,41 57,37 57,37 L57,39 C57,39 49,42 32,42 C15,42 7,39 7,39 L7,37 Z"
            fill="#FFC107"
          />
          {/* Patty */}
          <path
            d="M8,34 C8,34 16,38 32,38 C48,38 56,34 56,34 L56,37 C56,37 48,40 32,40 C16,40 8,37 8,37 L8,34 Z"
            fill="#795548"
          />
          {/* Bun bottom */}
          <path
            d="M8,42 C8,42 16,46 32,46 C48,46 56,42 56,42 L56,48 C56,52 48,56 32,56 C16,56 8,52 8,48 L8,42 Z"
            fill="#FF6B35"
          />
>>>>>>> df7e64f (Updated latest version)
        </svg>
      </div>

      {showText && (
<<<<<<< HEAD
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
=======
        <span className={`font-bold ml-2 text-[#FF6B35] ${textSize}`}>
          OLIRAB
          <span className="text-gray-700 font-normal ml-1">Fast Food</span>
        </span>
>>>>>>> df7e64f (Updated latest version)
      )}
    </div>
  )
}

