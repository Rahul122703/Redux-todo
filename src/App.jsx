// src/App.jsx
import React, { useEffect, useState } from "react";
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  updateTodo,
  selectTodos,
} from "./feature/todoSlice"; // make sure the path is correct
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  // Add a new todo
  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  // Update text or completed flag
  const handleUpdate = (id, updates) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;
    const updated = { ...todo, ...updates };
    if (
      updated.text.trim() &&
      (updated.text !== todo.text || updated.completed !== todo.completed)
    ) {
      dispatch(updateTodo(updated));
    }
  };

  // Handle Enter in add-input
  const onAddKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white shadow-md p-6 rounded">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
          Redux Todo App
        </h1>

        {/* Add Todo */}
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Add a new todo"
            className="flex-grow p-2 border rounded-l focus:outline-none"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={onAddKeyPress}
          />
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
            onClick={handleAdd}>
            Add
          </button>
        </div>

        {/* List of Todos */}
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between border p-2 rounded mb-2">
              <label className="flex items-center flex-grow">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() =>
                    handleUpdate(todo.id, { completed: !todo.completed })
                  }
                  className="mr-2"
                />
                <input
                  type="text"
                  defaultValue={todo.text}
                  className={`flex-grow bg-transparent p-1 focus:outline-none ${
                    todo.completed ? "line-through text-gray-400" : ""
                  }`}
                  onBlur={(e) =>
                    handleUpdate(todo.id, { text: e.target.value })
                  }
                />
              </label>

              <button
                type="button"
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="ml-4 text-red-500 hover:text-red-700">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
