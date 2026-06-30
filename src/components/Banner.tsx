import Image from "next/image";
import ButtonHire from "./ButtonHire";
import SplitText from "./SplitText";
import TextType from "./TextType";
import myImg from "../../public/assets/mypic.webp";
const Banner = () => {
  return (
    <div className="max-w-8xl mx-auto">
      <div className="flex justify-between items-center">
        <section>
          <SplitText
            text="Hi, I`m"
            className="text-4xl text font-semibold text-center text-yellow-1"
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
            <h1 className="text-6xl font-semibold text-white mb-6">
              Md. Iztihad Rafid
            </h1>
          </div>
          <div>
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

          <div className="mt-10 mb-10">
            <ButtonHire
              text="Hire Me"
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=iztihadrafid10@gmail.com"
            />
          </div>
        </section>
        <section className="flex items-center justify-center py-10">
          <div className="relative">
            {/* Glow Effect outside image*/}
            <div className="absolute -inset-1 rounded-full bg-linear-to-r from-yellow-1 to-[#F59E0B] blur-2xl opacity-20"></div>

            {/* Image  */}
            <div className="relative rounded-full p-1 bg-linear-to-r from-yellow-1 to-[#F59E0B]">
              <Image
                src={myImg}
                alt="Md. Iztihad Rafid"
                width={400}
                height={400}
                className="rounded-full border-4 border-gray-2 transition-transform duration-500 hover:scale-105"
                
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
