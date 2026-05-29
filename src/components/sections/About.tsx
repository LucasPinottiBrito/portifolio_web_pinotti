import React, { useEffect, useRef } from 'react';
import { setupIntersectionObserver } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { Briefcase, Cpu, Database, Blocks, Binary } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutProps {
  description: string;
}

export function About({ description }: AboutProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  
  useEffect(() => {
    return setupIntersectionObserver(sectionRef);
  }, []);
  
  const points = language === 'en' ? [
    { icon: <Blocks className="h-5 w-5" />, text: "Building full-stack web platforms and operational tools." },
    { icon: <Briefcase className="h-5 w-5" />, text: "Designing React, Vite, Next.js and TypeScript interfaces." },
    { icon: <Cpu className="h-5 w-5" />, text: "Creating AI agents, RAG flows and automation workflows." },
    { icon: <Database className="h-5 w-5" />, text: "Scaling backend and data systems with FastAPI, SQL and Databricks." },
  ] : [
    { icon: <Blocks className="h-5 w-5" />, text: "Criando plataformas web full-stack e ferramentas operacionais." },
    { icon: <Briefcase className="h-5 w-5" />, text: "Desenhando interfaces com React, Vite, Next.js e TypeScript." },
    { icon: <Cpu className="h-5 w-5" />, text: "Criando agentes de IA, fluxos RAG e automações." },
    { icon: <Database className="h-5 w-5" />, text: "Escalando backend e dados com FastAPI, SQL e Databricks." },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-32 border-y bg-muted/10 relative overflow-hidden"
    >
      {/* Subtle technical background elements */}
      <div className="absolute top-10 left-10 opacity-[0.03] select-none pointer-events-none">
        <Binary className="w-64 h-64" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-mono uppercase tracking-[0.2em] font-bold">
                Background
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {language === 'en' ? 'Professional Summary' : 'Resumo Profissional'}
              </h2>
              <div className="h-1.5 w-16 bg-primary rounded-full" />
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              {description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {points.map((point, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border bg-card/50 backdrop-blur-sm shadow-sm hover:border-primary/30 transition-colors group">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {point.icon}
                  </div>
                  <span className="text-sm font-semibold leading-snug">{point.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-border bg-muted shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-40 z-10" />
                
                <img 
                  src="/profile.jpg" 
                  alt="Lucas Pinotti" 
                  className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
             </div>
             
             {/* Decorative technical bits */}
             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
             <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
