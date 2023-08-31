import { escapeButton } from "./utils.js";
import { initialCards, popupimage, closeimage, placeImage, popupform } from "./constants.js";
import { Section } from "./section.js";
import { Popup } from "./Popup.js";
import { deleteCard, LikeCard, UnlikeCard } from "./Api.js";

  export default class Card {
    constructor(name, link, _id, like, likes, owner_id){
      this._name = name;
      this._link = link;
      this._id = _id;
      this._like = like;
      this._likes = likes;
      this.owner_id = owner_id;
    }

    //button function
    _doDelete(item){
      deleteCard(item);
    }
  
    _doLike(likecount, item, id){
      item.target.classList.toggle("elements__like-black");
      
      if(item.target.classList[1] == "elements__like-black"){
        LikeCard(id);
        likecount.textContent = Number(likecount.textContent) + 1
      }
      else{
        UnlikeCard(id);
        likecount.textContent = Number(likecount.textContent) - 1
      }
    }

    
    addEventDelete(clone){
      const testpopup = new Popup(popupform);
      const deleteButton = clone.getElementById('delete');
      deleteButton.addEventListener('click',() => testpopup.Open("delete", this._id));
    }
  
    addEventOpen(clone){
      const testpopup = new Popup(popupimage);
      const clickPhoto = clone.getElementById('photo');
      clickPhoto.addEventListener('click', () => testpopup.Open("image", this._id, this._link, this._name));
    }
  
    addEventLike(clone){
      const likeButton = clone.getElementById('like');
      const likecount = clone.getElementById('like-count')
      likeButton.addEventListener('click', (item) => this._doLike(likecount, item, this._id));
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
      
      const likeButton = clone.querySelector('.elements__like-image');
      
      const checkLike = this._likes.some(function (Like){
          if(Like._id.includes("467c63fe9a20ead4274652eb") == true){
            likeButton.classList.add('elements__like-black')
          }
          else{
            return false
          }
      })

      this.checkOwner(clone, this.owner_id);

      this.addEventDelete(clone);
      this.addEventOpen(clone);
      this.addEventLike(clone);
      
      return clone;
  
    }

    checkOwner(clone, owner_id){
      const deleteButton = clone.getElementById('delete');
      if(owner_id == '467c63fe9a20ead4274652eb'){
        deleteButton.classList.add('elements__delete-show');
      }
      else{
        deleteButton.classList.remove('elements__delete-show');
      }  
    }
  }
