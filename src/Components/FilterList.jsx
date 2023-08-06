import { ActiveFilter } from "../store/filters/filters-actions";
import { useSelector, useDispatch } from "react-redux";
import { selectSetFilter } from "../store/filters/filters-selectors";

export default function FilterList() {
  const dispatch = useDispatch();
  const activeState = useSelector(selectSetFilter);
  return (
    <div>
      <button
        onClick={() => dispatch(ActiveFilter("all"))}
        style={{
          color: activeState === "all" ? "green" : "black",
          backgroundColor: "white",
        }}
        className="btn"
      >
        AllNotes
      </button>
      <button
        onClick={() => dispatch(ActiveFilter("active"))}
        style={{
          color: activeState === "active" ? "green" : "black",
          backgroundColor: "white",
        }}
        className="btn"
      >
        activeComponents
      </button>
      <button
        onClick={() => dispatch(ActiveFilter("completed"))}
        style={{
          color: activeState === "completed" ? "green" : "black",
          backgroundColor: "white",
        }}
        className="btn"
      >
        complitedComponents
      </button>
    </div>
  );
}
