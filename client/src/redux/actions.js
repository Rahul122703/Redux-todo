import axios from "axios";

export const FETCH = "FETCH";
export const ADD = "ADD";
export const UPDATE = "UPDATE";
export const DELETE = "DELETE";
export const REORDER = "REORDER";

const API = import.meta.env.VITE_BACKEND_API;

// Thunk action creators

export const fetchTodos = () => async (dispatch) => {
  const { data } = await axios.get(API);
  dispatch({ type: FETCH, payload: data });
};

export const addTodo = (text) => async (dispatch) => {
  const { data } = await axios.post(API, { text, completed: false });
  dispatch({ type: ADD, payload: data });
};

export const updateTodo = (todo) => async (dispatch) => {
  const { data } = await axios.put(`${API}/${todo.id}`, todo);
  dispatch({ type: UPDATE, payload: data });
};

export const deleteTodo = (id) => async (dispatch) => {
  await axios.delete(`${API}/${id}`);
  dispatch({ type: DELETE, payload: id });
};

export const reorderTodos = (items) => async (dispatch) => {
  // update each item's order on server
  await Promise.all(
    items.map((todo, idx) => axios.patch(`${API}/${todo.id}`, { order: idx }))
  );
  dispatch({ type: REORDER, payload: items });
};
