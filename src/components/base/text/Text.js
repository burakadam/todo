import React from "react";

import { S } from "./Text.styles";

function Text({
  children,
  size = "medium",
  color = "black",
  custom = {},
  ...rest
}) {
  return (
    <S.Text size={size} color={color} custom={custom} {...rest}>
      {children}
    </S.Text>
  );
}

export default Text;
