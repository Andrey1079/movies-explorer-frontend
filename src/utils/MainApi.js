import authRequestObj from './constants';
import authErrorMessages from '../variables/authErrorMessages';
class MainApi {
  constructor(requestObj, authErrorMessages) {
    this._baseUrl = requestObj.baseUrl;
    this._settingsObj = {};
    this._settingsObj.headers = requestObj.headers;
    this._settingsObj.method = '';
    this._authErrorMessages = authErrorMessages;
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
  checkToken(token) {
    delete this._settingsObj?.body;
    this._settingsObj.method = 'GET';
    this._settingsObj.headers.Authorization = `Bearer ${token}`;
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
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(this._setErrorMessage(response));
    }
  };
  _setErrorMessage(error) {
    if (error.status === 400) return authErrorMessages.badRequest;
    if (error.status === 409) return authErrorMessages.conflict;
    if (error.status === 500) return authErrorMessages.server;
    if (error.error.status === 401) return authErrorMessages.badRequest;
  }
}

const mainApi = new MainApi(authRequestObj, authErrorMessages);
export default mainApi;
