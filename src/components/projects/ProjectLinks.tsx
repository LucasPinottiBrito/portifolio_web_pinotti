import React from 'react';
import { ProjectLink } from '@/types/portfolio';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Globe, FileText, Lock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectLinksProps {
  links?: ProjectLink[];
  isInternal?: boolean;
}

export function ProjectLinks({ links, isInternal }: ProjectLinksProps) {
  const { language } = useLanguage();

  if (isInternal && (!links || links.length === 0)) {
    return (
      <div className="flex items-center gap-2 text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-lg border text-xs font-mono">
        <Lock className="h-3.5 w-3.5" />
        <span>{language === 'en' ? 'Private Repository / Internal System' : 'Repositório Privado / Sistema Interno'}</span>
      </div>
    );
  }

  if (!links || links.length === 0) return null;

  const getIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes('github')) return <Github className="h-4 w-4" />;
    if (l.includes('demo') || l.includes('live')) return <Globe className="h-4 w-4" />;
    if (l.includes('study') || l.includes('case')) return <FileText className="h-4 w-4" />;
    return <ExternalLink className="h-4 w-4" />;
  };

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link, index) => (
        <Button key={index} variant="outline" size="sm" className="gap-2 group h-9" asChild>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {getIcon(link.label)}
            <span>{link.label}</span>
            {/* <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-1" /> */}
          </a>
        </Button>
      ))}
    </div>
  );
}
