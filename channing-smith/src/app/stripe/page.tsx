"use client";

import ProjectPageLayout from "@/components/ProjectPageLayout";
import ProjectHighlights from "@/components/ProjectHighlights";
import { PROJECTS, PROJECT_HIGHLIGHTS } from "@/data/site";

const PROJECT = PROJECTS.find((p) => p.href === "/stripe");
const HIGHLIGHTS = PROJECT_HIGHLIGHTS["/stripe"] ?? [];

export default function StripePage() {
  return (
    <ProjectPageLayout title="Stripe Integration" image={PROJECT?.image} imageAlt={PROJECT?.imageAlt}>
      <p className="text-white/85 leading-relaxed">
        Built an international invoice payment flow in our Next.js client portal
        using Stripe for payment processing—one-time and recurring payments,
        with webhooks and backend sync to our internal systems.
      </p>
      {HIGHLIGHTS.length > 0 && <ProjectHighlights highlights={HIGHLIGHTS} />}
      {/* <section className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          What I learned
        </h2>
        <p className="text-white/85 leading-relaxed">
          I focused on secure integration patterns (Stripe Elements only, no raw
          card data), idempotency and webhooks for reliable payment flows, and
          clear UX for multi-currency and recurring payments. Good experience
          with deferred Payment Intents, Setup Intents for off-session payments,
          and keeping portal state in sync with backend payment status.
        </p>
      </section> */}
    </ProjectPageLayout>
  );
}
