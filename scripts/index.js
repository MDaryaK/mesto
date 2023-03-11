const openPopup = document.querySelector('.profile__small-button');
const closePopup = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const form = document.querySelector('.form');
const nameInput = form.querySelector('.form__box');
const jobInput = form.querySelector('.form__box');
const nameNew = document.querySelector('.profile__title');
const jobNew = document.querySelector('.profile__subtitle');

 function openPopupButton() {
  popup.classList.add('popup_opened');
};
openPopup.addEventListener('click', openPopupButton);

 function closePopupButton() {
  popup.classList.remove('popup_opened');
};
closePopup.addEventListener('click', closePopupButton);

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameNew.textContent = nameInput.value;
  jobNew.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}
form.addEventListener('submit', handleFormSubmit);
