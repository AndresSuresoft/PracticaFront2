import React, { useReducer, useState } from "react";
import "../index.css";

// Tipos
type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type Action =
  | { type: "ADD"; payload: string }
  | { type: "TOGGLE"; payload: number }
  | { type: "DELETE"; payload: number };


function todoReducer(state: Task[], action: Action): Task[] {
  switch (action.type) {
    case "ADD":
      if (!action.payload.trim()) return state; // evita tareas vacías
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "TOGGLE":
      return state.map((t) =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t
      );
    case "DELETE":
      return state.filter((t) => t.id !== action.payload);
    default:
      return state;
  }
}

const TodoList: React.FC = () => {
    //devuelve un array con dos cosas: task dispatch
  const [tasks, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    dispatch({ type: "ADD", payload: input });
    setInput("");
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>

      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task"
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul className="todo-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? "completed" : ""}
          >
            <span onClick={() => dispatch({ type: "TOGGLE", payload: task.id })}>
              {task.text}
            </span>
            <button
              className="delete-btn"
              onClick={() => dispatch({ type: "DELETE", payload: task.id })}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
