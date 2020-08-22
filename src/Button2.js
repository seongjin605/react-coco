import React from "react";
import style from "./Button2.module.css";

export const Button2 = ({ size }) => {
  console.log("style:", style);
  if (size === "big") {
    return (
      <button className={`${style.button} ${style.big}`}>Big Button2</button>
    );
  }
  return (
    <button className={`${style.button} ${style.small}`}>Small Button2</button>
  );
};
