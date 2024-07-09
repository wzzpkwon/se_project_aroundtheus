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

const editButton = document.querySelector(".profile__edit-button");
const modalCloseButton = document.querySelector("modal__close-button");
const modal = document.querySelector("modal");

function openModal() {
  modal.classList.toggle("modal__opened");
}

function closeModal() {
  modal.classList.toggle("modal__opened");
}

editButton.addEventListener("click", openModal);
modalCloseButton.addEventListener("click", closeModal);
