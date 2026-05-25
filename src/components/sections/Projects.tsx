import React, { useEffect, useRef, useState } from 'react';
import { setupIntersectionObserver } from '@/lib/utils';
import { Project } from '@/types/portfolio';
import { useLanguage } from '@/contexts/LanguageContext';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ProjectCard } from '../projects/ProjectCard';
import { ProjectModal } from '../projects/ProjectModal';
import { motion } from 'framer-motion';

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  useEffect(() => {
    return setupIntersectionObserver(sectionRef);
  }, []);
  
  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="py-32 bg-muted/5 relative overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <div className="space-y-4 max-w-[650px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-mono uppercase tracking-[0.2em] font-bold">
              Portfolio
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {language === 'en' ? 'Featured Systems' : 'Sistemas em Destaque'}
            </h2>
            <p className="text-muted-foreground md:text-xl leading-relaxed font-medium">
              {language === 'en' 
                ? 'High-impact backend platforms, AI-driven automation, and enterprise operational tools.' 
                : 'Plataformas backend de alto impacto, automações com IA e ferramentas operacionais corporativas.'}
            </p>
          </div>
          <div className="flex items-center gap-6 text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground pb-2">
             <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-amber-500" />
                <span>{language === 'en' ? 'Confidential' : 'Confidencial'}</span>
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>{language === 'en' ? 'Public' : 'Público'}</span>
             </div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <ProjectCard 
                project={project} 
                onViewDetails={setSelectedProject} 
              />
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
