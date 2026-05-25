import { PortfolioContent } from "../types/portfolio";

export const portfolioContent: Record<"en" | "pt", PortfolioContent> = {
  en: {
    language: "en",
    navigation: [
      { id: "about", label: "About", href: "#about" },
      { id: "skills", label: "Skills", href: "#skills" },
      { id: "projects", label: "Projects", href: "#projects" },
      { id: "contact", label: "Contact", href: "#contact" },
    ],
    profile: {
      name: "Lucas Pinotti",
      role: "Software Engineer",
      headline: "Software Engineer building backend systems, AI-powered workflows and operational platforms.",
      about: "As a Software Engineer specialized in backend systems and automation, I architect robust solutions that bridge the gap between complex data and operational efficiency. My experience centers on building scalable internal platforms and AI-driven assistants, with deep expertise in Databricks, Python, and RAG architectures. I am driven by the challenge of transforming business requirements into high-performance, maintainable systems that deliver measurable impact.",
      email: "lucaspinottibrito@gmail.com",
      github: "https://github.com/LucasPinottiBrito",
      linkedin: "https://www.linkedin.com/in/lucas-pinotti-de-brito-53b947204/",
    },
    skills: [
      {
        id: "backend",
        title: "Backend",
        icon: "server",
        skills: ["Python", "FastAPI", "Node.js", "SQL", "noSQL"],
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
        id: "frontend",
        title: "Frontend & Product Interfaces",
        icon: "code",
        skills: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
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
        status: "MVP in Development",
        shortDescription: "A modern finance platform for managing expenses, cards, budgets, recurring transactions, imports, and AI-assisted financial workflows.",
        fullDescription: "NotSheet is a personal finance management platform designed to help users organize their financial life without relying on complex spreadsheets. The application combines accounts, transactions, credit cards, invoices, installment purchases, recurring transactions, budgets, bank statement imports, and AI assistance in a clean and structured interface inspired by tools like Notion, Organizze, and Mobills. The goal is to reduce the friction of tracking expenses, provide a clear view of the user’s financial situation, and offer a reliable foundation for better day-to-day financial decisions.",
        problem: "Many people try to manage their finances using spreadsheets or overly complex apps, but eventually abandon the process because of too many fields, poor usability, difficulty registering expenses quickly, and lack of clarity around credit cards, invoices, installments, recurring expenses, and monthly budgets.",
        solution: "A structured personal finance platform with a modern interface and simplified workflows, allowing users to register transactions, import bank statements, track budgets, manage cards and invoices, and use AI as an operational assistant to reduce the effort of keeping finances updated.",
        myRole: "Product definition, application architecture, financial domain modeling, frontend and backend implementation, development of import flows, credit cards, invoices, recurring transactions, budgets, and UX direction.",
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
            label: "GitHub",
            url: "https://github.com/LucasPinottiBrito"
          }
        ],
        confidentialityNote: "This is a personal project currently in development and does not expose real user financial data. Screenshots and demo data should use fictional information only.",
        documentSummary: {
          oneLine: "A modern personal finance platform with expense tracking, cards, budgets, imports, and AI assistance.",
          paragraph: "NotSheet is a personal finance application built to replace manual spreadsheet-based tracking with a simpler, more visual, and more reliable experience. The system helps users organize accounts, transactions, credit cards, invoices, installment purchases, recurring expenses, and budgets, while also supporting bank statement imports and AI-assisted workflows for faster expense registration and financial understanding.",
          bulletPoints: [
            "Personal finance management with accounts, transactions, credit cards, invoices, installments, and recurring expenses.",
            "Bank statement import flow to speed up transaction registration.",
            "Modern Notion-inspired interface focused on clarity, productivity, and daily use.",
            "AI assistant designed to reduce friction when registering expenses and support financial insights.",
            "Full-stack architecture using Next.js, FastAPI, Supabase/PostgreSQL, and Firebase authentication."
          ]
        }
      },
      {
        id: "lysis-system",
        title: "Lysis System",
        category: "Internal Operational Platform",
        status: "Internal / Professional Project",
        shortDescription: "Internal platform for the analysis, management and tracking of customer service notes, designed for operational teams in the electric utility sector.",
        fullDescription: "The Lysis System is an internal platform designed for the analysis, management and tracking of customer service notes. It serves as a central hub for operational teams to monitor work queues, process notes, register actions and maintain an audit trail of the work performed. The system was built for the Irregular Consumption area of EDP, an electric utility company.",
        problem: "Operational teams needed a centralized way to monitor queues, process service notes and keep traceability of actions across an internal workflow.",
        solution: "A web-based internal platform that organizes service notes, operational queues, action history and audit information in a single interface.",
        myRole: "Software engineering, backend/frontend implementation, data integration and operational workflow modeling.",
        features: ["Queue monitoring", "Service notes processing", "Action history", "Audit trails"],
        technologies: ["React", "TypeScript", "Python", "FastAPI", "SQL", "Databricks", "Internal APIs", "Operational Dashboards"],
        images: [{ url: "/projects/lysis-system/cover.png", alt: "Lysis System UI placeholder" }],
        links: [
          { label: "GitHub", url: "https://github.com/LucasPinottiBrito" }
        ],
        confidentialityNote: "Due to confidentiality, implementation details, internal data and proprietary APIs are not disclosed. The description focuses on architecture, responsibilities and business context.",
        documentSummary: {
          oneLine: "An internal operational platform for managing and tracking customer service notes at an electric utility company.",
          paragraph: "The Lysis System is a centralized hub for operational teams at EDP to monitor queues, process service notes, and maintain audit trails. Built with React, Python, FastAPI, and Databricks, it streamlines the workflow for the Irregular Consumption area while maintaining strict data governance.",
          bulletPoints: [
            "Centralized operational workflow management.",
            "Integrated action history and audit tracking.",
            "Built with React, FastAPI, Databricks, and Python."
          ]
        }
      },
      {
        id: "databricks-apps-template",
        title: "Databricks Apps Template",
        category: "Databricks Architecture Template",
        status: "Reusable Template",
        shortDescription: "Reusable template demonstrating app-to-app communication between Databricks Apps.",
        fullDescription: "This repository demonstrates a request chain between Databricks Apps: Browser -> Frontend app -> Backend app -> n8n app. The goal is to provide a reusable template for future applications with a consistent app-to-app communication model.",
        problem: "Future Databricks Apps needed a standardized communication pattern between frontend, backend and automation services.",
        solution: "A reusable template that demonstrates the complete request chain and provides a foundation for future Databricks Apps.",
        myRole: "Architecture definition, implementation example and technical standardization.",
        technologies: ["Databricks Apps", "React", "TypeScript", "Python", "FastAPI", "n8n", "API Integration"],
        images: [{ url: "/projects/databricks-apps-template/cover.png", alt: "Databricks Apps Template architecture placeholder" }],
        links: [
          { label: "GitHub", url: "https://github.com/LucasPinottiBrito" }
        ],
        confidentialityNote: "This project is intended as a reusable technical template and does not expose sensitive business data.",
        documentSummary: {
          oneLine: "A reusable template architecture for app-to-app communication within Databricks Apps.",
          paragraph: "This project establishes a standardized request chain (Browser -> Frontend -> Backend -> n8n) for Databricks Apps. It provides a solid foundation for future application development, ensuring consistent architectural patterns across new internal tools.",
          bulletPoints: [
            "Standardized Databricks Apps communication.",
            "Full request chain demonstration including n8n automation.",
            "Implemented using React, FastAPI, and Python."
          ]
        }
      },
      {
        id: "talktoi",
        title: "TalkTOI",
        category: "AI Assistant / RAG Platform",
        status: "Internal / Professional Project",
        shortDescription: "AI-powered assistant designed to support in-person customer service teams with complex operational questions and contextual searches.",
        fullDescription: "TalkTOI is an AI-powered assistant developed to support in-person customer service teams at EDP. It helps answer complex questions and retrieve contextual information from internal knowledge bases, customer-specific data and internal APIs. The project uses a RAG and agent-based architecture with skills and tools for structured searches.",
        problem: "Customer service teams often need to consult complex internal information, specific business rules and customer-related operational data during in-person service.",
        solution: "An AI assistant that combines retrieval-augmented generation, agent skills and tool-based searches to provide contextual support for specific business areas.",
        myRole: "Architecture design, agent workflow definition, backend integration, RAG/tooling strategy and implementation support.",
        technologies: ["Python", "FastAPI", "Databricks Model Serving", "RAG", "AI Agents", "Internal APIs", "Vector Search", "Tool-based Retrieval"],
        images: [{ url: "/projects/talktoi/cover.png", alt: "TalkTOI architecture placeholder" }],
        links: [
          { label: "GitHub", url: "https://github.com/LucasPinottiBrito" }
        ],
        confidentialityNote: "Due to confidentiality, internal data sources, APIs, prompts and implementation details are not disclosed. The description focuses on the architectural approach and business purpose.",
        documentSummary: {
          oneLine: "An AI-powered RAG assistant for in-person customer service support.",
          paragraph: "TalkTOI empowers customer service teams by answering complex operational questions using a Retrieval-Augmented Generation (RAG) and agent-based architecture. It integrates with internal APIs and vector search to provide contextual, highly accurate answers based on company knowledge bases.",
          bulletPoints: [
            "RAG and agent-based architecture for customer service.",
            "Tool-based retrieval integrating with internal APIs.",
            "Built using Databricks Model Serving, FastAPI, and Python."
          ]
        }
      },
      {
        id: "sim-erp",
        title: "SIM ERP",
        category: "SaaS ERP Platform",
        status: "Product Project / In Development",
        shortDescription: "SaaS ERP platform for optical stores, covering commercial, clinical and administrative operations.",
        fullDescription: "SIM ERP is a SaaS ERP system for optical stores, built with a FastAPI backend and React frontend. It covers commercial, clinical and administrative workflows, including authentication, multi-company support, customer and product management, scheduling, prescriptions, purchases, inventory, finance, dashboards and CSV import/export.",
        problem: "Optical stores need an integrated system to manage sales, customers, products, prescriptions, scheduling, inventory and financial operations.",
        solution: "A multi-company SaaS ERP with scoped data access, operational modules, dashboards and import/export capabilities.",
        myRole: "Full-stack development, backend architecture, frontend implementation, authentication, data modeling and SaaS workflow design.",
        technologies: ["FastAPI", "React", "TypeScript", "PostgreSQL", "JWT", "Multi-tenant SaaS", "Dashboards", "CSV Import/Export"],
        images: [{ url: "/projects/sim-erp/cover.png", alt: "SIM ERP platform UI placeholder" }],
        links: [
          { label: "GitHub", url: "https://github.com/LucasPinottiBrito" }
        ],
        confidentialityNote: "This is a product/project case study. Business-sensitive implementation details may be omitted when necessary.",
        documentSummary: {
          oneLine: "A multi-company SaaS ERP system specifically built for optical stores.",
          paragraph: "SIM ERP provides an end-to-end operational platform for optical stores, handling everything from clinical prescriptions and scheduling to inventory and finance. Designed with a multi-tenant architecture, it leverages a FastAPI backend and React frontend to deliver robust data scoping and business workflows.",
          bulletPoints: [
            "Comprehensive SaaS ERP covering commercial, clinical, and administrative flows.",
            "Multi-tenant data scoping with JWT authentication.",
            "Developed using FastAPI, React, PostgreSQL, and TypeScript."
          ]
        }
      }
    ],
    seo: {
      title: "Lucas Pinotti | Software Engineer",
      description: "Software Engineer focused on backend systems, AI agents, automation workflows and operational platforms using Python, FastAPI, React, Databricks and modern web technologies.",
      keywords: ["Software Engineer", "Backend", "AI Agents", "Databricks", "FastAPI", "Python", "React", "TypeScript", "Automation"],
      ogTitle: "Lucas Pinotti | Software Engineer",
      ogDescription: "Software Engineer focused on backend systems, AI agents, and operational platforms.",
      language: "en",
      canonicalPath: "/en"
    },
    contact: {
      title: "Get in Touch",
      description: "Interested in discussing operational platforms, backend architecture, or AI integration? Let's connect.",
      cta: "Send an Email"
    },
    footer: {
      text: "© 2024 Lucas Pinotti. All rights reserved."
    }
  },
  pt: {
    language: "pt",
    navigation: [
      { id: "about", label: "Sobre", href: "#about" },
      { id: "skills", label: "Habilidades", href: "#skills" },
      { id: "projects", label: "Projetos", href: "#projects" },
      { id: "contact", label: "Contato", href: "#contact" },
    ],
    profile: {
      name: "Lucas Pinotti",
      role: "Engenheiro de Software",
      headline: "Engenheiro de Software criando sistemas backend, fluxos com IA e plataformas operacionais.",
      about: "Como Engenheiro de Software especializado em sistemas backend e automação, projeto soluções robustas que unem dados complexos e eficiência operacional. Minha experiência foca na construção de plataformas internas escaláveis e assistentes baseados em IA, com profundo conhecimento em Databricks, Python e arquiteturas RAG. Sou movido pelo desafio de transformar requisitos de negócio em sistemas de alta performance e fácil manutenção que entregam impacto mensurável.",
      email: "lucaspinottibrito@gmail.com",
      github: "https://github.com/LucasPinottiBrito",
      linkedin: "https://www.linkedin.com/in/lucas-pinotti-de-brito-53b947204/",
    },
    skills: [
      {
        id: "backend",
        title: "Backend",
        icon: "server",
        skills: ["Python", "FastAPI", "Node.js", "SQL", "NoSQL"],
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
        id: "frontend",
        title: "Frontend e Interfaces de Produto",
        icon: "code",
        skills: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
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
        status: "MVP em Desenvolvimento",
        shortDescription: "Plataforma financeira moderna para controlar gastos, cartões, orçamentos, recorrências e importações com uma experiência simples e inteligente.",
        fullDescription: "O NotSheet é uma plataforma de gestão financeira pessoal criada para ajudar usuários a controlarem sua vida financeira sem depender de planilhas complexas. A aplicação combina contas, transações, cartões de crédito, faturas, compras parceladas, recorrências, orçamentos, importação de extratos e assistente de IA em uma interface limpa, organizada e próxima da experiência de ferramentas como Notion, Organizze e Mobills. O objetivo é reduzir o atrito no registro de gastos, facilitar a leitura da situação financeira e oferecer uma base confiável para tomada de decisão no dia a dia.",
        problem: "Muitas pessoas tentam controlar suas finanças por planilhas ou aplicativos complexos, mas acabam abandonando o processo por excesso de campos, baixa usabilidade, dificuldade em registrar gastos rapidamente e falta de clareza sobre cartões, faturas, parcelas, recorrências e orçamento mensal.",
        solution: "Uma plataforma financeira estruturada, com interface moderna e fluxo simplificado, permitindo registrar movimentações, importar extratos, acompanhar orçamentos, visualizar faturas e usar IA como apoio operacional para reduzir o esforço de manter as finanças atualizadas.",
        myRole: "Definição do produto, arquitetura da aplicação, modelagem financeira, implementação frontend e backend, criação dos fluxos de importação, cartões, faturas, recorrências, orçamentos e direcionamento da experiência de usuário.",
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
            label: "GitHub",
            url: "https://github.com/LucasPinottiBrito"
          }
        ],
        confidentialityNote: "Este projeto é uma aplicação própria em desenvolvimento e não expõe dados financeiros reais de usuários. Imagens e dados demonstrativos devem utilizar informações fictícias.",
        documentSummary: {
          oneLine: "Plataforma moderna de gestão financeira pessoal com controle de gastos, cartões, orçamentos, importações e IA.",
          paragraph: "O NotSheet é uma aplicação financeira pessoal criada para substituir o controle manual por planilhas, oferecendo uma experiência mais simples, visual e confiável. O sistema permite organizar contas, transações, cartões, faturas, compras parceladas, recorrências e orçamentos, além de importar extratos bancários e utilizar IA para auxiliar no registro e entendimento dos gastos.",
          bulletPoints: [
            "Controle financeiro pessoal com contas, transações, cartões, faturas, parcelas e recorrências.",
            "Importação de extratos bancários para acelerar o cadastro de movimentações.",
            "Interface moderna inspirada em Notion, com foco em clareza, produtividade e uso diário.",
            "Assistente de IA pensado para reduzir atrito no registro de gastos e apoiar análises financeiras.",
            "Arquitetura full-stack com Next.js, FastAPI, Supabase/PostgreSQL e autenticação Firebase."
          ]
        }
      },
      {
        id: "lysis-system",
        title: "Lysis System",
        category: "Plataforma Operacional Interna",
        status: "Projeto Interno / Profissional",
        shortDescription: "Plataforma interna para análise, gestão e acompanhamento de notas de atendimento, criada para equipes operacionais no setor de energia elétrica.",
        fullDescription: "O Lysis System é uma plataforma interna projetada para análise, gestão e acompanhamento de notas de atendimento. Ele funciona como um hub central para equipes operacionais monitorarem filas de trabalho, processarem notas, registrarem ações e manterem uma trilha de auditoria das atividades realizadas. O sistema foi construído para a área de Consumo Irregular da EDP, concessionária de energia.",
        problem: "As equipes operacionais precisavam de uma forma centralizada para acompanhar filas, processar notas de atendimento e manter rastreabilidade das ações dentro de um fluxo interno.",
        solution: "Uma plataforma web interna que organiza notas de atendimento, filas operacionais, histórico de ações e informações de auditoria em uma única interface.",
        myRole: "Engenharia de software, implementação backend/frontend, integração de dados e modelagem do fluxo operacional.",
        features: ["Monitoramento de filas", "Processamento de notas de atendimento", "Histórico de ações", "Trilha de auditoria"],
        technologies: ["React", "TypeScript", "Python", "FastAPI", "SQL", "Databricks", "APIs internas", "Dashboards operacionais"],
        images: [{ url: "/projects/lysis-system/cover.png", alt: "Lysis System UI placeholder" }],
        links: [
          { label: "GitHub", url: "https://github.com/LucasPinottiBrito" }
        ],
        confidentialityNote: "Por questões de confidencialidade, detalhes de implementação, dados internos e APIs proprietárias não são divulgados. A descrição foca em arquitetura, responsabilidades e contexto de negócio.",
        documentSummary: {
          oneLine: "Uma plataforma operacional interna para gestão e acompanhamento de notas de atendimento em concessionária de energia.",
          paragraph: "O Lysis System é um hub centralizado para as equipes operacionais da EDP acompanharem filas, processarem notas e manterem auditoria. Construído com React, Python, FastAPI e Databricks, ele otimiza o fluxo da área de Consumo Irregular mantendo rigorosa governança de dados.",
          bulletPoints: [
            "Gestão centralizada de fluxo operacional.",
            "Histórico de ações e rastreabilidade integrados.",
            "Desenvolvido com React, FastAPI, Databricks e Python."
          ]
        }
      },
      {
        id: "databricks-apps-template",
        title: "Databricks Apps Template",
        category: "Template de Arquitetura Databricks",
        status: "Template Reutilizável",
        shortDescription: "Template reutilizável demonstrando comunicação entre aplicações no Databricks Apps.",
        fullDescription: "Este repositório demonstra uma cadeia de requisições entre Databricks Apps: Browser -> Frontend app -> Backend app -> n8n app. O objetivo é fornecer um template reutilizável para futuras aplicações, com um modelo consistente de comunicação app-to-app.",
        problem: "Futuras aplicações no Databricks Apps precisavam de um padrão consistente de comunicação entre frontend, backend e serviços de automação.",
        solution: "Um template reutilizável que demonstra a cadeia completa de requisições e serve como base para novos apps no Databricks.",
        myRole: "Definição de arquitetura, implementação do exemplo e padronização técnica.",
        technologies: ["Databricks Apps", "React", "TypeScript", "Python", "FastAPI", "n8n", "Integração de APIs"],
        images: [{ url: "/projects/databricks-apps-template/cover.png", alt: "Databricks Apps Template architecture placeholder" }],
        links: [
          { label: "GitHub", url: "https://github.com/LucasPinottiBrito" }
        ],
        confidentialityNote: "Este projeto funciona como template técnico reutilizável e não expõe dados sensíveis de negócio.",
        documentSummary: {
          oneLine: "Template reutilizável de arquitetura para comunicação entre aplicações dentro do Databricks Apps.",
          paragraph: "Este projeto estabelece uma cadeia de requisição padronizada (Browser -> Frontend -> Backend -> n8n) para Databricks Apps. Ele fornece uma fundação sólida para desenvolvimento futuro, garantindo padrões consistentes.",
          bulletPoints: [
            "Comunicação padronizada para Databricks Apps.",
            "Demonstração de cadeia completa de requisições com automação n8n.",
            "Implementado utilizando React, FastAPI e Python."
          ]
        }
      },
      {
        id: "talktoi",
        title: "TalkTOI",
        category: "Assistente de IA / Plataforma RAG",
        status: "Projeto Interno / Profissional",
        shortDescription: "Assistente com IA criado para apoiar o atendimento presencial em dúvidas operacionais complexas e buscas contextuais.",
        fullDescription: "O TalkTOI é um assistente com inteligência artificial desenvolvido para apoiar equipes de atendimento presencial da EDP. Ele ajuda na resolução de dúvidas complexas e na busca de informações contextuais em bases internas de conhecimento, dados específicos do cliente e APIs internas. O projeto utiliza uma arquitetura baseada em RAG e agentes com skills/tools para buscas estruturadas.",
        problem: "Equipes de atendimento presencial frequentemente precisam consultar informações internas complexas, regras específicas de negócio e dados operacionais relacionados ao cliente durante o atendimento.",
        solution: "Um assistente de IA que combina geração aumentada por recuperação, skills de agente e buscas baseadas em ferramentas para oferecer suporte contextual a áreas específicas de negócio.",
        myRole: "Desenho de arquitetura, definição do fluxo do agente, integração backend, estratégia de RAG/tools e apoio na implementação.",
        technologies: ["Python", "FastAPI", "Databricks Model Serving", "RAG", "Agentes de IA", "APIs internas", "Busca vetorial", "Recuperação baseada em ferramentas"],
        images: [{ url: "/projects/talktoi/cover.png", alt: "TalkTOI architecture placeholder" }],
        links: [
          { label: "GitHub", url: "https://github.com/LucasPinottiBrito" }
        ],
        confidentialityNote: "Por questões de confidencialidade, fontes internas, APIs, prompts e detalhes de implementação não são divulgados. A descrição foca na abordagem arquitetural e no objetivo de negócio.",
        documentSummary: {
          oneLine: "Um assistente RAG com Inteligência Artificial para suporte ao atendimento presencial ao cliente.",
          paragraph: "O TalkTOI empodera as equipes de atendimento ao responder questões operacionais complexas utilizando RAG (Retrieval-Augmented Generation) e uma arquitetura de agentes. Integra-se com APIs internas e busca vetorial para fornecer respostas precisas com base no conhecimento da empresa.",
          bulletPoints: [
            "Arquitetura RAG baseada em agentes para serviço de atendimento.",
            "Recuperação baseada em ferramentas integrada a APIs internas.",
            "Criado com Databricks Model Serving, FastAPI e Python."
          ]
        }
      },
      {
        id: "sim-erp",
        title: "SIM ERP",
        category: "Plataforma ERP SaaS",
        status: "Projeto de Produto / Em Desenvolvimento",
        shortDescription: "ERP SaaS para óticas, cobrindo operações comerciais, clínicas e administrativas.",
        fullDescription: "O SIM ERP é um sistema ERP SaaS para óticas, construído com backend em FastAPI e frontend em React. Ele cobre fluxos comerciais, clínicos e administrativos, incluindo autenticação, suporte multiempresa, gestão de clientes e produtos, agenda, receituários, compras, estoque, financeiro, dashboards e importação/exportação em CSV.",
        problem: "Óticas precisam de um sistema integrado para gerenciar vendas, clientes, produtos, receituários, agenda, estoque e operações financeiras.",
        solution: "Um ERP SaaS multiempresa com escopo de dados, módulos operacionais, dashboards e recursos de importação/exportação.",
        myRole: "Desenvolvimento full-stack, arquitetura backend, implementação frontend, autenticação, modelagem de dados e desenho dos fluxos SaaS.",
        technologies: ["FastAPI", "React", "TypeScript", "PostgreSQL", "JWT", "SaaS multiempresa", "Dashboards", "Importação/exportação CSV"],
        images: [{ url: "/projects/sim-erp/cover.png", alt: "SIM ERP platform UI placeholder" }],
        links: [
          { label: "GitHub", url: "https://github.com/LucasPinottiBrito" }
        ],
        confidentialityNote: "Este é um case de produto/projeto. Detalhes sensíveis de negócio podem ser omitidos quando necessário.",
        documentSummary: {
          oneLine: "Um ERP SaaS multiempresa desenvolvido especificamente para óticas.",
          paragraph: "O SIM ERP fornece uma plataforma operacional de ponta a ponta para óticas, lidando desde prescrições clínicas a finanças. Desenhado em uma arquitetura multi-tenant, ele utiliza backend em FastAPI e frontend em React para entregar fluxos robustos e escopo de dados seguro.",
          bulletPoints: [
            "ERP SaaS completo cobrindo fluxos comerciais, clínicos e administrativos.",
            "Escopo de dados multi-tenant com autenticação via JWT.",
            "Desenvolvido com FastAPI, React, PostgreSQL e TypeScript."
          ]
        }
      }
    ],
    seo: {
      title: "Lucas Pinotti | Engenheiro de Software",
      description: "Engenheiro de Software focado em sistemas backend, agentes de IA, automação e plataformas operacionais usando Python, FastAPI, React e Databricks.",
      keywords: ["Engenheiro de Software", "Backend", "Agentes de IA", "Databricks", "FastAPI", "Python", "React", "TypeScript", "Automação"],
      ogTitle: "Lucas Pinotti | Engenheiro de Software",
      ogDescription: "Engenheiro de Software focado em sistemas backend, agentes de IA e plataformas operacionais.",
      language: "pt",
      canonicalPath: "/pt"
    },
    contact: {
      title: "Entre em Contato",
      description: "Interessado em discutir plataformas operacionais, arquitetura backend ou integração de IA? Vamos conversar.",
      cta: "Enviar E-mail"
    },
    footer: {
      text: "© 2024 Lucas Pinotti. Todos os direitos reservados."
    }
  }
};