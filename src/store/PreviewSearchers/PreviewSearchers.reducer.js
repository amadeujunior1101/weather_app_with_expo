// const INITIAL_STATE = {
//   users: [],
// };

function searchers(state = [], action) {
  switch (action.type) {
    case "ADD_NEW_SEARCH":
      state.unshift(action.payload);
      return state;
    default:
      return state;
  }
}

export default searchers;
