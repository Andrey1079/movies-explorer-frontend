class MoviesApi {
  constructor(baseUrl) {
    this._url = baseUrl;
    this._settingObject = {};
    this._settingObject.headers = {
      'Content-Type': 'application/json',
    };
    this._settingObject.method = 'GET';
  }

  getMovies() {
    return this._request();
  }

  _request() {
    return fetch(this._url, this._settingObject).then(this._checkResponse);
  }
  _checkResponse(response) {
    // return Promise.reject(500);
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response.status);
    }
  }
}

const moviesApi = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');

export default moviesApi;
