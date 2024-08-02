import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  title: string;
  priority: number;
  completed: boolean;
}

type TodosState = Todo[];
const initialState: TodosState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    sortTodos: (state) => {
      state.sort((a, b) => b.priority - a.priority);
    },
    reorderTodos: (state, action: PayloadAction<Todo[]>) => {
      return action.payload;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, sortTodos, reorderTodos } =
  todosSlice.actions;
export default todosSlice.reducer;
