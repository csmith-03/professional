"use client";

import ProjectPageLayout from "@/components/ProjectPageLayout";
import ProjectSection from "@/components/ProjectSection";
import { PROJECTS } from "@/data/site";

const PROJECT = PROJECTS.find((p) => p.href === "/aiscript");

export default function AIScriptPage() {
  return (
    <ProjectPageLayout title="AI Script Summarization" image={PROJECT?.image} imageAlt={PROJECT?.imageAlt}>
      <p className="text-white/85 leading-relaxed">
        AI-powered summarization of scripts in ServiceNow—script includes,
        business rules, scheduled jobs—to improve understanding and
        maintainability from a non-technical perspective.
      </p>
      <ProjectSection title="Key features">
        <ul className="space-y-2">
          <li className="flex gap-2 items-baseline">
            <span className="text-indigo-400/80 shrink-0 leading-none">•</span>
            <span>AI-powered summarization via UI Action in ServiceNow</span>
          </li>
          <li className="flex gap-2 items-baseline">
            <span className="text-indigo-400/80 shrink-0 leading-none">•</span>
            <span>Summaries stored in a custom table for historical context</span>
          </li>
          <li className="flex gap-2 items-baseline">
            <span className="text-indigo-400/80 shrink-0 leading-none">•</span>
            <span>Re-summarize when content is outdated or updated since last run</span>
          </li>
        </ul>
      </ProjectSection>
    </ProjectPageLayout>
  );
}
