  import { enableValidation } from "./FormValidator.js";
  import { initialCards } from "./constants.js";
  import Card from "./card.js";
  import { Section } from "./section.js";
import { Popup } from "./Popup.js";

  //profile content
  const nameContent = document.getElementById('name-content');
  const aboutContent = document.getElementById('about-content');
  const popupimage = document.getElementById('popup-image');
  const popup = document.getElementById('popup');
  const placeImage = document.getElementById('place-image');
  const popupform = document.getElementById('popup-form');
  const closeform = document.getElementById('close-form');
  const formtitle = document.getElementById('form-title');
  //button
  const editButton = document.getElementById('edit-btn');
  const addButton = document.getElementById('add-btn');
  //form edit
  const formEdit = document.forms.edit;
  const name = formEdit.elements.name;
  const about = formEdit.elements.about;
  //form add
  const formAdd = document.forms.add;
  const title = formAdd.elements.title;
  const url = formAdd.elements.url;

  function closePopupImage(){
    popup.classList.remove('popup_opened');
    popupimage.classList.remove('popup__image_opened');
    placeImage.src="";
  }
  
function closeForm(){
    popup.classList.remove('popup_opened');
    popupform.classList.remove('popup__container_opened');
  
    const clearError = Array.from(document.querySelectorAll('.popup__input-form-error'));
    clearError.forEach((input) =>{
      input.textContent = ""
    })
  
    // formAdd.reset();
    // formEdit.reset();
  }
  
formEdit.addEventListener("submit", function (evt) {
  evt.preventDefault();
  saveProfile();
})

function saveProfile(){
  nameContent.textContent = name.value;
  aboutContent.textContent = about.value;
  formAdd.reset();
  formEdit.reset();
  closeForm();
}



formAdd.addEventListener("submit", function(evt){
  evt.preventDefault();
  saveAdd();
})

function saveAdd(){
  const section = new Section({items : initialCards , renderer : Card}, holder);

  initialCards.unshift({name: title.value, link: url.value});
  section.Clear();
  section.Renderer();
  formAdd.reset();
  formEdit.reset();
  closeForm();
}
export function escapeButton(evt){
  if(evt.keyCode == 27){
    closePopupImage();
    closeForm();
};
}

const testpopup = new Popup(popupform)
editButton.addEventListener('click',() => testpopup.Open("edit"));
addButton.addEventListener('click',() => testpopup.Open("add"));

