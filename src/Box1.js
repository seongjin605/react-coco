import React from "react";
import "./Box1.css";

export const Box = ({ size }) => {
  if (size === "big") {
    return <div className="box big">Big Box</div>;
  }
  return <div className="box small">Small BOx</div>;
};
