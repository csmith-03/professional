"use client";

import ProjectPageLayout from "@/components/ProjectPageLayout";
import ProjectSection from "@/components/ProjectSection";
import { PROJECTS } from "@/data/site";

const PROJECT = PROJECTS.find((p) => p.href === "/keeper");

export default function KeeperPage() {
  return (
    <ProjectPageLayout title="Keeper Integration" image={PROJECT?.image} imageAlt={PROJECT?.imageAlt}>
      <p className="text-white/85 leading-relaxed">
        Integration of Keeper Security with our internal systems for password
        management and reporting, giving clients a clear view of password usage
        by service team members.
      </p>
      <ProjectSection title="Key features">
        <ul className="space-y-2">
          <li className="flex gap-2 items-baseline">
            <span className="text-indigo-400/80 shrink-0 leading-none">•</span>
            <span>On-demand reporting of password usage by service team members</span>
          </li>
          <li className="flex gap-2 items-baseline">
            <span className="text-indigo-400/80 shrink-0 leading-none">•</span>
            <span>Integration with Keeper Security for secure password management</span>
          </li>
          <li className="flex gap-2 items-baseline">
            <span className="text-indigo-400/80 shrink-0 leading-none">•</span>
            <span>Streamlined process for clients to request and receive reports</span>
          </li>
        </ul>
      </ProjectSection>
    </ProjectPageLayout>
  );
}
