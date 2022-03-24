import React from "react";
import styled from "styled-components";
const Number = (props) => {
  return (
    <div>
      <Counter>{props.Counter}</Counter>
      <Comment>{props.Comment}</Comment>
    </div>
  );
};
const Counter = styled.h3`
  color: var(--mainColorLight);
  font-size: 4rem;
  font-weight: bold;
`;
const Comment = styled.h3`
  color: var(--secondaryColorDark);
  font-weight: 500;
  font-size: 1rem;
`;
export default Number;
