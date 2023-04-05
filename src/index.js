import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// 보통은 dispatch에 타입을 직접 지정해주지 않고 아래와 같이 함수로 만들어서 type 및 값들을 return 해주는 방식으로 사용한다.
const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDelteTodo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDelteTodo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);

// reducer : 현재 상태의 application과 함께 불려지는 function (+ with action) return하는 것은 application의 state가 됨
// action : reducer와 소통하는 방법으로 Object여야 하며 그 key 이름은 항상 type임 (바꿀 수 없음)
// dispatch : reducer에게 action을 보내는 방법
// subscribe : store의 변화를 감지하면 인자값으로 준 함수를 실행
// switch가 자주 쓰임
// switch(action.type){
// case ..blah..:
// return smth
// case ..blah2..:
// return smth2
// default:
// return smth3
// }
// string으로 바로 쓰는 대신에 const variable로 선언해서 사용하기 -> 에러 발견 용이
// store를 수정할 수 있는 유일한 방법은 action을 보내는 방법뿐이다. 또한 state를 mutate하면 안된다. 새로운 state를 create하고 그 새로운 state를 꼭 return 해줘야 한다.
