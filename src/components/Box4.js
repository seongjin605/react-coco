import React from "react";
import styled from "styled-components";

const BoxCommon = styled.div`
  height: 50px;
  background-color: #aaaaaa;
`;

const BoxBig = styled(BoxCommon)`
  width: 200px;
`;

const BoxSmall = styled(BoxCommon)`
  width: 200px;
`;

export const Box4 = ({ size }) => {
  if (size === "big") {
    return <BoxBig>큰 박스</BoxBig>;
  }
  return <BoxSmall>작은 박스</BoxSmall>;
};
