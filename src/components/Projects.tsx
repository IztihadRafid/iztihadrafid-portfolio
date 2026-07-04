import SplitText from "./SplitText";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/Project";

const Projects = () => {
 
  return (
    <div className="bg-black-1/40 backdrop-blur-md md:mt-8 lg:mt-10  lg:max-w-8xl mx-auto">
      <div className="flex flex-col items-center pt-8 md:mb-16 lg:mb-18 mb-0 ">
        <h1 className="lg:text-6xl md:text-4xl text-4xl " id="projects">
            <SplitText
            text="My"
            className="text font-semibold text-gray-1"
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
            text="Projects"
            className="text font-semibold text-red-1 md:ml-2 lg:ml-4"
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

        <div className=" md:mt-1 lg:mt-3 h-1 w-44 lg:w-44 rounded-full bg-red-1"></div>
        <p className="text-center text-lg  my-6 text-gray-2">
          A collection of projects I`ve built.
        </p>
      </div>

      {/* projects */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-8xl">
        {
            projects?.map((project)=>(
                <ProjectCard key={project?.title} id={project?.id} title={project?.title} description={project?.description} techs={project?.techs} image={project?.image} github={project?.github} live={project?.live}></ProjectCard>
            ))
        }
      </section>
    </div>
  );
};

export default Projects;
