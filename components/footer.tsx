import { HardHat } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <HardHat className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">
            Hardhat Detector
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          Built with Keras CNN. For construction safety compliance.
        </p>
      </div>
    </footer>
  );
}
