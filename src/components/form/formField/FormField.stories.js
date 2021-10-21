import React from "react";

import FormField from "./FormField";

export default {
  component: FormField,
  title: "Form/FormField",
};

export const Primary = () => (
  <FormField title="Text field" placeholder="form input" />
);

export const Checkbox = () => (
  <FormField title="Text checkbox" elemType="checkbox" label="label" />
);
