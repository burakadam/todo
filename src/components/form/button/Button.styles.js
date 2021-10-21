import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import colors from "../../../theme/colors";

export const S = {};

const spin = keyframes`
    from {
      transform:rotate(0deg);
    }
    to {
      transform:rotate(360deg);
    }
  `;

S.Button = styled.button(({ backgroundColor, width, textColor, size }) => {
  return {
    backgroundColor: backgroundColor || colors.primary,
    height: size === "big" ? 50 : 30,
    width: width === "full" ? "100%" : "auto",
    border: "none",
    borderRadius: 5,
    outline: 0,
    padding: size === "big" ? "0 25px" : "0 15px",
    cursor: "pointer",
    textTransform: "uppercase",
    position: "relative",
    [`:active,:focus`]: {
      outline: 0,
      boxShadow: "none",
    },
    [`& > span`]: {
      letterSpacing: size === "big" ? "3px" : "0.5px",
    },
    "&.loading span": {
      display: "none",
    },
    [`:hover`]: {
      backgroundColor: backgroundColor || colors.grey,
    },
    [`:hover span`]: {
      color: textColor && backgroundColor ? colors.primary : colors.secondary,
    },
    "&.loading:after": {
      content: "''",
      display: "block",
      position: "absolute",
      width: 20,
      height: 20,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      margin: "auto",
      borderRadius: 30,
      border: `2px solid ${textColor}`,
      borderTop: "2px solid transparent",
      animation: ` ${spin} 1s ease infinite`,
    },
  };
});
