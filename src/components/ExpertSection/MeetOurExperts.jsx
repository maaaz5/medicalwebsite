import React from "react";
import styled from "styled-components";
import MainImage from "../mainSection/MainImage";
import pic from "../../Images/thumb-concept-7.png";
import {
  HeadingStyled,
  ParagraphStyled,
  Buton,
} from "../../layout/globalStyle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const MeetOurExperts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 150 });
  }, []);
  return (
    <Meet>
      <ExpertsText>
        <HeadingStyled data-aos="zoom-in-right" data-aos-delay="50" size="3rem">
          <Decoration />
          Meet Our Experts
        </HeadingStyled>
        <ParagraphStyled
          data-aos="fade-right"
          data-aos-delay="250"
          size=""
          width="width: 80%;"
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </ParagraphStyled>
        <Buton
          data-aos="fade-down"
          data-aos-delay="350"
          style={{ fontWeight: 600, cursor: "pointer" }}
        >
          Learn More
        </Buton>
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
  @media screen and (max-width: 968px) {
    & {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
  }
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
