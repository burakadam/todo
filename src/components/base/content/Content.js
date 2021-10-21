import React from "react";

import { S } from "./Content.styles";

export default function Content({ className, children }) {
  return <S.Container className={className}>{children}</S.Container>;
}
