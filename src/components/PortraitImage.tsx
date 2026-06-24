import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Naren's portrait, composited onto the near-black page color so it blends into
 * the dark sections. Used in the hero and About. The source is a 4:5 image, so
 * a 4:5 container shows it uncropped.
 */
export function PortraitImage({
  alt,
  className,
  ratio = "aspect-[4/5]",
  priority = false,
  objectPosition = "center",
}: {
  alt: string;
  className?: string;
  ratio?: string;
  priority?: boolean;
  objectPosition?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl bg-ink-900", ratio, className)}>
      <Image
        src="/naren-portrait.png"
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 90vw, 45vw"
        className="object-cover"
        style={{ objectPosition }}
      />
    </div>
  );
}
