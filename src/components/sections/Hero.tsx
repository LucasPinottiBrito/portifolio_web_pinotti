import React, { useEffect, useRef } from 'react';
import { setupIntersectionObserver } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from "framer-motion";

interface HeroProps {
  name: string;
  title: string;
  headline: string;
  description: string;
  image?: string;
}

export function Hero({ name, title, headline, description }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  
  useEffect(() => {
    return setupIntersectionObserver(sectionRef);
  }, []);
  
  return (
    <section 
      ref={sectionRef} 
      className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden pt-20"
    >
      {/* Background decoration - technical grid blur */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-40 transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] opacity-30 transform -translate-x-1/4 translate-y-1/4" />
      
      <div className="container px-4 md:px-6 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[850px] space-y-8"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border bg-muted/30 text-xs font-mono font-semibold text-primary tracking-tight">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>{language === 'en' ? 'Available for new challenges' : 'Disponível para novos desafios'}</span>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm font-mono font-bold uppercase tracking-[0.2em] text-primary">
              {title}
            </p>
            <h1 className="text-5xl font-extrabold tracking-[0.01em] sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-foreground">
              {name}
            </h1>
            <h2 className="text-2xl font-bold text-primary sm:text-3xl md:text-4xl lg:text-5xl tracking-tight max-w-[700px] leading-tight">
              {headline}
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground md:text-xl lg:text-2xl max-w-[650px] leading-relaxed font-medium">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-6">
            <Button size="lg" className="h-14 px-8 text-base gap-2.5 group rounded-full shadow-lg shadow-primary/20" asChild>
              <a href="#projects">
                {language === 'en' ? 'View Projects' : 'Ver Projetos'}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full hover:bg-muted/50 transition-all border-2" asChild>
              <a href="#contact">
                {language === 'en' ? 'Contact Me' : 'Entrar em Contato'}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
