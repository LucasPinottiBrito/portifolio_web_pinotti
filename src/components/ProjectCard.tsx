
import React from 'react';
import { Button } from './ui/custom-button';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon?: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden shadow-md border border-border bg-card h-full">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
        {project.icon && (
          <div className="absolute top-4 left-4 text-3xl">
            {project.icon}
          </div>
        )}
      </div>
      <div className="flex flex-col flex-grow p-4 space-y-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-muted-foreground flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="skill-tag"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-4">
          {project.liveUrl && (
            <Button asChild variant="default" size="sm">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button asChild variant="outline" size="sm">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
