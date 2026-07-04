import { Mail, MapPin, Phone } from "lucide-react";
import SocialCards from "./SocialCards";

const Footer = () => {
  return (
    <div className="bg-[#151515]/40  backdrop-blur-md  border border-gray-3 hovr:border-red-1 p-10 max-w-8xl mx-auto text-white rounded-2xl my-6 md:my-20 lg:mt-30 mb-10">
      <h3 className="text-5xl font-semibold text-center p-4">
        Let`s <span className="text-red-1">Start</span>
      </h3>
      <p className="text-gray-400 text-center pb-2 mb-6">
        Let`s Building Something Together
      </p>
      <div className="flex lg:flex-row flex-col gap-4 justify-between items-center">
        <div className="bg-[#191919] border border-gray-4 w-full rounded-2xl p-4 hover:bg-[#151515] lg:p-6 flex gap-4 justify-start items-center transition-colors duration-300">
          <Mail
            color="#ff5757"
            size={40}
            className="p-2 border border-[#ff5757] rounded-lg"
          />
          <div>
            <p>Email</p>
            <p>iztihadrafid@gmail.com</p>
          </div>
        </div>
        <div className="bg-[#191919] border border-gray-4 w-full rounded-2xl p-4 hover:bg-[#151515] lg:p-6 flex gap-4 justify-start items-center transition-colors duration-300">
          <Phone
            color="#ff5757"
            size={40}
            className="p-2 border border-[#ff5757] rounded-lg"
          />
          <div>
            <p>Phone</p>
            <p>+880 1963225525</p>
          </div>
        </div>
        <div className="bg-[#191919] border border-gray-4 w-full rounded-2xl p-4 hover:bg-[#151515] lg:p-6 flex gap-4 justify-start items-center transition-colors duration-300">
          <MapPin
            color="#ff5757"
            size={40}
            className="p-2 border border-[#ff5757] rounded-lg"
          />
          <div>
            <p>Location</p>
            <p>Uttara, Dhaka</p>
          </div>
        </div>
      </div>
      <div className="border border-gray-800 md:my-8 my-4 lg:my-10"></div>
      <div className="flex lg:flex-row flex-col items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold lg:text-left text-center">
            Web Developer
          </h2>
          <p className="text-gray-3 lg:text-left text-center">
            Let`s turn ideas into reality.
          </p>
        </div>
        <div>
          <SocialCards></SocialCards>
        </div>
        <div>
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Iztihad Rafid. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
