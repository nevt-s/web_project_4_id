let container = document.querySelector('.container');

let editButton = container.querySelector('.profile__edit-btn');
let popup = container.querySelector('.popup');
let popupCloseButton = container.querySelector('.popup__close-btn');
let popupName = container.querySelector('.popup__input-name');
let popupAbout = container.querySelector('.popup__input-about');
let profileName = container.querySelector('.profile__name');
let profileAbout = container.querySelector('.profile__about-me');
let editForm = container.querySelector('.popup__input-form');

function edit() {
    popup.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupAbout.value = profileAbout.textContent;
}

function closePopup(){
    popup.classList.remove('popup_opened');
    popupName.value = "";
    popupAbout.value = "";
}

function savePopup(evt){
    evt.preventDefault();
    profileName.textContent = popupName.value; 
    profileAbout.textContent = popupAbout.value; 
    closePopup(); 
}

editButton.addEventListener("click", edit);
popupCloseButton.addEventListener("click", closePopup);
editForm.addEventListener("submit", savePopup);

