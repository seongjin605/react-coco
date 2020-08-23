import React from "react";
import styled from "styled-components";

const BoxCommon = styled.button`
  height: 50px;
  background-color: #0052cc;
  color: #fff;
`;

const BoxBig = styled(BoxCommon)`
  width: 200px;
`;

const BoxSmall = styled(BoxCommon)`
  width: 100px;
`;

export const StaticButton = ({ size }) => {
  if (size === "big") {
    return <BoxBig>큰 박스</BoxBig>;
  }
  return <BoxSmall>작은 박스</BoxSmall>;
};
