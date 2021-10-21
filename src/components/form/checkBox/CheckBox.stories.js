import React from "react";

import CheckBox from "./CheckBox";

export default {
  component: CheckBox,
  title: "Form/CheckBox",
};

export const Primary = () => <CheckBox label="On/Off" value={false} />;
export const Selected = () => <CheckBox label="On/Off" value={true} />;
