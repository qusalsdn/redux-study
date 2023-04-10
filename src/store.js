import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

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

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};

const store = createStore(reducer);

// export const actionCreators = {
//   addToDo,
//   deleteToDo,
// };

export default store;
