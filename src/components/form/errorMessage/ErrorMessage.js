import React from "react";

import Text from "../../base/text/Text";

import colors from "../../../theme/colors";
import { S } from "./ErrorMessage.styles";

export default function ErrorMessages({ error, visible }) {
  if (!error || !visible) return null;
  return (
    <S.Message className="error_text">
      <Text size="small" color={colors.danger}>
        * {error}
      </Text>
    </S.Message>
  );
}
