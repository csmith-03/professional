import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

export default function ProjectCard({
  title,
  description,
  href,
  image,
  imageAlt,
}: ProjectCardProps) {
  return (
    <li className="group border border-white/10 rounded-xl overflow-hidden bg-white/5 hover:bg-white/[0.08] transition-colors duration-300">
      <Image
        src={image}
        alt={imageAlt}
        width={400}
        height={300}
        className="w-full h-48 object-cover group-hover:scale-[1.02] transition-transform duration-300"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-white/70 mb-4 leading-relaxed">
          {description}
        </p>
        <Link
          href={href}
          className="text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors"
        >
          Learn more →
        </Link>
      </div>
    </li>
  );
}
