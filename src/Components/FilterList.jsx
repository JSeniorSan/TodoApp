import { Link, useParams } from "react-router-dom";
export default function FilterList() {
  // сущность роутинга для получения данных от перехода по filter
  const { filter: activeState = "all" } = useParams();

  console.log(activeState);
  return (
    <div>
      <Link
        to="/all"
        style={{
          color: activeState === "all" ? "green" : "black",
          backgroundColor: activeState === "all" ? "skyblue" : "white",
        }}
      >
        All
      </Link>
      <Link
        to="/active"
        style={{
          color: activeState === "active" ? "green" : "black",
          backgroundColor: activeState === "active" ? "skyblue" : "white",
        }}
      >
        Active
      </Link>
      <Link
        to="/completed"
        style={{
          color: activeState === "completed" ? "green" : "black",
          backgroundColor: activeState === "completed" ? "skyblue" : "white",
        }}
      >
        Complited
      </Link>
    </div>
  );
}
