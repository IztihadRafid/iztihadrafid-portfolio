import { JSX } from "react";
import styled from "styled-components";

interface ButtonHireProps {
  text: string;
  href?: string;
  target?: string;
}

const ButtonHire = ({ text, href ,target }: ButtonHireProps): JSX.Element => {
  return (
     <StyledWrapper>
       <div className="btn ">
          <a target={target} href={href} >{text}</a>
        </div>
    </StyledWrapper>
    
  );
};
const StyledWrapper = styled.div`
  .btn {
    font-size: 1.2rem;
    padding: 1rem 2.5rem;
    border: none;
    outline: none;
    border-radius: 0.4rem;
    cursor: pointer;
    text-transform: uppercase;
    background-color: rgb(14, 14, 26);
    color: #E7E7E7;
    font-weight: 700;

    box-shadow: 0px 0px 30px #912927;

    -webkit-box-reflect: below 10px
      linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.4)
      );

    transition:
      background 0.6s ease,
      color 0.6s ease,
      box-shadow 0.6s ease,
      transform 0.6s ease;
  }

  .btn:hover {
    background: linear-gradient(
      135deg,
      #4A1415 0%,
      #912927 60%,
      #D84846 100%
    );
    color: #FFFFFF;
    box-shadow: 0px 0px 40px rgba(145, 41, 39, 0.7);
    transform: translateY(-2px);
  }

  .btn:active {
    transform: scale(0.95);
  }
`;

export default ButtonHire;
