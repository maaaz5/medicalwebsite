import React from "react";
import styled from "styled-components";
export const FooterUls = (props) => {
  return (
    <FooterUl>
      <FooterLiHeader>{props.MainTitle}</FooterLiHeader>
      <FooterLi>
        <a href="#">
          <i class={props.icon1}></i>
          {props.title1}
        </a>
      </FooterLi>
      <FooterLi>
        <a href="#">
          <i class={props.icon2}></i>
          {props.title2}
        </a>
      </FooterLi>
      <FooterLi>
        <a href="#">
          <i class={props.icon3}></i>
          {props.title3}
        </a>
      </FooterLi>
      <FooterLi>
        <a href="#">
          <i class={props.icon4}></i>
          {props.title4}
        </a>
      </FooterLi>
    </FooterUl>
  );
};
const FooterUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  margin: 0rem 1rem;
  width: 50%;
  @media screen and (max-width: 968px) {
    & {
      flex: 30%;
      text-align: center;
      align-items: center !important;
    }
  }
  @media screen and (max-width: 480px) {
    & {
      margin: 10px 0px;
      flex: 100%;
      text-align: center;
      align-items: center !important;
    }
  }
`;
const FooterLi = styled.li`
padding:0.75rem 0rem;
a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--DarkGray);
    font-weight: 500;
    i {
      color: var(--mainColorLight);
      font-size: 1.6rem;
      padding: 0px 10px 0px 0px;
    }
`;
const FooterLiHeader = styled.li`
  padding: 0.75rem 0rem;
  color: var(--secondaryColorDark);
  font-weight: bold;
`;
export default FooterUls;
