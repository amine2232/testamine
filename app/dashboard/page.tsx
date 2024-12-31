"use client";

import { DashboardLayout } from "@/components/dashboard/layout";
import { AssistantsPage } from "@/components/dashboard/assistants/assistants-page";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <AssistantsPage />
    </DashboardLayout>
  );
}