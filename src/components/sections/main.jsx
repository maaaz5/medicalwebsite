import React from "react";
import styled from "styled-components";
import Header from "../header/header";
import MainContent from "../mainSection/MainContent";
import CardsWrapper from "../mainSection/CardsWrapper";
import { Containers } from "../../layout/globalStyle";
const Main = () => {
  return (
    <First>
      <Containers>
        <Header />
        <MainContent />
        <CardsWrapper />
      </Containers>
    </First>
  );
};

const First = styled.div`
  padding-bottom: 3em;
  background-color: #fafafa;
`;
export default Main;
