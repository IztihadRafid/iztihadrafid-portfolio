;
import styled from "styled-components";
import Service from "./Service";

const ServiceCard = ({ icon, title, description }: Service) => {
  return (
    <StyledWrapper>
     <div className="flex items-center justify-center">
         <div className="card">
        <div className="GameImg">
          <div className="Gfooter">
            <div className="SmallIcon" />
            <span className="Descripion w-60">{description}</span>
          </div>
          <span className="GameIcon">{icon}</span>
          <span className="Name w-44 ">{title}</span>
        </div>
      </div>
     </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 250px;
    height: 250px;
    background: #151515;   
    border-radius: 10px;
  }

  .GameIcon {
    transform: translate(-10px, -10px);
    position: absolute;
    width: 150px;
    height: 200px;
    transition: 0.5s;
  }

  .GameImg {
    width: 100%;
    height: 100%;
  }

  .Gfooter {
    width: 100%;
    height: 0%;
    background-color: #262626;
    border-radius: 10px;
    transition: all 0.1s;
  }

  .Name {
    transform: translate(10px, 100px);
    position: absolute;
    background-color: transparent;
    font-weight: bold;
    font-size: 24px;
    transition: 0.3s;
    color: #ff5858;
   
  }

  .Descripion {
    padding: 8px;
    position: absolute;
    transform: translate(0px, 120px);
    opacity: 0%;
    color: #ff5858;
    font-weight: semibold;
    font-size: 18px;

  }
  .GameImg:hover .Descripion {
    opacity: 100%;
   
  }

  .GameImg:hover .Gfooter {
    width: 100%;
    height: 100%;
  }

  .GameImg:hover .SmallIcon {
    width: 60px;
    height: 60px;
  }

  .GameImg:hover .Name {
    transform: translate(15px, -235px);
  }

  .GameImg:hover .GameIcon {
    transform: translate(90px, -150px);
  }
`;

export default ServiceCard;
