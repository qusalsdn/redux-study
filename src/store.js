import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

// const ADD = "ADD";
// const DELETE = "DELETE";

// export const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// export const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id,
//   };
// };

// redux toolkit의 createAction을 이용하면 action을 정의하지 않아도 된다.
export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    // createReducer를 사용하면 데이터를 Mutation 할 수 있다.
    // 단, Mutation이 진행되면 아래처럼 {} 없이 리턴을 하게 되면 에러가 발생한다.
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) => state.filter((toDo) => toDo.id !== action.payload),
});

const store = createStore(reducer);

// export const actionCreators = {
//   addToDo,
//   deleteToDo,
// };

export default store;
