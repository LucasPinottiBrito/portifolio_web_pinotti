import React, { useState } from "react";
import { techStack, TechLogo } from "@/content/techStack";
import { useLanguage } from "@/contexts/LanguageContext";

function TechLogoItem({ tech }: { tech: TechLogo }) {
  const [hasLogo, setHasLogo] = useState(true);

  return (
    <li
      className="flex h-20 min-w-[168px] items-center justify-center rounded-xl border bg-card/55 px-6 shadow-sm transition-colors hover:border-primary/40 hover:bg-card/80 sm:min-w-[190px]"
      aria-label={tech.name}
    >
      <div className="flex items-center gap-3">
        {hasLogo ? (
          <img
            src={tech.logo}
            alt=""
            loading="lazy"
            className="h-8 w-8 object-contain"
            onError={() => setHasLogo(false)}
          />
        ) : (
          <span
            className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-[10px] font-bold text-primary"
            aria-hidden="true"
          >
            {tech.name.slice(0, 2).toUpperCase()}
          </span>
        )}
        <span className="whitespace-nowrap text-sm font-semibold text-foreground/85">
          {tech.name}
        </span>
      </div>
    </li>
  );
}

export function TechStackCarousel() {
  const { language } = useLanguage();
  const repeatedStack = [...techStack, ...techStack];

  return (
    <div className="mb-16 space-y-5" aria-labelledby="tech-stack-carousel-title">
      <div className="flex flex-col gap-2 text-center">
        <h3
          id="tech-stack-carousel-title"
          className="text-sm font-mono font-bold uppercase tracking-[0.2em] text-primary"
        >
          {language === "en" ? "Technologies I work with" : "Tecnologias que utilizo"}
        </h3>
        <p className="mx-auto max-w-[680px] text-sm font-medium text-muted-foreground">
          {language === "en"
            ? "A practical stack spanning frontend interfaces, backend services, data platforms, automation, and AI workflows."
            : "Uma stack prática entre interfaces frontend, serviços backend, plataformas de dados, automação e fluxos com IA."}
        </p>
      </div>

      <div className="tech-stack-marquee relative overflow-hidden py-2">
        <ul className="flex w-max gap-4 motion-safe:animate-stack-marquee motion-safe:hover:[animation-play-state:paused]">
          {repeatedStack.map((tech, index) => (
            <TechLogoItem key={`${tech.id}-${index}`} tech={tech} />
          ))}
        </ul>
      </div>
    </div>
  );
}
