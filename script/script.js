let container = document.querySelector('.container');

let editButton = container.querySelector('.profile__edit-btn');
let popup = container.querySelector('.popup');
let popupCloseButton = container.querySelector('.popup__close-btn');
let popupName = container.querySelector('.popup__input-name');
let popupAbout = container.querySelector('.popup__input-about');
let popupSaveButton = container.querySelector('.popup__submit');
let profileName = container.querySelector('.profile__name');
let profileAbout = container.querySelector('.profile__about-me');

function edit() {
    popup.classList.add('popup__opened');
    popupName.value = profileName.textContent;
    popupAbout.value = profileAbout.textContent;
}

function closePopup(){
    popup.classList.remove('popup__opened');
    popupName.value = "";
    popupAbout.value = "";
}

function savePopup(){
    profileName.textContent = popupName.value;
    profileAbout.textContent = popupAbout.value;
    closePopup();
}
  
editButton.addEventListener("click", edit);
popupCloseButton.addEventListener("click", closePopup);
popupSaveButton.addEventListener("click", savePopup);