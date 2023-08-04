import { escapeButton } from "./utils.js";

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

const popupimage = document.getElementById('popup-image');
const closeimage = document.getElementById('close-image');
const placeImage = document.getElementById('place-image');
  
  export default class Card {
    constructor(name, link){
      this.name = name;
      this.link = link;
    }
  
    _doDelete(){
      const idxObj = initialCards.findIndex((obj) => {
        return obj.name === this.name;
      })
  
      initialCards.splice(idxObj, 1);
  
      clear();
      render();
    }
  
    _doLike(item){
      item.target.classList.toggle("elements__like-black");
    }
  
    _doOpen(){
      popup.classList.add('popup_opened');
      popupimage.classList.add('popup__image_opened');
  
      placeImage.src = this.link;
      const placeName = document.getElementById('place-name');
      placeName.textContent = this.name;
  
      closeimage.addEventListener('click', closePopupImage)  
      document.addEventListener("keydown", escapeButton);
    }
  
    addEventDelete(clone){
      const deleteButton = clone.getElementById('delete');
      deleteButton.addEventListener('click', () => this._doDelete());
    }
  
    addEventOpen(clone){
      const clickPhoto = clone.getElementById('photo');
      clickPhoto.addEventListener('click', () => this._doOpen());
    }
  
    addEventLike(clone){
      const likeButton = clone.getElementById('like');
      likeButton.addEventListener('click', this._doLike)
    }
  
  
    Place(clone, elementId, type, value){
      const el = clone.getElementById(elementId);
      el[type] = value;
    }
  
    render(template){
      const clone = template.content.cloneNode(true);
    
      this.Place(clone, 'placename', 'innerText', this.name);
      this.Place(clone, 'photo', 'src', this.link);
  
      this.addEventDelete(clone);
      this.addEventOpen(clone);
      this.addEventLike(clone);
      
      return clone;
  
    }
  }
  
  render();
  
  export function render(){
    for(var i = 0; i < initialCards.length; i++){
  
      const { name, link } = initialCards[i];
    
      const card = new Card(
        name, link
      )
  
      const cloned = card.render(template);
  
      holder.appendChild(cloned);
    }
  }
  
    export function clear(){
        holder.innerHTML = '';
    }

  popupimage.addEventListener("click", function(evt){
    evt.stopPropagation();
  })

  function closePopupImage(){
    popup.classList.remove('popup_opened');
    popupimage.classList.remove('popup__image_opened');
    placeImage.src="";
  }