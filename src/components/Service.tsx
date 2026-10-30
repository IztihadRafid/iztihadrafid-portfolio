import {
  FaBug,
  FaDatabase,
  FaLaptopCode,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import ServiceCard from "./ServiceCard";
import SplitText from "./SplitText";

export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Service = () => {
  const services: ServiceItem[] = [
    {
      icon: <FaLaptopCode size={30} />,
      title: "Full Stack Development",
      description: "Modern MERN & Next.js applications.",
    },
    {
      icon: <FaReact size={30} />,
      title: "Frontend Development",
      description: "Beautiful, interactive, responsive UI with React.",
    },
    {
      icon: <FaDatabase size={30} />,
      title: "Backend Development",
      description: "REST APIs, MongoDB, Express.",
    },
    {
      icon: <FaBug size={30} />,
      title: "QA Tester",
      description:
        "Manual & automated testing with Playwright, bug tracking in Jira.",
    },
    {
      icon: <FaWordpress size={30} />,
      title: "WordPress Development",
      description: "Elementor & custom websites.",
    },
  ];
  return (
    <div id="service" className=" mt-10 md:my-14 lg:my-26 max-w-8xl mx-auto">
      <div className="flex flex-col items-center pt-10 md:mb-8 lg:mb-10 mb-0">
        <h1 className="lg:text-6xl  md:text-4xl text-4xl flex items-center justify-center gap-2">
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
            text="Services"
            className="text font-semibold text-red-1 lg:ml-1"
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

      <div className="flex w-[90%] max-w-8xl mx-auto flex-wrap justify-center gap-6 py-10 lg:py-14">
        {services?.map((service, index) => (
          <div
            key={service.title}
            className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
          >
            <ServiceCard
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
