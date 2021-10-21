import React from "react";

import ErrorMessages from "../errorMessage/ErrorMessage";
import Input from "../input/Input";
import Checkbox from "../checkBox/CheckBox";

export default function FormField({
  title,
  field,
  name,
  errors = "",
  touched = false,
  elemType = "input",
  selectItems,
  ...props
}) {
  return (
    <div>
      {elemType === "input" && <Input {...field} {...props} />}
      {elemType === "checkbox" && <Checkbox {...field} {...props} />}
      <ErrorMessages error={errors} visible={touched} />
    </div>
  );
}
