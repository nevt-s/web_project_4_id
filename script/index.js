const container = document.querySelector('.container');

const editButton = container.querySelector('.profile__edit-btn');
const popup = container.querySelector('.popup');
const popupCloseButton = container.querySelectorAll('.popup__close-btn');
const popupTitle = container.querySelector('.popup__info');
const profileName = container.querySelector('.profile__name');
const profileAbout = container.querySelector('.profile__about-me');
const addButton = container.querySelector('.profile__add-btn');
const cardsContainer = container.querySelector('.elements');
const popupContain = container.querySelector('.popup__container');
const popupImage = container.querySelector('.popup__image');

const formEdit = document.forms.edit;
const name = formEdit.elements.name;
const about = formEdit.elements.about;

const formAdd = document.forms.add;
const title = formAdd.elements.title;
const url = formAdd.elements.url;

const forms = document.querySelector(".popup__input-form");
const formInput = forms.querySelector(".popup__input");
const formError = forms.querySelector(`.${formInput.id}-error`);


editButton.addEventListener("click", function() {
  popupContain.classList.add('popup__container_opened');
  popup.classList.add('popup_opened');
  popupTitle.textContent = "Edit profile";

  document.getElementById("add").style.display="none";
  document.getElementById("edit").style.display="grid";

  name.value = profileName.textContent;
  about.value = profileAbout.textContent;

});

addButton.addEventListener("click", function() {
  popupContain.classList.add('popup__container_opened');
  popup.classList.add('popup_opened');
  popupTitle.textContent = "Tempat baru";

  document.getElementById("edit").style.display="none";
  document.getElementById("add").style.display="grid";
});

document.addEventListener("keydown", function(evt){
  if(evt.keyCode == 27){
    closePopup();
  }
});

popupContain.addEventListener("click", function(evt){
  evt.stopPropagation();
})

popup.addEventListener("click", function(evt){
  closePopup();
})

popupCloseButton.forEach(item=>{
  item.addEventListener("click", closePopup)
});

function closePopup(){
  popup.classList.remove('popup_opened');
  popupImage.classList.remove('popup__image_opened');
  popupContain.classList.remove('popup__container_opened');
  formEdit.reset();
  formAdd.reset();
  const formError = formAdd.querySelectorAll('.popup__input-form-error');
  formError.forEach((formElement) => {
    formElement.textContent = "";
  });

  
  const formErrorEdit = formEdit.querySelectorAll('.popup__input-form-error');
  formErrorEdit.forEach((formElement) => {
    formElement.textContent = "";
  });
}

function SaveEdit(){  
    profileName.textContent = name.value; 
    profileAbout.textContent = about.value;
    closePopup();
}

function SaveAdd(){
      initialCards.unshift({name: title.value, link: url.value});
      elementsRemove();
      elementsCall();
      closePopup();    
      formAdd.reset();  
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
  initialCards.forEach((item)=>{
    const cardTemplate = document.getElementsByClassName("elements__template")[0];
    const cardArticle = document.querySelector(".elements");
    const cloneCard = cardTemplate.content.cloneNode(true);
    const image = cloneCard.querySelector(".elements__image");
    const placename = cloneCard.querySelector(".elements__place-name");
    const like = cloneCard.querySelector(".elements__like-image");
    const likeButton = cloneCard.querySelector(".elements__like");
    const deleteButton = cloneCard.querySelector(".elements__delete");

    image.src = item.link;
    placename.textContent = item.name;
    like.src = "./images/elements/like.png";
    deleteButton.src = "./images/elements/delete.png";
    cardArticle.append(cloneCard);

    likeButton.addEventListener("click",(item)=>{
      item.target.classList.toggle("elements__like-black");
    });

    deleteButton.addEventListener("click", () => {
      const listItem = deleteButton.closest(".elements__card");
      listItem.remove();
    });

    image.addEventListener("click", ()=>{
      popup.classList.add("popup_opened");
      popupImage.classList.add("popup__image_opened");
      const popupSelectImg = document.querySelector(".popup__place-image");
      const popupSelectName = document.querySelector(".popup__placename");

      popupSelectImg.src = image.closest(".elements__image").src;
      popupSelectName.textContent = placename.textContent;
    });
  });
}

function elementsRemove(){
  const removeElements = document.querySelectorAll(".elements__card");

  removeElements.forEach((item) => {
    item.remove()
  });
}

formEdit.addEventListener("submit", function (evt) {
  evt.preventDefault();
  SaveEdit();
})

formAdd.addEventListener("submit", function(evt){
  evt.preventDefault();
  SaveAdd();
})

elementsCall();

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);

  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};


const toggleButtonState = (inputList, buttonElement) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("button_inactive");
  } else {
    buttonElement.classList.remove("button_inactive");
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__submit");
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () =>{
  const formList = Array.from(document.querySelectorAll(".popup__input-form"));
  formList.forEach((formElement) => {
  formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });

    setEventListeners(formElement);
});
}

enableValidation();

