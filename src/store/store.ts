import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

// 为 dispatch 和 state 定义类型
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
