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
import { ExternalLink, Github, ShieldCheck } from 'lucide-react';
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
    overview: language === 'en' ? 'Overview' : 'Visão geral',
    problem: language === 'en' ? 'Problem' : 'Problema',
    solution: language === 'en' ? 'Solution' : 'Solução',
    result: language === 'en' ? 'Result' : 'Resultado',
    features: language === 'en' ? 'Features' : 'Funcionalidades',
    technologies: language === 'en' ? 'Technologies' : 'Tecnologias',
    images: language === 'en' ? 'Images' : 'Imagens',
    links: language === 'en' ? 'Links' : 'Links',
    confidentiality: language === 'en' ? 'Confidentiality' : 'Confidencialidade',
    openProject: language === 'en' ? 'Open Project' : 'Abrir Projeto',
  };

  const primaryLink = project.links?.find((link) => link.label.toLowerCase().includes('github')) || project.links?.[0];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl h-[90vh] md:h-[85vh] flex flex-col p-0 overflow-hidden border-border bg-white dark:bg-black shadow-2xl outline-none">
        <DialogHeader className="p-8 pb-6 border-b bg-zinc-50 dark:bg-zinc-900 relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4 flex-grow">
              <ProjectStatusBadge status={project.status} confidential={!!project.confidentialityNote} />
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
              <div className="lg:col-span-8 space-y-10">
                <section className="space-y-4">
                  <h4 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] font-bold">{t.overview}</h4>
                  <p className="text-zinc-900 dark:text-zinc-100 text-lg leading-relaxed whitespace-pre-wrap font-medium">
                    {project.fullDescription}
                  </p>
                </section>

                <div className="grid gap-5">
                  <section className="space-y-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
                    <h4 className="text-sm font-bold uppercase tracking-tight text-zinc-950 dark:text-white">{t.problem}</h4>
                    <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">{project.problem}</p>
                  </section>
                  <section className="space-y-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
                    <h4 className="text-sm font-bold uppercase tracking-tight text-zinc-950 dark:text-white">{t.solution}</h4>
                    <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">{project.solution}</p>
                  </section>
                  <section className="space-y-3 rounded-2xl border border-primary/20 bg-primary/5 p-5">
                    <h4 className="text-sm font-bold uppercase tracking-tight text-zinc-950 dark:text-white">{t.result}</h4>
                    <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-semibold">{project.result}</p>
                  </section>
                </div>

                {project.features && project.features.length > 0 && (
                  <section className="space-y-5">
                    <h4 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] font-bold">{t.features}</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm font-semibold text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                          <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              <div className="lg:col-span-4 space-y-10">
                <section className="space-y-4">
                  <h4 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] font-bold">{t.images}</h4>
                  <ProjectGallery images={project.images} />
                </section>

                <section className="space-y-5">
                  <h4 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] font-bold">{t.technologies}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono font-bold text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="space-y-5">
                  <h4 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] font-bold">{t.links}</h4>
                  <ProjectLinks links={project.links} isInternal={!!project.confidentialityNote} />
                </section>

                {project.confidentialityNote && (
                  <div className="p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 space-y-4 relative overflow-hidden group">
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
