import React from "react";
import styled from "styled-components";
import SectionsHeader from "../Departement/DepartmentHeader";
import { Containers } from "../../layout/globalStyle";
import SellCard from "../Departement/SellCard";
import pic1 from "../../Images/card-1.jfif";
import pic2 from "../../Images/card-2.jfif";
import pic3 from "../../Images/card-3.jfif";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Department = () => {
  useEffect(() => {
    AOS.init({ duration: 3000, delay: 150 });
  }, []);
  return (
    <Depart>
      <Containers>
        <SectionsHeader title="Practice Advice" H1="Our Department" />
        <Panels data-aos="fade-down" data-aos-delay="1000">
          <SellCard pic={pic1} />
          <SellCard pic={pic2} />
          <SellCard pic={pic3} />
        </Panels>
      </Containers>
    </Depart>
  );
};
const Panels = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3em 0em;
  @media screen and (max-width: 1200px) {
    & {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;
const Depart = styled.div`
  background-color: #e5f9f7;
  padding: 10rem 0rem 0rem 0rem;
`;
export default Department;
