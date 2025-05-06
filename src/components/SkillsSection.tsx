
import React, { useEffect, useRef } from 'react';
import { setupIntersectionObserver } from '@/lib/utils';

interface Skill {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    return setupIntersectionObserver(sectionRef);
  }, []);
  
  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="py-20 animate-on-scroll"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              My Skills
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Here are the technologies and skills I specialize in.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 border rounded-lg shadow-sm bg-card"
            >
              <div className="mb-4">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2 text-center">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-center">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
