import Popup from "./Popup.js";
import { modalImageTitle, modalImageElement } from "../utils/constants.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._popupImageElement = modalImageElement;
    this._popupImageTitle = modalImageTitle;
  }

  open(data) {
    super.open();
    this._popupImageTitle.textContent = data.name;
    this._popupImageElement.src = data.link;
    this._popupImageElement.alt = `${data.name} photo preview`;
  }
}
