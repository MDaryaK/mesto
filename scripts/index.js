const openPopup = document.querySelector('.profile__kusto');
const closePopup = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');

openPopup.addEventListener('click', function () {
  popup.classList.add('popup_opened');
});

closePopup.addEventListener('click', function closePopupButton() {
  popup.classList.remove('popup_opened');
});

 let nameInput = form.querySelector('.form__box_user');
 let jobInput = form.querySelector('.form__box_about');
 let nameNew = document.querySelector('.profile__subtitle');
 let jobNew = document.querySelector('.profile__title');
 let form = form.querySelector('.form');

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameInput.value = nameNew.textContent;
  jobInput.value = jobNew.textContent;
  closePopupButton();
}
form.addEventListener('submit', handleFormSubmit);
