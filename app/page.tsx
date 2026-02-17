import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { UploadZone } from "@/components/upload-zone";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <UploadZone />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
