import { useSelector, useDispatch } from "react-redux";
import { deleteItem, switchTodos } from "../Store";

function List() {
  const array = useSelector((state) => state);

  const dispatch = useDispatch();

  const listItems = array.map((object) => {
    console.log(object);
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
      <ul className="list">{listItems}</ul>
    </div>
  );
}
export default List;
