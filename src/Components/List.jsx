import { useSelector, useDispatch } from "react-redux";
import { todosItem, toggleTodos } from "../Store";
function List() {
  const array = useSelector((state) => state);
  const listItems = array.map((object) => {
    return (
      <div className="list__item" key={object.id}>
        <input type="checkbox" />

        <div className="list__info">
          <div className="list__name">{object.title}</div>
        </div>
        <button className="btn">удалить</button>
      </div>
    );
  });

  return (
    <form className="wrapper__list">
      <ul className="list">{listItems}</ul>
    </form>
  );
}
export default List;
