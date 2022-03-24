import React from "react";
import styled from "styled-components";

export const SellCard = (props) => {
  return (
    <Panel>
      <ImgSection>
        <img src={props.pic} alt="" />
        <SalesImg>Sale</SalesImg>
        <Icons>
          <i class="fa-regular fa-heart"></i>
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-regular fa-eye"></i>
        </Icons>
      </ImgSection>
      <TextDepartment>
        <TxtHeader>
          <h3>Painless procedures</h3>
          <p>
            <i class="fa-solid fa-star"></i> 4.9
          </p>
        </TxtHeader>
        <h2>Quick examination</h2>
        <p>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <SaleIcon>
          <i class="fa-solid fa-cart-arrow-down"></i> 15 Sales
        </SaleIcon>
        <Prices>
          <Disabled>$16.48</Disabled>
          <Active>$6.48</Active>
        </Prices>
        <LearnMoreBtn href="#">
          Learn More <i class="fa-solid fa-angle-right"></i>
        </LearnMoreBtn>
      </TextDepartment>
    </Panel>
  );
};
const Panel = styled.div`
  width: 370px;
  background-color: white;
  margin: 10px;
`;

const ImgSection = styled.div`
  position: relative;
  height: 435px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const SalesImg = styled.p`
  cursor: pointer;
  position: absolute;
  top: 25px;
  left: 20px;
  font-size: 1rem;
  color: white;
  padding: 2px 12px;
  background-color: #e74040;
  border-radius: 5px;
`;

const Icons = styled.div`
  position: absolute;
  left: 0;
  bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #252b42;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  cursor: pointer;
  i {
    background: white;
    box-shadow: 0px 1px 10px rgba(0, 00, 0, 0.1);
    padding: 12px;
    border-radius: 50%;
    margin: 10px;
    transition: ease-in-out 0.2s;
    &:hover {
      color: white;
      background-color: #26335d;
    }
  }
`;

const TextDepartment = styled.div`
  padding: 15px 20px 40px 20px;
  h2 {
    color: #26335d;
    font-size: 1.3rem;
    margin-bottom: 15px;
  }
  p {
    color: #737373;
    font-weight: 500;
    margin-bottom: 20px;
  }
`;
const TxtHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  margin-bottom: 10px;

  p {
    background-color: #26335d;
    padding: 5px 10px;
    border-radius: 15px;
    color: white !important;
    margin: 0 !important;
    cursor: pointer;
  }
  h3 {
    color: #ff685b;
    font-weight: 600;
    font-size: 1.1rem;
  }
  i {
    color: #ffce31;
    margin-right: 5px;
    cursor: pointer;
  }
`;

const SaleIcon = styled.p`
  font-size: 1.2rem;
  font-weight: bolder;
  i {
    margin-right: 10px;
  }
  cursor: pointer;
`;
const Disabled = styled.span`
  color: #bdbdbd;
  margin-right: 20px;
  font-size: 1.25rem;
  font-weight: bolder;
  cursor: pointer;
`;
const Active = styled.span`
  color: #5aaca8;
  font-size: 1.25rem;
  font-weight: bolder;
  cursor: pointer;
`;
const Prices = styled.div`
  margin: 30px 0px;
`;
const LearnMoreBtn = styled.a`
  margin-top: 20px;
  color: #ff685b;
  padding: 12px 30px;
  font-weight: 600;
  border: 1px solid #ff685b;
  background: white;
  border-radius: 30px;
  font-size: 1.1rem;
  text-align: center;
  align-content: center;
  i {
    position: relative;
    top: 1.5px;
    margin-left: 10px;
    transition: ease-out 0.2s all;
  }
  &:hover {
    color: #e74040;
    outline: 1px solid #e74040;
    transition: ease-out 0.2s all;

    &:hover i {
      transition: ease-out 0.2s all;
      transform: translateX(5px);
    }
  }
`;

export default SellCard;
