import "./Components/css/list.css";
import TodoList from "./store/todos/TodoList";
import { useDispatch } from "react-redux";
import { resetState } from "./store/todos/todos-slice";
function App() {
  const dispatch = useDispatch();
  return (
    <div className="wrapper">
      <h1 className="wrapper__name">Pingin action</h1>
      <TodoList />
      <button onClick={() => dispatch(resetState())} children={"clear all"} />
    </div>
  );
}

export default App;
