import Image, { type StaticImageData } from "next/image";
import htmlpic from "./../../public/assets/htmlPic.png";
import cssPic from "./../../public/assets/css.png";
import tailwind from "./../../public/assets/tailwindcss.png";
import javascriptimg from "./../../public/assets/js.png";
import daisyUiPic from "./../../public/assets/daisyUiPic.png";
import shadcn from "./../../public/assets/shadcn.png";
import firebasePic from "./../../public/assets/firebasePic.png";
import nodejsPic from "./../../public/assets/nodejsPic.png";
import reactPic from "./../../public/assets/react.png";
import nextPic from "./../../public/assets/next.png";
import mongodb from "./../../public/assets/mongodb.png";
import typescript from "./../../public/assets/type.png";
import expressPic from "./../../public/assets/Express.png";
import wp from "./../../public/assets/wp.png";
import github from "./../../public/assets/github.webp";
import vscode from "./../../public/assets/vs.webp";
import jira from "./../../public/assets/jira.webp";
import apidog from "./../../public/assets/apigod.webp";
import postman from "./../../public/assets/postman.webp";
import playwright from "./../../public/assets/playwright.webp";
import prisma from "./../../public/assets/prisma.png";
import postgresql from "./../../public/assets/postgresql.png";
import cvat from "./../../public/assets/CVAT.png";
import SplitText from "./SplitText";
import TrueFocus from "./TrueFocus";

type Tool = {
  name: string;
  kind: string;
  color: string;
  src: StaticImageData;
};

const frontendTools: Tool[] = [
  { name: "HTML", kind: "Markup", color: "#E34F26", src: htmlpic },
  { name: "CSS", kind: "Styling", color: "#2965F1", src: cssPic },
  { name: "Tailwind CSS", kind: "Styling", color: "#38BDF8", src: tailwind },
  { name: "daisyUI", kind: "Components", color: "#FFC63F", src: daisyUiPic },
  { name: "shadcn/ui", kind: "Components", color: "#F4F4F5", src: shadcn },
  {
    name: "JavaScript",
    kind: "Language",
    color: "#F7DF1E",
    src: javascriptimg,
  },
  { name: "TypeScript", kind: "Language", color: "#3178C6", src: typescript },
  { name: "React", kind: "Library", color: "#61DAFB", src: reactPic },
  { name: "Next.js", kind: "Framework", color: "#FFFFFF", src: nextPic },
  { name: "WordPress", kind: "CMS", color: "#21759B", src: wp },
  {
    name: "Firebase",
    kind: "Backend service",
    color: "#FFCA28",
    src: firebasePic,
  },
];

const backendTools: Tool[] = [
  { name: "Node.js", kind: "Runtime", color: "#68A063", src: nodejsPic },
  { name: "Express.js", kind: "Framework", color: "#E8E8E8", src: expressPic },
  { name: "MongoDB", kind: "Database", color: "#47A248", src: mongodb },
  { name: "Prisma", kind: "ORM", color: "#5A67D8", src: prisma },
  { name: "PostgreSQL", kind: "Database", color: "#4169E1", src: postgresql },
];

const platformTools: Tool[] = [
  { name: "GitHub", kind: "Version control", color: "#F5F5F5", src: github },
  { name: "VS Code", kind: "Editor", color: "#007ACC", src: vscode },
  {
    name: "Playwright",
    kind: "E2E testing",
    color: "#2EAD33",
    src: playwright,
  },
  { name: "Jira", kind: "Project tracking", color: "#0052CC", src: jira },
  { name: "Apidog", kind: "API testing", color: "#3CB371", src: apidog },
  { name: "Postman", kind: "API client", color: "#FF6C37", src: postman },
  { name: "CVAT", kind: "Annotation", color: "#4CAF50", src: cvat },
];

const ToolCard = ({ name, kind, color, src }: Tool) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[linear-gradient(160deg,#1c1c1c_0%,#131313_100%)] p-4 transition-transform duration-300 hover:-translate-y-1 sm:p-5">
    {/* accent wash */}
    <span
      className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
      style={{ background: color }}
    />
    {/* accent ring + glow */}
    <span
      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        boxShadow: `inset 0 0 0 1px ${color}66, 0 26px 50px -28px ${color}80`,
      }}
    />

    <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] sm:h-14 sm:w-14">
        <Image
          src={src}
          alt={name}
          width={70}
          height={70}
          className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8"
        />
      </span>
      <span className="min-w-0">
        <h6 className="truncate text-[13px] font-semibold leading-tight text-gray-1 sm:text-[15px]">
          {name}
        </h6>
        <p className="mt-1 truncate text-[10px] font-medium uppercase tracking-[0.16em] text-gray-3 transition-colors duration-300 group-hover:text-gray-2 sm:text-[11px]">
          {kind}
        </p>
      </span>
    </div>
  </div>
);

type SkillGroupProps = {
  sentence: string;
  tools: Tool[];
  gridClassName: string;
};

const SkillGroup = ({ sentence, tools, gridClassName }: SkillGroupProps) => (
  <section>
    <div className="mb-7 border-b border-white/[0.08] pb-6">
      <div className="w-fit">
        <TrueFocus
          sentence={sentence}
          manualMode={false}
          blurAmount={3}
          borderColor="#D84846"
          animationDuration={0.5}
          pauseBetweenAnimations={1}
          className="text-xl text-white md:text-[26px] lg:text-3xl"
        />
      </div>
    </div>

    <div className={`grid gap-3 lg:gap-4 ${gridClassName}`}>
      {tools.map((tool) => (
        <ToolCard key={tool.name} {...tool} />
      ))}
    </div>
  </section>
);

const ExperiencedTools = () => {
  return (
    <div className="lg:pb-8 pb-4 mx-auto max-w-8xl">
      <div className="flex flex-col items-center pt-10 md:mb-8 lg:mb-10 mb-0">
        <h1 className="lg:text-6xl md:text-4xl text-4xl flex items-center justify-center gap-2">
          <SplitText
            text="Skills"
            className="text font-semibold text-white"
            delay={50}
            duration={1.0}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-120px"
            textAlign="center"
          />
          <SplitText
            text="&"
            className="text font-semibold text-red-1"
            delay={50}
            duration={1.0}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-120px"
            textAlign="center"
          />
          <SplitText
            text="Tools"
            className="text font-semibold text-white"
            delay={50}
            duration={1.0}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-120px"
            textAlign="center"
          />
        </h1>
        <div className=" md:mt-1 lg:mt-3 h-1 w-44 lg:w-64 rounded-full bg-red-1"></div>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-gray-2 text-center p-2 lg:w-[600px] md:w-96 w-60">
          The Technologies and Tools I have used to build modern, responsive,
          and user-friendly websites and applications.
        </p>
      </div>

      <div className="mt-14 lg:mt-20 w-[90%] lg:max-w-8xl mx-auto flex flex-col gap-16 lg:gap-24">
        <SkillGroup
          sentence="Frontend Technologies"
          tools={frontendTools}
          gridClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
        />
        <SkillGroup
          sentence="Backend Technologies"
          tools={backendTools}
          gridClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5"
        />
        <SkillGroup
          sentence="Tools & Platforms"
          tools={platformTools}
          gridClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
        />
      </div>
    </div>
  );
};

export default ExperiencedTools;
