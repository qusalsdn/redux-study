import { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmut(e) {
    e.preventDefault();
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmut}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

// Redux state로부터 component에 prop으로써 전달을 한다.
function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Home);
