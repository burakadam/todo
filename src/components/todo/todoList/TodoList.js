import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Text from "../../base/text/Text";
import TodoItem from "../todoItem/TodoItem";

import { getTodoAsync } from "../../../features/todoSlice";

export default function TodoList() {
  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoAsync());
  }, [dispatch]);

  return (
    <div>
      {todoList.length < 1 ? (
        <Text custom={{ textAlign: "center" }}>List is empty!!!</Text>
      ) : (
        <>
          {todoList.map((todo) => (
            <TodoItem
              name={todo.name}
              isCompleted={todo.completed}
              id={todo.id}
              uid={todo.uid}
              key={todo.id}
            />
          ))}
        </>
      )}
    </div>
  );
}
