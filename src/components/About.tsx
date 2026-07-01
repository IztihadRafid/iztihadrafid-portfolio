import EduCard from "./EduCard";
import SplitText from "./SplitText";

const About = () => {
  return (
    <div className="bg-black-1 md:mt-20 lg:mt-40">
      <div className="flex flex-col items-center pt-10 md:mb-20 lg:mb-22 mb-0 max-w-8xl mx-auto">
        <h1 className="lg:text-6xl md:text-4xl text-4xl ">
          <SplitText
            text="About Me"
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
        <div className=" md:mt-1 lg:mt-3 h-1 w-44 lg:w-44 rounded-full bg-red-1"></div>
      </div>

     
      <section className="flex flex-col md:flex-row items-start gap-10 p-10 lg:p-6 max-w-8xl mx-auto">
         <section className="md:w-1/2 h-full bg-black-2 border  border-gray-700 rounded-xl p-6">
        <h3 className="text-4xl text-white mb-6">👋 Assalamu Alaikum</h3><br></br>
        <p className="text-xl leading-8 text-gray-1">
          I`m Md. Iztihad Rafid, a passionate Web Developer focused on
           new modern, responsive, user-friendly interactive web applications.<br></br><br></br> I`ve
          experience working with modern tools like MERN stack, Nextjs, TypeScript. I love to tur new ideas into real-world
          applications by maintaining clean, resuable, scalable, and efficient code. <br></br><br></br> My
          goal is to improve my development new skills in tech fields and keep contribution
          to impactful projects that solve real-world problems.
        </p>
      </section>
      <section className="md:w-1/2">
         <h3 className="text-white text-4xl text-center mb-6">Education</h3>
        <EduCard heading={"Bachelor of Science (BSc)"} subHeading={"Computer Science & Engineering (CSE)"} institute={"North South University, Dhaka"} date={"2020 - 2025"}></EduCard>
        <EduCard  heading={"Higher Secondary Certificate (HSC)"} subHeading={"Science"} institute={"Uttara High School & College"} date={"2018 - 2019"}></EduCard>
        <EduCard  heading={"Secondary School Certificate (SSC)"} subHeading={"Science"} institute={"Uttara High School & College"} date={"2016 - 2017"}></EduCard>
      </section>
      </section>
    </div>
  );
};

export default About;
