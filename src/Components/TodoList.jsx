import { useSelector, useDispatch } from "react-redux";
import { todosItem, toggleTodos } from "../Store";
import { useState, useEffect } from "react";
import List from "./List";
import "./list.css";
function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  function keyDownHandler(e) {
    if (inputValue === "") {
      return;
    } else {
      console.log(e);
      if (e.key === "Enter") {
        setInputValue("");
        dispatch(todosItem(inputValue));
      }
    }
  }

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
          value={inputValue}
          onKeyDown={keyDownHandler}
        />
        <button
          className="btn btn__input"
          onClick={() => {
            if (inputValue === "") {
              return;
            }
            setInputValue("");
            return dispatch(todosItem(inputValue));
          }}
        >
          Add todo item
        </button>
      </div>
      <List />
    </div>
  );
}
export default TodoList;
