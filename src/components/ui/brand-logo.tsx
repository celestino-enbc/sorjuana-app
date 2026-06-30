import Image from "next/image";
import { cn } from "@/lib/utils";
import { BRAND } from "@/lib/brand";

type BrandLogoProps = {
  variant?: "default" | "white";
  className?: string;
  priority?: boolean;
};

const logoDimensions = {
  default: { width: 9353, height: 9210 },
  white: { width: 1080, height: 1080 },
} as const;

export function BrandLogo({
  variant = "default",
  className,
  priority = false,
}: BrandLogoProps) {
  const src = variant === "white" ? BRAND.logoWhite : BRAND.logo;
  const { width, height } = logoDimensions[variant];

  return (
    <Image
      src={src}
      alt="Instituto Sor Juana Inés de la Cruz"
      width={width}
      height={height}
      priority={priority}
      className={cn(
        "w-auto object-contain",
        variant === "default" ? "h-10 md:h-12" : "h-10 w-10",
        className
      )}
    />
  );
}
