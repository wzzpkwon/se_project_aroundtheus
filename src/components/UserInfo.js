export default class UserInfo {
  constructor({ nameSelector, descSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(descSelector);
  }

  getUserInfo() {
    // This will return an object with two properties
    return {
      name: this._nameElement.textContent,
      description: this._jobElement.textContent,
    };
  }

  setUserInfo(userData) {
    // Update the text content of this._nameElement with the name property from the data object
    // Update the text content of this._jobElement with the corresponding property from the data object
    this._nameElement.textContent = userData.name;
    this._jobElement.textContent = userData.description;
  }
}
