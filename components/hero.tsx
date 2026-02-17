import { CheckCircle, Eye, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="px-6 py-16 text-center">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-sm font-medium text-secondary-foreground">
            Convolutional Neural Network
          </span>
        </div>
        <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Detect Hardhats with{" "}
          <span className="text-primary">AI Precision</span>
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Automated safety compliance for construction sites. Our CNN model
          analyzes images to verify workers are wearing proper head protection,
          reducing manual oversight and increasing workplace safety.
        </p>
        <div className="mx-auto grid max-w-lg grid-cols-3 gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground">
              Image Analysis
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground">
              Instant Results
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground">
              Safety First
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
