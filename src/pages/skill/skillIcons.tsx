import type { ComponentType } from "react";
import {
   SiPython,
   SiJavascript,
   SiTypescript,
   SiCplusplus,
   SiGo,
   SiR,
   SiHtml5,
   SiGnubash,
   SiPostgresql,
   SiMongodb,
   SiRedis,
   SiReact,
   SiNextdotjs,
   SiVite,
   SiTailwindcss,
   SiRedux,
   SiMui,
   SiNodedotjs,
   SiExpress,
   SiFastapi,
   SiDocker,
   SiGithubactions,
   SiPytorch,
   SiPostman,
   SiFigma,
   SiGit,
   SiAnthropic,
   SiGraphql,
   SiLinux,
   SiPhp,
   SiCss,
   SiSocket,
   SiPrisma,
   SiKubernetes,
   SiLangchain,
   SiLanggraph,
   SiHuggingface,
   SiJira,
   SiOpenai,
   SiAngular,
   SiLightning,
   SiBootstrap,
   SiSpringboot,
   SiMysql,
   SiSalesforce,
   SiAutoprefixer,
   SiSqlite,
   SiMsibusiness,
   SiGlide,
   SiEnterprisedb,
   SiCloudbees,
   SiCloud66,
   SiCloudera,
   SiIcloud,
} from "react-icons/si";
import { FaJava, FaAws, FaCloud, FaServicestack } from "react-icons/fa";
import { TbBrandCSharp, TbBrandVscode, TbApi, TbPrompt, TbAdjustments, TbTopologyStar3, TbDatabaseSearch, TbAutomation, TbScript } from "react-icons/tb";
import {
   Database,
   Workflow,
   FileCode2,
   Brain,
   Network,
   Layers,
   MousePointer2,
   Plug,
   Binary,
   Boxes,
   Cpu,
   Wrench,
   Crown,
   Puzzle,
   MessageCircle,
   Users,
   Lightbulb,
   Shuffle,
   Cloud,
   GitFork,
   DatabaseIcon,
   User2Icon,
} from "lucide-react";
import { FaCubes, FaGithub, FaLaptopCode, FaSalesforce, FaStripe } from "react-icons/fa6";
import { FcEngineering, FcServices } from "react-icons/fc";
import { RiShieldKeyholeFill } from "react-icons/ri";
import { LuBrainCircuit, LuContainer } from "react-icons/lu";
import { AiOutlineAlignCenter } from "react-icons/ai";
import { MdArchitecture, MdAssessment, MdIntegrationInstructions, MdSupportAgent } from "react-icons/md";
import { ImEmbed } from "react-icons/im";
import { GrIntegration, GrOracle, GrServices } from "react-icons/gr";
import { VscAzure } from "react-icons/vsc";
import { IoCloudDone, IoThunderstorm } from "react-icons/io5";
import { RxBoxModel } from "react-icons/rx";
import { LiaSalesforce } from "react-icons/lia";
import { GoWorkflow } from "react-icons/go";

interface IconProps {
   size?: number;
   color?: string;
   style?: React.CSSProperties;
}

export interface SkillIcon {
   Icon: ComponentType<IconProps>;
   color: string;
}

// const BLUE = "#60a5fa";
const AWS_ORANGE = "#FF9900";

/**
 * Brand glyph + official brand color per skill (Simple Icons / FA / Tabler).
 * Concept skills fall back to lucide glyphs in the site blue.
 * Colors are lightened where the official brand color would vanish on the
 * near-black canvas (C++, SQLite, Pandas).
 */
