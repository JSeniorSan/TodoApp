import { useDispatch } from "react-redux";
import { add_todo, delete_todo, switch_todo } from "./todos-slice";
import List from "./List";
import "../../Components/css/list.css";
function TodoList() {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    if (e.target.title.value === "") {
      return;
    }

    dispatch(add_todo(e.target.title.value));
    e.target.reset();
  };

  return (
    <div className="todoContainer">
      <div className="title">
        <h2>Список задач</h2>
      </div>
      <form onSubmit={submitHandler} className="input__btn">
        <input
          type="text"
          placeholder="What to do?"
          className="form__input"
          name="title"
        />
        <input className="btn btn__input" type="submit" value="Add todo item" />
      </form>
      <List />
    </div>
  );
}
export default TodoList;
