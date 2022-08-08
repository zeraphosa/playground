import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "SET_TODO":
      return {
        ...state,
        todo: action.value,
      };
    case "ADD_TODO":
      return {
        ...state,
        todo: "",
        todos: [...state.todos, action.todo],
      };

    default:
  }
}

export default function WithUseState() {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    todo: "",
  });

  function submitHandle(e) {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      todo: state.todo,
    });
  }

  function onChange(e) {
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  }

  return (
    <>
      <h1>Todo app with useStates</h1>
      <form onSubmit={submitHandle}>
        <input type="text" value={state.todo} onChange={onChange} />
        <button type="submit" disabled={!state.todo}>
          ekle
        </button>
      </form>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}
