"use client";
import Image from "next/image";
import EduCard from "./EduCard";
import SplitText from "./SplitText";
import me from "../../public/assets/me.webp";
import EduCard2 from "./EduCard2";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import { motion } from "motion/react";
const About = () => {
  return (
    <div className=" mt-10 md:mt-14 lg:mt-16" id="about">
      <div className="flex flex-col items-center pt-10 md:mb-8 lg:mb-10 mb-0">
        <h1 className="lg:text-6xl md:text-4xl text-4xl flex items-center justify-center gap-2">
          <SplitText
            text="About"
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
            text="Me"
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

      <section className=" gap-10 p-10 lg:p-6 max-w-8xl mx-auto">
        <section className="h-full bg-black-2/40 backdrop-blur-md border flex lg:flex-row flex-col-reverse justify-between border-gray-700/50 rounded-xl p-6">
          <div>
            <h3 className="text-4xl text-white  text-center md:text-left pt-10 md:py-7">
              👋 Assalamu Alaikum
            </h3>
            <br></br>
            <p className="md:text-xl text-lg  leading-8 text-gray-1">
              A Frontend Developer focused on building robust, intuitive, and
              high-performing web applications. I specialize in translating
              complex requirements into functional user experiences, with an
              emphasis on component-driven development, application state
              management, API integration, and maintainable code.
              <br></br>
              <br></br> Beyond development, I'm interested in software testing,
              debugging, and improving application reliability. I continuously
              explore modern engineering practices and leverage AI to enhance
              productivity while maintaining code quality and technical
              ownership.<br></br>
            </p>
          </div>
          <div>
            <Image
              src={me}
              alt="my pic"
              width={300}
              height={300}
              className="rounded-2xl"
            ></Image>
          </div>
        </section>

        {/* Education and Experience sections */}
        <Tabs
          defaultValue="experience"
          className="w-full max-w-8xl mx-auto mt-16"
        >
          <TabsList className="grid w-full max-w-xl grid-cols-2 mx-auto mb-10 rounded-2xl  p-3 bg-black-1">
            <TabsTrigger
              value="education"
              className="md:text-lg text-md rounded-lg text-red-1 transition-all duration-300  hover:bg-red-1/20 hover:text-white data-[state=active]:bg-red-1 data-[state=active]:text-white p-3 "
            >
              Education
            </TabsTrigger>

            <TabsTrigger
              value="experience"
              className="md:text-lg text-md rounded-lg text-red-1 transition-all duration-300 hover:bg-red-1/20 hover:text-white data-[state=active]:bg-red-1 data-[state=active]:text-white p-3"
            >
              Work Experience
            </TabsTrigger>
          </TabsList>

          {/* Education */}
          <TabsContent value="education" className="mt-6 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="space-y-6"
            >
              <EduCard
                heading="Bachelor of Science (BSc)"
                subHeading="Computer Science & Engineering (CSE)"
                institute="North South University, Dhaka"
                date="2020 - 2025"
              />

              <EduCard
                heading="Higher Secondary Certificate (HSC)"
                subHeading="Science"
                institute="Uttara High School & College"
                date="2019"
              />

              <EduCard
                heading="Secondary School Certificate (SSC)"
                subHeading="Science"
                institute="Uttara High School & College"
                date="2017"
              />
            </motion.div>
          </TabsContent>

          {/* Experience */}
          <TabsContent value="experience" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <EduCard2
                heading="Intern Frontend Developer"
                subHeading="Vista Systech Ltd."
                institute="North South University, Dhaka"
                date="1st Oct, 2025 - 31st Mar, 2026"
                responsibilities={[
                  "Implemented and enhanced CMS features, including reusable UI components, dynamic content interfaces, and form workflows connected to backend APIs.",
                  "Built and maintained corporate website pages with reusable layouts, structured content, and consistent user experiences.",
                  "Implemented form handling and validation, managed API data integration, and addressed issues in frontend-to-backend communication.",
                  "Implemented loading states and Suspense boundaries to manage asynchronous content rendering and improve the user experience during data loading.",
                  "Developed and customized business website pages, improving layout consistency, content presentation, and responsive behavior.",
                  "Identified and resolved UI, functionality, and integration issues through debugging and manual testing.",
                  "Prepared test cases and checklists, reported bugs in Jira, and performed smoke, sanity, and regression testing to verify fixes.",
                ]}
              />
            </motion.div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default About;
