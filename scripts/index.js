const initialCards = [
  {
    name: "Yosemite Valley",
    link: "ttps://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Yosemite Valley",
    link: "ttps://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Yosemite Valley",
    link: "ttps://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Yosemite Valley",
    link: "ttps://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Yosemite Valley",
    link: "ttps://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Yosemite Valley",
    link: "ttps://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
];

const profileFormElement = document.querySelector(".profile");
const profileDesc = profileFormElement.querySelector(".profile__description");
const profileName = profileFormElement.querySelector(".profile__name");

const modalElement = document.querySelector(".modal");
const inputName = modalElement.querySelector(".form__input_type_name");
const inputDesc = modalElement.querySelector(".form__input_type_description");

const profileEditBtn = document.querySelector(".profile__edit-button");
const modalCloseBtn = document.querySelector(".modal__close-button");
const formSubmitBtn = modalElement.querySelector(".form__button");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDesc.textContent = inputDesc.value;

  toggleModal();
}

function toggleModal() {
  inputName.value = profileName.textContent;
  inputDesc.value = profileDesc.textContent;
  modalElement.classList.toggle("modal_opened");
}

profileEditBtn.addEventListener("click", toggleModal);
formSubmitBtn.addEventListener("click", handleProfileFormSubmit);
modalCloseBtn.addEventListener("click", toggleModal);
