import React from "react";
import styled from "styled-components";

const ReadMoreP = styled.p`
  font-weight: 500;
  color: #ff7527;
  font-size: 24px;
`;

const RightArrow = styled.span`
  margin-left: 10px;
`;

function ReadMore() {
  return (
    <ReadMoreP>
      Read more <RightArrow>&rarr;</RightArrow>{" "}
    </ReadMoreP>
  );
}

export default ReadMore;
