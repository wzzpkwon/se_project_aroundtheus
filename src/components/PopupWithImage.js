import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._popupImageElement = this._popupElement.querySelector(".modal__image");
    this._popupImageTitle = this._popupElement.querySelector(
      ".modal__image-title"
    );
  }

  open(data) {
    super.open();
    this._popupImageTitle.textContent = data.name;
    this._popupImageElement.src = data.link;
    this._popupImageElement.alt = `${data.name} photo preview`;
  }
}
