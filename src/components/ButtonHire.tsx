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
      <div className="container">
        <div className="btn">
          <a target={target} href={href}>{text}</a>
        </div>
      </div>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  .container .btn {
    position: relative;
    top: 0;
    left: 0;
    width: 200px;
    height: 50px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container .btn a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    padding: 10px;
    letter-spacing: 1px;
    text-decoration: none;
    overflow: hidden;
    color: #fff;
    font-weight: 400px;
    z-index: 1;
    transition: 0.5s;
    backdrop-filter: blur(15px);
  }

  .container .btn:hover a {
    letter-spacing: 3px;
  }

  .container .btn a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.15),
      transparent
    );
    transform: skewX(45deg) translate(0);
    transition: 0.5s;
    filter: blur(0px);
  }

  .container .btn:hover a::before {
    transform: skewX(45deg) translate(200px);
  }

  .container .btn::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
    bottom: -5px;
    width: 30px;
    height: 10px;
    background: #f00;
    border-radius: 10px;
    transition: 0.5s;
    transition-delay: 0.5;
  }

  .container .btn:hover::before /*lightup button*/ {
    bottom: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
  }

  .container .btn::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
    top: -5px;
    width: 30px;
    height: 10px;
    background: #f00;
    border-radius: 10px;
    transition: 0.5s;
    transition-delay: 0.5;
  }

  .container .btn:hover::after /*lightup button*/ {
    top: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
  }

  .container .btn:nth-child(1)::before,
  .container .btn:nth-child(1)::after {
    background: #f59e0b;
    box-shadow:
      0 0 5px #fbbf24,
      0 0 15px #fbbf24,
      0 0 10px #fbbf24,
      0 0 30px #fbbf24;
  }
`;

export default ButtonHire;
