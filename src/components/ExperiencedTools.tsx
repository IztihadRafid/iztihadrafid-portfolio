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
import github from "./../../public/assets/github.webp";
import vscode from "./../../public/assets/vs.webp";
import jira from "./../../public/assets/jira.webp";
import apidog from "./../../public/assets/apigod.webp";;
import postman from "./../../public/assets/postman.webp";
import SplitText from "./SplitText";
import CardSkill from "./CardSkill";
import TrueFocus from "./TrueFocus";

const ExperiencedTools = () => {
  return (
    <div className="bg-black-1 lg:pb-10 pb-4 ">
      <div className="flex flex-col items-center pt-10 md:mb-20 lg:mb-22 mb-0">
        <h1 className="lg:text-6xl md:text-4xl text-4xl text-yellow-1">
          <SplitText
            text="Skills & Tools"
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
      <section className="text-white flex justify-center mt-15 lg:justify-start items-center max-w-8xl mx-auto mb-10">
        <TrueFocus
          sentence="Web Technologies"
          manualMode={false}
          blurAmount={3}
          borderColor="#D84846"
          animationDuration={0.5}
          pauseBetweenAnimations={1}
          className=" text-xl md:text-3xl lg:text-4xl "
        />
      </section>
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


      {/* right content tools */}
        <section className="text-white flex justify-center mt-15 lg:justify-end items-center max-w-8xl mx-auto mb-10">
        <TrueFocus
          sentence="Tools & Platforms"
          manualMode={false}
          blurAmount={3}
          borderColor="#D84846"
          animationDuration={0.5}
          pauseBetweenAnimations={1}
          className=" text-xl md:text-3xl lg:text-4xl "
        />
      </section>
       <div className="flex justify-center lg:justify-end max-w-8xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-[repeat(13,minmax(0,1fr))] items-center gap-4 p-6  border border-black-4 lg:rounded-full lg:shadow-md lg:shadow-red-500">
        <CardSkill img={github} alt="github" title="Github"></CardSkill>
        <CardSkill img={vscode} alt="CSS" title="VScode"></CardSkill>
        <CardSkill img={jira} alt="Jira" title="Jira"></CardSkill>
        <CardSkill img={apidog} alt="Apidog" title="Apidog"></CardSkill>
        <CardSkill img={postman} alt="postman" title="Postman"></CardSkill>
      
      </div>
       </div>
    </div>
  );
};

export default ExperiencedTools;
