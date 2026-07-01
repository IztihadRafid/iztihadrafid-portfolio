import Image, { StaticImageData } from "next/image";
import React from "react";
import styled from "styled-components";

interface CardSkillProps {
  img: string | StaticImageData;
  alt: string;
  title: string;
}
const CardSkill = ({ img, alt,title }: CardSkillProps) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="imageWrapper">
          <Image
            src={img}
            alt={alt}
            fill
            className="cardImage"
            
          />
        </div>

        <h3 className="title">{title}</h3>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 100px;
    aspect-ratio: 1;
    padding: 10px;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.35s ease;
  }

  .card:hover {
    transform: scale(1.5);
  }

  .imageWrapper {
    position: relative;
    width: 100%;
    height: calc(100% - 40px);
    border-radius: 12px;
    overflow: hidden;
  }

  .cardImage {
    object-fit: contain;
    transition: transform 0.35s ease;
  }

  .card:hover .cardImage {
    transform: scale(1.05);
  }

  .title {
    margin-top: 10px;
    text-align: center;
    color: white;
    font-size: 16px;
    font-weight: 400;
    transition: color 0.35s ease;
  }

  .card:hover .title {
    color: #D84846;
  }
`;

export default CardSkill;