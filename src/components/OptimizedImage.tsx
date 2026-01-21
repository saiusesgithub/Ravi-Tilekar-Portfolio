/**
 * Optimized Image Component
 * Provides image optimization with lazy loading, responsive sizing, and error handling
 */

import React, { useState, useRef, useEffect } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  objectFit?: "cover" | "contain" | "fill" | "scale-down";
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Generate WebP with fallback versions of images
 */
const splitSrc = (src: string) => {
  const match = src.match(/^(.*)\.([^.]+)$/);
  if (!match) return { base: src, ext: "" };
  return { base: match[1], ext: match[2].toLowerCase() };
};

const getCandidates = (src: string): string[] => {
  const { base, ext } = splitSrc(src);
  const originals = ext ? [src] : [src];
  const alternates: string[] = [];
  if (ext === "jpeg") alternates.push(`${base}.jpg`, `${base}.png`);
  else if (ext === "jpg") alternates.push(`${base}.jpeg`, `${base}.png`);
  else if (ext === "png") alternates.push(`${base}.jpg`, `${base}.jpeg`);
  else alternates.push(`${base}.jpg`, `${base}.jpeg`, `${base}.png`);
  // webp is preferred if available; we'll detect availability
  const webp = `${base}.webp`;
  return [webp, ...originals, ...alternates];
};

/**
 * Optimized Image Component
 * Features:
 * - Lazy loading by default
 * - WebP format with fallback
 * - Loading placeholder
 * - Error state handling
 * - Responsive image sizes
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  objectFit = "cover",
  sizes,
  onLoad,
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(!priority);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [webpAvailable, setWebpAvailable] = useState<boolean>(false);
  const [candidates, setCandidates] = useState<string[]>(getCandidates(src));
  const [candidateIndex, setCandidateIndex] = useState<number>(0);
  const imgRef = useRef<HTMLImageElement>(null);

  // Preload image if priority is true
  useEffect(() => {
    if (priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoading(false);
      // Don't mark error on preload; let normal flow handle fallbacks
      img.onerror = () => setIsLoading(false);
    }
  }, [src, priority]);

  // When src changes, recompute candidates and test webp availability
  useEffect(() => {
    const nextCandidates = getCandidates(src);
    setCandidates(nextCandidates);
    setCandidateIndex(0);
    setImageSrc(src);
    setHasError(false);
    setIsLoading(!priority);

    // Detect webp availability
    const testWebp = new Image();
    testWebp.src = nextCandidates[0];
    testWebp.onload = () => setWebpAvailable(true);
    testWebp.onerror = () => setWebpAvailable(false);
  }, [src, priority]);

  const handleLoad = (): void => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = (): void => {
    // Try next candidate if available
    const nextIndex = candidateIndex + 1;
    if (nextIndex < candidates.length) {
      setCandidateIndex(nextIndex);
      setImageSrc(candidates[nextIndex]);
      // Keep loading state while trying fallback
      setIsLoading(true);
    } else {
      // Final fallback to a neutral placeholder
      setImageSrc("/placeholder.svg");
      setIsLoading(false);
      setHasError(false);
      onError?.();
    }
  };

  const aspectRatio = width && height ? (width / height) * 100 : "auto";

  return (
    <div
      className={cn("relative overflow-hidden bg-muted", className)}
      style={{
        paddingBottom: aspectRatio !== "auto" ? `${aspectRatio}%` : undefined,
      }}
    >
      {/* Loading placeholder */}
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-muted flex items-center justify-center">
          <ImageIcon className="w-8 h-8 text-muted-foreground" />
        </div>
      )}

      {/* Error state intentionally suppressed; fallback shows neutral placeholder */}

      {/* Image */}
      {!hasError && (
        <picture>
          {webpAvailable && <source srcSet={candidates[0]} type="image/webp" />}
          <img
            ref={imgRef}
            src={imageSrc}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            sizes={sizes}
            onLoad={handleLoad}
            onError={handleError}
            className={cn("w-full h-full transition-opacity duration-300", {
              "opacity-0": isLoading,
              "opacity-100": !isLoading,
            })}
            style={{
              objectFit,
            }}
          />
        </picture>
      )}
    </div>
  );
};

/**
 * Hero Image Component
 * Optimized for hero sections with priority loading
 */
export const HeroImage: React.FC<OptimizedImageProps> = (props) => {
  return <OptimizedImage {...props} priority={true} objectFit="cover" />;
};

/**
 * Responsive Image Sizes Presets
 */
// Moved presets to `src/utils/imageSizes.ts` to avoid Fast Refresh compatibility issues.
