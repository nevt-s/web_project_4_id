export const initialCards = [
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
export const nameContent = document.getElementById('name-content');
export const aboutContent = document.getElementById('about-content');
export const avatarImage = document.getElementById('avatar-image');
export const popupimage = document.getElementById('popup-image');
export const closeimage = document.getElementById('close-image');
export const popup = document.getElementById('popup');
export const placeImage = document.getElementById('place-image');
export const popupform = document.getElementById('popup-form');
export const closeform = document.getElementById('close-form');
export const formtitle = document.getElementById('form-title');
//button
export const editButton = document.getElementById('edit-btn');
export const addButton = document.getElementById('add-btn');
//form edit
export const formEdit = document.forms.edit;
export const name = formEdit.elements.name;
export const about = formEdit.elements.about;
//form add
export const formAdd = document.forms.add;
export const title = formAdd.elements.title;
export const url = formAdd.elements.url;
