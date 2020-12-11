export default function upcomingMoviesReducer(state = [], action) {
  switch (action.type) {
    case 'GET_UPCOMING':
      return action.payload;
    default:
      return state;
  }
}
