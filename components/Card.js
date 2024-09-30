export default class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    //.card__like-button
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeBtn();
      });

    //.card__delete-button
    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });

    //.card__image
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleImageClick(this);
      });
  }

  _handleLikeBtn() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_liked");
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  getView() {
    this._element = this._getTemplate();

    //get the card view
    this._element.querySelector(".card__text").textContent = this._name;
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = `${this._name} photo`;
    //set event listeners
    this._setEventListeners();

    //return the card
    return this._element;
  }
}
