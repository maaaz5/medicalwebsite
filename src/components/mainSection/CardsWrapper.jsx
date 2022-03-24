import React from "react";
import styled from "styled-components";
import InfoCards from "./InfoCards";
const CardsWrapper = () => {
  return (
    <CardsWrappers>
      <InfoCards
        title="Online Appoinement"
        icon="fa-solid fa-heart-pulse"
        description="The gradual accumulation of information about atomic and small-scale behaviour...
"
      />
      <InfoCards
        title="Emergency Case"
        icon="fa-solid fa-stethoscope"
        description="The gradual accumulation of information about atomic and small-scale behaviour...
"
      />
      <InfoCards
        title="Cancer Care"
        icon="fa-solid fa-hand-holding-medical"
        description="The gradual accumulation of information about atomic and small-scale behaviour..."
      />
    </CardsWrappers>
  );
};
const CardsWrappers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 968px) {
    & {
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;
    }
  }

  @media screen and (max-width: 480px) {
    & {
      text-align: center;
    }
  }
`;
export default CardsWrapper;
