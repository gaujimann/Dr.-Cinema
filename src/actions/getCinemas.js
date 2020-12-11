import movieServices from '../services/movieServices';

export const getCinemas = () => async (dispatch) => {
  try {
    const cinemas = await movieServices.getCinemas();
    dispatch(getCinemasSuccess(cinemas));
  } catch (err) {
    console.log(err);
  }
};

const getCinemasSuccess = (cinemas) => ({
  type: 'GET_CINEMAS',
  payload: cinemas,
});
