import React from "react";
import styled from "styled-components";
import {
  Buton,
  HeadingStyled,
  ParagraphStyled,
} from "../../layout/globalStyle";
const SectionsHeader = (props) => {
  return (
    <Headd align={props.align}>
      <Buton>{props.title}</Buton>
      <HeadingStyled size="3rem">{props.H1} </HeadingStyled>
      <ParagraphStyled>
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
