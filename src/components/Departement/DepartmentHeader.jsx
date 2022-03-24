import React from "react";
import styled from "styled-components";
import {
  Buton,
  HeadingStyled,
  ParagraphStyled,
} from "../../layout/globalStyle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const SectionsHeader = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 150 });
  }, []);
  return (
    <Headd data-aos="slide-down" data-aos-delay="50" align={props.align}>
      <Buton data-aos="fade-up" data-aos-delay="150">
        {props.title}
      </Buton>
      <HeadingStyled data-aos="zoom-in" data-aos-delay="250" size="3rem">
        {props.H1}{" "}
      </HeadingStyled>
      <ParagraphStyled data-aos="fade-up" data-aos-delay="350">
        Problems trying to resolve the conflict between <br /> the two major
        realms of Classical physics: Newtonian mechanics
      </ParagraphStyled>
    </Headd>
  );
};
const Headd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.align ? "center" : "flex-start")};
  margin-bottom: 4rem;
  text-align: ${(props) => (props.align ? "center" : "left")};
  a {
    font-weight: 600;
  }
  @media screen and (max-width: 968px) {
    & {
      align-items: center;
      text-align: center;
    }
  }
`;
export default SectionsHeader;
