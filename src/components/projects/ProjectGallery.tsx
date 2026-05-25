import React, { useState } from 'react';
import { ProjectImage as ProjectImageType } from '@/types/portfolio';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, FolderGit2 } from 'lucide-react';
import { ProjectImage } from './ProjectImage';

interface ProjectGalleryProps {
  images?: ProjectImageType[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="rounded-2xl overflow-hidden border bg-muted aspect-video flex items-center justify-center">
        <FolderGit2 className="h-16 w-16 text-muted-foreground/30" />
      </div>
    );
  }

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="space-y-4">
      {/* Main Display */}
      <div className="relative group rounded-2xl overflow-hidden border bg-muted aspect-video flex items-center justify-center">
        <ProjectImage
          src={images[activeIndex].url}
          alt={images[activeIndex].alt}
          className="w-full h-full object-cover transition-all duration-500"
        />
        
        {images.length > 1 && (
          <>
            <button 
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {images[activeIndex].caption && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm text-white text-sm">
            {images[activeIndex].caption}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "relative flex-shrink-0 w-24 aspect-video rounded-lg overflow-hidden border-2 transition-all",
                activeIndex === i ? "border-primary scale-105 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
              )}
            >
              <ProjectImage
                src={img.url}
                alt={`Thumbnail ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
