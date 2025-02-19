"use client";

import React from "react";
import "./style.css"; // Importa el CSS

interface ButtonProps {
  text: string;
  hovered: string;
  color_primary: string;
  color_secondary: string;
}

const ButtonCub: React.FC<ButtonProps> = ({
  text,
  hovered,
  color_primary,
  color_secondary,
}) => {
  return (
    <button
      className="ripple-button"
      style={{
       
        "--primary-color": color_primary,
        "--secondary-color": color_secondary,
      } as React.CSSProperties}
    >
      <span className="text">{text}</span>
      <span className="text-hover">{hovered}</span>
    </button>
  );
};

export default ButtonCub;
