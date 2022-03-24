import React from "react";
import styled from "styled-components";
import SectionsHeader from "../Departement/DepartmentHeader";
import { Containers } from "../../layout/globalStyle";
import Review from "../LeadingMedcine/Review";
const LeadingMedcine = () => {
  return (
    <Leading>
      <Containers>
        <SectionsHeader title="Practice Advice" H1="Leading Medicine" />
        <Reviews>
          <Review></Review>
          <Review></Review>
          <Review></Review>
        </Reviews>
      </Containers>
    </Leading>
  );
};
const Reviews = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 1200px) {
    & {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;
const Leading = styled.div`
  padding: 5rem 0rem;
  background-color: #fafafa;
`;
export default LeadingMedcine;