const SKILL_ICONS: Record<string, SkillIcon> = {
   // Languages
   // Languages
   Python: { Icon: SiPython, color: "#3776AB" },
   JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
   TypeScript: { Icon: SiTypescript, color: "#3178C6" },
   Java: { Icon: FaJava, color: "#007396" },
   SQL: { Icon: Database, color: "#336791" },
   "HTML5": { Icon: SiHtml5, color: "#E34F26" },
   "CSS3": { Icon: SiCss, color: "#1572B6" },

   // Frontend
   React: { Icon: SiReact, color: "#61DAFB" },
   "Next.js": { Icon: SiNextdotjs, color: "#000000" },
   Angular: { Icon: SiAngular, color: "#DD0031" },
   "Lightning Web Components": { Icon: SiLightning, color: "#00A1E0" },
   "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
   Bootstrap: { Icon: SiBootstrap, color: "#7952B3" },
   "Responsive Web Design": { Icon: FaLaptopCode, color: "#38BDF8" },

   // Backend
   "Node.js": { Icon: SiNodedotjs, color: "#339933" },
   "Express.js": { Icon: SiExpress, color: "#000000" },
   "Spring Boot": { Icon: SiSpringboot, color: "#6DB33F" },
   "REST APIs": { Icon: TbApi, color: "#2563EB" },
   "Microservices Architecture": { Icon: FaServicestack, color: "#6366F1" },
   "API Integration": { Icon: GrIntegration, color: "#16A34A" },
   "Authentication & Authorization": { Icon: RiShieldKeyholeFill, color: "#059669" },

   // Cloud & DevOps
   "AWS": { Icon: FaAws, color: "#FF9900" },
   Docker: { Icon: SiDocker, color: "#2496ED" },
   "Microsoft Azure": { Icon: VscAzure, color: "#0078D4" },
   "CI/CD Pipelines": { Icon: Workflow, color: "#2563EB" },
   "Cloud Application Deployment": { Icon: IoCloudDone, color: "#6366F1" },
   Linux: { Icon: SiLinux, color: "#FCC624" },

   // Database
   PostgreSQL: { Icon: SiPostgresql, color: "#336791" },
   MySQL: { Icon: SiMysql, color: "#4479A1" },
   "Oracle Database": { Icon: GrOracle, color: "#F80000" },
   MongoDB: { Icon: SiMongodb, color: "#47A248" },
   "Database Design": { Icon: DatabaseIcon, color: "#0891B2" },
   "Data Modeling": { Icon: RxBoxModel, color: "#7C3AED" },

   // Enterprise Platforms
   "Salesforce Platform": { Icon: SiSalesforce, color: "#00A1E0" },
   "Apex Programming": { Icon: SiAutoprefixer, color: "#1798C1" },
   "Lightning Web Components (LWC)": { Icon: SiLightning, color: "#0B5CAB" },
   "SOQL / SOSL": { Icon: SiSqlite, color: "#2E7D32" },
   "Salesforce Flow": { Icon: FaSalesforce, color: "#00A1E0" },
   "Automation": { Icon: TbAutomation, color: "#F59E0B" },
   "Salesforce APIs & Integrations": { Icon: LiaSalesforce, color: "#00A1E0" },

   "ServiceNow Platform": { Icon: GrServices, color: "#81B5A1" },
   "ServiceNow ITSM": { Icon: IoThunderstorm, color: "#1F8ACB" },
   "ServiceNow Scripting": { Icon: TbScript, color: "#333333" },
   "Business Rules": { Icon: SiMsibusiness, color: "#6366F1" },
   "Client Scripts": { Icon: User2Icon, color: "#8B5CF6" },
   "Glide API": { Icon: SiGlide, color: "#00A86B" },
   "Workflow Automation": { Icon: GoWorkflow, color: "#F97316" },

   // CS Fundamentals
   "Data Structures & Algorithms": { Icon: Binary, color: "#2563EB" },
   "Object-Oriented Programming": { Icon: Boxes, color: "#7C3AED" },
   "Computer Networks": { Icon: Network, color: "#0EA5E9" },
   "Operating Systems": { Icon: Cpu, color: "#F97316" },
   "Software Engineering": { Icon: Wrench, color: "#22C55E" },
   "Database Management Systems": { Icon: Database, color: "#0891B2" },
   "System Design": { Icon: MdArchitecture, color: "#EC4899" },
   "Distributed Systems": { Icon: TbTopologyStar3, color: "#8B5CF6" },

   // Soft Skills
   Leadership: { Icon: Crown, color: "#F59E0B" },
   "Problem Solving": { Icon: Puzzle, color: "#2563EB" },
   Communication: { Icon: MessageCircle, color: "#10B981" },
   Teamwork: { Icon: Users, color: "#8B5CF6" },
   "Critical Thinking": { Icon: Lightbulb, color: "#EAB308" },
   "Adaptability": { Icon: Shuffle, color: "#EC4899" },

   // Areas of Interest
   "Full-Stack Development": { Icon: Layers, color: "#2563EB" },
   "AI Engineering": { Icon: Brain, color: "#8B5CF6" },
   "LLMs & RAG": { Icon: TbDatabaseSearch, color: "#10B981" },
   "Open Source": { Icon: GitFork, color: "#F97316" },
   "Cloud & DevOps": { Icon: Cloud, color: "#0EA5E9" },

   "Enterprise Application Development": { Icon: SiEnterprisedb, color: "#2563EB" },
   "Enterprise Integration & Automation": { Icon: MdIntegrationInstructions, color: "#16A34A" },
   "Cloud & Digital Transformation": { Icon: SiIcloud, color: "#0EA5E9" },
   "Full-Stack Software Engineering": { Icon: FcEngineering, color: "#7C3AED" },
};

/** Grouped AWS service strings ("AWS (EC2, ...)") all take the AWS glyph. */
export const getSkillIcon = (name: string): SkillIcon | undefined =>
   SKILL_ICONS[name] ??
   (name.startsWith("AWS") ? { Icon: FaAws, color: AWS_ORANGE } : undefined);
