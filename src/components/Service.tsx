import { FaDatabase, FaLaptopCode, FaWordpress } from "react-icons/fa"
import ServiceCard from "./ServiceCard"
import SplitText from "./SplitText"
interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const Service = () => {

    const services = [
        {
            icon: <FaLaptopCode size={60} color="#ff5757" />,
            title: "Full Stack Development",
            description: "Modern MERN & Next.js applications."
        },
        {
            icon: <FaLaptopCode  size={60} color="#ff5757" />,
            title: "Frontend Development",
            description: "Beautiful, interactive, responsive UI with React."
        },
        {
            icon: <FaDatabase size={60} color="#ff5757" />,
            title: "Backend Development",
            description: "REST APIs, MongoDB, Express."
        },
        {
            icon: <FaWordpress size={60} color="#ff5757" />,
            title: "WordPress Development",
            description: "Elementor & custom websites."
        }
    ]
  return (
  <div className=" mt-10 md:my-14 lg:my-26 max-w-8xl mx-auto" id="about">
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
            className="text font-semibold text-red-1 lg:ml-3"
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
      
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6   w-[90%] lg:max-w-8xl mx-auto lg:py-16 px-6 lg:px-10">
        {
        services?.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service?.icon}
            title={service?.title}
            description={service?.description}
          />
        ))
     }
     </div>
    </div>
  )
}

export default Service
