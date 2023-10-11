import MainApiRequestObj from '../constants/MainApiReqObj';
class MainApi {
  constructor(requestObj) {
    this._baseUrl = requestObj.baseUrl;
    this._settingsObj = {};
    this._settingsObj.headers = requestObj.headers;
    this._settingsObj.method = '';
  }

  getStartData() {
    return Promise.all([this.getMovies(), this.getUserInfo()]);
  }

  signUp(signUpData) {
    this._settingsObj.method = 'POST';
    this._settingsObj.body = JSON.stringify(signUpData);
    return this._request('signup');
  }
  signIn(signInData) {
    this._settingsObj.method = 'POST';
    this._settingsObj.body = JSON.stringify(signInData);
    return this._request('signin');
  }

  changeUserInfo(changedUserData) {
    console.log(changedUserData);
    this._settingsObj.method = 'PATCH';
    this._settingsObj.body = JSON.stringify(changedUserData);
    this._settingsObj.headers.Authentification = `Bearer ${localStorage.getItem(
      'token'
    )}`;
    return this._request('users/me');
  }
  getUserInfo() {
    delete this._settingsObj?.body;
    this._settingsObj.method = 'GET';
    this._settingsObj.headers.Authorization = `Bearer ${localStorage.getItem(
      'token'
    )}`;
    return this._request('users/me');
  }

  getMovies() {
    delete this._settingsObj?.body;
    this._settingsObj.method = 'GET';
    this._settingsObj.headers.Authorization = `Bearer ${localStorage.getItem(
      'token'
    )}`;
    return this._request('movies');
  }
  deleteMovie(id) {
    delete this._settingsObj?.body;
    this._settingsObj.method = 'DELETE';
    this._settingsObj.headers.Authorization = `Bearer ${localStorage.getItem(
      'token'
    )}`;
    return this._request(`movies/${id}`);
  }
  saveMovie(movie) {
    this._settingsObj.body = JSON.stringify(movie);
    this._settingsObj.method = 'POST';
    this._settingsObj.headers.Authorization = `Bearer ${localStorage.getItem(
      'token'
    )}`;
    return this._request('movies');
  }

  _request(currentUrl) {
    return fetch(`${this._baseUrl}/${currentUrl}`, this._settingsObj).then(
      this._checkResponse
    );
  }

  _checkResponse = (response) => {
    // return Promise.reject(500);
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response.status);
    }
  };
}

const mainApi = new MainApi(MainApiRequestObj);
export default mainApi;
