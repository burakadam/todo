import styled from "@emotion/styled";

export const S = {};

const textSizes = {
  small: 12,
  medium: 16,
  large: 22,
};

S.Text = styled.p(({ color, bold, size, fontSize, custom }) => ({
  color: color,
  fontSize: fontSize || textSizes[size],
  fontWeight: bold ? 700 : 300,
  ...custom,
}));
