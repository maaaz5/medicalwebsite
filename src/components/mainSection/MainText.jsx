import React from "react";
import styled from "styled-components";
import ButtonsHovered from "../buttons/ButtonsHovered";
import {
  Buton,
  HeadingStyled,
  ParagraphStyled,
} from "../../layout/globalStyle";

export const MainText = (props) => {
  return (
    <Text>
      <JoinUS>
        <Buton href="#">Join Us</Buton>
      </JoinUS>
      <HeadingStyled size="3.5rem">A Great Place to Receive Care</HeadingStyled>
      <ParagraphStyled size="1.25rem" width="90%">
        Medical Recover is most focused in helping you discover your most
        beautiful smile
      </ParagraphStyled>
      <Buttons>
        <ButtonsHovered
          hoveredClr="white"
          content="Get Quote Now"
          color="white"
        ></ButtonsHovered>
        <ButtonsHovered
          content="Learn More"
          color="var(--mainColorLight)"
          filled="false"
          hoveredClr="white"
        ></ButtonsHovered>
      </Buttons>
    </Text>
  );
};
const Buttons = styled.div`
  margin: 2rem 0rem;
  font-size: 1rem;
  a + a {
    margin-left: 1rem;
  }
`;
const Text = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
const JoinUS = styled.div`
  margin-top: 4rem;
  a {
    font-weight: bold;
  }
`;
export default MainText;
