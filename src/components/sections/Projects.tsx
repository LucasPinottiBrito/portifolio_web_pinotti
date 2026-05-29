import React, { useEffect, useRef, useState } from 'react';
import { setupIntersectionObserver } from '@/lib/utils';
import { Project } from '@/types/portfolio';
import { useLanguage } from '@/contexts/LanguageContext';
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
          className="mb-16 max-w-[760px] space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-mono uppercase tracking-[0.2em] font-bold">
            Portfolio
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {language === 'en' ? 'Selected Projects' : 'Projetos Selecionados'}
          </h2>
          <p className="text-muted-foreground md:text-xl leading-relaxed font-medium">
            {language === 'en'
              ? 'A concise overview of systems, products and automation projects focused on real operational problems and practical results.'
              : 'Uma visão objetiva de sistemas, produtos e automações focados em problemas operacionais reais e resultados práticos.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
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
