import React, { useEffect, useRef } from 'react';
import { setupIntersectionObserver } from '@/lib/utils';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioContent } from '@/content/portfolioContent';
import { Button } from './ui/button';

interface FooterProps {
  name: string;
  footerText: string;
}

export function Footer({ name, footerText }: FooterProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const content = portfolioContent[language];

  useEffect(() => {
    return setupIntersectionObserver(sectionRef);
  }, []);

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="border-t bg-card py-16"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-10 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {content.contact.title}
            </h2>
            <p className="mx-auto max-w-[560px] text-lg leading-relaxed text-muted-foreground">
              {content.contact.description}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2" asChild>
              <a href={`mailto:${content.profile.email}`}>
                <Mail className="h-4 w-4" />
                {content.contact.cta}
              </a>
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href={content.profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href={content.profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 text-sm font-mono text-muted-foreground sm:flex-row sm:gap-6">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>{language === 'en' ? 'Open to opportunities' : 'Aberto a oportunidades'}</span>
            </div>
            <span>Brazil / Remote</span>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              {name} - {content.profile.role}
            </p>
            <p className="text-xs text-muted-foreground">
              {footerText}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
