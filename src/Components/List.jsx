import { useSelector, useDispatch } from "react-redux";
import { deleteItem, switchTodos } from "../store/todos/todos-actions";
import { selectFilter } from "../store/todos/todos-selectors";

import FilterList from "./FilterList";
import { useParams } from "react-router-dom";
function List() {
  const { filter } = useParams();

  const array = useSelector((state) => {
    return selectFilter(state, filter);
  });

  const dispatch = useDispatch();

  const listItems = array.map((object) => {
    return (
      <div className="list__item" key={object.id}>
        <input
          type="checkbox"
          checked={object.completed}
          onChange={() => dispatch(switchTodos(object.id))}
          className="checkbox"
        />

        <div className="list__info">
          <div
            className="list__name"
            style={object.completed ? { textDecoration: "line-through" } : null}
          >
            {object.title}
          </div>
        </div>
        <button onClick={() => dispatch(deleteItem(object.id))} className="btn">
          удалить
        </button>
      </div>
    );
  });

  return (
    <div className="wrapper__list">
      <FilterList />
      <ul className="list">{listItems}</ul>
    </div>
  );
}
export default List;
