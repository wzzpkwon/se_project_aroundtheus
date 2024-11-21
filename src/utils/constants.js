export const initialCards = [
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

export const config = {
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
export const profileSection = document.querySelector(".profile");
export const profileName = profileSection.querySelector(".profile__name");
export const profileDesc = profileSection.querySelector(
  ".profile__description"
);

//edit modal element
export const editProfileModal = document.querySelector("#edit-profile-modal");
export const editProfileForm = document.forms["edit-profile-form"];
export const profileInputName = editProfileModal.querySelector(
  ".form__input_type_name"
);
export const profileInputDesc = editProfileModal.querySelector(
  ".form__input_type_description"
);

//card modal element
export const addCardModal = document.querySelector("#add-card-modal");
export const addCardForm = document.forms["add-card-form"];
export const cardInputTitle = addCardModal.querySelector(
  ".form__input_type_title"
);
export const cardInputUrl = addCardModal.querySelector(".form__input_type_url");

//card template element
export const cardSelector = "#card-template";
export const cardTemplate = document.querySelector("#card-template").content;
export const cardGallery = document.querySelector(".gallery__cards");

//button element
export const profileEditBtn = document.querySelector(".profile__edit-button");
export const cardAddBtn = document.querySelector(".profile__add-button");
export const closeBtns = document.querySelectorAll(".modal__close-button");

//image-view modal element
export const imageViewModal = document.querySelector("#image-view-modal");
export const modalImageElement = imageViewModal.querySelector(".modal__image");
export const modalImageTitle = imageViewModal.querySelector(
  ".modal__image-title"
);
