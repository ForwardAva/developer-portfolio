import type { ComponentType } from "react";
import { lazy } from "react";

// Screenshot covers (deployed projects) -- 960x600 webp captured from the live sites
// import smartScheduling from '@assets/projects/smart-scheduling.jpg'

export interface SceneCoverProps {
   tint: string;
   variant?: string;
}

type SceneComponent = ComponentType<SceneCoverProps>;

// Animated SVG scenes (undeployed projects) -- lazy so the Projects chunk
// stays lean; they only load when the section renders.
const InfraScene = lazy(() => import("./InfraScene"));
// const McpScene = lazy(() => import("./McpScene"));
// const MlScene = lazy(() => import("./MlScene"));
// const GameScene = lazy(() => import("./GameScene"));
// const DocsScene = lazy(() => import("./DocsScene"));
// const AutomationScene = lazy(() => import("./AutomationScene"));
// const AuthScene = lazy(() => import("./AuthScene"));
const WebAppScene = lazy(() => import("./WebAppScene"));

export type ProjectCover =
   | { kind: "image"; src: string }
   | { kind: "scene"; Scene: SceneComponent; variant?: string };

/**
 * Cover per project id (ids from data/projects.json).
 * Deployed -> live screenshot. Not deployed -> themed animated scene.
*/
const COVER_BY_ID: Record<number, ProjectCover> = {
   // Featured
   1: { kind: 'scene', Scene: InfraScene }, // AI Sass Platform
   2: { kind: 'scene', Scene: WebAppScene }, // LLM Platform
   3: { kind: 'scene', Scene: InfraScene }, // Agent Engine
   4: { kind: 'scene', Scene: WebAppScene }, // Codding Assistantd

   // Collaborative
   5: { kind: 'scene', Scene: InfraScene }, // Workspace Hub

   // Others
   // Community
   // 42: { kind: "scene", Scene: AutomationScene, variant: "badge" }, // Credly Badge Action
};

export const getProjectCover = (
   id: number,
   _title: string,
): ProjectCover | undefined => COVER_BY_ID[id];
