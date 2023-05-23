const container = document.querySelector('.container');

const editButton = container.querySelector('.profile__edit-btn');
const popup = container.querySelector('.popup');
const popupCloseButton = container.querySelector('.popup__close-btn');
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
    popupContain.classList.remove("popup__container_opened");
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
    const card = document.querySelector(".elements__card");
    const cardImage = document.querySelector(".elements__image");
    const cardTitle = document.querySelector(".elements__place-name");
    const likeButton = document.querySelector(".elements__like-image");
    const deleteButton = document.querySelector(".elements__delete");

    cardImage.src = item.link;
    cardTitle.textContent = item.name;
    likeButton.src = "./images/elements/like.png";
    deleteButton.src = "./images/elements/delete.png";

    likeButton.addEventListener("click",(item)=>{
      item.target.classList.toggle("elements__like-black");
    });

    deleteButton.addEventListener("click",()=>{
      const listItem = deleteButton.closest(".elements__card");
      listItem.remove();
    });

    cardImage.addEventListener("click",()=>{
      popup.classList.add("popup_opened");
      popupImage.classList.add("popup__image_opened");
      const popupSelectImg = document.querySelector(".popup__place-image");
      const popupSelectName = document.querySelector(".popup__placename");

      popupSelectImg.src = cardImage.closest(".elements__image").src;
      popupSelectName.textContent = cardImage.closest(".elements__place-name").textContent;
    });

    const cardCopy = card.cloneNode(true);
    cardsContainer.prepend(cardCopy);
  });  
}

function elementsRemove(){
  const removeElements = document.querySelectorAll(".elements__card");

  removeElements.forEach((item) => {
    item.remove()
  });
}

popupCloseButton.addEventListener("click", closePopup);
editForm.addEventListener("submit", savePopup);
addButton.addEventListener("click", add);
editButton.addEventListener("click", edit);

elementsCall();
