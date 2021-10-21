import React from "react";

import Text from "../../base/text/Text";

import colors from "../../../theme/colors";
import { S } from "./Button.styles";

function Button({
  children,
  type = "button",
  textColor = colors.secondary,
  isLoading = false,
  ...rest
}) {
  return (
    <S.Button
      textColor={textColor}
      type={type}
      className={isLoading && "loading"}
      {...rest}
    >
      <Text as="span" color={textColor}>
        {children}
      </Text>
    </S.Button>
  );
}

export default Button;
