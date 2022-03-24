import React from "react";
import styled from "styled-components";
export const ButtonsHovered = (props) => {
  return (
    <Alink
      hoveredClr={props.hoveredClr}
      color={props.color}
      filled={props.filled}
    >
      {props.content}
    </Alink>
  );
};
const Alink = styled.a`
  color: ${(props) => props.color}!important;
  border-radius: 10px;
  background-color: ${(props) => (props.filled ? "Transparent" : "#ff685b")};
  padding: 8px 15px;
  display: inline-block;
  text-align: center;
  font-weight: 700;
  transition: all ease-in-out 150ms;
  position: relative;
  z-index: 0;
  overflow: hidden;
  cursor: pointer;
  outline: ${(props) =>
    props.filled ? "1px solid var(--mainColorLight)" : "none"};

  &:hover {
    color: ${(props) => props.hoveredClr} !important;
    outline: none !important;
  }
  &::before {
    content: "";
    position: absolute;
    background-color: #26335d;
    border-radius: 10px;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform ease-in-out 250ms;
  }
  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
    z-index: -1;
  }
`;
export default ButtonsHovered;
