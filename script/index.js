// array
const initialCards = [
    {
      name: "Lembah Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
    },
    {
      name: "Danau Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
    },
    {
      name: "Pegunungan Gundul",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
    },
    {
      name: "Gunung Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
    },
    {
      name: "Taman Nasional Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
    }
  ];

//profile content
const nameContent = document.getElementById('name-content');
const aboutContent = document.getElementById('about-content');
//card
const holder = document.getElementById('holder');
const template = document.getElementById('template');
//popup
const popup = document.getElementById('popup');
//popup image
const popupimage = document.getElementById('popup-image');
const closeimage = document.getElementById('close-image');
const placeImage = document.getElementById('place-image');
//popup form
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

render();

function render(){
  for(i = 0; i < initialCards.length; i++){

    const { name, link } = initialCards[i];
  
    const clone = template.content.cloneNode(true);
  
    const placeName = clone.getElementById('placename');
    placeName.innerText = name;
  
    const placePhoto = clone.getElementById('photo');
    placePhoto.src = link;
    placePhoto.addEventListener('click', () => OpenPhoto({
      name,
      link
    }));
  
    const deleteButton = clone.getElementById('delete');  
    deleteButton.addEventListener('click', () => deleteCard({
      name,
      link
    }));

    const likeButton = clone.getElementById('like');
    likeButton.addEventListener('click', likeCard);

    holder.appendChild(clone);
  }
}

function clear(){
  holder.innerHTML = '';
}

//card button
function deleteCard(obj){
  const { name, link } = obj;

  const idxObj = initialCards.findIndex(object => {
    return object.name === name;
  });
  
  initialCards.splice(idxObj, 1);

  clear();
  render();
}

function likeCard(item){  
  item.target.classList.toggle("elements__like-black");
}

function OpenPhoto(obj){
  popup.classList.add('popup_opened');
  
  popupimage.classList.add('popup__image_opened');

  const { name, link } = obj;
  placeImage.src = link;

  const placeName = document.getElementById('place-name');
  placeName.textContent = name;
  
  closeimage.addEventListener('click', closePopupImage)  
  document.addEventListener("keydown", escapeButton);
}

//edit profile
function editProfile(){
  popupform.classList.add('popup__container_opened');
  popup.classList.add('popup_opened');
  formtitle.textContent="Edit profile";

  document.getElementById("add").style.display="none";
  document.getElementById("edit").style.display="grid";

  name.value = nameContent.textContent;
  about.value = aboutContent.textContent;

  closeform.addEventListener('click', closeForm);
  document.addEventListener("keydown", escapeButton);
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

//add place
function addPlace(){
  popupform.classList.add('popup__container_opened');
  popup.classList.add('popup_opened');
  formtitle.textContent = "Tempat baru";

  document.getElementById("edit").style.display="none";
  document.getElementById("add").style.display="grid";

  closeform.addEventListener('click', closeForm);
  document.addEventListener("keydown", escapeButton);
}

formAdd.addEventListener("submit", function(evt){
  evt.preventDefault();
  saveAdd();
})

function saveAdd(){
      initialCards.unshift({name: title.value, link: url.value});
      clear();
      render();
      formAdd.reset();
      formEdit.reset();
      closeForm();
}

//close popup
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

  formAdd.reset();
  formEdit.reset();
}

//close by escape
function escapeButton(evt){
  if(evt.keyCode == 27){
    closePopupImage();
    closeForm();
};
}

//close by click
popupform.addEventListener("click", function(evt){
  evt.stopPropagation();
})

popupimage.addEventListener("click", function(evt){
  evt.stopPropagation();
})

popup.addEventListener("click", function(evt){
  closeForm();
  closePopupImage();
})

//event listener
editButton.addEventListener('click',editProfile);
addButton.addEventListener('click',addPlace);

