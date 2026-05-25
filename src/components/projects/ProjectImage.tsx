import React from 'react';
import { cn } from '@/lib/utils';
import { ImageIcon } from 'lucide-react';

interface ProjectImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
}

export function ProjectImage({ src, alt, className, fallbackText, ...props }: ProjectImageProps) {
  const [hasError, setHasError] = React.useState(false);

  if (hasError || !src) {
    return (
      <div className={cn("w-full h-full flex flex-col items-center justify-center bg-muted text-muted-foreground/50", className)}>
        <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
        {fallbackText && <span className="text-xs font-mono font-bold tracking-widest uppercase opacity-50">{fallbackText}</span>}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}
