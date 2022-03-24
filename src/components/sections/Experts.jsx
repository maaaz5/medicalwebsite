import React from "react";
import styled from "styled-components";
import Numbers_Wrapped from "../ExpertSection/Numbers_Wrapped";
import MeetOurExperts from "../ExpertSection/MeetOurExperts";
import { Containers } from "../../layout/globalStyle";
const Experts = () => {
  return (
    <Exp>
      <Containers>
        <Numbers_Wrapped />
        <MeetOurExperts />
      </Containers>
    </Exp>
  );
};
const Exp = styled.div`
  padding: 4rem 0rem;
  @media screen and (max-width: 968px) {
    & {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
  }
`;
export default Experts;
