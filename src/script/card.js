import { escapeButton } from "./utils.js";
import { initialCards, popupimage, closeimage, placeImage } from "./constants.js";
import { Section } from "./Section.js";
import { Popup } from "./Popup.js";

  export default class Card {
    constructor(name, link){
      this._name = name;
      this._link = link;
    }

    //button function
    _doDelete(item){
      const section = new Section({items : initialCards , renderer : Card}, holder);
      section.doDelete(item);
    }
  
    _doLike(item){
      item.target.classList.toggle("elements__like-black");
    }
    
    addEventDelete(clone){
      const deleteButton = clone.getElementById('delete');
      deleteButton.addEventListener('click', () => this._doDelete(this._name));
    }
  
    addEventOpen(clone){
      const testpopup = new Popup(popupimage);
      const clickPhoto = clone.getElementById('photo');
      clickPhoto.addEventListener('click', () => testpopup.Open("image", this._link, this._name));
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
    
      this.Place(clone, 'placename', 'innerText', this._name);
      this.Place(clone, 'photo', 'src', this._link);
  
      this.addEventDelete(clone);
      this.addEventOpen(clone);
      this.addEventLike(clone);
      
      return clone;
  
    }
  }
