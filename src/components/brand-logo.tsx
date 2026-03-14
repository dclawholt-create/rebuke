import Image from "next/image";
import { brandLogoUrl } from "@/lib/brand";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function BrandLogo({
  className = "",
  imageClassName = "",
  priority = false,
  sizes = "192px",
}: BrandLogoProps) {
  return (
    <div className={`relative h-12 w-48 ${className}`.trim()}>
      <Image
        src={brandLogoUrl}
        alt="Rebuke Coffee"
        fill
        priority={priority}
        sizes={sizes}
        className={`object-contain ${imageClassName}`.trim()}
      />
    </div>
  );
}
