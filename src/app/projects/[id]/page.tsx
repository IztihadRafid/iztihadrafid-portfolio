import SplitText from "@/components/SplitText";
import { projects } from "@/data/Project";
import { ExternalLink, } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
if(!project) {
   notFound()
  }
  const { title, image, description, techs, github, live } = project;
  
  return (
    <div className="bg-black-1 md:mt-8 lg:mt-8 mb-8 w-[90%] md:max-w-8xl mx-auto">
      <div className="flex flex-col items-center pt-10 md:mb-20 mb-6 lg:mb-16 ">
        <h1 className="lg:text-6xl md:text-4xl text-4xl ">
          <SplitText
            text="Project Details"
            className=" text font-semibold  text-gray-1"
            delay={50}
            duration={1.0}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </h1>
        <div className=" md:mt-1 lg:mt-3 h-1 w-44 lg:w-44 rounded-full bg-red-1"></div>
      </div>

      <section className="w-full rounded-2xl border border-black-4  p-10 md:p-8 bg-[#151515] max-w-8xl mx-auto">
        <div className="flex flex-col md:flex-row  items-center gap-10 w-full">
          <div className="md:w-1/2">
            <Image
              src={image}
              alt={title}
              className="w-full rounded-2xl"
            ></Image>
          </div>
          <div  className="md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              {title}
            </h1>

            {/* Description */}
            <p className="mt-5 text-base md:text-lg leading-8 text-gray-2">
              {description}
            </p>

            {/* Tech Stack */}
            <div className="mt-8 flex flex-wrap gap-3">
              {techs?.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-red-1/30 bg-red-1/10 px-4 py-2 text-sm font-medium text-red-1"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={github}
                target="_blank"
                className="flex items-center gap-2 rounded-lg bg-red-1 px-5 py-3 text-white transition-all duration-300 hover:bg-[#E75A58]">
                <FaGithub size={18} />
                GitHub
              </a>
              <a
                href={live}
                target="_blank"
                className="flex items-center gap-2 rounded-lg border border-red-1 px-5 py-3 text-red-1 transition-all duration-300 hover:bg-red-1 hover:text-white"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
