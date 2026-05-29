export interface TechLogo {
  id: string;
  name: string;
  logo: string;
  category: "frontend" | "backend" | "ai" | "data" | "infra" | "database" | "automation";
}

export const techStack: TechLogo[] = [
  { id: "react", name: "React", logo: "/stack/react.svg", category: "frontend" },
  { id: "vite", name: "Vite", logo: "/stack/vite.svg", category: "frontend" },
  { id: "nextjs", name: "Next.js", logo: "/stack/nextjs.svg", category: "frontend" },
  { id: "typescript", name: "TypeScript", logo: "/stack/typescript.svg", category: "frontend" },
  { id: "tailwind", name: "Tailwind CSS", logo: "/stack/tailwind.svg", category: "frontend" },
  { id: "bootstrap", name: "Bootstrap", logo: "/stack/bootstrap.svg", category: "frontend" },

  { id: "python", name: "Python", logo: "/stack/python.svg", category: "backend" },
  { id: "fastapi", name: "FastAPI", logo: "/stack/fastapi.svg", category: "backend" },
  { id: "nodejs", name: "Node.js", logo: "/stack/nodejs.svg", category: "backend" },

  { id: "postgresql", name: "PostgreSQL", logo: "/stack/postgresql.svg", category: "database" },
  { id: "supabase", name: "Supabase", logo: "/stack/supabase.svg", category: "database" },

  { id: "databricks", name: "Databricks", logo: "/stack/databricks.svg", category: "data" },
  { id: "spark", name: "Apache Spark", logo: "/stack/spark.svg", category: "data" },

  { id: "docker", name: "Docker", logo: "/stack/docker.svg", category: "infra" },
  { id: "vercel", name: "Vercel", logo: "/stack/vercel.svg", category: "infra" },

  { id: "n8n", name: "n8n", logo: "/stack/n8n.svg", category: "automation" },
  { id: "openai", name: "OpenAI", logo: "/stack/openai.svg", category: "ai" },
];
