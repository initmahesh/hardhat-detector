import { Brain, Camera, BarChart3, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Deep Learning CNN",
    description:
      "Multi-layer convolutional neural network trained on thousands of construction site images for high accuracy detection.",
  },
  {
    icon: Camera,
    title: "Real-time Scanning",
    description:
      "Process images instantly to verify safety compliance as workers enter the construction zone.",
  },
  {
    icon: BarChart3,
    title: "Confidence Scoring",
    description:
      "Get detailed confidence scores for each prediction, enabling data-driven safety decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Compliance",
    description:
      "Automated monitoring reduces manual oversight and ensures consistent safety standard enforcement.",
  },
];

export function Features() {
  return (
    <section className="border-t bg-secondary/30 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h3 className="mb-3 text-2xl font-bold text-foreground">
            How It Works
          </h3>
          <p className="text-muted-foreground">
            Built on proven CNN architecture for reliable safety detection
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-4 rounded-xl border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-foreground">
                  {feature.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
