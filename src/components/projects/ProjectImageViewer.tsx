import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { ProjectImage as ProjectImageType } from '@/types/portfolio';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ProjectImage } from './ProjectImage';

interface ProjectImageViewerProps {
  images: ProjectImageType[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectImageViewer({
  images,
  initialIndex,
  isOpen,
  onClose,
}: ProjectImageViewerProps) {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const t = {
    title: language === 'en' ? 'Project image viewer' : 'Visualizador de imagem do projeto',
    description: language === 'en'
      ? 'Expanded project image with keyboard navigation.'
      : 'Imagem ampliada do projeto com navegação por teclado.',
    previous: language === 'en' ? 'Previous image' : 'Imagem anterior',
    next: language === 'en' ? 'Next image' : 'Próxima imagem',
    close: language === 'en' ? 'Close viewer' : 'Fechar visualizador',
  };

  const imageCount = images.length;
  const activeImage = images[activeIndex];

  useEffect(() => {
    if (isOpen) {
      setActiveIndex(Math.min(Math.max(initialIndex, 0), Math.max(imageCount - 1, 0)));
    }
  }, [imageCount, initialIndex, isOpen]);

  useEffect(() => {
    if (!isOpen || imageCount === 0) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + imageCount) % imageCount);
      }

      if (event.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % imageCount);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [imageCount, isOpen, onClose]);

  if (imageCount === 0 || !activeImage) {
    return null;
  }

  const handlePrevious = () => setActiveIndex((prev) => (prev - 1 + imageCount) % imageCount);
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % imageCount);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        hideCloseButton
        aria-label={t.title}
        className="h-screen max-h-screen w-screen max-w-none border-0 bg-black/95 p-0 text-white shadow-none sm:rounded-none"
      >
        <DialogTitle className="sr-only">{t.title}</DialogTitle>
        <DialogDescription className="sr-only">{t.description}</DialogDescription>

        <div className="absolute left-1/2 top-4 z-20 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs font-mono font-bold text-white/80 backdrop-blur-sm">
          {activeIndex + 1} / {imageCount}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70"
          aria-label={t.close}
        >
          <X className="h-5 w-5" />
        </button>

        {imageCount > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrevious}
              className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70 sm:left-6 sm:h-12 sm:w-12"
              aria-label={t.previous}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70 sm:right-6 sm:h-12 sm:w-12"
              aria-label={t.next}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        <div className="flex h-full w-full items-center justify-center px-4 py-20 sm:px-20">
          <ProjectImage
            src={activeImage.url}
            alt={activeImage.alt}
            fallbackText={String(activeIndex + 1).padStart(2, '0')}
            className="max-h-[85vh] max-w-[90vw] object-contain"
          />
        </div>

        {activeImage.caption && (
          <div className="absolute bottom-5 left-1/2 z-20 w-[min(90vw,760px)] -translate-x-1/2 rounded-xl bg-white/10 px-4 py-3 text-center text-sm text-white/85 backdrop-blur-sm">
            {activeImage.caption}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
