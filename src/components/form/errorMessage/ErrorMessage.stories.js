import React from "react";

import ErrorMessage from "./ErrorMessage";

export default {
  component: ErrorMessage,
  title: "Form/ErrorMessage",
};

export const Primary = () => <ErrorMessage error="Error text" visible={true} />;
