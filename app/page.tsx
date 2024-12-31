import { LeftSection } from "@/components/auth/sections/left-section";
import { RightSection } from "@/components/auth/sections/right-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
}