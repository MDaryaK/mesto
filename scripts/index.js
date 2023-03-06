const popupElement = document.querySelector('.popup');
const popupOpenButtonElement = document.querySelector('.profile__kusto');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__box_name');
let aboutInput = formElement.querySelector('.form__box_about');
let nameInputNewValue = document.querySelector('.profile__subtitle');
let aboutInputNewValue = document.querySelector('.profile__title');

const openPopup = function () {
  nameInput.value = nameInputNewValue.textContent;
  aboutInput.value = aboutInputNewValue.textContent;
  popupElement.classList.add('popup_opened');
};

const closePopup = function () {
  popupElement.classList.remove('popup_opened');

};

const closePopupByClickOverlay = function (event) {
  if (event.currentTarget === event.target) {
    closePopup();
  }
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOverlay);

const handleFormSubmit = function (evt) {
  evt.preventDefault();

  nameInputNewValue.textContent = nameInput.value;
  aboutInputNewValue.textContent = aboutInput.value;
  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);