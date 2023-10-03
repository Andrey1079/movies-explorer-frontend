import authRequestObj from './constants';
class Authentification {
  constructor(requestObj) {
    this._baseUrl = requestObj.baseUrl;
    this._settingsObj = {};
    this._settingsObj.headers = requestObj.headers;
    this._settingsObj.method = '';
  }
  signIn(signInData) {
    this._settingsObj.method = 'POST';
    this._settingsObj.body = JSON.stringify(signInData);
    return this._request('signin');
  }
  checkToken(token) {
    delete this._settingsObj?.body;
    this._settingsObj.method = 'GET';
    this._settingsObj.headers.Authorization = `Bearer ${token}`;
    return this._request('users/me');
  }
  _request(currentUrl) {
    console.log(`${this._baseUrl}/${currentUrl}`);
    return fetch(`${this._baseUrl}/${currentUrl}`, this._settingsObj).then(
      this._checkResponse
    );
  }
  _checkResponse(response) {
    if (response.ok) {
      console.log('res.ok');
      return response.json();
    } else {
      return Promise.reject(response.status);
    }
  }
}

const authentification = new Authentification(authRequestObj);
export default authentification;
