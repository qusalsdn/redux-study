import { useDispatch } from "react-redux";
import { deleteToDo } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, id }) {
  const dispatch = useDispatch();
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={() => dispatch(deleteToDo(id))}>DEL</button>
    </li>
  );
}

export default ToDo;
