import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const validatorSettings = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */

//profile element
const profileSection = document.querySelector(".profile");
const profileName = profileSection.querySelector(".profile__name");
const profileDesc = profileSection.querySelector(".profile__description");

//edit modal element
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileForm = document.forms["edit-profile-form"];
const profileInputName = editProfileModal.querySelector(
  ".form__input_type_name"
);
const profileInputDesc = editProfileModal.querySelector(
  ".form__input_type_description"
);

//card modal element
const addCardModal = document.querySelector("#add-card-modal");
const addCardForm = document.forms["add-card-form"];
const cardInputTitle = addCardModal.querySelector(".form__input_type_title");
const cardInputUrl = addCardModal.querySelector(".form__input_type_url");

//card template element
const cardSelector = "#card-template";
const cardTemplate = document.querySelector("#card-template").content;
const cardGallery = document.querySelector(".gallery__cards");

//button element
const profileEditBtn = document.querySelector(".profile__edit-button");
const cardAddBtn = document.querySelector(".profile__add-button");
const closeBtns = document.querySelectorAll(".modal__close-button");
const submitBtns = document.querySelectorAll(".form__button");

//image-view modal element
const imageViewModal = document.querySelector("#image-view-modal");
const modalImageElement = imageViewModal.querySelector(".modal__image");
const modalImageTitle = imageViewModal.querySelector(".modal__image-title");

/* -------------------------------------------------------------------------- */
/*                                  Validator                                 */
/* -------------------------------------------------------------------------- */

const editFormValidator = new FormValidator(validatorSettings, editProfileForm);
const addFormValidator = new FormValidator(validatorSettings, addCardForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscModalToggle);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscModalToggle);
}

function renderCard(data, method = "prepend") {
  const card = new Card(data, cardSelector, handleImageClick);
  const cardElement = card.getView(data);
  cardGallery[method](cardElement);
}

// function getCardElement(data) {
//   const cardElement = cardTemplate.cloneNode(true);
//   const cardImageElement = cardElement.querySelector(".card__image");
//   const cardTextElement = cardElement.querySelector(".card__text");
//   const cardLikeButton = cardElement.querySelector(".card__like-button");
//   const cardDeleteBtn = cardElement.querySelector(".card__delete-button");

//   // add the event listener to the delete button
//   cardDeleteBtn.addEventListener("click", () => {

//     const cardElement = cardDeleteBtn.closest(".card");

//     cardElement.remove();
//   });

//   // add click listener to the cardImage element
// cardImageElement.addEventListener("click", () => {
//   modalImageTitle.textContent = data.name;
//   modalImageElement.src = data.link;
//   modalImageElement.alt = data.name + " photo preview";
//   openModal(imageViewModal);
// });

//   cardLikeButton.addEventListener("click", () => {
//     cardLikeButton.classList.toggle("card__like-button_liked");
//   });

//   cardTextElement.textContent = data.name;
//   cardImageElement.src = data.link;
//   cardImageElement.alt = data.name + " photo";
//   return cardElement;
// }

const handleImageClick = (data) => {
  modalImageTitle.textContent = data._name;
  modalImageElement.src = data._link;
  modalImageElement.alt = `${data._name} photo preview`;
  openModal(imageViewModal);
};

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = profileInputName.value;
  profileDesc.textContent = profileInputDesc.value;

  closeModal(editProfileModal);
  evt.target.reset();
};

const handleCardFormSubmit = (evt) => {
  evt.preventDefault();
  const name = cardInputTitle.value;
  const link = cardInputUrl.value;
  renderCard({ name, link });
  closeModal(addCardModal);
  evt.target.reset();
  addFormValidator.resetValidation();
};

const handleEscModalToggle = (evt) => {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    openedModal && closeModal(openedModal);
  }
};

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

closeBtns.forEach((btn) => {
  const modal = btn.closest(".modal");
  btn.addEventListener("click", () => closeModal(modal));
});

profileEditBtn.addEventListener("click", () => {
  profileInputName.value = profileName.textContent;
  profileInputDesc.value = profileDesc.textContent;

  openModal(editProfileModal);
  editFormValidator.enableBtn();
});

cardAddBtn.addEventListener("click", () => openModal(addCardModal));

editProfileForm.addEventListener("submit", handleProfileFormSubmit);
addCardForm.addEventListener("submit", handleCardFormSubmit);

initialCards.forEach((data) => renderCard(data, "append"));

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (evt) => {
    const isOutside = !evt.target.closest(".modal__container");
    if (isOutside) {
      closeModal(modal);
    }
  });
});
