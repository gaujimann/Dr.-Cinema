export default function cinemaReducer(state, action) {
  switch (action.type) {
    case 'GET_CINEMAS':
      return {
        ...state,
        cinemas: action.payload,
      };
    default:
      return state;
  }
}
