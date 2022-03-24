import React from "react";
import styled from "styled-components";

export const MainImage = (props) => {
  return (
    <Image width={props.width}>
      <img src={props.pic} alt="" />
    </Image>
  );
};

const Image = styled.div`
  width: 60%;
  img {
    width: ${(props) => props.width};
  }
  @media screen and (max-width: 968px) {
    & {
      width: 80%;
      text-align: center;
      align-items: center;
    }
  }

  @media screen and (max-width: 480px) {
    & {
      display: none;
    }
  }
`;
export default MainImage;
