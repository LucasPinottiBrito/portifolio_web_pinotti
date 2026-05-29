import React from 'react';
import { Project } from '@/types/portfolio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ProjectStatusBadge } from './ProjectStatusBadge';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { ProjectImage } from './ProjectImage';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const { language } = useLanguage();

  const t = {
    viewDetails: language === 'en' ? 'View details' : 'Ver detalhes',
    problem: language === 'en' ? 'Problem' : 'Problema',
    result: language === 'en' ? 'Result' : 'Resultado',
  };

  const coverImage = project.images?.find((img) => img.type === 'cover') || project.images?.[0];
  const primaryLink = project.links?.[0];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-colors duration-300 hover:border-primary/45">
      <div className="relative h-40 overflow-hidden bg-muted">
        <ProjectImage
          src={coverImage?.url}
          alt={coverImage?.alt || project.title}
          fallbackText={project.title.substring(0, 3)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute left-3 top-3">
          <ProjectStatusBadge status={project.status} confidential={!!project.confidentialityNote} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5">
        <div className="space-y-2">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-primary">
            {project.category}
          </p>
          <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
        </div>

        <div className="space-y-3 text-sm leading-relaxed">
          <div className="space-y-1">
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">
              {t.problem}
            </p>
            <p className="text-muted-foreground">{project.problem}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">
              {t.result}
            </p>
            <p className="font-medium text-foreground/85">{project.result}</p>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-md px-2 py-0.5 text-[10px] font-mono font-bold text-muted-foreground">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="secondary" className="rounded-md px-2 py-0.5 text-[10px] font-mono font-bold text-muted-foreground">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-3 border-t border-border/50 pt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(project)}
            className="h-9 flex-1 gap-2"
          >
            {t.viewDetails}
            <ArrowUpRight className="h-4 w-4" />
          </Button>

          {primaryLink && (
            <Button variant="ghost" size="icon" asChild className="h-9 w-9 shrink-0">
              <a href={primaryLink.url} target="_blank" rel="noopener noreferrer" aria-label={primaryLink.label} title={primaryLink.label}>
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
