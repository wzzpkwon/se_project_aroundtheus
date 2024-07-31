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

//profile element
const profileFormElement = document.querySelector(".profile");
const profileName = profileFormElement.querySelector(".profile__name");
const profileEditBtn = document.querySelector(".profile__edit-button");
const profileDesc = profileFormElement.querySelector(".profile__description");

//edit modal
const profileModalCloseBtn = document.querySelector(
  "#profile-modal-close-button"
);
const editProfileModal = document.querySelector("#edit-modal");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const profileInputName = editProfileModal.querySelector(
  ".form__input_type_name"
);
const profileInputDesc = editProfileModal.querySelector(
  ".form__input_type_description"
);

//card modal
const addCardModal = document.querySelector("#add-card-modal");
const addCardForm = document.querySelector("#add-card-form");
const cardModalCloseBtn = document.querySelector("#card-modal-close-button");

const cardTemplate = document.querySelector("#card-template").content;
const cardGallery = document.querySelector(".gallery__cards");
const cardAddBtn = document.querySelector(".profile__add-button");

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function openModal(name, desc) {
  profileInputName.value = name.textContent;
  profileInputDesc.value = desc.textContent;
}

function toggleProfileModal() {
  editProfileModal.classList.toggle("modal_opened");
}

function toggleCardModal() {
  addCardModal.classList.toggle("modal_opened");
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

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = profileInputName.value;
  profileDesc.textContent = profileInputDesc.value;

  toggleCardModal();
};

const handleCardFormSubmit = (evt, data) => {
  evt.preventDefault();
  const cardLink = data.link;
  const cardName = data.name;
  initialCards.push(cardLink, cardName);
  initialCards.forEach((data) => {
    const cardElement = getCardElement(data);
    cardGallery.prepend(cardElement);
  });

  toggleCardModal();
};

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

profileEditBtn.addEventListener("click", toggleProfileModal);
profileEditBtn.addEventListener("click", openModal(profileName, profileDesc));
profileModalCloseBtn.addEventListener("click", toggleProfileModal);

cardAddBtn.addEventListener("click", toggleCardModal);
cardModalCloseBtn.addEventListener("click", toggleCardModal);
editProfileForm.addEventListener("submit", handleProfileFormSubmit);

// galleryModalForm.addEventListener("submit", handleCardFormSubmit);

initialCards.forEach((data) => {
  cardGallery.prepend(getCardElement(data));
});
