import { useDispatch } from "react-redux";
import { deleteToDo } from "../store";

function ToDo({ text, id }) {
  const dispatch = useDispatch();
  return (
    <li>
      {text}
      <button onClick={() => dispatch(deleteToDo(id))}>DEL</button>
    </li>
  );
}

export default ToDo;
