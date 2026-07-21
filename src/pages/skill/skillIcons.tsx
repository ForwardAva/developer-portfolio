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
} from "react-icons/si";
import { FaJava, FaAws, FaCloud } from "react-icons/fa";
import { TbBrandCSharp, TbBrandVscode, TbApi, TbPrompt, TbAdjustments, TbTopologyStar3, TbDatabaseSearch } from "react-icons/tb";
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
} from "lucide-react";
import { FaCubes, FaGithub, FaLaptopCode, FaStripe } from "react-icons/fa6";
import { FcServices } from "react-icons/fc";
import { RiShieldKeyholeFill } from "react-icons/ri";
import { LuBrainCircuit, LuContainer } from "react-icons/lu";
import { AiOutlineAlignCenter } from "react-icons/ai";
import { MdArchitecture, MdAssessment, MdOutlineModelTraining, MdSupportAgent } from "react-icons/md";
import { ImEmbed } from "react-icons/im";

interface IconProps {
   size?: number;
   color?: string;
   style?: React.CSSProperties;
}

export interface SkillIcon {
   Icon: ComponentType<IconProps>;
   color: string;
}

const BLUE = "#60a5fa";
const AWS_ORANGE = "#FF9900";

/**
 * Brand glyph + official brand color per skill (Simple Icons / FA / Tabler).
 * Concept skills fall back to lucide glyphs in the site blue.
 * Colors are lightened where the official brand color would vanish on the
 * near-black canvas (C++, SQLite, Pandas).
 */
