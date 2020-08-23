import React from "react";
import styled from "styled-components";

const BoxCommon = styled.div`
  width: ${(props) => (props.isBig ? 200 : 100)}px;
  height: 50px;
  background-color: #aaaaaa;
`;

export const DynamicBox4 = ({ size }) => {
  const isBig = size === "big";
  const label = isBig ? "다이나믹 큰 박스" : "다이나믹 작은 박스";
  return <BoxCommon isBig={isBig}>{label}</BoxCommon>;
};
