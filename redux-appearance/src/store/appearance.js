const initialState = {
  appearance: false,
};

const mode = (state = initialState, action) => {
  switch (action.type) {
    case "setAppearance":
      return { ...state, appearance: !state.appearance };
    default:
      return state;
  }
};
export default mode;
