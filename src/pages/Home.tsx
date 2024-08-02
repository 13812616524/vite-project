import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";

import {
  addTodo,
  toggleTodo,
  deleteTodo,
  sortTodos,
} from "../store/todosSlice";

interface Todo {
  id: string;
  title: string;
  priority: number;
  completed: boolean;
}

const Home: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState(1);

  const handleAddTodo = () => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      priority,
      completed: false,
    };

    dispatch(addTodo(newTodo));
    setTitle("");
    setPriority(1);
    dispatch(sortTodos());
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const getPriorityClass = (priority: number) => {
    switch (priority) {
      case 1:
        return "bg-green-200 text-green-800";
      case 2:
        return "bg-yellow-200 text-yellow-800";
      case 3:
        return "bg-red-200 text-red-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Todo List</h1>
      <div className="flex mb-5">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Todo title"
          className="flex-1 px-3 py-2 border rounded mr-2"
        />
        <input
          type="number"
          value={priority}
          onChange={(e) => setPriority(Number(e.target.value))}
          placeholder="Priority"
          className="w-24 px-3 py-2 border rounded mr-2"
        />
        <button
          onClick={handleAddTodo}
          className="px-3 py-2 bg-blue-500 text-white rounded"
        >
          Add Todo
        </button>
      </div>
      <ul className="mt-10">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-3 mb-2 bg-gray-100 rounded shadow"
          >
            <div className="flex-1">
              <span className={`${todo.completed ? "line-through" : ""}`}>
                {todo.title}
              </span>
              <span
                className={`ml-2 px-2 py-1 rounded ${getPriorityClass(
                  todo.priority
                )}`}
              >
                Priority: {todo.priority}
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleToggleTodo(todo.id)}
                className={`px-3 py-1 rounded ${
                  todo.completed
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
