import React from 'react';
import { Navbar } from "@/components/ui/custom-navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/seo/Seo";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioContent } from "@/content/portfolioContent";

const Index = () => {
  const { language } = useLanguage();
  const content = portfolioContent[language];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Seo />
      <Navbar name={content.profile.name} navigation={content.navigation} />
      
      <main>
        <Hero 
          name={content.profile.name}
          title={content.profile.role}
          description={content.profile.headline}
        />
        
        <About 
          description={content.profile.about}
        />
        
        <Skills skills={content.skills} />
        
        <Projects projects={content.projects} />
      </main>
      
      <Footer name={content.profile.name} footerText={content.footer.text} />
    </div>
  );
};

export default Index;