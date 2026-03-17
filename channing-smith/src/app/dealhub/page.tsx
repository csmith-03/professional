"use client";

import ProjectPageLayout from "@/components/ProjectPageLayout";
import ProjectSection from "@/components/ProjectSection";
import { PROJECTS } from "@/data/site";

const PROJECT = PROJECTS.find((p) => p.href === "/dealhub");

export default function DealHubPage() {
  return (
    <ProjectPageLayout title="DealHub Integration" image={PROJECT?.image} imageAlt={PROJECT?.imageAlt}>
      <p className="text-white/85 leading-relaxed">
        Integration of DealHub with ServiceNow for streamlined product creation
        and versioning.
      </p>
      <ProjectSection title="Key features">
        <ul className="space-y-2">
          <li className="flex gap-2 items-baseline">
            <span className="text-indigo-400/80 shrink-0 leading-none">•</span>
            <span>DealHub API integration for Product Creation under a versioned system</span>
          </li>
          <li className="flex gap-2 items-baseline">
            <span className="text-indigo-400/80 shrink-0 leading-none">•</span>
            <span>Real-time sync from ServiceNow to DealHub</span>
          </li>
          <li className="flex gap-2 items-baseline">
            <span className="text-indigo-400/80 shrink-0 leading-none">•</span>
            <span>Error monitoring and automatic retries</span>
          </li>
        </ul>
      </ProjectSection>
    </ProjectPageLayout>
  );
}
