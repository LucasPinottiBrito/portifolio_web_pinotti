import React from 'react';
import { Project } from '@/types/portfolio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ProjectStatusBadge } from './ProjectStatusBadge';
import { Maximize2, ExternalLink } from 'lucide-react';
import { ProjectImage } from './ProjectImage';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const { language } = useLanguage();

  const t = {
    viewDetails: language === 'en' ? 'View Details' : 'Ver Detalhes',
    external: language === 'en' ? 'Live Demo' : 'Demonstração',
  };

  const coverImage = project.images?.find(img => img.type === 'cover') || project.images?.[0];

  return (
    <div className="group relative flex flex-col rounded-2xl border bg-card overflow-hidden hover:border-primary transition-all duration-500 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden bg-muted">
        <ProjectImage
          src={coverImage?.url}
          alt={coverImage?.alt || project.title}
          fallbackText={project.title.substring(0, 3)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
           <Button variant="secondary" size="sm" onClick={() => onViewDetails(project)} className="gap-2 shadow-lg">
             <Maximize2 className="h-4 w-4" />
             {t.viewDetails}
           </Button>
        </div>
        
        <div className="absolute top-4 right-4">
          <ProjectStatusBadge status={project.status} confidential={!!project.confidentialityNote} />
        </div>
      </div>
      
      <div className="p-8 flex-grow flex flex-col space-y-4">
        <div className="space-y-1">
          <p className="text-xs font-mono text-primary uppercase tracking-widest font-semibold">{project.category}</p>
          <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
        </div>
        
        <p className="text-muted-foreground leading-relaxed flex-grow text-sm md:text-base">
          {project.shortDescription}
        </p>
        
        <div className="pt-2 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span key={i} className="text-[10px] font-mono text-muted-foreground bg-muted/50 border px-2 py-0.5 rounded">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[10px] font-mono text-muted-foreground bg-muted/50 border px-2 py-0.5 rounded">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
        
        <div className="pt-6 flex items-center justify-between border-t border-border/50">
          <Button 
            variant="ghost" 
            onClick={() => onViewDetails(project)} 
            className="p-0 h-auto text-primary hover:bg-transparent hover:text-primary/80 gap-2 font-bold group/btn transition-all"
          >
            <span className="border-b-2 border-primary/30 group-hover/btn:border-primary transition-all">
              {language === 'en' ? 'Explore Technical Details' : 'Explorar Detalhes Técnicos'}
            </span>
            <Maximize2 className="h-3.5 w-3.5 transition-transform group-hover/btn:scale-110" />
          </Button>
          
          {project.links?.[0] && (
            <Button variant="outline" size="icon" asChild className="rounded-full h-9 w-9 hover:bg-primary hover:text-primary-foreground transition-colors">
               <a href={project.links[0].url} target="_blank" rel="noopener noreferrer" title={project.links[0].label}>
                 <ExternalLink className="h-4 w-4" />
               </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
