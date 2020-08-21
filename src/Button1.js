import React from "react";
import "./Button1.css";

export const Button = ({ size }) => {
  if (size === "big") {
    return <button className="button big">Big Button</button>;
  }
  return <button className="button small">Small Button</button>;
};
