import React from "react";
import styled from "styled-components";
const TeamCard = (props) => {
  return (
    <Card>
      <CardImg>
        <img src={props.pic} alt="" />
      </CardImg>
      <CardBody>
        <h3>{props.name}</h3>
        <h5>Profession</h5>
        <CardIcons>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
        </CardIcons>
      </CardBody>
    </Card>
  );
};
const Card = styled.div`
  text-align: center;
  width: 240px;
  border-radius: 20px;
  background: white;
  overflow: hidden;
  box-shadow: 00px 5px 10px rgba(0, 00, 0, 0.1);
  transition: ease-in-out 0.4s all;
  &:hover {
    transition: ease-in-out 0.4s all;
    transform: translateY(-8px);
    box-shadow: 0px 10px 10px rgba(0, 00, 0, 0.2);
  }
`;
const CardImg = styled.div``;
const CardBody = styled.div`
  padding: 30px 0px;
  h3 {
    color: #252b42;
  }
  h5 {
    padding: 10px 0px;
    color: #737373;
  }
`;
const CardIcons = styled.div`
  font-size: 1.5rem;
  color: var(--mainColorLight);
  i {
    margin: 0rem 0.25rem;
    cursor: pointer;
  }
`;
export default TeamCard;
