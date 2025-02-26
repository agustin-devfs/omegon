import React from "react";

interface LordIconProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  trigger?: string;
  delay?: string;
  state?: string;
  colors?: string;
  style?: React.CSSProperties;
}

const LordIcon: React.FC<LordIconProps> = ({
  src,
  trigger = "hover",
  delay,
  state,
  colors,
  ...rest
}) => {
  return React.createElement("lord-icon", {
    src,
    trigger,
    delay,
    state,
    colors,
    ...rest,
  });
};

export default LordIcon;
