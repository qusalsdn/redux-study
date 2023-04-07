import { useState } from "react";

function Home() {
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
      <ul></ul>
    </>
  );
}

export default Home;
