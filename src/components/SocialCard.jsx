import { FileText } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";

const SocialCard = () => {
  return (
    <StyledWrapper>
      <div className=" grid lg:grid-cols-4 gap-4 grid-cols-2 lg:p-10 pb-6">
        <a
          href="https://github.com/IztihadRafid"
          target="_blank"
          rel="noopener noreferrer"
          className="socialContainer containerOne text-lg  text-white "
        >
          <FaGithub size={30} className="socialSvg mr-2" />Github
        </a>
        <a
          href="https://drive.google.com/file/d/1yxEl2xWfxN8k6JGTASEtVpz1KoyRUpdm/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="socialContainer containerTwo text-lg   "
        >
          <FileText size={30} className="socialSvg mr-1" /><span className="text-white">Resume</span>
        </a>
        
        <a href="https://www.linkedin.com/in/md-iztihad-rafid-2334992b3/"  target="_blank"
          rel="noopener noreferrer" className="socialContainer containerThree text-lg  ">
            <FaLinkedin size={30} className="socialSvg mr-2" /><span className="text-white">Linkedin</span>
         
        </a>
        <a  href="tel:+8801963225525"  rel="noopener noreferrer" className="socialContainer containerFour text-lg ">
         <FaWhatsapp size={30} className="socialSvg mr-2" /><span className="text-white">Whatsapp</span>
         
        </a>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: fit-content;
    height: fit-content;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 35px 35px;
    gap: 50px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.055);
  }

  /* for all social containers*/
  .socialContainer {
    width: 140px;
    height: 52px;
    background-color: #1A2131;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition-duration: 0.3s;
  }
  /* Github*/
  .containerOne:hover {
    background-color: #111827;
    transition-duration: 0.3s;
    transform: scale(1.2);
    border-radius: 15px;
    
  }
  /* twitter*/
  .containerTwo:hover {
    background-color: #F59E0B;
    transition-duration: 0.3s;
    transform: scale(1.2);
    border-radius: 15px;
  }
  /* linkdin*/
  .containerThree:hover {
    background-color: #0072b1;
    transition-duration: 0.3s;
    transform: scale(1.2);
    border-radius: 15px;
  }
  /* Whatsapp*/
  .containerFour:hover {
    background-color: #25d366;
    transition-duration: 0.3s;
    transform: scale(1.2);
    border-radius: 15px;
  }

  .socialContainer:active {
    transform: scale(0.9);
    transition-duration: 0.3s;
  }

  .socialSvg {
    width: 22px;
  }

  .socialSvg path {
    fill: rgb(255, 255, 255);
  }

  .socialContainer:hover .socialSvg {
    animation: slide-in-top 0.3s both;
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default SocialCard;
