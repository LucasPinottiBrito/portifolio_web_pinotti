import { Server, Bot, Database, Code2, Cable, Cloud, Workflow, LayoutDashboard, ShieldCheck } from "lucide-react";

export const skillIcons = {
  server: Server,
  bot: Bot,
  database: Database,
  code: Code2,
  integration: Cable,
  cloud: Cloud,
  workflow: Workflow,
  dashboard: LayoutDashboard,
  security: ShieldCheck,
} as const;

export type SkillIconKey = keyof typeof skillIcons;
