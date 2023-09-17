import { useSelector, useDispatch } from "react-redux";
import { delete_todo, switch_todo } from "./todos-slice";
import { selectFilter, selectTodosReducer } from "./todos-slice";

import FilterList from "../filters/FilterList";
import { useParams } from "react-router-dom";
function List() {
  const { filter } = useParams();

  const array = useSelector((state) => {
    return selectFilter(state.todo, filter);
  });
  console.log(array);

  const dispatch = useDispatch();

  const listItems = array.map((object) => {
    return (
      <div className="list__item" key={object.id}>
        <input
          type="checkbox"
          checked={object.completed}
          onChange={() => dispatch(switch_todo(object.id))}
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
        <button
          onClick={() => dispatch(delete_todo(object.id))}
          className="btn"
        >
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
