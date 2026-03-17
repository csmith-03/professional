/** Optional: per-project highlights (features/work items) shown on the project detail page */
export type ProjectHighlight = {
  title: string;
  description?: string;
  items?: string[];
};

export const PROJECT_HIGHLIGHTS: Record<string, ProjectHighlight[]> = {
  "/clientportal": [
    {
      title: "Microsoft Subscription Visibility and License Management",
      items: [
        "Clients can view and manage Microsoft subscriptions and licenses in one place",
      ],
    },
    {
      title: "Onboarding/Offboarding Process",
      items: [
        "A self-service way for POCs to onboard and offboard their users in one place",
      ],
    },
    {
      title: "Public Facing Scopes of Services",
      items: [
        "Scopes of services and offerings visible to clients on the portal publicly and can be downloaded as a PDF (using Playwright)",
      ],
    },
    {
      title: "Changelog Visibility, Design Improvements, and Notification System",
      items: ["Visualize changes to the portal in the changelog and allow the clients to opt in to notifications for new features and updates."],
    },
  ],
  "/stripe": [
    {
      title: "Payment collection",
      items: [
        "Stripe Payment Element for secure card and ACH; one-time and bulk invoice payment",
        "Deferred Payment Intent and idempotency for reliable, auditable flows",
        "Themed UI (light/dark Stripe Elements) and clear processing states for multi-currency",
      ],
    },
    {
      title: "Recurring payments",
      items: [
        "Setup Intent and stored payment methods for scheduled/recurring payments",
        "Portal flows to schedule, view, and manage recurring payments",
      ],
    },
    {
      title: "Backend integration",
      items: [
        "Webhooks and server-side logic to sync payment status with internal systems",
        "No raw card data on our servers; Stripe Elements only",
      ],
    },
  ],
};

export const PROJECTS = [
  {
    title: "Stripe Integration",
    description:
      "Payment integration with Stripe in our Next.js portal for customers to pay invoices generated from ServiceNow",
    href: "/stripe",
    image: "/stripe-logo.png",
    imageAlt: "Stripe Integration",
  },
  {
    title: "DealHub Integration",
    description:
      "Integration of DealHub with ServiceNow for streamlined product creation and versioning.",
    href: "/dealhub",
    image: "/dealhub-logo.png",
    imageAlt: "DealHub Integration",
  },
  {
    title: "Client Portal",
    description:
      "A custom client portal built with Next.js to enhance client experience and streamline service.",
    href: "/clientportal",
    image: "/circle.png",
    imageAlt: "Client Portal",
  },
  {
    title: "AI Order Summarization",
    description:
      "A tool created for PMs to generate a project summary of their assigned orders using AI.",
    href: "/aiorder",
    image: "/logo.png",
    imageAlt: "AI Summarization",
  },
  {
    title: "AI Script Summarization",
    description:
      "A tool for ServiceNow users to summarize script includes, business rules, script actions, etc.",
    href: "/aiscript",
    image: "/logo.png",
    imageAlt: "AI Script Summarization",
  },
  {
    title: "Keeper Integration",
    description:
      "A custom integration with Keeper Security for reporting and remediation of security issues for clients.",
    href: "/keeper",
    image: "/keeper.png",
    imageAlt: "Keeper Integration - ServiceNow",
  },
  {
    title: "LiquidFiles Integration",
    description:
      "A file-sharing integration that creates file sharing links triggered by Salesforce events.",
    href: "/liquidfiles",
    image: "/liquidfiles.jpg",
    imageAlt: "LiquidFiles Integration - Salesforce",
  },
  {
    title: "Backup Radar Integration",
    description:
      "A custom integration to view backup monitoring and reporting for clients.",
    href: "/backupradar",
    image: "/backupradar.png",
    imageAlt: "Backup Radar Integration",
  },
] as const;

export const SKILLS = {
  technical: [
    "React / Next.js",
    "JavaScript / TypeScript",
    "Python",
    "Tailwind CSS",
    "REST APIs",
    "Git / Version Control",
    "ServiceNow Development",
  ],
  servicenow: [
    "Script Includes",
    "UI Actions",
    "Custom Tables",
    "Business Rules",
    "Client Scripts",
    "CMDB Configuration",
    "ServiceNow CLI",
    "IRE Configuration",
    "Integration with AI Models",
  ],
  soft: [
    "Problem Solving",
    "Team Collaboration",
    "Time Management",
    "Adaptability",
    "Communication",
  ],
} as const;

export const PUBLISHED_WORKS = [
  {
    title: "Formal Analysis of Deontic Logic Model for Ethical Decisions",
    venue:
      "Proceedings of the 17th International Conference on Agents and Artificial Intelligence - Volume 1: ICAART, 218-223, 2025, Porto, Portugal",
    url: "https://www.scitepress.org/Link.aspx?doi=10.5220/0013385200003890",
    posterSrc: "/EXPO 2023-2.png",
  },
  {
    title:
      "A Second Look at the Portability of Deep Learning Side-Channel Attacks over EM Traces",
    venue:
      "RAID '24: Proceedings of the 27th International Symposium on Research in Attacks, Intrusions and Defenses",
    url: "https://dl.acm.org/doi/10.1145/3678890.3678900",
    posterSrc: "/EXPO 2023-1.png",
  },
] as const;
