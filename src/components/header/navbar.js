import React, { useState } from "react";
import styled from "styled-components";
import { Buton } from "../../layout/globalStyle";
import ButtonsHovered from "../buttons/ButtonsHovered";
import "../../App";

const Navbar = () => {
  const [showBurger, setShowBurger] = useState(false);

  const handleBurger = () => {
    setShowBurger(!showBurger);
  };

  return (
    <Hero>
      <Logo>
        <h1>IS MEDICAL</h1>
      </Logo>
      <Nav show={showBurger} id="nav" className={showBurger && "nav_active"}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <Pushed>
          <Buton href="#">Login</Buton>
        </Pushed>
        <li>
          <ButtonsHovered content="JOIN US" color="white" hoveredClr="white" />
        </li>
      </Nav>
      <Burger
        id="burger"
        onClick={handleBurger}
        className={showBurger && "toggle"}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </Burger>
    </Hero>
  );
};
const Burger = styled.div`
  div {
    height: 3px;
    width: 23px;
    background-color: #e74040;
    margin: 5px;
    -webkit-transition: all ease-in-out 0.3s;
    transition: all ease-in-out 0.3s;
  }

  position: absolute;
  top: 1.78em;
  right: 0em;
  opacity: 0;
  z-index: 4;

  @media screen and (max-width: 968px) {
    & {
      opacity: 1;
      cursor: pointer;
      position: absolute;
      transform: translateX(20px);
    }
  }
`;

const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  list-style-type: none;
  margin-right: auto;
  width: 80%;
  overflow-x: hidden;

  li {
    padding: 10px 20px;
    a {
      text-decoration: none;
      color: var(--DarkGray);
      font-weight: 500;
      &:hover {
        color: var(--LightGray);
      }
    }
  }
  @media screen and (max-width: 968px) {
    & {
      overflow-x: hidden;
      position: absolute;
      right: -80px;
      top: 00;
      padding-top: 20px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100vh;
      width: 70%;
      background: #26335d;
      transform: translateX(1000px);
      transition: all ease-in-out 0.3s;
      z-index: 3;
      li {
        margin: 0px;
        padding-left: 00px;
        padding: 0;
        a {
          color: white;
        }
      }
    }

    &:last-child {
      padding: 10px;
      width: 100%;
      border-radius: 0px;
    }
  }
`;
const Hero = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px 20px 0px;

  @media screen and (max-width: 968px) {
    & {
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
`;
const Pushed = styled.li`
  margin-left: auto;
`;
const Logo = styled.h4`
  margin-right: 60px;
  color: #252b42;
  font-weight: bold;
  text-align: center;
  @media screen and (max-width: 968px) {
    & {
      margin-right: 0;
    }
  }
`;
export default Navbar;
