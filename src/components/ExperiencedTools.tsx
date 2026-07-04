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
import wp from "./../../public/assets/wp.png";
import github from "./../../public/assets/github.webp";
import vscode from "./../../public/assets/vs.webp";
import jira from "./../../public/assets/jira.webp";
import apidog from "./../../public/assets/apigod.webp";
import postman from "./../../public/assets/postman.webp";
import SplitText from "./SplitText";
import TrueFocus from "./TrueFocus";

const ExperiencedTools = () => {

  return (
    <div className="lg:pb-8 pb-4 mx-auto max-w-8xl">
      <div className="flex flex-col items-center pt-10 md:mb-8 lg:mb-10 mb-0">
        <h1 className="lg:text-6xl md:text-4xl text-4xl flex items-center justify-center gap-2">
          <SplitText
            text="Skills"
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
        </h1>
        <div className=" md:mt-1 lg:mt-3 h-1 w-44 lg:w-64 rounded-full bg-red-1"></div>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-gray-1 text-center p-2 lg:w-[600px] md:w-96 w-60">
          The Technologies and Tools I have used to build modern, responsive,
          and user-friendly websites and applications.
        </p>
      </div>
      <section className="text-white flex justify-center mt-15 lg:justify-start items-center w-[90%] lg:max-w-8xl mx-auto mb-10">
        <TrueFocus
          sentence="Frontend Technologies"
          manualMode={false}
          blurAmount={3}
          borderColor="#D84846"
          animationDuration={0.5}
          pauseBetweenAnimations={1}
          className=" text-xl md:text-3xl lg:text-4xl "
        />
      </section>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-4 text-white w-[90%] lg:max-w-8xl mx-auto  ">
        <div className="flex flex-col justify-center hover:scale-110 duration-300 hover:text-red-1  items-center border border-black-4 rounded-xl lg:shadow-md lg:shadow-red-500  bg-[#151515] lg:lg:w-[120px]">
          <Image
            src={htmlpic}
            alt="Html"
            width={70}
            height={70}
            className="mx-auto w-13 h-13 "
          />
          <h5>Html</h5>
        </div>
        <div className="flex flex-col justify-center hover:scale-110 duration-300 hover:text-blue-500  items-center border border-black-4 rounded-xl lg:shadow-md lg:shadow-red-500  bg-[#151515] lg:w-[120px]">
          <Image
            src={cssPic}
            alt="CSS"
            width={70}
            height={70}
            className="mx-auto w-10 h-10"
          />
          <h5>CSS</h5>
        </div>
        <div className="flex flex-col justify-center hover:scale-110 duration-300 hover:text-cyan-300  items-center border border-black-4 rounded-xl lg:shadow-md lg:shadow-red-500  bg-[#151515] lg:w-[120px]">
          <Image
            src={tailwind}
            alt="taiwlind"
            width={70}
            height={70}
            className="mx-auto w-13 h-13"
          />
          <h5>Tailwind</h5>
        </div>
        <div className="flex flex-col justify-center hover:scale-110 duration-300 hover:text-yellow-300  items-center border border-black-4 rounded-xl lg:shadow-md lg:shadow-red-500  bg-[#151515] lg:w-[120px]">
          <Image
            src={daisyUiPic}
            alt="daisyUi"
            width={70}
            height={70}
            className="mx-auto w-13 h-13"
          />
          <h5>daisyUI</h5>
        </div>
        <div className="flex flex-col justify-center hover:scale-110 duration-300 hover:text-gray-300  items-center border border-black-4 rounded-xl lg:shadow-md lg:shadow-red-500  bg-[#151515] lg:w-[120px]">
          <Image
            src={shadcn}
            alt="shadcn"
            width={70}
            height={70}
            className="mx-auto w-13 h-13 p-1 rounded-full"
          />
          <h5>ShadCn</h5>
        </div>
        <div className="flex flex-col justify-center hover:scale-110 duration-300 hover:text-yellow-300  items-center border border-black-4 rounded-xl lg:shadow-md lg:shadow-red-500  bg-[#151515] lg:w-[120px]">
          <Image
            src={javascriptimg}
            alt="javascript"
            width={60}
            height={60}
            className="mx-auto w-10 h-10"
          />
          <h5>Javascript</h5>
        </div>
        <div className="flex flex-col  justify-center hover:scale-110 duration-300 hover:text-blue-300  items-center border border-black-4 rounded-xl lg:shadow-md lg:shadow-red-500  bg-[#151515] lg:w-[120px]">
          <Image
            src={typescript}
            alt="typscript"
            width={60}
            height={60}
            className="mx-auto w-10 h-10"
          />
          <h5>Typescript</h5>
        </div>
        <div className="flex flex-col justify-center hover:scale-110 duration-300 hover:text-cyan-300  items-center border border-black-4 rounded-xl lg:shadow-md lg:shadow-red-500  bg-[#151515] lg:w-[120px]">
          <Image
            src={reactPic}
            alt="react"
            width={70}
            height={70}
            className="mx-auto w-13 h-13 "
          />
          <h5>React</h5>
        </div>
        <div className="flex flex-col justify-center hover:scale-110 duration-300 hover:text-white items-center border border-black-4 rounded-xl lg:shadow-md lg:shadow-red-500  bg-[#151515] lg:w-[120px]">
          <Image
            src={nextPic}
            alt="Next"
            width={70}
            height={70}
            className="mx-auto w-13 h-13 p-1 rounded-full"
          />
          <h5>Nextjs</h5>
        </div>
        <div className="flex flex-col justify-center hover:scale-110 duration-300 hover:text-blue-300  items-center border border-black-4 rounded-xl lg:shadow-md lg:shadow-red-500  bg-[#151515] lg:w-[120px]">
          <Image
            src={wp}
            alt="wordpress"
            width={70}
            height={70}
            className="mx-auto w-13 h-13 p-1"
          />
          <h5>Wordpress</h5>
        </div>
        <div className="flex flex-col justify-center hover:scale-110 duration-300 hover:text-white items-center border border-black-4 rounded-xl lg:shadow-md lg:shadow-red-500  bg-[#151515] lg:w-[120px]">
          <Image
            src={firebasePic}
            alt="firebase"
            width={70}
            height={70}
            className="mx-auto w-13 h-13"
          />
          <h5>Firebase</h5>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between lg:items-start w-[90%] lg:max-w-8xl mx-auto">
        {/* left content */}
        <div>
          <section className="text-white flex justify-center mt-15 lg:justify-start items-center max-w-8xl mx-auto mb-10">
            <TrueFocus
              sentence="Backend Technologies"
              manualMode={false}
              blurAmount={3}
              borderColor="#D84846"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
              className=" text-xl md:text-3xl lg:text-4xl "
            />
          </section>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 text-white mx-auto max-w-8xl">
            <div className="flex flex-col justify-center hover:scale-110 duration-300 hover:text-green-300  items-center border border-black-4 rounded-xl lg:shadow-md lg:shadow-red-500  bg-[#151515] lg:w-[120px]">
              <Image
                src={nodejsPic}
                alt="Nodejs"
                width={70}
                height={70}
                className="mx-auto w-18 h-12 p-2"
              />
              <h5>Nodejs</h5>
            </div>
            <div className="flex flex-col justify-center hover:scale-110 duration-300 hover:text-white  items-center border border-black-4 rounded-xl lg:shadow-md lg:shadow-red-500  bg-[#151515] lg:w-[120px]">
              <Image
                src={expressPic}
                alt="Expressjs"
                width={70}
                height={70}
                className="mx-auto w-12  h-12 p-1"
              />
              <h5>Expressjs</h5>
            </div>
            <div className="flex flex-col justify-center hover:scale-110 duration-300 hover:text-green-300  items-center border border-black-4 rounded-xl lg:shadow-md lg:shadow-red-500  bg-[#151515] lg:w-[120px]">
              <Image
                src={mongodb}
                alt="MongoDB"
                width={70}
                height={70}
                className="mx-auto w-12 h-12 p-1"
              />
              <h5>MongoDB</h5>
            </div>
          </div>
        </div>
        {/* right content */}
        <div>
          <section className="text-white flex justify-center mt-15 lg:justify-start items-center  mb-10">
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
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 text-white mx-auto max-w-8xl">
            <div className="flex flex-col justify-center hover:scale-110 duration-300 hover:text-purple-500  items-center border border-black-4 rounded-xl lg:shadow-md lg:shadow-red-500  bg-[#151515] lg:w-[120px]">
              <Image
                src={github}
                alt="github"
                width={70}
                height={70}
                className="mx-auto w-12 h-12 p-2"
              />
              <h5>Github</h5>
            </div>
            <div className="flex flex-col justify-center hover:scale-110 duration-300 hover:text-blue-500  items-center border border-black-4 rounded-xl lg:shadow-md lg:shadow-red-500  bg-[#151515] lg:w-[120px]">
              <Image
                src={vscode}
                alt="Expressjs"
                width={70}
                height={70}
                className="mx-auto w-12  h-12 p-1"
              />
              <h5>VScode</h5>
            </div>
            <div className="flex flex-col justify-center hover:scale-110 duration-300 hover:text-blue-500  items-center border border-black-4 rounded-xl lg:shadow-md lg:shadow-red-500  bg-[#151515] lg:w-[120px]">
              <Image
                src={jira}
                alt="Jira"
                width={70}
                height={70}
                className="mx-auto w-12 h-12 p-1"
              />
              <h5>Jira</h5>
            </div>
            <div className="flex flex-col justify-center hover:scale-110 duration-300 hover:text-white  items-center border border-black-4 rounded-xl lg:shadow-md lg:shadow-red-500  bg-[#151515] lg:w-[120px]">
              <Image
                src={apidog}
                alt="apidog"
                width={70}
                height={70}
                className="mx-auto w-12 h-12 p-1"
              />
              <h5>Apidog</h5>
            </div>
             <div className="flex flex-col justify-center hover:scale-110 duration-300 hover:text-[#fe6a39]  items-center border border-black-4 rounded-xl lg:shadow-md lg:shadow-red-500  bg-[#151515] lg:w-[120px]">
              <Image
                src={postman}
                alt="postman"
                width={70}
                height={70}
                className="mx-auto w-12 h-12 p-1"
              />
              <h5>Postman</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencedTools;
