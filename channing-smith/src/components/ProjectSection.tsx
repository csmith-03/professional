type ProjectSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function ProjectSection({ title, children }: ProjectSectionProps) {
  return (
    <section className="group relative bg-white/[0.06] border border-white/10 rounded-xl p-5 sm:p-6 transition-colors hover:bg-white/[0.08] hover:border-white/15">
      <div
        className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-indigo-400/50 group-hover:bg-indigo-400/70 transition-colors"
        aria-hidden
      />
      <div className="pl-4">
        <h2 className="text-base font-semibold text-white mb-4">{title}</h2>
        <div className="text-sm text-white/75 leading-relaxed space-y-3">
          {children}
        </div>
      </div>
    </section>
  );
}
