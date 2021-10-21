import styled from "@emotion/styled";
import colors from "../../../theme/colors";
import Content from "../../base/content/Content";

export const S = {};

const flexAlignCenter = { display: "flex", alignItems: "center" };

S.Container = styled(Content)({
  justifyContent: "space-between",
  ...flexAlignCenter,
  "&.disabled": {
    opacity: 0.5,
    pointerEvents: "none",
  },
  "& > div": {
    ...flexAlignCenter,
  },
  "&.completed": {
    background: `${colors.success}`,
  },
  "& > button": {
    padding: 0,
  },
});
