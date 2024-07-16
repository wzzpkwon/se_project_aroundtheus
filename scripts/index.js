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

/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */

const profileFormElement = document.querySelector(".profile");
const profileEditBtn = document.querySelector(".profile__edit-button");
const profileDesc = profileFormElement.querySelector(".profile__description");
const profileName = profileFormElement.querySelector(".profile__name");

const modalElement = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close-button");
const modalForm = modalElement.querySelector(".modal__form");
const inputName = modalElement.querySelector(".form__input_type_name");
const inputDesc = modalElement.querySelector(".form__input_type_description");

const cardTemplate = document.querySelector("#card-template").content;
const cardGallery = document.querySelector(".gallery__cards");

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function openProfileModal() {
  inputName.value = profileName.textContent;
  inputDesc.value = profileDesc.textContent;
}

function toggleModal() {
  modalElement.classList.toggle("modal_opened");
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTextElement = cardElement.querySelector(".card__text");
  cardTextElement.textContent = data.name;
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name + " photo";
  return cardElement;
}

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDesc.textContent = inputDesc.value;

  toggleModal();
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

profileEditBtn.addEventListener("click", toggleModal);
profileEditBtn.addEventListener("click", openProfileModal);
modalForm.addEventListener("submit", handleProfileFormSubmit);
modalCloseBtn.addEventListener("click", toggleModal);

for (let i = 0; i < initialCards.length; i++) {
  const data = initialCards[i];
  const cardElement = getCardElement(data);
  cardGallery.append(cardElement);
}
