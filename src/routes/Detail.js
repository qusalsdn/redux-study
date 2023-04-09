import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const params = useParams();
  const toDos = useSelector((state) => state);
  const detailTodo = toDos.find((toDo) => toDo.id === parseInt(params.id));

  return (
    <>
      <h1>{detailTodo?.text}</h1>
      <h5>Created at: {detailTodo.id}</h5>
      <button>DEL</button>
    </>
  );
}

export default Detail;
