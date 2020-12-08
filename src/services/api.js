export const auth = async () => {
  try {
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
    console.log(await res.text());
  } catch (e) {
    console.log(e);
  }
};
