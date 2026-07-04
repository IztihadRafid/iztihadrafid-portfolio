import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import styled from 'styled-components';

const SocialCards = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <ul>
          <li className="iso-pro">
            <span />
            <span />
            <span />
            <a href="https://www.facebook.com/Md.IztihadRafid" target="_blank">
             <FaFacebookF  className="svg"/>
            </a>
            <div className="text">Facebook</div>
          </li>
          <li className="iso-pro">
            <span />
            <span />
            <span />
            <a href="https://www.linkedin.com/in/md-iztihad-rafid-2334992b3/" target="_blank">
             <FaLinkedinIn className="svg" />
            </a>
            <div className="text">Linkedin</div>
          </li>
          <li className="iso-pro">
            <span />
            <span />
            <span />
            <a href="https://github.com/IztihadRafid" target="_blank">
              <FiGithub className="svg" />
            </a>
            <div className="text">Github</div>
          </li>
        </ul>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    max-width: fit-content;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 1rem;
    backdrop-filter: blur(15px);
   
    transition: 0.5s;
  }

  .card:hover {
    animation: ease-out 5s;
   
  }

  .card ul {
    padding: 1rem;
    display: flex;
    list-style: none;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .card ul li {
    cursor: pointer;
  }

  .svg {
    transition: all 0.3s;
    /* if you find some problems change w - h : 30px*/
    padding: 16px;
    height: 56px;
    width: 56px;
    border-radius: 100%;
    color: #ff5757;
    fill: currentColor;
    box-shadow:
      inset 0 0 20px rgba(255, 255, 255, 0.3),
      inset 0 0 5px rgba(255, 255, 255, 0.5),
      0 5px 5px rgba(0, 0, 0, 0.164);
  }

  .text {
    opacity: 0;
    border-radius: 5px;
    padding: 5px;
    transition: all 0.3s;
    color: #ff5757;

    position: absolute;
    z-index: 9999;
   
  }

  /*isometric prooyection*/
  .iso-pro {
    transition: 0.5s;
  }
  .iso-pro:hover a > .svg {
    transform: translate(15px, -15px);
    border-radius: 100%;
  }

  .iso-pro:hover .text {
    opacity: 1;
    transform: translate(25px, -2px) skew(-5deg);
  }

  .iso-pro:hover .svg {
    transform: translate(5px, -5px);
  }

  .iso-pro span {
    opacity: 0;
    position: absolute;
    color: #1877f2;
    border-color: #1877f2;
    box-shadow:
      inset 0 0 20px rgba(255, 255, 255, 0.3),
      inset 0 0 5px rgba(255, 255, 255, 0.5),
      0 5px 5px rgba(0, 0, 0, 0.164);
    border-radius: 50%;
    transition: all 0.3s;
    height: 60px;
    width: 60px;
  }

  .iso-pro:hover span {
    opacity: 1;
  }

  .iso-pro:hover span:nth-child(1) {
    opacity: 0.2;
  }

  .iso-pro:hover span:nth-child(2) {
    opacity: 0.4;
    transform: translate(5px, -5px);
  }

  .iso-pro:hover span:nth-child(3) {
    opacity: 0.6;
    transform: translate(10px, -10px);
  }`;

export default SocialCards;
