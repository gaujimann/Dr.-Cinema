export const auth = async () => {
  const res = await fetch('https://api.kvikmyndir.is/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      username: 'gman',
      password: 'apiapiapi',
    }),
  });
  return res.json();
};

export const getAllCinemas = async (token) => {
  const res = await fetch('https://api.kvikmyndir.is/theaters', {
    method: 'GET',
    credentials: 'include',
    headers: {
      'x-access-token': `${token}`,
    },
  });
  return res.json();
};
