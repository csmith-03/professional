"use client";

import ProjectPageLayout from "@/components/ProjectPageLayout";
import ProjectHighlights from "@/components/ProjectHighlights";
import { PROJECTS, PROJECT_HIGHLIGHTS } from "@/data/site";

const PROJECT = PROJECTS.find((p) => p.href === "/clientportal");
const HIGHLIGHTS = PROJECT_HIGHLIGHTS["/clientportal"] ?? [];

export default function ClientPortalPage() {
  return (
    <ProjectPageLayout title="Client Portal" image={PROJECT?.image} imageAlt={PROJECT?.imageAlt}>
      <p className="text-white/85 leading-relaxed">
        A custom client portal built on ServiceNow so clients can submit cases,
        manage subscriptions, and access tailored resources in one place.
      </p>
      {HIGHLIGHTS.length > 0 && <ProjectHighlights highlights={HIGHLIGHTS} />}
      {/* <section className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          What I learned
        </h2>
        <p className="text-white/85 leading-relaxed mb-4">
          Building this portal gave me hands-on experience with Azure DevOps and
          cross-functional collaboration. Under tight deadlines I learned to
          prioritize communication and teamwork. I deepened my Next.js skills
          and focused on clear UX and solid backend behavior.
        </p>
        <p className="text-white/85 leading-relaxed">
          I also learned how to gather and apply user feedback to improve
          features and usability over time.
        </p>
      </section> */}
    </ProjectPageLayout>
  );
}
