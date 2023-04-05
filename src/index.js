import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return ++count;
    case MINUS:
      return --count;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));

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
