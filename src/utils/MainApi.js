class MainApi {
  constructor(requestObj) {
    this._baseUrl = requestObj.baseUrl;
    this._settingsObj = {};
    this._settingsObj.method = 'GET';
    this._settingsObj.headers = requestObj.headers;
    this._settingsObj.headers.Authorization = `Bearer ${localStorage.getItem(
      'token'
    )}`;
  }
  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }
}
