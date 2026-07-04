"use client";
import { BriefcaseBusiness, Mail, Rocket } from "lucide-react";
import SplitText from "./SplitText";
import SubmitBtn from "./SubmitBtn";
import { useRef } from "react";
import { useToast } from "./toast-trigger";

const Contact = () => {
  const { addToast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const handlSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    console.log(email, subject, message);
    addToast({
      message: "Message sent!",
      description: "I'll get back to you within 24 hours.",
      type: "success",
    });

    e.currentTarget.reset();
  };
  return (
    <div className="bg-black-1/40 backdrop-blur-md md:mt-8 lg:mt-10 text-white" id="contact">
      <div className="flex flex-col items-center pt-10  lg:mb-10 mb-0 max-w-8xl mx-auto">
        <h1 className="lg:text-6xl md:text-4xl text-4xl ">
          <SplitText
            text="Contact"
            className=" text font-semibold  text-red-1"
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
           <SplitText
            text="Me"
            className=" text font-semibold  text-gray-1 ml-3"
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
      <p className="text-center text-gray-2 mb-10">
        Have a project in mind or want to discuss an opportunity? Feel free to
        reach out and let`s build something amazing together.
      </p>

      <section className="w-full flex lg:flex-row flex-col lg:items-start items-center justify-between gap-6 max-w-8xl mx-auto">
        <div className="lg:w-1/2 mx-auto w-[80%] border border-gray-4 rounded-2xl bg-[#151515] p-10">
          <h4 className="text-3xl font-semibold mb-3">Let`s <span className="text-red-1">Connect</span></h4>
          <p className="text-gray-1 mb-3">
            I`m always interested in new opportunities, collaborations,
            reprsentations, and exciting projects. Whether you have a question,
            job opportunity, feel free to send me a message.
          </p>
          <div className="flex justify-start items-center mb-3">
            <Mail
              color="#ff5757"
              className="border border-red-1 rounded-full p-3 w-12 h-12 mr-3"
            />
            <div>
              <p>Mail</p>
              <p className="text-gray-2">iztihadrafid10@gmail.com</p>
            </div>
          </div>
          <div className="flex justify-start items-center mb-3">
            <BriefcaseBusiness
              color="#ff5757"
              className="border border-red-1 rounded-full p-3 w-12 h-12 mr-3"
            />
            <div>
              <p>Available</p>
              <p className="text-gray-2">Frontend & MERN Stack Projects</p>
            </div>
          </div>
          <div className="flex justify-start items-center mb-3">
            <Rocket
              color="#ff5757"
              className="border border-red-1 rounded-full p-3 w-12 h-12 mr-3"
            />
            <div>
              <p>Response Time</p>
              <p className="text-gray-2">Within 24 hours</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mx-auto w-[80%] border border-gray-4 rounded-2xl bg-[#161618] p-10">
          <form ref={form} onSubmit={handlSubmit}>
            <div>
              <label className="text-gray-1 ">Email Address</label>
              <input
                type="email"
                required
                name="email"
                placeholder="Enter Email Address"
                className="w-full border border-gray-4 rounded-lg p-3 mb-3 mt-2 bg-[#101012]"
              />
            </div>
            <div>
              <label className="text-gray-1 ">subject Line</label>
              <input
                required
                type="text"
                name="subject"
                placeholder="Enter Subject"
                className="w-full border border-gray-4 rounded-lg p-3 mb-3 mt-2 bg-[#101012]"
              />
            </div>
            <div>
              <label className="text-gray-1 ">Message</label>
              <textarea
                required
                rows={5}
                name="message"
                placeholder="Write Your Message"
                className="w-full border border-gray-4 rounded-lg p-3 mb-3 mt-2 bg-[#101012]"
              />
            </div>
            <div className="my-2">
              <SubmitBtn type="submit"></SubmitBtn>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
