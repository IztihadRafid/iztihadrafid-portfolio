import React from "react";
import styled from "styled-components";
interface EduCardProps {
  heading: string;
  institute: string;
  date: string;
  subHeading: string;
}
const EduCard = ({ heading, institute, date, subHeading }: EduCardProps) => {
  return (
    <StyledWrapper>
      <div className="section_our_solution text-gray-1">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="our_solution_category">
              <div className="solution_cards_box">
                <div className="solution_card">
                  <div className="hover_color_bubble" />

                  <div className="solu_title">
                    <h4 className="text-red-1 md:text-2xl mb-2">{heading}</h4>
                  </div>
                  <div className="">
                    <p className="md:text-xl  mb-1">{subHeading}</p>
                    <p className="md:text-[15px]  mb-1">{institute}</p>
                    <p className="md:text-[12px]  mb-1">{date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .section_our_solution .row {
    align-items: center;
  }

  .our_solution_category {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .our_solution_category .solution_cards_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .solution_cards_box .solution_card {
    flex: 0 50%;
   background:#190b0b;
    
    border-radius: 15px;
    margin-bottom: 8px;
    padding: 10px 15px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    min-height: 200px;
    transition: 0.4s;
  }

  .solution_cards_box .solution_card:hover {
    
    color: #fff;
    transform: scale(1.02);
    z-index: 9;
  }

  .solution_cards_box .solution_card:hover::before {
    background: rgba(145, 41, 39, 0.15);
  }

  .solution_cards_box .solution_card:hover .solu_title h3,
  .solution_cards_box .solution_card:hover .solu_description p {
    color: #fff;
  }

  .solution_cards_box .solution_card:before {
    content: "";
    position: absolute;
   background: rgba(145, 41, 39, 0.08);
    width: 170px;
    height: 400px;
    z-index: -1;
    transform: rotate(42deg);
    right: -56px;
    top: -23px;
    border-radius: 35px;
  }

  .solution_cards_box .solution_card:hover .solu_description button {
    background: #fff !important;
    color: #309df0;
  }

  .solution_card .so_top_icon {
  }

  .solution_card .solu_title div {
    color: #212121;
    font-size: 1.3rem;
    margin-top: 13px;
    margin-bottom: 13px;
  }

  .solution_card .solu_description p {
    font-size: 15px;
    margin-bottom: 15px;
  }

  .solution_card .solu_description button {
    border: 0;
    border-radius: 15px;
    background: linear-gradient(
      140deg,
      #42c3ca 0%,
      #42c3ca 50%,
      #42c3cac7 75%
    ) !important;
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
    padding: 5px 16px;
  }

  .our_solution_content div {
    text-transform: capitalize;
    margin-bottom: 1rem;
    font-size: 2.5rem;
  }

  .our_solution_content p {
  }

  .hover_color_bubble {
    position: absolute;
   background: rgba(145, 41, 39, 0.12);
    width: 100rem;
    height: 100rem;
    left: 0;
    right: 0;
    z-index: -1;
    top: 16rem;
    border-radius: 50%;
    transform: rotate(-36deg);
    left: -18rem;
    transition: 0.7s;
  }

  .solution_cards_box .solution_card:hover .hover_color_bubble {
    top: 0rem;
  }

  .solution_cards_box .solution_card .so_top_icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #fff;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .solution_cards_box .solution_card .so_top_icon img {
    width: 40px;
    height: 50px;
    object-fit: contain;
  }

  /*start media query*/
  @media screen and (min-width: 320px) {
    .sol_card_top_3 {
      position: relative;
      top: 0;
    }

    .our_solution_category {
      width: 100%;
      margin: 0 auto;
    }

    .our_solution_category .solution_cards_box {
      flex: auto;
    }
  }

  @media only screen and (min-width: 768px) {
    .our_solution_category .solution_cards_box {
      flex: 1;
    }
  }

  @media only screen and (min-width: 1024px) {
    .sol_card_top_3 {
      position: relative;
      top: -3rem;
    }

    .our_solution_category {
      width: 80%;
      margin: 0 auto;
    }
  }
`;

export default EduCard;
