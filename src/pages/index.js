import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "./styles/index.css";
import stepsSrc from "./images/steps.png";

const stepsImage = document.getElementById("image-steps");
stepsImage.src = stepsSrc;

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

const config = {
  formSelector: ".form",
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

//image-view modal element
const imageViewModal = document.querySelector("#image-view-modal");
const modalImageElement = imageViewModal.querySelector(".modal__image");
const modalImageTitle = imageViewModal.querySelector(".modal__image-title");

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

const handleImageClick = ({ name, link }) => {
  modalImageTitle.textContent = name;
  modalImageElement.src = link;
  modalImageElement.alt = `${name} photo preview`;
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
  formValidators["addCardForm"].resetValidation();
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
  formValidators["editProfileForm"].resetValidation();
  profileInputName.value = profileName.textContent;
  profileInputDesc.value = profileDesc.textContent;

  openModal(editProfileModal);
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

console.log("Hello, World!");