const SKILL_ICONS: Record<string, SkillIcon> = {
   // Languages
   Python: { Icon: SiPython, color: "#4B8BBE" },
   JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
   TypeScript: { Icon: SiTypescript, color: "#3178C6" },
   "C/C++": { Icon: SiCplusplus, color: "#669AD3" },
   Java: { Icon: FaJava, color: "#F89820" },
   SQL: { Icon: Database, color: "#3B82F6" },
   PHP: { Icon: SiPhp, color: "#777BB4" },
   Bash: { Icon: SiGnubash, color: "#89E051" },
   Go: { Icon: SiGo, color: "#00ADD8" },
   "C#": { Icon: TbBrandCSharp, color: "#9B4F96" },
   R: { Icon: SiR, color: "#276DC3" },

   // Frontend
   React: { Icon: SiReact, color: "#61DAFB" },
   "Next.js": { Icon: SiNextdotjs, color: "#FFFFFF", },
   Vite: { Icon: SiVite, color: "#646CFF", },
   "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4", },
   "Responsive Design": { Icon: FaLaptopCode, color: "#38BDF8", },
   "Component-Based Architecture": { Icon: FaCubes, color: "#A855F7", },
   Redux: { Icon: SiRedux, color: "#764ABC", },
   MUI: { Icon: SiMui, color: "#007FFF", },
   "HTML5": { Icon: SiHtml5, color: "#E34F26", },
   "CSS3": { Icon: SiCss, color: "#1572B6", },

   // Backend & databases
   "Node.js": { Icon: SiNodedotjs, color: "#5FA04E", },
   "Express.js": { Icon: SiExpress, color: "#FFFFFF", },
   FastAPI: { Icon: SiFastapi, color: "#009688", },
   "REST API": { Icon: TbApi, color: "#3B82F6", },
   GraphQL: { Icon: SiGraphql, color: "#E10098", },
   MongoDB: { Icon: SiMongodb, color: "#47A248", },
   PostgreSQL: { Icon: SiPostgresql, color: "#336791", },
   WebSockets: { Icon: SiSocket, color: "#4479A1", },
   Redis: { Icon: SiRedis, color: "#DC382D", },
   "Prisma ORM": { Icon: SiPrisma, color: "#2D3748", },
   Microservices: { Icon: FcServices, color: "#0EA5E9", },
   "Authentication & Authorization": { Icon: RiShieldKeyholeFill, color: "#10B981", },

   // Cloud & DevOps
   "AWS": { Icon: FaAws, color: "#FF9900" },
   Docker: { Icon: SiDocker, color: "#2496ED" },
   Kubernetes: { Icon: SiKubernetes, color: "#326CE5" },
   "GitHub Actions": { Icon: SiGithubactions, color: "#2088FF" },
   "CI/CD Pipelines": { Icon: Workflow, color: "#3B82F6" },
   "Infrastructure as Code": { Icon: FileCode2, color: "#6366F1" },
   Linux: { Icon: SiLinux, color: "#FCC624" },
   "Cloud Architecture": { Icon: FaCloud, color: "#4285F4" },
   "Container Orchestration": { Icon: LuContainer, color: "#06B6D4" },

   // AI / ML
   "Machine Learning": { Icon: Brain, color: "#8B5CF6" },
   "Deep Learning": { Icon: Network, color: "#6366F1" },
   PyTorch: { Icon: SiPytorch, color: "#EE4C2C" },
   LangChain: { Icon: SiLangchain, color: "#1C3C3C" },
   LangGraph: { Icon: SiLanggraph, color: "#00C7B7" },
   "Hugging Face Transformers": { Icon: SiHuggingface, color: "#FFD21E" },
   "Large Language Models": { Icon: LuBrainCircuit, color: "#EC4899" },
   "RAG Pipelines": { Icon: Layers, color: "#3B82F6" },
   "Prompt Engineering": { Icon: TbPrompt, color: "#14B8A6" },
   "AI Agents": { Icon: AiOutlineAlignCenter, color: "#10B981" },
   "Multi-Agent Systems": { Icon: MdSupportAgent, color: "#22C55E" },
   Embeddings: { Icon: ImEmbed, color: "#A855F7" },
   "Model Evaluation": { Icon: MdAssessment, color: "#F59E0B" },
   "Fine-Tuning": { Icon: TbAdjustments, color: "#EF4444" },

   // Tools & platforms
   "OpenAI APIs": { Icon: SiOpenai, color: "#10A37F" },
   "Anthropic APIs": { Icon: SiAnthropic, color: "#D97757" },
   Git: { Icon: SiGit, color: "#F05032" },
   GitHub: { Icon: FaGithub, color: "#FFFFFF" },
   "VS Code": { Icon: TbBrandVscode, color: "#007ACC" },
   Postman: { Icon: SiPostman, color: "#FF6C37" },
   Stripe: { Icon: FaStripe, color: "#635BFF" },
   Jira: { Icon: SiJira, color: "#0052CC" },
   Figma: { Icon: SiFigma, color: "#F24E1E" },
   "MCP Protocol": { Icon: Plug, color: "#4F46E5" },
   "Claude Code": { Icon: SiAnthropic, color: "#D97757" },
   "Cursor AI": { Icon: MousePointer2, color: "#8B5CF6" },

   // CS fundamentals
   "Data Structures & Algorithms": { Icon: Binary, color: "#2563EB" },
   "Object-Oriented Programming": { Icon: Boxes, color: "#7C3AED" },
   "Computer Networks": { Icon: Network, color: "#0EA5E9" },
   "Operating Systems": { Icon: Cpu, color: "#F97316" },
   "Software Engineering": { Icon: Wrench, color: "#22C55E" },
   "Database Management Systems": { Icon: Database, color: "#0891B2" },
   "System Design": { Icon: MdArchitecture, color: "#EC4899" },
   "Distributed Systems": { Icon: TbTopologyStar3, color: "#8B5CF6" },

   // Soft skills
   Leadership: { Icon: Crown, color: "#F59E0B" },
   "Problem Solving": { Icon: Puzzle, color: "#2563EB" },
   Communication: { Icon: MessageCircle, color: "#10B981" },
   Teamwork: { Icon: Users, color: "#8B5CF6" },
   "Critical Thinking": { Icon: Lightbulb, color: "#EAB308" },
   Adaptability: { Icon: Shuffle, color: "#EC4899" },

   // Areas of interest
   "Full-Stack Development": { Icon: Layers, color: "#2563EB" },
   "AI Engineering": { Icon: Brain, color: "#8B5CF6" },
   "LLMs & RAG": { Icon: TbDatabaseSearch, color: "#10B981" },
   "Open Source": { Icon: GitFork, color: "#F97316" },
   "Cloud & DevOps": { Icon: Cloud, color: "#0EA5E9" },
};

/** Grouped AWS service strings ("AWS (EC2, ...)") all take the AWS glyph. */
export const getSkillIcon = (name: string): SkillIcon | undefined =>
   SKILL_ICONS[name] ??
   (name.startsWith("AWS") ? { Icon: FaAws, color: AWS_ORANGE } : undefined);
