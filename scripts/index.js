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
const profileDesc = profileFormElement.querySelector(".profile__description");

//edit modal element
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const profileInputName = editProfileModal.querySelector(
  ".form__input_type_name"
);
const profileInputDesc = editProfileModal.querySelector(
  ".form__input_type_description"
);

//card modal element
const addCardModal = document.querySelector("#add-card-modal");
const addCardForm = document.querySelector("#add-card-form");
const cardInputTitle = addCardModal.querySelector(".form__input_type_title");
const cardInputUrl = addCardModal.querySelector(".form__input_type_url");

//card template element
const cardTemplate = document.querySelector("#card-template").content;
const cardGallery = document.querySelector(".gallery__cards");

//button element
const profileEditBtn = document.querySelector(".profile__edit-button");
const profileModalCloseBtn = editProfileModal.querySelector(
  ".modal__close-button"
);
const cardAddBtn = document.querySelector(".profile__add-button");
const cardModalCloseBtn = addCardModal.querySelector(".modal__close-button");

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function toggleModal(modal) {
  modal.classList.toggle("modal_opened");
}

function renderCard(data) {
  const cardElement = getCardElement(data);
  cardGallery.prepend(cardElement);
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTextElement = cardElement.querySelector(".card__text");
  const cardLikeButton = cardElement.querySelector(".card__like-button");

  //find delete button

  //add the event listener to the delete button
  // cardElement.remove();

  //add click listener to the cardImage element
  // openmodal with previewImageModal

  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_liked");
  });

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

  toggleModal(editProfileModal);
};

const handleCardFormSubmit = (evt) => {
  evt.preventDefault();
  const name = cardInputTitle.value;
  const link = cardInputUrl.value;
  renderCard({ name, link }, cardGallery);
  toggleModal(addCardModal);
};

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

profileEditBtn.addEventListener("click", () => {
  profileInputName.value = profileName.textContent;
  profileInputDesc.value = profileDesc.textContent;

  toggleModal(editProfileModal);
});

profileModalCloseBtn.addEventListener("click", () =>
  toggleModal(editProfileModal)
);

cardAddBtn.addEventListener("click", () => toggleModal(addCardModal));
cardModalCloseBtn.addEventListener("click", () => toggleModal(addCardModal));

editProfileForm.addEventListener("submit", handleProfileFormSubmit);
addCardForm.addEventListener("submit", handleCardFormSubmit);

initialCards.forEach((data) => renderCard(data, cardGallery));
