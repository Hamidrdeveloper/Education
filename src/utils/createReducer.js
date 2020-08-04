export default function createReducer(initialState, actionHandlers) {
  return (state = initialState, action) => {
    const reduceFun = actionHandlers[action.type];
    if (!reduceFun) {
      return state;
    }
    return {...state, ...reduceFun(state, action)};
  };
}
