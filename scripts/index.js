const popupElement = document.querySelector('.popup');
const popupOpenButtonElement = document.querySelector('.profile__kusto');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const formElement = document.querySelector('.form');
let userInput = formElement.querySelector('.form__box_user');
let aboutInput = formElement.querySelector('.form__box_about');
let userEnterNewValue = document.querySelector('.profile__subtitle');
let aboutInputNewValue = document.querySelector('.profile__title');

const openPopup = function () {
  userInput.value = userEnterNewValue.textContent;
  aboutInput.value = aboutInputNewValue.textContent;
  popupElement.classList.add('popup_opened');
};

const closePopup = function () {
  popupElement.classList.remove('popup_opened');
};

const closePopupStrap = function (event) {
  if (event.currentTarget === event.target) {
    closePopup();
  }
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupStrap);

const processingFormSubmission = function (evt) {
  evt.preventDefault();

  userEnterNewValue.textContent = userInput.value;
  aboutInputNewValue.textContent = aboutInput.value;
  closePopup();
}

formElement.addEventListener('submit', processingFormSubmission);
