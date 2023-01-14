import React from "react";
import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";

export default function TodoList({ isWarkingList }) {
  const todos = useSelector((state) => state.todos);
  console.log();
  return (
    <div>
      <h2>{isWarkingList ? "Working!!" : "Done :)"}</h2>
      {todos
        .filter((t) => isWarkingList === !t.isDone)
        .map((t) => (
          <Todo key={t.id} t={t} />
        ))}
    </div>
  );
}
