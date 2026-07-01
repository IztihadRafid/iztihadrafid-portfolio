import Image from "next/image";

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
import SplitText from "./SplitText";
import CardSkill from "./CardSkill";

const ExperiencedTools = () => {
  return (
    <div className="bg-black-1 lg:pb-10 pb-4">
      <div className="flex flex-col items-center pt-10 md:mb-20 lg:mb-22 mb-0">
        <h1 className="lg:text-6xl md:text-4xl text-4xl text-yellow-1">
          <SplitText
            text="Web Technologies"
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
        <div className=" md:mt-1 lg:mt-3 h-1 w-44 lg:w-64 rounded-full bg-red-1"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-[repeat(13,minmax(0,1fr))]   justify-items-center p-10 lg:p-6 max-w-8xl mt-10 lg:mt-0 mx-auto border border-black-4 lg:rounded-full lg:shadow-md lg:shadow-red-500">
        <CardSkill img={htmlpic} alt="Html" title="Html"></CardSkill>
        <CardSkill img={cssPic} alt="CSS" title="CSS"></CardSkill>
        <CardSkill img={tailwind} alt="Tailwind" title="Tailwind"></CardSkill>
        <CardSkill img={daisyUiPic} alt="DAISY UI" title="Daisy UI"></CardSkill>
        <CardSkill img={shadcn} alt="shadcn" title="ShadCn"></CardSkill>
        <CardSkill
          img={javascriptimg}
          alt="Javascript"
          title="Javascript"
        ></CardSkill>
        <CardSkill
          img={typescript}
          alt="typescript"
          title="Typescript"
        ></CardSkill>
        <CardSkill img={reactPic} alt="ReactJS" title="ReactJS"></CardSkill>
        <CardSkill img={nextPic} alt="Nextjs" title="NextJS"></CardSkill>
        <CardSkill
          img={firebasePic}
          alt="firebase"
          title="Firebase"
        ></CardSkill>
        <CardSkill img={nodejsPic} alt="nodejs" title="Nodejs"></CardSkill>
        <CardSkill
          img={expressPic}
          alt="Expressjs"
          title="ExpressJS"
        ></CardSkill>
        <CardSkill img={mongodb} alt="mongodb" title="MongoDB"></CardSkill>
      </div>
    </div>
  );
};

export default ExperiencedTools;
