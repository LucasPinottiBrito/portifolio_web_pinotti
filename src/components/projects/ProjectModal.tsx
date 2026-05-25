import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Project } from '@/types/portfolio';
import { useLanguage } from '@/contexts/LanguageContext';
import { ProjectGallery } from './ProjectGallery';
import { ProjectLinks } from './ProjectLinks';
import { ProjectStatusBadge } from './ProjectStatusBadge';
import { ShieldCheck, CheckCircle2, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { language } = useLanguage();

  if (!project) return null;

  const t = {
    overview: language === 'en' ? 'Project Overview' : 'Visão Geral do Projeto',
    problem: language === 'en' ? 'The Problem' : 'O Problema',
    solution: language === 'en' ? 'The Solution' : 'A Solução',
    myRole: language === 'en' ? 'My Engineering Role' : 'Meu Papel na Engenharia',
    highlights: language === 'en' ? 'Project Highlights' : 'Destaques do Projeto',
    features: language === 'en' ? 'Key Technical Components' : 'Componentes Técnicos Principais',
    technologies: language === 'en' ? 'Tech Stack' : 'Stack Tecnológica',
    confidentiality: language === 'en' ? 'Confidentiality' : 'Confidencialidade',
    resources: language === 'en' ? 'Resources & Links' : 'Recursos e Links',
    close: language === 'en' ? 'Close' : 'Fechar',
    openProject: language === 'en' ? 'Open Project' : 'Abrir Projeto',
  };

  // Find primary link (GitHub or first link)
  const primaryLink = project.links?.find(l => l.label.toLowerCase().includes('github')) || project.links?.[0];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl h-[90vh] md:h-[85vh] flex flex-col p-0 overflow-hidden border-border bg-white dark:bg-black shadow-2xl outline-none">
        <DialogHeader className="p-8 pb-6 border-b bg-zinc-50 dark:bg-zinc-900 relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4 flex-grow">
              <ProjectStatusBadge status={project.status} />
              <div className="space-y-1">
                <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold">
                  {project.category}
                </span>
                <DialogTitle className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
                  {project.title}
                </DialogTitle>
              </div>
            </div>
            
            {primaryLink && (
              <div className="flex-shrink-0 pt-2 md:pt-0">
                <Button className="gap-2 px-6 shadow-lg group bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <a href={primaryLink.url} target="_blank" rel="noopener noreferrer">
                    {primaryLink.label.toLowerCase().includes('github') ? <Github className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                    <span>{t.openProject}</span>
                  </a>
                </Button>
              </div>
            )}
          </div>
          <DialogDescription className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-[800px] mt-4">
            {project.shortDescription}
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="flex-grow bg-white dark:bg-black">
          <div className="p-8 space-y-12 pb-16">
            <div className="grid lg:grid-cols-12 gap-12">
               {/* Left Column: Technical Narrative (8 cols) */}
               <div className="lg:col-span-8 space-y-12">
                  <section className="space-y-4">
                    <h4 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] font-bold">{t.overview}</h4>
                    <p className="text-zinc-900 dark:text-zinc-100 text-lg md:text-xl leading-relaxed whitespace-pre-wrap font-medium">{project.fullDescription}</p>
                  </section>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <section className="space-y-4 p-7 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                      <h4 className="text-sm font-bold flex items-center gap-2.5 text-zinc-950 dark:text-white uppercase tracking-tight">
                         <div className="h-2 w-2 rounded-full bg-primary" />
                         {t.problem}
                      </h4>
                      <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">{project.problem}</p>
                    </section>
                    <section className="space-y-4 p-7 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                      <h4 className="text-sm font-bold flex items-center gap-2.5 text-zinc-950 dark:text-white uppercase tracking-tight">
                         <div className="h-2 w-2 rounded-full bg-emerald-500" />
                         {t.solution}
                      </h4>
                      <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">{project.solution}</p>
                    </section>
                  </div>

                  <section className="space-y-5">
                    <h4 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] font-bold">{t.myRole}</h4>
                    <p className="text-zinc-900 dark:text-zinc-100 text-lg leading-relaxed font-medium">{project.myRole}</p>
                  </section>

                  {project.features && project.features.length > 0 && (
                    <section className="space-y-6">
                      <h4 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] font-bold">{t.features}</h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-4 text-sm font-semibold text-zinc-700 dark:text-zinc-300 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:border-primary/20 transition-colors">
                             <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                             {feature}
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
               </div>

               {/* Right Column: Visuals & Links (4 cols) */}
               <div className="lg:col-span-4 space-y-12">
                  <section className="space-y-4">
                    <h4 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] font-bold">{language === 'en' ? 'Visuals' : 'Visuais'}</h4>
                    <ProjectGallery images={project.images} />
                  </section>

                  <section className="space-y-5">
                     <h4 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] font-bold">{t.technologies}</h4>
                     <div className="flex flex-wrap gap-2">
                       {project.technologies.map((tech, i) => (
                         <span key={i} className="text-[10px] font-mono font-bold text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700">
                           {tech}
                         </span>
                       ))}
                     </div>
                  </section>

                  <section className="space-y-5">
                    <h4 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] font-bold">{t.resources}</h4>
                    <ProjectLinks links={project.links} isInternal={!!project.confidentialityNote} />
                  </section>

                  {project.confidentialityNote && (
                    <div className="p-7 rounded-[2rem] border border-amber-500/20 bg-amber-500/5 space-y-4 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                         <ShieldCheck className="w-12 h-12 text-amber-500" />
                      </div>
                      <div className="flex items-center gap-2.5 text-amber-500 relative z-10">
                         <ShieldCheck className="h-5 w-5" />
                         <span className="text-sm font-bold uppercase tracking-widest">{t.confidentiality}</span>
                      </div>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed italic font-medium relative z-10">
                         {project.confidentialityNote}
                      </p>
                    </div>
                  )}
               </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
