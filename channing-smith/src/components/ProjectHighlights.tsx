import type { ProjectHighlight } from "@/data/site";

type ProjectHighlightsProps = {
  highlights: ProjectHighlight[];
};

export default function ProjectHighlights({ highlights }: ProjectHighlightsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white/90 mb-6">
        Features &amp; contributions
      </h2>
      <div className="grid gap-5">
        {highlights.map((highlight, index) => (
          <section
            key={index}
            className="group relative bg-white/[0.06] border border-white/10 rounded-xl p-5 sm:p-6 transition-colors hover:bg-white/[0.08] hover:border-white/15"
          >
            <div
              className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-indigo-400/50 group-hover:bg-indigo-400/70 transition-colors"
              aria-hidden
            />
            <div className="pl-4">
              <h3 className="text-base font-semibold text-white mb-2 sm:mb-3">
                {highlight.title}
              </h3>
              {highlight.description && (
                <p className="text-white/75 text-sm leading-relaxed mb-3">
                  {highlight.description}
                </p>
              )}
              {highlight.items && highlight.items.length > 0 && (
                <ul className="space-y-1.5 text-sm text-white/70 leading-relaxed">
                  {highlight.items.map((item, i) => (
                    <li key={i} className="flex gap-2 items-baseline">
                      <span className="text-indigo-400/80 shrink-0 leading-none" aria-hidden>
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
