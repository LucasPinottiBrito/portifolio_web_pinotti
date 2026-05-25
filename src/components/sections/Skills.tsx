import React, { useEffect, useRef } from 'react';
import { setupIntersectionObserver } from '@/lib/utils';
import { SkillGroup } from '@/types/portfolio';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { skillIcons, SkillIconKey } from '../icons/skillIcons';

interface SkillsProps {
  skills: SkillGroup[];
}

const descriptionMapEn: Record<string, string> = {
  backend: "High-performance systems and robust business logic.",
  ai: "Agentic workflows, RAG, and intelligent integrations.",
  frontend: "Professional interfaces for operational tools.",
  data: "Data platforms, Databricks, and complex pipelines.",
  infra: "Cloud services, integrations, and CI/CD workflows."
};

const descriptionMapPt: Record<string, string> = {
  backend: "Sistemas de alta performance e lógica de negócio robusta.",
  ai: "Fluxos de agentes, RAG e integrações inteligentes.",
  frontend: "Interfaces profissionais para ferramentas operacionais.",
  data: "Plataformas de dados, Databricks e pipelines complexos.",
  infra: "Serviços em nuvem, integrações e fluxos de CI/CD."
};

export function Skills({ skills }: SkillsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  
  useEffect(() => {
    return setupIntersectionObserver(sectionRef);
  }, []);
  
  const descriptionMap = language === 'en' ? descriptionMapEn : descriptionMapPt;

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="py-32 relative overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-20"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-mono uppercase tracking-[0.2em] font-bold mx-auto">
              Stack
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {language === 'en' ? 'Technical Expertise' : 'Especialidade Técnica'}
            </h2>
            <p className="max-w-[750px] text-muted-foreground md:text-xl font-medium">
              {language === 'en' 
                ? 'Core competencies in architecting backend systems, AI agents, and data-driven platforms.' 
                : 'Competências principais em arquitetura de sistemas backend, agentes de IA e plataformas baseadas em dados.'}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => {
            const Icon = skillIcons[skillGroup.icon as SkillIconKey] || skillIcons.server;
            
            return (
              <motion.div 
                key={skillGroup.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group flex flex-col p-8 rounded-3xl border bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon className="w-24 h-24" aria-hidden="true" />
                </div>

                <div className="mb-8 flex items-center justify-between relative z-10">
                  <div className="p-3.5 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest border border-border/50 rounded-full px-3 py-1 bg-muted/30">
                    {skillGroup.id}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 tracking-tight">
                  {skillGroup.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed font-medium">
                  {descriptionMap[skillGroup.id] || ""}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skillGroup.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="font-mono text-[10px] font-bold bg-muted/50 text-muted-foreground border-none hover:bg-primary/20 hover:text-primary transition-colors cursor-default px-2.5 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}