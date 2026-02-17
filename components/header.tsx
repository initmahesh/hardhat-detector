import { HardHat, Shield } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-card">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <HardHat className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">
              Hardhat Detector
            </h1>
            <p className="text-xs text-muted-foreground">
              AI Safety Compliance
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5">
          <Shield className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-secondary-foreground">
            CNN Powered
          </span>
        </div>
      </div>
    </header>
  );
}
