import { cn } from "@/lib/utils";

interface BrandLogoProps {
  inverted?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { mark: "h-8 w-8", title: "text-[10px]", sub: "text-[8px]" },
  md: { mark: "h-11 w-11", title: "text-xs", sub: "text-[9px]" },
  lg: { mark: "h-16 w-16", title: "text-sm", sub: "text-[10px]" },
};

/**
 * Pixel-faithful inline SVG of the First Heritage Hospital caduceus:
 *   • Heritage Green wings
 *   • Medical Crimson serpent
 *   • Black staff with rounded cap
 * Always renders in brand colors (no white-only fallback in inverted mode).
 */
const Mark = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="First Heritage Hospital caduceus emblem"
    className={className}
  >
    {/* Wings — Heritage Green */}
    <g fill="hsl(var(--secondary))">
      {/* Left wing */}
      <path d="M30 18 C 22 14, 14 14, 8 18 C 12 18, 16 19, 19 21 C 14 21, 10 22, 7 24 C 11 24, 15 25, 18 27 C 14 27, 11 28, 9 30 C 13 30, 17 31, 20 33 L 30 26 Z" />
      {/* Right wing (mirror) */}
      <path d="M34 18 C 42 14, 50 14, 56 18 C 52 18, 48 19, 45 21 C 50 21, 54 22, 57 24 C 53 24, 49 25, 46 27 C 50 27, 53 28, 55 30 C 51 30, 47 31, 44 33 L 34 26 Z" />
    </g>

    {/* Center sphere atop staff */}
    <circle cx="32" cy="16" r="3" fill="hsl(var(--foreground))" />

    {/* Vertical staff */}
    <rect x="30.5" y="18" width="3" height="38" fill="hsl(var(--foreground))" />

    {/* Serpent — Medical Crimson, woven around staff */}
    <path
      d="M32 22
         C 22 26, 42 30, 32 34
         C 22 38, 42 42, 32 46
         C 22 50, 42 54, 32 56"
      stroke="hsl(var(--primary))"
      strokeWidth="3.2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Serpent head */}
    <circle cx="32" cy="56" r="2.5" fill="hsl(var(--primary))" />
  </svg>
);

export const BrandLogo = ({ inverted = false, className, size = "md" }: BrandLogoProps) => {
  const s = sizeMap[size];
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Mark className={cn(s.mark, "shrink-0")} />
      <div className="flex flex-col leading-tight">
        <span
          className={cn(
            "wordmark font-semibold",
            s.title,
            inverted ? "text-background" : "text-foreground",
          )}
        >
          First Heritage
        </span>
        <span
          className={cn(
            "wordmark",
            s.sub,
            inverted ? "text-background/70" : "text-muted-foreground",
          )}
        >
          Hospital · Lagos
        </span>
      </div>
    </div>
  );
};
