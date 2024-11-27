export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeBtn = this._popupElement.querySelector(".modal__close-button");
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this._closeBtn.addEventListener("click", () => {
      this.close();
    });

    this._popupElement.addEventListener("click", (evt) => {
      const isOutside = !evt.target.closest(".modal__container");
      if (isOutside) {
        this.close();
      }
    });
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
}
