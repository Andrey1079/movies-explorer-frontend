import MOVIE_API_REQUEST_OBJ from '../constants/MovieApiReqObj';

class MoviesApi {
  constructor(settingObject) {
    this._url = settingObject.baseUrl;
    this._settingObject = {};
    this._settingObject.headers = settingObject.headers;
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

const moviesApi = new MoviesApi(MOVIE_API_REQUEST_OBJ);

export default moviesApi;
