import React, { useEffect, useRef } from 'react';
import { setupIntersectionObserver } from '@/lib/utils';
import { Github, Linkedin, Mail, ExternalLink, ShieldCheck } from 'lucide-react';
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
      className="pt-24 pb-12 bg-card border-t"
    >
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {content.contact.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-[500px] leading-relaxed">
                {content.contact.description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
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
            
            <div className="pt-8 flex items-center gap-6 text-sm text-muted-foreground font-mono">
               <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{language === 'en' ? 'Open to opportunities' : 'Aberto a oportunidades'}</span>
               </div>
               <span>Brazil / Remote</span>
            </div>
          </div>

          <div className="p-8 rounded-2xl border bg-muted/30 flex flex-col justify-between">
             <div className="space-y-4">
                <div className="p-2 w-fit rounded-lg bg-primary/10 text-primary">
                   <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{language === 'en' ? 'Confidentiality & Ethics' : 'Confidencialidade e Ética'}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                   {language === 'en' 
                     ? 'All projects displayed from EDP or other sensitive environments are sanitized. I adhere to strict non-disclosure agreements while demonstrating architectural patterns and engineering results.'
                     : 'Todos os projetos exibidos da EDP ou outros ambientes sensíveis são sanitizados. Adiro a acordos de confidencialidade rigorosos enquanto demonstro padrões arquiteturais e resultados de engenharia.'}
                </p>
             </div>
             
             <div className="pt-8 text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center justify-between">
                <span>System Status</span>
                <span className="text-emerald-500">All systems operational</span>
             </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            {name} — {content.profile.role}
          </p>
          <p className="text-xs text-muted-foreground">
            {footerText}
          </p>
          <div className="flex items-center gap-4">
             <span className="text-[10px] font-mono text-muted-foreground uppercase">Built with</span>
             <div className="flex gap-2">
                <span className="text-[10px] font-mono border rounded px-1.5 py-0.5">Vite</span>
                <span className="text-[10px] font-mono border rounded px-1.5 py-0.5">React</span>
                <span className="text-[10px] font-mono border rounded px-1.5 py-0.5">Tailwind</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}