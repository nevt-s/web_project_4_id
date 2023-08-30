import { escapeButton } from "./utils.js";
import { initialCards, popupimage, closeimage, placeImage, popupform } from "./constants.js";
import { Section } from "./section.js";
import { Popup } from "./Popup.js";
import { deleteCard, LikeCard, UnlikeCard } from "./Api.js";

  export default class Card {
    constructor(name, link, _id, like, likes){
      this._name = name;
      this._link = link;
      this._id = _id;
      this._like = like;
      this._likes = likes;
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
  
    _doLike(likecount, item, id){
      item.target.classList.toggle("elements__like-black");
      
      if(item.target.classList[1] == "elements__like-black"){
        LikeCard(id);
        likecount.textContent = this._like + 1
      }
      else{
        UnlikeCard(id);
        likecount.textContent = this._like - 1
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
            return true
          }

          else if(Like._id.includes("467c63fe9a20ead4274652eb") == false){
            return false
          }
          else{
            return false
          }
      })

      this.addEventDelete(clone);
      this.addEventOpen(clone);
      this.addEventLike(clone);
      
      return clone;
  
    }
  }
