
import React, { useEffect, useRef } from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { setupIntersectionObserver } from '@/lib/utils';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  name: string;
  title: string;
  description: string;
  image: string;
}

export function HeroSection({ name, title, description, image }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    return setupIntersectionObserver(sectionRef);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[calc(100vh-4rem)] flex items-center animate-on-scroll"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                {name}
              </h1>
              <p className="text-xl text-primary font-medium md:text-2xl">
                {title}
              </p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToAbout}>
                Learn More
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <ThemeSwitcher />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={image}
              alt={name}
              className="rounded-full w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] object-cover border-4 border-primary shadow-xl"
              style={{ objectPosition: 'center top' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
