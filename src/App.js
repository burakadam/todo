import React from "react";

import Header from "./components/base/header/Header";
import SubmitTodo from "./components/todo/submitTodo/SubmitTodo";
import TodoList from "./components/todo/todoList/TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <SubmitTodo />
      <TodoList />
    </div>
  );
}

export default App;
