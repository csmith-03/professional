"use client";

import ProjectPageLayout from "@/components/ProjectPageLayout";
import ProjectSection from "@/components/ProjectSection";
import { PROJECTS } from "@/data/site";

const PROJECT = PROJECTS.find((p) => p.href === "/liquidfiles");

export default function LiquidFilesPage() {
  return (
    <ProjectPageLayout title="LiquidFiles Integration" image={PROJECT?.image} imageAlt={PROJECT?.imageAlt}>
      <p className="text-white/85 leading-relaxed">
        Integration of LiquidFiles with Salesforce and ServiceNow: file shares
        are created in LiquidFiles when Opportunities reach a specific state,
        and linked to orders in ServiceNow.
      </p>
      <ProjectSection title="Key features">
        <ul className="space-y-2">
          <li className="flex gap-2 items-baseline">
            <span className="text-indigo-400/80 shrink-0 leading-none">•</span>
            <span>Salesforce trigger to generate file shares when Opportunities hit a specific state</span>
          </li>
          <li className="flex gap-2 items-baseline">
            <span className="text-indigo-400/80 shrink-0 leading-none">•</span>
            <span>Linking file shares to corresponding orders in ServiceNow</span>
          </li>
          <li className="flex gap-2 items-baseline">
            <span className="text-indigo-400/80 shrink-0 leading-none">•</span>
            <span>Scheduled job to clean up old file shares 60 days past closed date</span>
          </li>
          <li className="flex gap-2 items-baseline">
            <span className="text-indigo-400/80 shrink-0 leading-none">•</span>
            <span>Extensive use of Apex classes in Salesforce</span>
          </li>
        </ul>
      </ProjectSection>
    </ProjectPageLayout>
  );
}
