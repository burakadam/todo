import React from "react";

import Text from "../../base/text/Text";

import { S } from "./CheckBox.styles";

function Checkbox({ label, value = false, ...props }) {
  return (
    <S.Container>
      <S.Input type="checkbox" checked={value} {...props} />
      <Text as="label">{label}</Text>
    </S.Container>
  );
}

export default Checkbox;
