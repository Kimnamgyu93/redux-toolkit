import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: uuid(),
      isDone: false,
      todo: "1시다",
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    deleteTodo(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    toggleTodo(state, action) {
      state.map((prev) => {
        if (prev.id === action.payload) {
          return (prev.isDone = !prev.isDone);
        } else {
          return prev;
        }
      });
    },
  },
});

export default todosSlice.reducer;
export const todosActions = todosSlice.actions;
