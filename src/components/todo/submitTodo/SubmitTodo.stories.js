import React from "react";
import { Provider } from "react-redux";

import { store } from "../../../app/store";

import SubmitTodo from "./SubmitTodo";

export default {
  component: SubmitTodo,
  title: "Todo/SubmitTodo",
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export const Primary = () => <SubmitTodo />;
