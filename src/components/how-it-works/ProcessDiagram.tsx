import {
  Grid3X3,
  LogOut,
  Play,
  Plug,
  Smartphone,
  Square,
  WalletCards,
  type LucideIcon,
} from "lucide-react";

type DiagramKind = "driver" | "charging-partner" | "distribution-partner";

interface ProcessDiagramProps {
  kind: DiagramKind;
  firstNodeLabel?: string;
}

interface DiagramNode {
  label: string;
  icon: LucideIcon | "networkcore" | "cpo-plug";
}

const diagramNodes: Record<DiagramKind, DiagramNode[]> = {
  driver: [
    { label: "The app they already use", icon: Smartphone },
    { label: "Plug in", icon: Plug },
    { label: "Start session", icon: Play },
    { label: "End session", icon: Square },
    { label: "Drive off", icon: LogOut },
  ],
  "charging-partner": [
    { label: "Your chargers", icon: "cpo-plug" },
    { label: "NetworkCore via OCPI", icon: "networkcore" },
    { label: "Paid fast", icon: WalletCards },
  ],
  "distribution-partner": [
    { label: "Your product", icon: Smartphone },
    { label: "One API connection", icon: "networkcore" },
    { label: "Every charger", icon: Grid3X3 },
  ],
};

const NetworkCoreMark = () => (
  <svg
    aria-hidden="true"
    className="h-8 w-12"
    viewBox="0 0 93 60"
    fill="none"
  >
    <path
      d="M90.7 29.8c0 3.5-2.8 6.3-6.3 6.3-5 0-10.3-6.3-10.3-6.3m16.6 0c0-3.5-2.8-6.3-6.3-6.3-5 0-10.3 6.3-10.3 6.3M2 29.8c0 3.5 2.8 6.3 6.3 6.3 5 0 10.3-6.3 10.3-6.3m0 0s-5.2-6.3-10.3-6.3C4.8 23.5 2 26.3 2 29.8m44.4 27.7 27.8-27.8L46.4 2 18.6 29.8l27.8 27.7Z"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinejoin="round"
    />
  </svg>
);

const ProcessDiagram = ({ kind, firstNodeLabel }: ProcessDiagramProps) => {
  const nodes = diagramNodes[kind];
  const isBidirectional = kind === "distribution-partner";

  return (
    <div
      className={`process-diagram process-diagram--${kind}`}
      aria-label={`${kind.replace("-", " ")} process diagram`}
    >
      <div className="process-diagram__flow">
        {nodes.map((node, index) => {
          const Icon = node.icon;

          return (
            <div className="contents" key={node.label}>
              <div className="process-diagram__node">
                <div className="process-diagram__icon">
                  {Icon === "networkcore" ? (
                    <NetworkCoreMark />
                  ) : Icon === "cpo-plug" ? (
                    <img src="/images/nav/nav-cp-cpo-plug.png" alt="" className="h-10 w-10 object-contain" />
                  ) : (
                    <Icon className="h-7 w-7" strokeWidth={1.6} />
                  )}
                </div>
                <span>{index === 0 ? firstNodeLabel ?? node.label : node.label}</span>
              </div>

              {index < nodes.length - 1 && (
                <div
                  className={`process-diagram__connector process-diagram__connector--step-${index + 1}${isBidirectional ? " process-diagram__connector--both" : ""}`}
                  aria-hidden="true"
                >
                  <span className="process-diagram__pulse" />
                  {isBidirectional && <span className="process-diagram__pulse process-diagram__pulse--return" />}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessDiagram;