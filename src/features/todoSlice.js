import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import firebase from "../api/firebase";
import {
  addItem,
  getList,
  updateItem,
  deleteItem,
} from "../helpers/apiHelpers";

const collection = "todos";

export const getTodoAsync = createAsyncThunk("todos/getTodoAsync", async () => {
  const todos = await getList(collection);
  if (todos !== false) return { todos };
  else return { todos: [] };
});

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (payload) => {
    const todo = await addItem(collection, payload);
    if (todo !== false) return { todo };
  }
);

export const toggleTodoAsync = createAsyncThunk(
  "todos/toggleTodoAsync",
  async (payload) => {
    const todo = await updateItem(collection, payload.uid, payload.data);
    if (todo !== false) return todo;
  }
);

export const removeTodoAsync = createAsyncThunk(
  "todos/removeTodoAsync",
  async (payload) => {
    const todo = await deleteItem(collection, payload.uid);
    if (todo !== false) return payload.id;
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newItem = {
        id: Date.now(),
        name: action.payload.name,
        completed: false,
        timeStamp: firebase.firestore.Timestamp.now(),
      };
      state.push(newItem);
    },
    removeTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    toggleTodoComplete: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
  },
  extraReducers: {
    [getTodoAsync.fulfilled]: (state, action) => {
      return action.payload.todos;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.push(action.payload.todo);
    },
    [toggleTodoAsync.fulfilled]: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    [removeTodoAsync.fulfilled]: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;
export default todoSlice.reducer;
