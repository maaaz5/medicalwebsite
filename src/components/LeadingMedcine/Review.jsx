import React from "react";
import styled from "styled-components";
import { ParagraphStyled } from "../../layout/globalStyle";
import pic from "../../Images/profile-image.svg";
const Review = () => {
  return (
    <Feedback>
      <Stars>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
      </Stars>
      <Comment>
        Slate helps you see how many more days you need to work to reach your
        financial goal for the month and year.
      </Comment>
      <Signature>
        <Image>
          <img src={pic} alt="" />
        </Image>
        <Name>
          <h4>Regina Miles</h4>
          <h5>Designer</h5>
        </Name>
      </Signature>
    </Feedback>
  );
};
const Name = styled.div`
  text-align: left;
  h4 {
    color: var(--mainColorLight);
  }
  h5 {
    font-weight: 600;
  }
`;
const Stars = styled.div`
  i {
    color: #ffce31;
    margin-right: 5px;
  }
  padding: 15px 0px;
`;
const Comment = styled.p`
  font-weight: 600;
  color: #737373;
`;
const Signature = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 15px 0px;
  img {
    width: 50px;
  }
`;
const Feedback = styled.div`
  width: 400px;
  padding: 70px;
  @media screen and (max-width: 1200px) {
    & {
      padding: 30px;
    }
  }
`;
const Image = styled.div`
  img {
    width: 50px;
  }
`;

export default Review;
