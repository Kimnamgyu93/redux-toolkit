import React from "react";
import Header from "./components/Header/Header";
import AddForm from "./components/AddForm/AddForm";
import TodoList from "./components/TodoList/TodoList";

export default function App() {
  return (
    <>
      <Header />
      <AddForm />
      <TodoList isWarkingList={true} />
      <TodoList isWarkingList={false} />
      <footer>푸터</footer>
    </>
  );
}
