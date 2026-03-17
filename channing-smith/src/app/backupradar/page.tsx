"use client";

import ProjectPageLayout from "@/components/ProjectPageLayout";
import ProjectSection from "@/components/ProjectSection";
import { PROJECTS } from "@/data/site";

const PROJECT = PROJECTS.find((p) => p.href === "/backupradar");

export default function BackupRadarPage() {
  return (
    <ProjectPageLayout title="Backup Radar Integration" image={PROJECT?.image} imageAlt={PROJECT?.imageAlt}>
      <p className="text-white/85 leading-relaxed">
        A custom integration for backup monitoring and reporting inside
        ServiceNow, so engineers can quickly see backup failures and successes.
      </p>
      <ProjectSection title="Key features">
        <ul className="space-y-2">
          <li className="flex gap-2 items-baseline">
            <span className="text-indigo-400/80 shrink-0 leading-none">•</span>
            <span>Custom table to track backup performance</span>
          </li>
          <li className="flex gap-2 items-baseline">
            <span className="text-indigo-400/80 shrink-0 leading-none">•</span>
            <span>Automated pull of backup jobs per client</span>
          </li>
        </ul>
      </ProjectSection>
    </ProjectPageLayout>
  );
}
