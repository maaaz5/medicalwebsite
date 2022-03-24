import React from "react";
import MainImage from "./MainImage";
import styled from "styled-components";
import MainText from "./MainText";
import pic from "../../Images/doktor.svg";
export const MainContent = () => {
  return (
    <Main>
      <MainText />
      <MainImage width="100%" pic={pic} />
    </Main>
  );
};
const Main = styled.section`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media screen and (max-width: 968px) {
    & {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
  }
`;
export default MainContent;
