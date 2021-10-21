import React from "react";

import { S } from "./Input.styles";

export default function Input({ type = "text", placeholder, ...props }) {
  return (
    <div>
      <S.Input type={type} placeholder={placeholder} {...props} />
    </div>
  );
}
