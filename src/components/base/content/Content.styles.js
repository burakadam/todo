import styled from "@emotion/styled";

import colors from "../../../theme/colors";

export const S = {};

S.Container = styled.div({
  width: "90%",
  maxWidth: 500,
  margin: "10px auto",
  padding: 10,
  border: `1px solid ${colors.primary}`,
  borderRadius: 5,
});
