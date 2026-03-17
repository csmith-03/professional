"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import ImageModal from "@/components/ImageModal";
import ContactForm from "@/components/ContactForm";
import {
  PROJECTS,
  SKILLS,
  PUBLISHED_WORKS,
} from "@/data/site";

export default function Home() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-black text-white font-sans">
      <Header variant="sticky" />

      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <section
          id="hero"
          className="flex flex-col items-center text-center py-16 sm:py-24"
        >
          <Image
            src="/profile.png"
            alt="Channing Smith"
            width={180}
            height={180}
            className="rounded-full border-4 border-indigo-400/80 shadow-xl mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            Channing Smith
          </h1>
          <p className="text-lg sm:text-xl text-indigo-300/90 mb-2">
            Full-Stack Developer
          </p>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Attempting to build at the intersection of technology and creativity.
          </p>
          <div className="flex gap-6 items-center justify-center">
            <a
              href="https://github.com/csmith-03"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/githubblue.webp"
                alt=""
                width={36}
                height={36}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/channing-smith-1261061b3/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/linkedin.png"
                alt=""
                width={36}
                height={36}
              />
            </a>
            <a
              href="https://channing19smith.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Substack"
              className="opacity-80 hover:opacity-100 transition-opacity [&_svg]:w-9 [&_svg]:h-9"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-white" aria-hidden>
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
              </svg>
            </a>
          </div>
        </section>

        <section id="about" className="pt-16 sm:pt-20 pb-10 sm:pb-12">
          <h2 className="text-3xl font-semibold mb-8 text-center">About me</h2>
          <div className="space-y-4 text-white/85 max-w-3xl mx-auto leading-relaxed">
            <p>
              I consider myself not only a developer but a creative technologist.
              I build things that solve problems and make lives easier, sure. But, what really gets me going is doing this while
              aiming for unique, visually appealing solutions - especially when it involves learning something new.
            </p>
            <p>
              I graduated in Computer Science from College of Charleston and work
              at Thrive on platform integrations, especially within ServiceNow. Lately
              I’ve been focused on a custom client portal in Next.js.
            </p>
            <p>
              In my free time I like to build custom sites, explore new tech, hike, and hang out
              with my dog, Archie.
            </p>
          </div>
        </section>

        <section
          id="professional-work"
          className="pt-8 sm:pt-10 pb-16 sm:pb-20 rounded-2xl bg-white/[0.04] border border-white/10 px-4 sm:px-6 mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Professional Work
          </h2>
          <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
            Below are some key projects from my time at Thrive, in no particular order.
          </p>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.href} {...project} />
            ))}
          </ul>
        </section>

        <section
          id="key-skills"
          className="py-16 sm:py-20 rounded-2xl bg-white/[0.04] border border-white/10 px-4 sm:px-6"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">Key skills</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { title: "Technical", items: SKILLS.technical },
              { title: "ServiceNow", items: SKILLS.servicenow },
              { title: "Soft skills", items: SKILLS.soft },
            ].map(({ title, items }) => (
              <details
                key={title}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group"
              >
                <summary className="cursor-pointer px-5 py-4 font-semibold list-none flex items-center justify-between after:content-['+'] after:text-white/60 group-open:after:content-['−']">
                  {title}
                </summary>
                <ul className="px-5 pb-4 pt-0 list-disc list-inside space-y-1.5 text-white/80 text-sm">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </section>

        <section
          id="published-works"
          className="py-16 sm:py-20 rounded-2xl bg-white/[0.04] border border-white/10 px-4 sm:px-6 mt-12"
        >
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Published works
          </h2>
          <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
            Academic research from College of Charleston and University of
            Cincinnati.
          </p>
          <div className="max-w-2xl mx-auto space-y-6">
            {PUBLISHED_WORKS.map((work) => (
              <div
                key={work.url}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-indigo-300 mb-2">
                  {work.title}
                </h3>
                <p className="text-sm text-white/60 mb-4">{work.venue}</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
                  >
                    Read article →
                  </a>
                  <button
                    type="button"
                    onClick={() => setModalImage(work.posterSrc)}
                    className="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
                  >
                    View poster
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {modalImage && (
          <ImageModal
            src={modalImage}
            alt="Research poster"
            onClose={() => setModalImage(null)}
          />
        )}

        <section id="contact" className="py-16 sm:py-20">
          <h2 className="text-3xl font-semibold mb-4 text-center">Contact</h2>
          <p className="text-center text-white/70 mb-10">
            Reach out with any questions or just to say hi!
          </p>
          <ContactForm />
        </section>
      </main>

      <footer className="py-10 border-t border-white/10 mt-16">
        <div className="flex justify-center gap-6 mb-4 items-center">
          <a
            href="https://www.linkedin.com/in/channing-smith-1261061b3/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Image
              src="/linkedin.png"
              alt=""
              width={28}
              height={28}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
          </a>
          <a
            href="https://github.com/csmith-03"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Image
              src="/githubblue.webp"
              alt=""
              width={28}
              height={28}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
          </a>
          <a
            href="https://substack.com/@channing-smith"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Substack"
            className="opacity-70 hover:opacity-100 transition-opacity text-white [&_svg]:w-7 [&_svg]:h-7"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
            </svg>
          </a>
        </div>
        <p className="text-center text-sm text-white/50">
          © {new Date().getFullYear()} Channing Smith
        </p>
      </footer>
    </div>
  );
}
