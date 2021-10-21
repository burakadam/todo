import React from "react";

import Text from "../text/Text";

import { StyledHeader } from "./Header.styles";

export default function Header() {
  return (
    <StyledHeader>
      <Text bold size="large">
        TODO LIST
      </Text>
    </StyledHeader>
  );
}
