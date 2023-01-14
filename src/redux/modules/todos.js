import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit"; // createSlice는 Reducer 만드는걸 도와주는 역할

// // action value
// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";
// const TOGGLE_TODO = "TOGGLE_TODO";

// // action create
// export const addTodo = (payload) => {
//   return {
//     type: ADD_TODO,
//     payload,
//   };
// };

// export const deleteTodo = (payload) => {
//   return {
//     type: DELETE_TODO,
//     payload,
//   };
// };

// export const toggleTodo = (payload) => {
//   return {
//     type: TOGGLE_TODO,
//     payload,
//   };
// };

// initialState
const initialState = [
  {
    id: uuid(),
    isDone: false,
    todo: "1시다",
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state = [...state, action.payload.newTodo];
      console.log("aaa", state);
    },
    // deleteTodo(state, action) {
    //   state.filter((prev) => prev.id !== action.payload.t.id);
    // },
    // toggleTodo(state, action) {
    //   state.map((prev) => {
    //     if (prev.id === action.payload.t.id) {
    //       return { ...prev, isDone: !prev.isDone };
    //     } else {
    //       return prev;
    //     }
    //   });
    // },
  },
});

export const todosActions = todosSlice.actions;
export default todosSlice.reducer;

// // reducer
// const todos = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return [...state, action.payload];
//     case DELETE_TODO:
//       return state.filter((prev) => prev.id !== action.payload);
//     case TOGGLE_TODO:
//       return state.map((prev) => {
//         if (prev.id === action.payload) {
//           return { ...prev, isDone: !prev.isDone };
//         } else {
//           return prev;
//         }
//       });
//     default:
//       return state;
//   }
// };

// // export
// export default todos;
