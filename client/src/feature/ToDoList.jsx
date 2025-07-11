import React, { useState } from "react";
import { Checkbox, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([
    { id: "1", task: "Learn React", completed: false },
    { id: "2", task: "Study Tailwind", completed: true },
    { id: "3", task: "Build To-Do List", completed: false },
  ]);

  const handleAdd = () => {
    if (!task.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now().toString(), task: task.trim(), completed: false },
    ]);
    setTask("");
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedTodos = Array.from(todos);
    const [movedItem] = reorderedTodos.splice(result.source.index, 1);
    reorderedTodos.splice(result.destination.index, 0, movedItem);
    setTodos(reorderedTodos);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 border border-none w-[100vw] ">
      <div className="bg-white shadow-md rounded-lg p-2 w-full m-auto max-w-[40rem] border border-none mt-6">
        <div className="flex gap-2 mb-4 border border-none">
          <TextField
            type="text"
            placeholder="Add a task..."
            variant="outlined"
            size="small"
            fullWidth
            value={task}
            onChange={(e) => setTask(e.target.value)}
            sx={{
              input: {
                px: 1.5,
                py: 1,
                fontSize: "0.9rem",
              },
            }}
          />
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-3 transition-colors duration-200"
            aria-label="Add Task">
            <ControlPointIcon fontSize="medium" />
          </button>
        </div>

        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="todoList">
            {(provided) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="max-h-[500px] overflow-auto border border-none w-full">
                {todos.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {(provided, snapshot) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`flex items-center justify-between border border-gray-200 rounded px-1 py-2 hover:shadow-2xs transition bg-white ${
                          snapshot.isDragging ? "shadow-lg" : ""
                        }`}>
                        <label className="flex items-center gap-2 cursor-pointer w-full">
                          <Checkbox
                            checked={todo.completed}
                            onChange={() => handleToggle(todo.id)}
                            size="medium"
                          />
                          <div
                            className={`text-sm ${
                              todo.completed
                                ? "line-through text-gray-500"
                                : "text-gray-800"
                            } border border-none max-w-[17rem] lg:max-w-full overflow-auto`}>
                            {todo.task}
                          </div>
                        </label>

                        <button
                          onClick={() => handleDelete(todo.id)}
                          className="text-red-500 hover:text-red-600 transition"
                          aria-label="Delete Task">
                          <DeleteIcon fontSize="small" />
                        </button>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default ToDoList;
