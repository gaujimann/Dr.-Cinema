import { auth } from './api';

const movieServices = () => ({
  getCinemas: () => auth()
    .then(({ token }) => fetch('https://api.kvikmyndir.is/theaters', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'x-access-token': `${token}`,
      },
    }))
    .then((d) => d.json()),
});

export default movieServices();
