
import React, { useEffect, useRef } from 'react';
import { setupIntersectionObserver } from '@/lib/utils';

interface AboutSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

export function AboutSection({ title, subtitle, description }: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    return setupIntersectionObserver(sectionRef);
  }, []);
  
  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-20 animate-on-scroll bg-muted/30"
    >
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-primary">
              {title}
            </h2>
            <h3 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
              {subtitle}
            </h3>
          </div>
          <div className="relative">
            <div className="absolute top-0 left-0 w-16 h-1 bg-primary"></div>
            <div className="pt-6">
              <p className="text-lg whitespace-pre-line leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
