import React from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { todosActions } from "../../redux/modules/todos";

export default function Todo({ t }) {
  const dispatch = useDispatch();
  const deleteTodoHandler = () => {
    let con = window.confirm("삭제하시겠습니까?");
    if (con === true) {
      dispatch(todosActions.deleteTodo(t.id));
      alert("삭제하였습니다.");
    } else {
      alert("취소하였습니다.");
    }
  };
  const toggleTodoHandler = () => {
    dispatch(todosActions.toggleTodo(t.id));
  };

  return (
    <li id={t.id} key={t.id}>
      <p>{t.todo}</p>
      <Button
        buttonClickHandle={toggleTodoHandler}
        value={t.isDone ? "취소" : "완료"}
      />
      <Button buttonClickHandle={deleteTodoHandler} value={"삭제"} />
    </li>
  );
}
