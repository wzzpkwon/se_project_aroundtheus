import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import "./index.css";
import {
  initialCards,
  config,
  profileName,
  profileDesc,
  profileInputName,
  profileInputDesc,
  profileEditBtn,
  cardAddBtn,
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

const handleImageClick = (data) => {
  imagePopup.open(data);
};

const handleProfileFormSubmit = (inputData) => {
  newUserInfo.setUserInfo({
    name: inputData.name,
    description: inputData.description,
  });
  profilePopup.close();
};

const handleCardFormSubmit = (inputData) => {
  renderCard(inputData);
  cardPopup.close();
  formValidators["addCardForm"].resetValidation();
};

const createCard = (cardData) => {
  const card = new Card(cardData, cardSelector, handleImageClick);
  return card.getView(cardData);
};

const renderCard = (cardData) => {
  const cardElement = createCard(cardData);
  cardList.addItem(cardElement);
};

/* -------------------------------------------------------------------------- */
/*                             Class Instantiation                            */
/* -------------------------------------------------------------------------- */

const imagePopup = new PopupWithImage("#image-view-modal");
imagePopup.setEventListeners();

const newUserInfo = new UserInfo({
  nameSelector: ".profile__name",
  descSelector: ".profile__description",
});

const profilePopup = new PopupWithForm(
  "#edit-profile-modal",
  handleProfileFormSubmit
);
profilePopup.setEventListeners();

const cardPopup = new PopupWithForm("#add-card-modal", handleCardFormSubmit);
cardPopup.setEventListeners();

const cardList = new Section(
  {
    data: initialCards,
    renderer: (data) => {
      const cardElement = createCard(data);
      cardList.addItem(cardElement);
    },
  },
  cardGallery
);
cardList.renderItems();

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

profileEditBtn.addEventListener("click", () => {
  formValidators["editProfileForm"].resetValidation();
  profileInputName.value = profileName.textContent;
  profileInputDesc.value = profileDesc.textContent;

  profilePopup.open();
});

cardAddBtn.addEventListener("click", () => cardPopup.open());
