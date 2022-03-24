import React from "react";
import styled from "styled-components";
import MainImage from "../mainSection/MainImage";
import pic from "../../Images/thumb-concept-7.png";
import {
  HeadingStyled,
  ParagraphStyled,
  Buton,
} from "../../layout/globalStyle";
const MeetOurExperts = () => {
  return (
    <Meet>
      <ExpertsText>
        <HeadingStyled size="3rem">
          <Decoration />
          Meet Our Experts
        </HeadingStyled>
        <ParagraphStyled size="" width="width: 80%;">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </ParagraphStyled>
        <Buton style={{ fontWeight: 600, cursor: "pointer" }}>Learn More</Buton>
      </ExpertsText>
      <MainImage width="100%" pic={pic} />
    </Meet>
  );
};

const Meet = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ExpertsText = styled.div`
  width: 50%;
  @media screen and (max-width: 968px) {
    & {
      width: 80%;
      text-align: center;
      align-items: center;
    }
  }
  @media screen and (max-width: 480px) {
    & {
      width: 100%;
    }
  }
`;
const Decoration = styled.h1`
  &::after {
    content: "";
    position: absolute;
    width: 30%;
    height: 9px;
    background-color: #e74040;
    top: -50%;
    left: 0;
  }
  @media screen and (max-width: 968px) {
    &::after {
      display: none;
    }
  }
`;
export default MeetOurExperts;
