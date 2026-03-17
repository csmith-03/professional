import Link from "next/link";
import Image from "next/image";
import Header from "./Header";

type ProjectPageLayoutProps = {
  title: string;
  image?: string;
  imageAlt?: string;
  children: React.ReactNode;
};

export default function ProjectPageLayout({ title, image, imageAlt, children }: ProjectPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-black text-white font-sans">
      <Header variant="absolute" />
      <main className="pt-24 sm:pt-28 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Title block */}
          <header className="text-center mb-10 sm:mb-12">
            {image && (
              <Image
                src={image}
                alt={imageAlt ?? ""}
                width={80}
                height={80}
                className="mx-auto mb-4 rounded-lg object-contain"
              />
            )}
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              {title}
            </h1>
            <div className="w-12 h-0.5 bg-indigo-400/60 rounded-full mx-auto" aria-hidden />
          </header>

          {/* Content */}
          <div className="space-y-10">
            {children}
          </div>

          {/* Back link */}
          <div className="mt-14 pt-8 border-t border-white/10 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors text-sm"
            >
              <span aria-hidden>←</span>
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
