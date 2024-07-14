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

const profileEditBtn = document.querySelector(".profile__edit-button");
const modalCloseBtn = document.querySelector(".modal__close-button");
const modal = document.querySelector(".modal");

function openModal() {
  modal.classList.toggle("modal_opened");
}

function closeModal() {
  modal.classList.toggle("modal_opened");
}

profileEditBtn.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);
