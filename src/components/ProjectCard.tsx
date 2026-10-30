import { Project } from "@/data/Project";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({
  id,
  image,
  title,
  description,
  techs,
  github,
  live,
}: Project) => {
  const summary = description.split("\n")[0];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black-4 bg-[linear-gradient(180deg,#171717_0%,#121212_100%)] transition-all duration-300 hover:-translate-y-1.5 hover:border-red-1/50 hover:shadow-[0_24px_50px_-24px_rgba(255,87,87,0.5)]">
      <div className="relative aspect-16/10 w-full overflow-hidden">
        <Image
          src={image}
          alt={`${title} preview`}
          fill
          sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 30vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#141414] via-[#141414]/25 to-transparent" />
        <span className="absolute right-4 top-4 font-mono text-xs font-medium text-white/60">
          {String(id).padStart(2, "0")}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-red-1">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-2">
          {summary}
        </p>

        {/* Tech badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {techs?.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-red-1/25 bg-red-1/10 px-2 py-1 text-[11px] font-medium leading-none text-red-1"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center gap-2 pt-6">
          <Link
            href={`/projects/${id}`}
            className="group/link inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-lg bg-red-1 px-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#e64d4d]"
          >
            View Details
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5" />
          </Link>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} source code on GitHub`}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-black-4 bg-white/3 text-gray-1 transition-all duration-300 hover:border-red-1/60 hover:bg-red-1/10 hover:text-red-1"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title} live demo`}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-black-4 bg-bg-white/3 text-gray-1 transition-all duration-300 hover:border-red-1/60 hover:bg-red-1/10 hover:text-red-1"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
