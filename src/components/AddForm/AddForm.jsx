import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import Button from "../Button/Button";
import { todosActions } from "../../redux/modules/todos";

export default function AddForm() {
  // input 값 넣기
  // 넣은 값을 todos에 저장하기
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();
  const inputChangeHandle = (e) => {
    setTodoValue(e.target.value);
  };
  const submitTodo = (e) => {
    e.preventDefault();
    const todo = todoValue.trim();
    if (!todo) {
      setTodoValue("");
      alert("목표를 입력해 주세요!");
      return;
    }

    const newTodo = {
      id: uuid(),
      isDone: false,
      todo: todo,
    };

    dispatch(todosActions.addTodo(newTodo));
    setTodoValue("");
  };

  return (
    <form onSubmit={submitTodo}>
      <label htmlFor="new-todo">To Do </label>
      <input
        id="new-todo"
        name="new-todo"
        type="text"
        value={todoValue}
        onChange={inputChangeHandle}
        placeholder="목표를 적어주세요."
        autoFocus={true}
      />
      <Button value="등록" />
    </form>
  );
}
