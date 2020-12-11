import movieServices from '../services/movieServices';

export const getUpcomingMovies = () => async (dispatch) => {
  try {
    const upcoming = await movieServices.getUpcomingMovies();
    dispatch(getUpcomingMoviesSuccess(upcoming));
  } catch (err) {
    console.log(err);
  }
};

const getUpcomingMoviesSuccess = (upcoming) => ({
  type: 'GET_UPCOMING',
  payload: upcoming,
});
