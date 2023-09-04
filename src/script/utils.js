  import { enableValidation } from "./FormValidator.js";
  import { formAvatar, avatarElement} from "./constants.js";
  import Card from "./card.js";
  import { Section } from "./section.js";
  import { Popup } from "./Popup.js";
  import { UserInfo } from "./UserInfo.js";
  import { addCard, ChangeProfileAvatar} from "./Api.js";

  //profile content
  const nameContent = document.getElementById('name-content');
  const aboutContent = document.getElementById('about-content');
  const popupform = document.getElementById('popup-form');
  //button
  const editButton = document.getElementById('edit-btn');
  const addButton = document.getElementById('add-btn');
  const editAvatarButton = document.getElementById('avatar-edit');
  //form edit
  const formEdit = document.forms.edit;
  const name = formEdit.elements.name;
  const about = formEdit.elements.about;
  //form add
  const formAdd = document.forms.add;
  const title = formAdd.elements.title;
  const url = formAdd.elements.url;



  const testpopup = new Popup(popupform);
  const userinfo = new UserInfo();
  
formEdit.addEventListener("submit", function (evt) {
  evt.preventDefault();
  saveProfile();
})

function saveProfile(){
  userinfo.setUserInfo();
}


formAdd.addEventListener("submit", function(evt){
  evt.preventDefault();
  saveAdd();
})

formAvatar.addEventListener("submit", function(evt){
  evt.preventDefault();
  ChangeProfileAvatar(avatarElement.value);
  formAvatar.reset();
})

function saveAdd(){
  addCard(title.value, url.value)
}

editButton.addEventListener('click',() => testpopup.Open("edit"));
addButton.addEventListener('click',() => testpopup.Open("add"));
editAvatarButton.addEventListener('click', () => testpopup.Open("editAvatar"));

