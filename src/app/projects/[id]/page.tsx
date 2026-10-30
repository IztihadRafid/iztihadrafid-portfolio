import SplitText from "@/components/SplitText";
import { projects } from "@/data/Project";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ExternalLink,
  Layers,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";

interface Section {
  title: string;
  items: string[];
}

function parseDescription(description: string) {
  const lines = description
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const intro = lines[0] ?? "";
  const highlights: string[] = [];
  const sections: Section[] = [];
  let current: Section | null = null;

  for (const line of lines.slice(1)) {
    if (line.endsWith(":") && !line.startsWith("•")) {
      current = { title: line.slice(0, -1), items: [] };
      sections.push(current);
      continue;
    }

    const text = line.replace(/^[•-]\s*/, "");
    if (current) {
      current.items.push(text);
    } else {
      highlights.push(text);
    }
  }

  return { intro, highlights, sections };
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) {
    notFound();
  }

  const { title, image, description, techs, github, live } = project;
  const { intro, highlights, sections } = parseDescription(description);

  return (
    <div className="mx-auto w-[90%] max-w-8xl pb-16 pt-8 md:pt-12">
      <Link
        href="/#projects"
        className="group inline-flex items-center gap-2 text-sm text-gray-2 transition-colors duration-300 hover:text-red-1"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
        Back to projects
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Preview */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-8">
            <div className="relative overflow-hidden rounded-2xl border border-black-4 bg-[#151515] p-2 shadow-[0_30px_70px_-35px_rgba(0,0,0,0.95)]">
              <div className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-red-1/15 blur-3xl" />

              <div className="relative flex items-center gap-1.5 px-2 py-2">
                <span className="h-2 w-2 rounded-full bg-red-1/80" />
                <span className="h-2 w-2 rounded-full bg-yellow-1/80" />
                <span className="h-2 w-2 rounded-full bg-gray-3/70" />
                <span className="ml-2 truncate text-[11px] tracking-wide text-gray-3">
                  {title}
                </span>
              </div>

              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src={image}
                  alt={`${title} preview`}
                  fill
                  priority
                  sizes="(max-width: 1023px) 90vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-red-1/30 bg-red-1/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-red-1">
              Case Study
            </span>
            <span className="font-mono text-xs text-gray-3">
              Project {String(id).padStart(2, "0")}
            </span>
          </div>

          <SplitText
            text={title}
            tag="h1"
            className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl"
            delay={35}
            duration={0.9}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-60px"
            textAlign="left"
          />

          <p className="mt-5 text-base leading-8 text-gray-1 md:text-lg">
            {intro}
          </p>

          {/* Tech stack */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {techs?.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-red-1/25 bg-red-1/10 px-2.5 py-1 text-[11px] font-medium leading-none text-red-1"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-11 items-center gap-2 rounded-lg bg-red-1 px-5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#e64d4d]"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-black-4 bg-white/[0.03] px-5 text-sm font-semibold text-gray-1 transition-all duration-300 hover:border-red-1/60 hover:bg-red-1/10 hover:text-red-1"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </a>
          </div>

          {/* Description */}
          <div className="mt-10 space-y-5">
            {highlights.length > 0 && (
              <section className="rounded-2xl border border-black-4 bg-white/[0.02] p-5 md:p-6">
                <h2 className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-3">
                  <Sparkles className="h-4 w-4 text-red-1" />
                  Highlights
                </h2>
                <ul
                  className={`mt-4 ${
                    highlights.length > 3
                      ? "grid gap-3 sm:grid-cols-2"
                      : "space-y-3"
                  }`}
                >
                  {highlights.map((item, index) => (
                    <li
                      key={`${item}-${index}`}
                      className="flex gap-3 text-sm leading-6 text-gray-2"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-red-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {sections.map((section) => (
              <section
                key={section.title}
                className="rounded-2xl border border-black-4 bg-white/[0.02] p-5 md:p-6"
              >
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-red-1" />
                  <h2 className="text-base font-semibold text-white">
                    {section.title}
                  </h2>
                </div>
                <ul
                  className={`mt-4 ${
                    section.items.length > 3
                      ? "grid gap-3 sm:grid-cols-2"
                      : "space-y-3"
                  }`}
                >
                  {section.items.map((item, index) => (
                    <li
                      key={`${item}-${index}`}
                      className="flex gap-3 text-sm leading-6 text-gray-2"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-2xl border border-red-1/20 bg-[linear-gradient(135deg,rgba(255,87,87,0.12),rgba(21,21,21,0)_65%)] p-6 md:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-red-1">
              Next step
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              Need something similar?
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-6 text-gray-2">
              I`m available for frontend, full-stack and QA work. Let`s talk
              about your project.
            </p>
            <Link
              href="/#contact"
              className="mt-5 inline-flex h-10 items-center gap-2 rounded-lg bg-red-1 px-5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#e64d4d]"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
