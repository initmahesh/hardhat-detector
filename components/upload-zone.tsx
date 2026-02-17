"use client";

import { useState, useCallback, useRef } from "react";
import { Upload, X, HardHat, ShieldAlert, Loader2 } from "lucide-react";

type DetectionResult = {
  prediction: "hardhat" | "no-hardhat" | null;
  confidence: number;
};

export function UploadZone() {
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;

    setResult(null);
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    // Simulate CNN analysis
    setIsAnalyzing(true);
    setTimeout(() => {
      const mockPrediction = Math.random();
      setResult({
        prediction: mockPrediction > 0.5 ? "hardhat" : "no-hardhat",
        confidence: 0.7 + Math.random() * 0.28,
      });
      setIsAnalyzing(false);
    }, 2000);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const clearImage = useCallback(() => {
    setImage(null);
    setFileName("");
    setResult(null);
    setIsAnalyzing(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  return (
    <section className="px-6 pb-16">
      <div className="mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
          <div className="border-b bg-secondary/50 px-6 py-4">
            <h3 className="text-lg font-semibold text-foreground">
              Upload Image for Analysis
            </h3>
            <p className="text-sm text-muted-foreground">
              Drag and drop or click to upload a construction site image
            </p>
          </div>

          <div className="p-6">
            {!image ? (
              <button
                type="button"
                className={`flex w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-16 transition-colors ${
                  isDragging
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50 hover:bg-accent/50"
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <p className="mb-1 text-base font-medium text-foreground">
                  {isDragging
                    ? "Drop your image here"
                    : "Click or drag image here"}
                </p>
                <p className="text-sm text-muted-foreground">
                  Supports JPG, PNG, and WebP formats
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleInputChange}
                  className="hidden"
                />
              </button>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="relative overflow-hidden rounded-xl border">
                  <img
                    src={image}
                    alt={`Uploaded file: ${fileName}`}
                    className="w-full object-cover"
                    style={{ maxHeight: "400px" }}
                  />
                  <button
                    type="button"
                    onClick={clearImage}
                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-foreground/80 text-background transition-colors hover:bg-foreground"
                    aria-label="Remove image"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-secondary/50 px-4 py-3">
                  <span className="truncate text-sm font-medium text-foreground">
                    {fileName}
                  </span>
                  {isAnalyzing && (
                    <div className="flex items-center gap-2 text-primary">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm font-medium">Analyzing...</span>
                    </div>
                  )}
                </div>

                {result && (
                  <div
                    className={`flex items-center gap-4 rounded-xl border-2 p-5 ${
                      result.prediction === "hardhat"
                        ? "border-primary/30 bg-primary/5"
                        : "border-destructive/30 bg-destructive/5"
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                        result.prediction === "hardhat"
                          ? "bg-primary/15"
                          : "bg-destructive/15"
                      }`}
                    >
                      {result.prediction === "hardhat" ? (
                        <HardHat className="h-6 w-6 text-primary" />
                      ) : (
                        <ShieldAlert className="h-6 w-6 text-destructive" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-semibold text-foreground">
                        {result.prediction === "hardhat"
                          ? "Hardhat Detected"
                          : "No Hardhat Detected"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Confidence:{" "}
                        <span className="font-mono font-medium">
                          {(result.confidence * 100).toFixed(1)}%
                        </span>
                      </p>
                    </div>
                    <div
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        result.prediction === "hardhat"
                          ? "bg-primary/15 text-primary"
                          : "bg-destructive/15 text-destructive"
                      }`}
                    >
                      {result.prediction === "hardhat"
                        ? "COMPLIANT"
                        : "NON-COMPLIANT"}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
