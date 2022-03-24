import React from "react";
import styled from "styled-components";

const InfoCards = (props) => {
  return (
    <Card>
      <CardsLogo>
        <i class={props.icon}></i>
      </CardsLogo>
      <CardHeader>{props.title}</CardHeader>
      <CardText>{props.description}</CardText>
    </Card>
  );
};
const CardText = styled.p`
  color: var(--DarkGray);
  font-weight: 500;
`;
const CardHeader = styled.h3`
  display: inline-block;
  font-size: 1.25rem;
  margin: 2rem 0rem;
  color: var(--secondaryColorDark);
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 30%;
    height: 4px;
    background-color: #ff685b;
    border-radius: 10px;
    bottom: -50%;
    left: 0;
  }
`;
const CardsLogo = styled.div`
  i {
    padding: 20px;
    display: inline-flex;
    align-self: center;
    justify-self: center;
    border-radius: 100%;
    background-color: var(--mainColorLight);
    color: #ffffff;
    font-size: 2rem;
  }
`;
const Card = styled.div`
  padding: 40px;
  background-color: #ffffff;
  margin: 10px;
  box-shadow: 0px 0px 10px rgba(0, 00, 0, 0.1);
  @media screen and (max-width: 968px) {
    & {
      flex-basis: 45%;
    }
  }
  @media screen and (max-width: 480px) {
    & {
      flex-basis: 100%;
    }
  }
`;
export default InfoCards;
