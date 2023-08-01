import { useSelector, useDispatch } from "react-redux";
import { todosItem, toggleTodos } from "../Store";
import { useState } from "react";
import List from "./List";
import "./list.css";
function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="todoContainer">
      <div className="title">
        <h2>Список задач</h2>
      </div>
      <div className="input__btn">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="What to do?"
          className="form__input"
        />
        <button
          className="btn btn__input"
          onClick={() => dispatch(todosItem(inputValue))}
        >
          Add todo item
        </button>
      </div>
      <List />
    </div>
  );
}
export default TodoList;
