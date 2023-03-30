const initialState = false;

export default function languageReducer(state = initialState, action) {

  switch (action.type) {
    case "SET_LANGUAGE":
      return action.payload;
    default:
      return state;
  }
}
