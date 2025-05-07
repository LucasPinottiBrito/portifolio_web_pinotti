
import React, { useEffect, useRef } from 'react';
import { setupIntersectionObserver } from '@/lib/utils';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

interface FooterProps {
  name: string;
}

export function Footer({ name }: FooterProps) {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    return setupIntersectionObserver(sectionRef);
  }, []);
  
  return (
    <footer 
      id="contact" 
      ref={sectionRef} 
      className="border-t py-12 animate-on-scroll"
    >
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">{name}</h3>
            <p className="text-sm text-muted-foreground">
              Computer Engineer interessed in web development, data analysis and embedded systems.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Feel free to reach out for collaborations or just a friendly chat.
            </p>
            <a 
              href="mailto:lucaspinottibrito@gmail.com" 
              className="text-sm flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              lucaspinottibrito@gmail.com
            </a>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Social</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/LucasPinottiBrito" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/lucas-pinotti-de-brito-53b947204/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
