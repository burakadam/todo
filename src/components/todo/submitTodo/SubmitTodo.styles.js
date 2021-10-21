import styled from "@emotion/styled";

import Content from "../../base/content/Content";

export const S = {};

S.Container = styled(Content)({
  padding: 0,
  height: 60,
  display: "flex",
  alignItems: "center",
  position: "relative",
  marginBottom: 35,
  "& > div": {
    flex: 1,
  },
  "& > button": {
    borderRadius: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    height: "100%",
  },
  "& .error_text": {
    position: "absolute",
    top: "100%",
  },
});
