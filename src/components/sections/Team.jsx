import React from "react";
import styled from "styled-components";
import SectionsHeader from "../Departement/DepartmentHeader";
import TeamCard from "../Team/TeamCard";
import { Containers } from "../../layout/globalStyle";
import pic1 from "../../Images/team member 1.svg";
import pic2 from "../../Images/team member 2.svg";
import pic3 from "../../Images/team member 3.svg";
import pic4 from "../../Images/team member 4.svg";

const Team = () => {
  return (
    <OurTeam>
      <Containers>
        <SectionsHeader title="Team" H1="Our Team" />
        <CardsWrapper>
          <TeamCard pic={pic1} name="Julian Brandt" />
          <TeamCard pic={pic2} name="Jack Bob" />
          <TeamCard pic={pic3} name="Annie Welson" />
          <TeamCard pic={pic4} name="Denisse Audery" />
        </CardsWrapper>
      </Containers>
    </OurTeam>
  );
};
const OurTeam = styled.div`
  padding: 5rem 0rem;
  background-color: white;
`;
const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    & {
      flex-wrap: wrap;
      justify-content: center;
      gap: 100px;
    }
  }
`;
export default Team;
