"use client";

import { AuthForm } from "@/components/auth/auth-form";
import { FeaturesSection } from "@/components/features/features-section";
import { AppHeader } from "@/components/layout/app-header";

export function AuthLayout() {
  return (
    <main className="min-h-screen bg-background flex">
      <div className="w-1/2 p-8 flex flex-col">
        <AppHeader />
        <AuthForm />
      </div>
      <FeaturesSection />
    </main>
  );
}