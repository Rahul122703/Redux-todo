import { FETCH, ADD, UPDATE, DELETE, REORDER } from "./actions";

const initialState = { todos: [] };

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH:
      return { ...state, todos: payload.sort((a, b) => a.order - b.order) };
    case ADD:
      return { ...state, todos: [...state.todos, payload] };
    case UPDATE:
      return {
        ...state,
        todos: state.todos.map((t) => (t.id === payload.id ? payload : t)),
      };
    case DELETE:
      return { ...state, todos: state.todos.filter((t) => t.id !== payload) };
    case REORDER:
      return { ...state, todos: payload };
    default:
      return state;
  }
}
