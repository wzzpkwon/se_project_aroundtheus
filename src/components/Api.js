export default class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    })
      .then((res) => {
        return this._checkResponse(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  addCard({ name, link }) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
      .then((res) => {
        return this._checkResponse(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    })
      .then((res) => {
        return this._checkResponse(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  addCardLikes(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this.headers,
    })
      .then((res) => {
        return this._checkResponse(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  deleteCardLikes(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this.headers,
    })
      .then((res) => {
        return this._checkResponse(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
      .then((res) => {
        return this._checkResponse(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  editProfile({ name, desc }) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: desc,
      }),
    })
      .then((res) => {
        this._checkResponse(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  editProfilePic({ link }) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: link,
      }),
    })
      .then((res) => {
        this._checkResponse(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
