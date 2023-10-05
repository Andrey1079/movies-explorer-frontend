export default async function MovieApi() {
  try {
    return await fetch('https://api.nomoreparties.co/beatfilm-movies', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log(error);
    return error;
  }
}
