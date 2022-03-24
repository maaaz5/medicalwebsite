import React from "react";
import styled from "styled-components";

export const Containers = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;
export const Buton = styled.a`
  color: var(--mainColorLight) !important;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: var(--mainColorDark) !important;
  }
`;
export const HeadingStyled = styled.h1`
  color: var(--secondaryColorDark);
  font-size: ${(props) => props.size};
  line-height: 5rem;
  margin: 2rem 0rem;
  position: relative;
`;

export const ParagraphStyled = styled.p`
  color: var(--DarkGray);
  font-size: ${(props) => props.size};
  margin: 1rem 0px;
  width: ${(props) => props.width};
  font-weight: 500;
`;
