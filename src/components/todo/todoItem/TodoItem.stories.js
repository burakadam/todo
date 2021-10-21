import React from "react";
import { Provider } from "react-redux";

import { store } from "../../../app/store";

import TodoItem from "./TodoItem";

export default {
  component: TodoItem,
  title: "Todo/TodoItem",
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export const Primary = () => <TodoItem id="1234" uid="123345" name="Todo 1" />;
export const Selected = () => (
  <TodoItem id="1234" uid="123345" name="Todo 1" isCompleted />
);
