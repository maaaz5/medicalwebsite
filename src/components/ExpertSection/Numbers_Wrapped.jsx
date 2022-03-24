import React from "react";
import Number from "./Number";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Numbers_Wrapped = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper data-aos="fade-up">
      <Number Counter="15K" Comment="Happy Customers" />
      <Number Counter="150K" Comment="Monthly Visitors" />
      <Number Counter="15" Comment="Countries Worldwide" />
      <Number Counter="100+" Comment="Top Partners" />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 30px 0px;
  @media screen and (max-width: 968px) {
    & {
      flex-wrap: wrap;
    }
  }
`;
export default Numbers_Wrapped;
