"use client";

import { DashboardLayout } from "@/components/dashboard/layout";
import { AssistantSetup } from "@/components/dashboard/assistants/assistant-setup";

export default function AssistantSetupPage() {
  return (
    <DashboardLayout>
      <AssistantSetup />
    </DashboardLayout>
  );
}