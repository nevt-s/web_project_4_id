import { escapeButton } from "./utils.js";
import { initialCards, popupimage, closeimage, placeImage } from "./constants.js";
import { Section } from "./section.js";
import { Popup } from "./Popup.js";
import { deleteCard, LikeCard } from "./Api.js";

  export default class Card {
    constructor(name, link, _id, like){
      this._name = name;
      this._link = link;
      this._id = _id;
      this._like = like;
    }

    //button function
    _doDelete(item){
      // api.getInitialCards()
      // .then((result) => {
      //   console.log("card OK")
      //   console.log(result)
      //   const section = new Section({items : result , renderer : Card}, holder);
      //   section.doDelete(item);
      // })
      // .catch((err) => {
      //   console.log(err); // log kesalahan ke konsol
      // });

      // const section = new Section({items : initialCards , renderer : Card}, holder);
      // section.doDelete(item);
      deleteCard(item);
    }
  
    _doLike(item, id){
      item.target.classList.toggle("elements__like-black");
      LikeCard(1);
    }

    
    addEventDelete(clone){
      const deleteButton = clone.getElementById('delete');
      deleteButton.addEventListener('click', () => this._doDelete(this._id));
    }
  
    addEventOpen(clone){
      const testpopup = new Popup(popupimage);
      const clickPhoto = clone.getElementById('photo');
      clickPhoto.addEventListener('click', () => testpopup.Open("image", this._link, this._name));
    }
  
    addEventLike(clone){
      const likeButton = clone.getElementById('like');
      likeButton.addEventListener('click', (item) => this._doLike(item, this._id))
    }
  
  
    Place(clone, elementId, type, value){
      const el = clone.getElementById(elementId);
      el[type] = value;
    }
  
    render(template){
      const clone = template.content.cloneNode(true);
    
      this.Place(clone, 'placename', 'innerText', this._name);
      this.Place(clone, 'photo', 'src', this._link);
      this.Place(clone, 'id', 'innerText', this._id);
      this.Place(clone, 'like-count', 'innerText', this._like);
  
      this.addEventDelete(clone);
      this.addEventOpen(clone);
      this.addEventLike(clone);
      
      return clone;
  
    }
  }
