import { User, FolderKanban, Briefcase, Mail } from "@lucide/astro";

export const MENU= [
  {
    name: "Sobre mí",
    href: "#sobre-mi",
    icon: User,
  },
  {
    name: "Proyectos",
    href: "#proyects",
    icon: FolderKanban,
  },
  {
    name: "Experiencia",
    href: "#experience",
    icon: Briefcase,
  },
  {
    name: "Contáctame",
    href: "#contact",
    icon: Mail,
  },
];

export const EXPERIENCE = [
  {
    role: "Analista Funcional",
    company: "Cladd I.T.A. S.A.",
    date: "may. 2024 - nov. 2024",
    description: [
      "Soporte funcional a usuarios mediante el ERP de la empresa.",
      "Gestión de tickets y resolución en plazos establecidos.",
      "Colaboración con Desarrollo para detectar bugs y analizar logs.",
      "Migración del sistema de producción.",
      "Documentación de requerimientos y soluciones.",
    ],
  },
  {
    role: "Analista Funcional",
    company: "Accenture Argentina S.A.",
    date: "jul. 2022 - abr. 2024",
    description: [
      "Soporte funcional (testing, mejoras, análisis de datos).",
      "Ejecución y seguimiento de pruebas de usuario.",
      "Detección y análisis de bugs, performance y regresiones.",
      "Consultas SQL (Oracle, MySQL, SQL Server).",
      "Revisión de ETLs (DataStage), jobs (Control-M) y BI.",
      "Gestión de tickets y documentación de soluciones en SAP Solman.",
    ],
  },
  {
    role: "Analista Funcional en Gestión de Apps",
    company: "Sofrecom Argentina",
    date: "sep. 2021 - jun. 2022",
    description: [
      "Monitoreo de procesos ETL (PowerCenter).",
      "Manejo de reportería (MicroStrategy).",
      "Gestión de datos en Teradata, Oracle y Hive (NiFi).",
      "Gestión de incidencias (HP Service Manager).",
      "Soporte en guardias técnicas.",
    ],
  },
  {
    role: "Analista Funcional",
    company: "Power Solution",
    date: "sep. 2018 - ene. 2021",
    description: [
      "Mantenimiento de apps web y optimización de funcionalidades.",
      "Documentación funcional de requerimientos y casos de uso.",
      "Resolución de incidentes con HP Service Manager.",
      "Coordinación de pruebas funcionales en QA y producción.",
      "Soporte a usuarios finales y colaboración con desarrollo.",
    ],
  },
];

export const SKILLS = [
  "TypeScript",
  "JavaScript",
  "React",
  "Node",
  "Express",
  "Java",
  "Php",
  "Tailwind",
  "Styled Components",
  "Material UI",
  "Bootstrap",
  "Sequelize",
  "Supabase",
  "SQL Server",
  "MongoDB",
  "Oracle",
  "MySQL",
  "PostgreSQL",
  "Figma",
  "Linux",
  "PostMan",
  "Git",
  "Azure DevOps",
  "Metodologías ágiles",
  "Cypress",
];
