import { PortfolioContent } from "../types/portfolio";

export const portfolioContent: Record<"en" | "pt", PortfolioContent> = {
  en: {
    navigation: [
      { id: "about", label: "About", href: "#about" },
      { id: "skills", label: "Skills", href: "#skills" },
      { id: "projects", label: "Projects", href: "#projects" },
      { id: "contact", label: "Contact", href: "#contact" },
    ],
    profile: {
      name: "Lucas Pinotti",
      role: "Software Engineer",
      headline: "",
      // headline: "Full-Stack Software Engineer building web platforms, AI-powered workflows, backend systems and operational tools.",
      heroDescription: "I turn operational problems into web products, automations, infrastructure and systems that work in practice.",
      about: "I build complete systems for real contexts: internal platforms, ERPs, AI automations, dashboards and integrations. My focus is not stacking technology; it is understanding the problem, reducing noise and delivering a clear, usable and sustainable solution. Frontend, backend, data and AI are tools; the goal is to solve what needs to be solved.",
      email: "lucaspinottibrito@gmail.com",
      github: "https://github.com/LucasPinottiBrito",
      linkedin: "https://www.linkedin.com/in/lucaspinotti",
    },
    skills: [
      {
        id: "backend",
        title: "Backend & Full-Stack Engineering",
        icon: "server",
        skills: ["Python", "FastAPI", "Node.js", "APIs", "SQL", "NoSQL", "SaaS Architecture"],
      },
      {
        id: "frontend",
        title: "Frontend & Product Interfaces",
        icon: "code",
        skills: ["React", "Vite", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "shadcn/ui"],
      },
      {
        id: "ai",
        title: "AI Agents & Automation",
        icon: "bot",
        skills: ["RAG", "AI Agents", "LangChain", "n8n", "Vector Search"],
      },
      {
        id: "data",
        title: "Data & Operational Systems",
        icon: "database",
        skills: ["Databricks", "Apache Spark", "ETL", "Workflow Modeling"],
      },
      {
        id: "infra",
        title: "Infrastructure & Integrations",
        icon: "integration",
        skills: ["Docker", "CI/CD", "API Design", "Cloud Services"],
      },
    ],
    projects: [
      {
        id: "notsheet",
        title: "NotSheet",
        category: "Personal Finance Management Platform",
        status: "MVP",
        shortDescription: "A modern finance platform for managing expenses, cards, budgets, recurring transactions and imports with a simple, intelligent experience.",
        fullDescription: "NotSheet is a personal finance management platform designed to help users organize their financial life without relying on complex spreadsheets. The application combines accounts, transactions, credit cards, invoices, installment purchases, recurring transactions, budgets, bank statement imports, and AI assistance in a clean and structured interface inspired by tools like Notion, Organizze, and Mobills. The goal is to reduce the friction of tracking expenses, provide a clear view of the user’s financial situation, and offer a reliable foundation for better day-to-day financial decisions.",
        problem: "Many people try to manage their finances using spreadsheets or overly complex apps, but eventually abandon the process because of too many fields, poor usability, difficulty registering expenses quickly, and lack of clarity around credit cards, invoices, installments, recurring expenses, and monthly budgets.",
        solution: "A structured personal finance platform with a modern interface and simplified workflows, allowing users to register transactions, import bank statements, track budgets, manage cards and invoices, and use AI as an operational assistant to reduce the effort of keeping finances updated.",
        result: "Using this platform gives users greater control over their personal finances, potentially leading to savings, better financial organization and more informed day-to-day decisions.",
        technologies: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "FastAPI",
          "Python",
          "PostgreSQL",
          "Supabase",
          "SQLAlchemy",
          "Alembic",
          "Firebase Auth",
          "TanStack Query",
          "PWA",
          "AI"
        ],
        images: [
          {
            url: "/projects/notsheet/cover.png",
            alt: "NotSheet financial dashboard preview"
          }
        ],
        links: [
          {
            label: "NotSheet App",
            url: "https://app-notsheet.vercel.app"
          }
        ],
        // confidentialityNote: "This is a personal project currently in development and does not expose real user financial data. Screenshots and demo data should use fictional information only.",
      },
      {
        id: "lysis-system",
        title: "Lysis System",
        category: "Internal Operational Platform",
        status: "Internal Project",
        shortDescription: "Internal platform for the analysis, management and tracking of customer service notes, designed for operational teams in the electric utility sector.",
        fullDescription: "The Lysis System is an internal platform designed for the analysis, management and tracking of customer service notes. It serves as a central hub for operational teams to monitor work queues, process notes, register actions and maintain an audit trail of the work performed. The system was built for the Irregular Consumption area of EDP, an electric utility company.",
        problem: "Operational teams needed a centralized way to monitor queues, process service notes and keep traceability of actions within an internal workflow.",
        solution: "A web-based internal platform that organizes service notes, operational queues, action history and audit information in a single interface.",
        result: "The implementation of Lysis for service note analysis reduced note handling time by more than 40%, improved work organization and increased transparency and traceability of operational actions.",
        features: ["Queue monitoring", "Service notes processing", "Action history", "Audit trails", "SAP integration"],
        technologies: ["React", "TypeScript", "Python", "FastAPI", "SQL", "Databricks", "Internal APIs", "Operational Dashboards", "SAP"],
        images: [{ url: "/projects/lysis-system/cover.png", alt: "Lysis System UI placeholder" }],
        links: [],
        confidentialityNote: "Due to confidentiality, implementation details, internal data and proprietary APIs are not disclosed. The description focuses on architecture, responsibilities and business context.",
      },
      {
        id: "databricks-apps-template",
        title: "Databricks Apps Template",
        category: "Template",
        status: "Reusable Template",
        shortDescription: "Reusable template demonstrating app-to-app communication between Databricks Apps.",
        fullDescription: "This repository demonstrates a request chain between Databricks Apps: Browser -> Frontend app -> Backend app -> n8n app. The goal is to provide a reusable template for future applications with a consistent app-to-app communication model.",
        problem: "New Databricks Apps needed a reusable communication pattern between frontend, backend and automation services.",
        solution: "A reusable template that demonstrates the complete request chain and provides a foundation for future Databricks Apps.",
        result: "A standardized Browser -> Frontend App -> Backend App -> n8n App template that accelerated and standardized the creation of new internal Databricks applications.",
        technologies: ["Databricks Apps", "React", "TypeScript", "Python", "FastAPI", "n8n", "API Integration"],
        images: [{ url: "/projects/databricks-apps-template/cover.png", alt: "Databricks Apps Template architecture placeholder" }],
        links: [
          { label: "GitHub", url: "https://github.com/LucasPinottiBrito/databricks_apps_request_template" }
        ],
        // confidentialityNote: "This project is intended as a reusable technical template and does not expose sensitive business data.",
      },
      {
        id: "talktoi",
        title: "TalkTOI",
        category: "AI Assistant / RAG Platform",
        status: "Internal Project",
        shortDescription: "AI-powered assistant designed to support in-person customer service teams with complex operational questions and contextual searches.",
        fullDescription: "TalkTOI is an AI-powered assistant developed to support in-person customer service teams at EDP. It helps answer complex questions and retrieve contextual information from internal knowledge bases, customer-specific data and internal APIs. The project uses a RAG and agent-based architecture with skills and tools for structured searches.",
        problem: "Customer service teams needed to consult complex internal information and contextual data during in-person service.",
        solution: "An AI assistant that combines retrieval-augmented generation, agent skills and tool-based searches to provide contextual support for specific business areas.",
        result: "The TalkTOI AI assistant was able to reduce the average service time between areas by more than 60%, providing faster answers and consistent operational consultations.",
        technologies: ["Python", "FastAPI", "Databricks Model Serving", "RAG", "AI Agents", "Internal APIs", "Vector Search", "Tool-based Retrieval"],
        images: [{ url: "/projects/talktoi/cover.png", alt: "TalkTOI architecture placeholder" }],
        links: [],
        confidentialityNote: "Due to confidentiality, internal data sources, APIs, prompts and implementation details are not disclosed. The description focuses on the architectural approach and business purpose.",
      },
      {
        id: "sim-erp",
        title: "SIM ERP",
        category: "SaaS ERP Platform",
        status: "Product Project / In Development",
        shortDescription: "SaaS ERP platform for optical stores, covering commercial, clinical and administrative operations.",
        fullDescription: "SIM ERP is a SaaS ERP system for optical stores, built with a FastAPI backend and React frontend. It covers commercial, clinical and administrative workflows, including authentication, multi-company support, customer and product management, scheduling, prescriptions, purchases, inventory, finance, dashboards and CSV import/export.",
        problem: "Optical stores need to manage sales, customers, products, scheduling, prescriptions, inventory and finance in an integrated system.",
        solution: "A multi-company SaaS ERP with scoped data access, operational modules, dashboards and import/export capabilities.",
        result: "The implementation of SIM ERP can lead to improvements in operational consistency and efficiency for optical stores, with operational modules, dashboards, authentication, CSV import/export and a functional base for commercial, clinical and administrative operations.",
        technologies: ["FastAPI", "React", "TypeScript", "PostgreSQL", "JWT", "Multi-tenant SaaS", "Dashboards", "CSV Import/Export"],
        images: [{ url: "/projects/sim-erp/cover.png", alt: "SIM ERP platform UI placeholder" }],
        links: [
          { label: "GitHub", url: "https://github.com/LucasPinottiBrito/sim_erp" }
        ],
        // confidentialityNote: "This is a product/project case study. Business-sensitive implementation details may be omitted when necessary.",
      }
    ],
    seo: {
      title: "Lucas Pinotti | Full-Stack Software Engineer",
      description: "Full-Stack Software Engineer focused on web platforms, backend systems, AI agents, automation workflows and operational tools using React, Next.js, Vite, TypeScript, Python, FastAPI and Databricks.",
      keywords: ["Full-Stack Software Engineer", "Frontend", "Backend", "AI Agents", "Databricks", "FastAPI", "Python", "React", "Next.js", "Vite", "TypeScript", "Automation"],
      ogTitle: "Lucas Pinotti | Full-Stack Software Engineer",
      ogDescription: "Full-Stack Software Engineer building web platforms, backend systems, AI-powered workflows and operational tools.",
      language: "en",
      canonicalPath: "/en"
    },
    contact: {
      title: "Get in Touch",
      description: "Interested in discussing web platforms, backend architecture, operational systems or AI integration? Let's connect.",
      cta: "Send an Email"
    },
    footer: {
      text: "© 2026 Lucas Pinotti. All rights reserved."
    }
  },
  pt: {
    navigation: [
      { id: "about", label: "Sobre", href: "#about" },
      { id: "skills", label: "Habilidades", href: "#skills" },
      { id: "projects", label: "Projetos", href: "#projects" },
      { id: "contact", label: "Contato", href: "#contact" },
    ],
    profile: {
      name: "Lucas Pinotti",
      role: "Engenheiro de Software",
      headline: "",
      // headline: "Engenheiro de Software Full-Stack criando plataformas web, fluxos com IA, sistemas backend e ferramentas operacionais.",
      heroDescription: "Transformo problemas operacionais em produtos web, automações, infraestrutura e sistemas que funcionam na prática.",
      about: "Crio sistemas completos para contextos reais: plataformas internas, ERPs, automações com IA, dashboards e integrações. Meu foco não é empilhar tecnologia, é entender o problema, reduzir ruído e entregar uma solução clara, utilizável e sustentável. Frontend, backend, dados e IA são ferramentas; o objetivo é resolver o que precisa ser resolvido.",
      email: "lucaspinottibrito@gmail.com",
      github: "https://github.com/LucasPinottiBrito",
      linkedin: "https://www.linkedin.com/in/lucaspinotti",
    },
    skills: [
      {
        id: "backend",
        title: "Backend e Engenharia Full-Stack",
        icon: "server",
        skills: ["Python", "FastAPI", "Node.js", "APIs", "SQL", "NoSQL", "Arquitetura SaaS"],
      },
      {
        id: "frontend",
        title: "Frontend e Interfaces de Produto",
        icon: "code",
        skills: ["React", "Vite", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "shadcn/ui"],
      },
      {
        id: "ai",
        title: "Agentes de IA e Automação",
        icon: "bot",
        skills: ["RAG", "Agentes de IA", "LangChain", "n8n", "Busca Vetorial"],
      },
      {
        id: "data",
        title: "Dados e Sistemas Operacionais",
        icon: "database",
        skills: ["Databricks", "Apache Spark", "ETL", "Modelagem de Fluxos"],
      },
      {
        id: "infra",
        title: "Infraestrutura e Integrações",
        icon: "integration",
        skills: ["Docker", "CI/CD", "Design de APIs", "Serviços em Nuvem"],
      },
    ],
    projects: [
      {
        id: "notsheet",
        title: "NotSheet",
        category: "Plataforma de Gestão Financeira Pessoal",
        status: "MVP",
        shortDescription: "Plataforma financeira moderna para controlar gastos, cartões, orçamentos, recorrências e importações com uma experiência simples e inteligente.",
        fullDescription: "O NotSheet é uma plataforma de gestão financeira pessoal criada para ajudar usuários a controlarem sua vida financeira sem depender de planilhas complexas. A aplicação combina contas, transações, cartões de crédito, faturas, compras parceladas, recorrências, orçamentos, importação de extratos e assistente de IA em uma interface limpa, organizada e próxima da experiência de ferramentas como Notion, Organizze e Mobills. O objetivo é reduzir o atrito no registro de gastos, facilitar a leitura da situação financeira e oferecer uma base confiável para tomada de decisão no dia a dia.",
        problem: "Muitas pessoas tentam controlar suas finanças por planilhas ou aplicativos complexos, mas acabam abandonando o processo por excesso de campos, baixa usabilidade, dificuldade em registrar gastos rapidamente e falta de clareza sobre cartões, faturas, parcelas, recorrências e orçamento mensal.",
        solution: "Uma plataforma financeira estruturada, com interface moderna e fluxo simplificado, permitindo registrar movimentações, importar extratos, acompanhar orçamentos, visualizar faturas e usar IA como apoio operacional para reduzir o esforço de manter as finanças atualizadas.",
        result: "A utilização desta plataforma permite maior controle das suas finanças pessoais, podendo levar a economias, melhor organização financeira e decisões mais informadas no dia a dia.",
        technologies: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "FastAPI",
          "Python",
          "PostgreSQL",
          "Supabase",
          "SQLAlchemy",
          "Alembic",
          "Firebase Auth",
          "TanStack Query",
          "PWA",
          "IA"
        ],
        images: [
          {
            url: "/projects/notsheet/cover.png",
            alt: "NotSheet financial dashboard preview"
          }
        ],
        links: [
          {
            label: "NotSheet App",
            url: "https://app-notsheet.vercel.app"
          }
        ],
        // confidentialityNote: "Este projeto é uma aplicação própria em desenvolvimento e não expõe dados financeiros reais de usuários. Imagens e dados demonstrativos devem utilizar informações fictícias.",
      },
      {
        id: "lysis-system",
        title: "Lysis System",
        category: "Plataforma Operacional Interna",
        status: "Projeto Interno",
        shortDescription: "Plataforma interna para análise, gestão e acompanhamento de notas de atendimento, criada para equipes operacionais no setor de energia elétrica.",
        fullDescription: "O Lysis System é uma plataforma interna projetada para análise, gestão e acompanhamento de notas de atendimento. Ele funciona como um hub central para equipes operacionais monitorarem filas de trabalho, processarem notas, registrarem ações e manterem uma trilha de auditoria das atividades realizadas. O sistema foi construído para a área de Consumo Irregular da EDP, concessionária de energia.",
        problem: "As equipes operacionais precisavam de uma forma centralizada para acompanhar filas, processar notas de atendimento e manter rastreabilidade das ações dentro de um fluxo interno.",
        solution: "Uma plataforma web interna que organiza notas de atendimento, filas operacionais, histórico de ações e informações de auditoria em uma única interface.",
        result: "A implementação do Lysis para análise de notas de atendimento reduziu mais de 40% do tempo de atendimento das notas, melhorou a organização do trabalho e aumentou a transparência e rastreabilidade das ações operacionais.",
        features: ["Monitoramento de filas", "Processamento de notas de atendimento", "Histórico de ações", "Trilha de auditoria", "Integração com SAP"],
        technologies: ["React", "TypeScript", "Python", "FastAPI", "SQL", "Databricks", "APIs internas", "Dashboards operacionais", "SAP"],
        images: [{ url: "/projects/lysis-system/cover.png", alt: "Lysis System UI placeholder" }],
        links: [
          // { label: "GitHub", url: "https://github.com/LucasPinottiBrito" }
        ],
        confidentialityNote: "Por questões de confidencialidade, detalhes de implementação, dados internos e APIs proprietárias não são divulgados. A descrição foca em arquitetura, responsabilidades e contexto de negócio.",
      },
      {
        id: "databricks-apps-template",
        title: "Databricks Apps Template",
        category: "Template",
        status: "Template Reutilizável",
        shortDescription: "Template reutilizável demonstrando comunicação entre aplicações no Databricks Apps.",
        fullDescription: "Este repositório demonstra uma cadeia de requisições entre Databricks Apps: Browser -> Frontend app -> Backend app -> n8n app. O objetivo é fornecer um template reutilizável para futuras aplicações, com um modelo consistente de comunicação app-to-app.",
        problem: "Novos Databricks Apps precisavam de um padrão reutilizável de comunicação entre frontend, backend e automações.",
        solution: "Um template reutilizável que demonstra a cadeia completa de requisições e serve como base para novos apps no Databricks.",
        result: "Template padronizado com cadeia Browser -> Frontend App -> Backend App -> n8n App, acelerou e padronizou a criação de novas aplicações internas no Databricks.",
        technologies: ["Databricks Apps", "React", "TypeScript", "Python", "FastAPI", "n8n", "Integração de APIs"],
        images: [{ url: "/projects/databricks-apps-template/cover.png", alt: "Databricks Apps Template architecture placeholder" }],
        links: [
          { label: "GitHub", url: "https://github.com/LucasPinottiBrito/databricks_apps_request_template" }
        ],
        // confidentialityNote: "Este projeto funciona como template técnico reutilizável e não expõe dados sensíveis de negócio.",
      },
      {
        id: "talktoi",
        title: "TalkTOI",
        category: "Assistente de IA / Plataforma RAG",
        status: "Projeto Interno",
        shortDescription: "Assistente com IA criado para apoiar o atendimento presencial em dúvidas operacionais complexas e buscas contextuais.",
        fullDescription: "O TalkTOI é um assistente com inteligência artificial desenvolvido para apoiar equipes de atendimento presencial da EDP. Ele ajuda na resolução de dúvidas complexas e na busca de informações contextuais em bases internas de conhecimento, dados específicos do cliente e APIs internas. O projeto utiliza uma arquitetura baseada em RAG e agentes com skills/tools para buscas estruturadas.",
        problem: "Equipes de atendimento precisavam consultar informações internas complexas e dados contextuais durante o atendimento presencial.",
        solution: "Um assistente de IA que combina geração aumentada por recuperação, skills de agente e buscas baseadas em ferramentas para oferecer suporte contextual a áreas específicas de negócio.",
        result: "Assistente com IA TalkTOI foi capaz de reduzir o tempo médio de atendimento entre áreas em mais de 60%, fornecendo respostas mais rápidas e consultas operacionais consistentes.",
        technologies: ["Python", "FastAPI", "Databricks Model Serving", "RAG", "Agentes de IA", "APIs internas", "Busca vetorial", "Recuperação baseada em ferramentas"],
        images: [{ url: "/projects/talktoi/cover.png", alt: "TalkTOI architecture placeholder" }],
        links: [
          // { label: "GitHub", url: "https://github.com/LucasPinottiBrito" }
        ],
        confidentialityNote: "Por questões de confidencialidade, fontes internas, APIs, prompts e detalhes de implementação não são divulgados. A descrição foca na abordagem arquitetural e no objetivo de negócio.",
      },
      {
        id: "sim-erp",
        title: "SIM ERP",
        category: "Plataforma ERP SaaS",
        status: "Projeto de Produto / Em Desenvolvimento",
        shortDescription: "ERP SaaS para óticas, cobrindo operações comerciais, clínicas e administrativas.",
        fullDescription: "O SIM ERP é um sistema ERP SaaS para óticas, construído com backend em FastAPI e frontend em React. Ele cobre fluxos comerciais, clínicos e administrativos, incluindo autenticação, suporte multiempresa, gestão de clientes e produtos, agenda, receituários, compras, estoque, financeiro, dashboards e importação/exportação em CSV.",
        problem: "Óticas precisam gerenciar vendas, clientes, produtos, agenda, receituários, estoque e financeiro em um sistema integrado.",
        solution: "Um ERP SaaS multiempresa com escopo de dados, módulos operacionais, dashboards e recursos de importação/exportação.",
        result: "A implementação do SIM ERP pode levar a melhorias de consistência e eficiência operacional para óticas, com módulos operacionais, dashboards, autenticação, importação/exportação em CSV e uma base funcional para operações comerciais, clínicas e administrativas.",
        technologies: ["FastAPI", "React", "TypeScript", "PostgreSQL", "JWT", "SaaS multiempresa", "Dashboards", "Importação/exportação CSV"],
        images: [{ url: "/projects/sim-erp/cover.png", alt: "SIM ERP platform UI placeholder" }],
        links: [
          { label: "GitHub", url: "https://github.com/LucasPinottiBrito/sim_erp" }
        ],
        // confidentialityNote: "Este é um case de produto/projeto. Detalhes sensíveis de negócio podem ser omitidos quando necessário.",
      }
    ],
    seo: {
      title: "Lucas Pinotti | Engenheiro de Software Full-Stack",
      description: "Engenheiro de Software Full-Stack focado em plataformas web, sistemas backend, agentes de IA, automações e ferramentas operacionais usando React, Next.js, Vite, TypeScript, Python, FastAPI e Databricks.",
      keywords: ["Engenheiro de Software Full-Stack", "Frontend", "Backend", "Agentes de IA", "Databricks", "FastAPI", "Python", "React", "Next.js", "Vite", "TypeScript", "Automação"],
      ogTitle: "Lucas Pinotti | Engenheiro de Software Full-Stack",
      ogDescription: "Engenheiro de Software Full-Stack criando plataformas web, sistemas backend, fluxos com IA e ferramentas operacionais.",
      language: "pt",
      canonicalPath: "/pt"
    },
    contact: {
      title: "Entre em Contato",
      description: "Interessado em discutir plataformas web, arquitetura backend, sistemas operacionais ou integração de IA? Vamos conversar.",
      cta: "Enviar E-mail"
    },
    footer: {
      text: "© 2026 Lucas Pinotti. Todos os direitos reservados."
    }
  }
};
