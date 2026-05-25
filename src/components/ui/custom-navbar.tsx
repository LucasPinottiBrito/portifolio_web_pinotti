import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './custom-theme-toggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { NavigationItem } from '@/types/portfolio';
import { cn } from '@/lib/utils';
import { Globe, Menu, X, Command } from 'lucide-react';
import { Button } from './button';

interface NavbarProps {
  name: string;
  navigation: NavigationItem[];
}

export function Navbar({ name, navigation }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled 
          ? "border-b bg-background/70 backdrop-blur-xl py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3 group">
          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <Command className="h-5 w-5" />
          </div>
          <a href="/" className="text-xl font-bold tracking-[0.02em] hover:text-primary transition-colors">
            {name}
          </a>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          {navigation.map((item) => (
            <a 
              key={item.id} 
              href={item.href} 
              className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-muted-foreground hover:text-primary transition-all duration-300 relative group/link"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
            </a>
          ))}
          
          <div className="h-4 w-px bg-border/50 mx-2" />
          
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-muted/30 hover:border-primary/50 transition-all group/lang"
            >
              <Globe className="h-3.5 w-3.5 text-muted-foreground group-hover/lang:text-primary transition-colors" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-tighter">
                {language === 'en' ? 'PT' : 'EN'}
              </span>
            </button>
            <ThemeToggle />
          </div>
        </nav>
        
        <div className="md:hidden flex items-center gap-4">
           <ThemeToggle />
           <button 
            className="p-2 rounded-xl bg-muted/50 border border-border/50 hover:bg-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
            <nav className="container py-10 flex flex-col gap-8">
              {navigation.map((item) => (
                <a 
                  key={item.id}
                  href={item.href} 
                  className="text-2xl font-bold tracking-tight hover:text-primary transition-colors flex items-center justify-between group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  <Command className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
              
              <div className="h-px w-full bg-border/50 my-2" />
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="justify-between group h-14 rounded-2xl border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  <Globe className="h-5 w-5" />
                  <span className="font-bold">{language === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês'}</span>
                </span>
                <span className="font-mono text-xs opacity-50 uppercase font-bold tracking-widest">
                  {language === 'en' ? 'PT' : 'EN'}
                </span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}