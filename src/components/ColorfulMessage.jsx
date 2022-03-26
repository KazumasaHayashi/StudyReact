import React from "react";

// propsは<コンポーネント color="blue"/>で指定したcolorなどを受け取る。受け取り方はprops.colorなど。
export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};
