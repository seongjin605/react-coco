import React from "react";
import style from "./Button3.module.scss";

export const Button3 = ({ size }) => {
  console.log("style:", style);
  if (size === "big") {
    return (
      <button className={`${style.button} ${style.big}`}>Big Button3</button>
    );
  }
  return (
    <button className={`${style.button} ${style.small}`}>Small Button3</button>
  );
};
