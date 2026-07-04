
import { Project } from "@/data/Project";
import { ArrowRight, Link } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({
  id,
  image,
  title,
  description,
  techs,
  github,
  live,

}:Project ) => {
  return (
    <div className="h-full rounded-2xl border border-black-4 backdrop-blur-md bg-[#151515] transition-all duration-400 hover:-translate-y-2 hover:border-red-1 hover:shadow-xl hover:shadow-red-1/20 w-[90%] lg:max-w-8xl mx-auto">
      {/* Image */}
      <div className="relative h-[275px] w-full overflow-hidden rounded-t-2xl">
        <Image
          src={image}
          alt={"image"}
          fill
          className="object-cover transition  duration-500 group-hover:scale-105"
        />
      </div>  
      <div className="p-5">
        <h3 className="text-2xl font-bold text-[#FF5757]">{title}</h3>
      
        <div className="mt-5 flex flex-wrap gap-2">
          {techs?.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-red-1/30 bg-red-1/10 px-2 py-0 text-sm text-red-1">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex lg:flex-row flex-col justify-around items-center  gap-3">
          <a
            href={github}
            target="_blank"
            className="flex items-center w-full  justify-center gap-2 rounded-lg border border-black-4 px-4 py-2 text-white transition hover:border-red-[#FF5757] hover:bg-red-1"
          >  
            <FaGithub size={18} /> Github 
          </a>
          <a
            href={live}
            target="_blank"
            className="flex items-center w-full  justify-center gap-2 rounded-lg border border-black-4 px-4 py-2 text-white transition hover:border-red-[#FF5757] hover:bg-red-1"
          > <Link size={18} />Live
          </a>
          <a
             href={`/projects/${id}`}
            className="flex items-center w-full  justify-center gap-2 rounded-lg border border-black-4 px-4 py-2 text-white transition hover:border-red-[#FF5757] hover:bg-red-1"
          >
           <ArrowRight size={18} />Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
