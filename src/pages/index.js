import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import "./index.css";
import {
  initialCards,
  config,
  modalImageTitle,
  modalImageElement,
  imageViewModal,
  profileName,
  profileDesc,
  profileInputName,
  profileInputDesc,
  editProfileModal,
  cardInputTitle,
  cardInputUrl,
  addCardModal,
  closeBtns,
  profileEditBtn,
  cardAddBtn,
  editProfileForm,
  addCardForm,
  cardGallery,
  cardSelector,
} from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

/* -------------------------------------------------------------------------- */
/*                                  Validator                                 */
/* -------------------------------------------------------------------------- */

const formValidators = {};

const enableValidation = (config) => {
  const formList = [...document.querySelectorAll(config.formSelector)];
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute("name");

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
enableValidation(config);

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

// function openModal(modal) {
//   modal.classList.add("modal_opened");
//   document.addEventListener("keydown", handleEscModalToggle);
// }

// function closeModal(modal) {
//   modal.classList.remove("modal_opened");
//   document.removeEventListener("keydown", handleEscModalToggle);
// }

// function renderCard(data, method = "prepend") {
//   const card = new Card(data, cardSelector, handleImageClick);
//   const cardElement = card.getView(data);
//   cardGallery[method](cardElement);
// }

const handleImageClick = () => {
  const imagePopup = new PopupWithImage("#image-view-modal");
  imagePopup.open(initialCards);
  imagePopup.setEventListeners();
};

const handleProfileFormSubmit = () => {
  profileName.textContent = profileInputName.value;
  profileDesc.textContent = profileInputDesc.value;

  profilePopup.close();
};

const handleCardFormSubmit = () => {
  const name = cardInputTitle.value;
  const link = cardInputUrl.value;
  cardList.renderItems({ name, link });
  cardPopup.close();
  formValidators["addCardForm"].resetValidation();
};

const profilePopup = new PopupWithForm(
  "#edit-profile-modal",
  handleProfileFormSubmit
);
const cardPopup = new PopupWithForm("#add-card-modal", handleCardFormSubmit);

profilePopup.setEventListeners();
cardPopup.setEventListeners();

// const handleEscModalToggle = (evt) => {
//   if (evt.key === "Escape") {
//     const openedModal = document.querySelector(".modal_opened");
//     openedModal && closeModal(openedModal);
//   }
// };

const cardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card(item, cardSelector, handleImageClick);
      const cardElement = card.getView(item);

      cardList.addItem(cardElement);
    },
  },
  cardGallery
);

cardList.renderItems();

const imagePopup = new PopupWithImage("#image-view-modal");
imagePopup.setEventListeners();

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

// closeBtns.forEach((btn) => {
//   const modal = btn.closest(".modal");
//   btn.addEventListener("click", () => closeModal(modal));
// });

profileEditBtn.addEventListener("click", () => {
  formValidators["editProfileForm"].resetValidation();
  profileInputName.value = profileName.textContent;
  profileInputDesc.value = profileDesc.textContent;

  profilePopup.open();
});

cardAddBtn.addEventListener("click", () => cardPopup.open());

// editProfileForm.addEventListener("submit", handleProfileFormSubmit);
// addCardForm.addEventListener("submit", handleCardFormSubmit);

// initialCards.forEach((data) => renderCard(data, "append"));

// document.querySelectorAll(".modal").forEach((modal) => {
//   modal.addEventListener("click", (evt) => {
//     const isOutside = !evt.target.closest(".modal__container");
//     if (isOutside) {
//       closeModal(modal);
//     }
//   });
// });
