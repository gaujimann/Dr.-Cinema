import movieServices from '../services/movieServices';

export const getMovies = () => async (dispatch) => {
  try {
    const movies = await movieServices.getMovies();
    dispatch(getMoviesSuccess(movies));
  } catch (err) {
    console.log(err);
  }
};

const getMoviesSuccess = (movies) => ({
  type: 'GET_MOVIES',
  payload: movies,
});
