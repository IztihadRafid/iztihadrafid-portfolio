"use client";
import Image from "next/image";
import ButtonHire from "./ButtonHire";
import SplitText from "./SplitText";
import TextType from "./TextType";
import myImg from "../../public/assets/mypic.webp";
import ProfileCard from "./ProfileCard";
import SocialCard from "./SocialCard";
const Banner = () => {
  return (
    <div className="max-w-8xl mx-auto ">
      <div className="flex md:flex-row flex-col justify-between items-center p-10">
        <section className="">
          <SplitText
            text="Hi, I`m"
            className="text-6xl text font-semibold  text-red-1"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <div>
            <h1 className="text-4xl lg:text-6xl font-semibold text-center md:text-left text-white mb-6">
              Md. Iztihad Rafid
            </h1>
          </div>
          <div className="text-center md:text-left">
            <TextType
              className="text-2xl text-gray-2"
              text={["Frontend Developer", "MERN Stack Developer"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
          </div>

          <div className="mt-10 mb-10 flex justify-center md:justify-start items-center">
            <ButtonHire
              text="Hire Me"
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=iztihadrafid10@gmail.com"
            />
          </div>
        </section>
        <section className="flex items-center justify-center lg:py-10 ">
          <div className="relative w-full overflow-x-hidden">
            {/* Glow Effect outside image*/}
            {/* <div className="absolute -inset-1 rounded-full bg-linear-to-r from-yellow-1 to-[#F59E0B] blur-2xl opacity-20"></div> */}

            {/* Image  */}
            {/* <div className="relative rounded-full p-1 bg-linear-to-r from-yellow-1 to-[#F59E0B]">
              <Image
                src={myImg}
                alt="Md. Iztihad Rafid"
                width={400}
                height={400}
                className="rounded-full border-4 border-gray-2 transition-transform duration-500 hover:scale-105"
                
              />
              
            </div> */}
            <ProfileCard
              name=""
              title=""
              handle="javicodes"
              status="Online"
              contactText="Contact Me"
              avatarUrl={"/assets/mypic.webp"}
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowColor="rgba(125, 190, 255, 0.67)"
              iconUrl="../../public/assets/mypic.webp"
              behindGlowEnabled
              innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            />
          </div>
        </section>
      </div>
      <section className="flex justify-center items-center">
              <SocialCard></SocialCard>
      </section>
    </div>
  );
};

export default Banner;
