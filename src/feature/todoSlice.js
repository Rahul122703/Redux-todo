import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_API;

const initialState = {
  todos: [],
  status: "idle",
  error: null,
};

// Async Thunks
export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

export const addTodo = createAsyncThunk("todo/addTodo", async (text) => {
  const newTodo = {
    id: nanoid(),
    text,
    completed: false,
    order: Date.now(),
  };
  const res = await axios.post(API_URL, newTodo);
  return res.data;
});

export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

export const updateTodo = createAsyncThunk("todo/updateTodo", async (todo) => {
  const res = await axios.put(`${API_URL}/${todo.id}`, todo);
  return res.data;
});

export const reorderTodos = createAsyncThunk(
  "todo/reorderTodos",
  async (todos) => {
    await Promise.all(
      todos.map((t, index) =>
        axios.patch(`${API_URL}/${t.id}`, { order: index })
      )
    );
    return todos;
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload.sort((a, b) => a.order - b.order);
        state.status = "succeeded";
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.unshift(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((t) => t.id !== action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) state.todos[index] = action.payload;
      })
      .addCase(reorderTodos.fulfilled, (state, action) => {
        state.todos = [...action.payload];
      });
  },
});

export const selectTodos = (state) => state.todo.todos;
export default todoSlice.reducer;
