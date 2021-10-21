import React from "react";

import Text from "./Text";

export default {
  component: Text,
  title: "Base/Text",
};

export const Primary = () => <Text>This is a default text</Text>;
export const Size = () => <Text size="small">This is a size small text</Text>;
export const Color = () => <Text color="red">Red color text</Text>;
export const Custom = () => (
  <Text custom={{ textTransform: "uppercase" }}>big text</Text>
);
