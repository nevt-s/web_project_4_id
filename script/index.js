const container = document.querySelector('.container');

const editButton = container.querySelector('.profile__edit-btn');
const popup = container.querySelector('.popup');
const popupCloseButton = container.querySelectorAll('.popup__close-btn');
const popupName = container.querySelector('.popup__input-name');
const popupTitle = container.querySelector('.popup__info');
const popupAbout = container.querySelector('.popup__input-about');
const profileName = container.querySelector('.profile__name');
const profileAbout = container.querySelector('.profile__about-me');
const editForm = container.querySelector('.popup__input-form');
const addButton = container.querySelector('.profile__add-btn');
const cardsContainer = container.querySelector('.elements');
const popupContain = container.querySelector('.popup__container');
const popupImage = container.querySelector('.popup__image');

function edit() {
    popupContain.classList.add('popup__container_opened');
    popup.classList.add('popup_opened');
    popupName.placeholder = "Nama";
    popupAbout.placeholder = "Tentang Saya";
    popupTitle.textContent = "Edit profile";
    
    popupName.value = profileName.textContent;
    popupAbout.value = profileAbout.textContent;
}

function add(){
  popupContain.classList.add('popup__container_opened');
  popup.classList.add('popup_opened');
  popupName.placeholder = "Judul:";
  popupAbout.placeholder = "URL Gambar";
  popupTitle.textContent = "Tempat baru";
}


function closePopup(){
    popup.classList.remove('popup_opened');
    popupImage.classList.remove('popup__image_opened');
    popupContain.classList.remove('popup__container_opened');
    popupName.value = "";
    popupAbout.value = "";
}

function savePopup(evt){
    evt.preventDefault();
    if(popupTitle.textContent == "Edit profile"){
    profileName.textContent = popupName.value; 
    profileAbout.textContent = popupAbout.value;
    }
    else if (popupTitle.textContent == "Tempat baru"){
      initialCards.unshift({name: popupName.value, link: popupAbout.value});
      
      elementsRemove();
      elementsCall();
      
    }
    closePopup(); 
}


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

function elementsCall() {
  initialCards.forEach((item) => {
       const cardTemplate = document.createElement("article");
       const imageItem = document.createElement("img");
       const divItem = document.createElement("div");
       const placenameItem = document.createElement("h2");
       const buttonItem = document.createElement("button");
       const buttonimgItem = document.createElement("img");
       const deleteImg = document.createElement("img");
 
       cardTemplate.classList.add("elements__card");
       imageItem.classList.add("elements__image");
       divItem.classList.add("elements__item");
       placenameItem.classList.add("elements__place-name");
       buttonItem.classList.add("elements__like");
       buttonimgItem.classList.add("elements__like-image");
       deleteImg.classList.add("elements__delete");
 
       imageItem.src = item.link;
       placenameItem.textContent = item.name;
       buttonimgItem.src = "./images/elements/like.png";
       deleteImg.src = "./images/elements/delete.png";
   
       buttonimgItem.addEventListener("click", (item)=>{
        item.target.classList.toggle("elements__like-black");
       });

       deleteImg.addEventListener("click", () => {
        const listItem = deleteImg.closest(".elements__card");
        listItem.remove();
       })

       imageItem.addEventListener("click", ()=>{
        popup.classList.add("popup_opened");
        popupImage.classList.add("popup__image_opened");
        const popupSelectImg = document.querySelector(".popup__place-image");
        const popupSelectName = document.querySelector(".popup__placename");

        popupSelectImg.src = imageItem.closest(".elements__image").src;
        popupSelectName.textContent = placenameItem.textContent;
        
       })
       
       buttonItem.append(buttonimgItem);
       divItem.append(placenameItem, buttonItem);
       cardTemplate.append(imageItem, deleteImg, divItem);
       cardsContainer.append(cardTemplate);
  });   
}

function elementsRemove(){
  const removeElements = document.querySelectorAll(".elements__card");

  removeElements.forEach((item) => {
    item.remove()
  });
}

popupCloseButton.forEach(item=>{
  item.addEventListener("click", closePopup)
})
editForm.addEventListener("submit", savePopup);
addButton.addEventListener("click", add);
editButton.addEventListener("click", edit);

elementsCall();
