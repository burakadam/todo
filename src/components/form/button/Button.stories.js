import React from "react";

import Button from "./Button";

export default {
  component: Button,
  title: "Form/Button",
};

export const Primary = () => <Button>Send</Button>;
export const Type = () => <Button type="submit">Send</Button>;
export const TextColor = () => <Button textColor="red">Send</Button>;
export const Loading = () => <Button isLoading>Send</Button>;
export const BackgroundColor = () => (
  <Button backgroundColor="red">Send</Button>
);
export const Height = () => <Button size="big">Send</Button>;
