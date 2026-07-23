import StackAnim from "./animations/StackAnim";
// import PipelineAnim from "./animations/PipelineAnim";
import NeuralNetAnim from "./animations/NeuralNetAnim";
import AgentChatAnim from "./animations/AgentChatAnim";
// import ArchitectureAnim from "./animations/ArchitectureAnim";
import SortAnim from "./animations/SortAnim";
import AiDlcAnim from "./animations/AiDlcAnim";

interface ServiceAnimationProps {
   title: string;
   color: string;
}

const ANIM_MAP: Record<string, React.FC<{ color: string }>> = {
   "Enterprise Software Design & Development": StackAnim,
   "Salesforce CRM Solutions & Automation": AiDlcAnim,
   "ServiceNow Enterprise Platform Engineering": AgentChatAnim,
   "Business Process Integration & Workflow Automation": NeuralNetAnim,
   "Open Source & Collaboration": SortAnim,
};

const ServiceAnimation = ({ title, color }: ServiceAnimationProps) => {
   const AnimComponent = ANIM_MAP[title];

   if (!AnimComponent) return null;

   return (
      <div
         style={{
            transform: "scale(1.8)",
            transformOrigin: "center",
         }}
      >
         <AnimComponent color={color} />
      </div>
   );
};

export default ServiceAnimation;
