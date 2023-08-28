import { 
    name, 
    about, 
    title,
    url,
    closeform, 
    popup, 
    popupform, 
    popupimage,
    closeimage,
} from "./constants.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { PopupWithConfirmation } from "./PopupWithConfirmation.js";

export class Popup{
    constructor(popupSelector){
        this.popupSelector = popupSelector;
    }
    
    Open(evt,id, link, name){
        const popupwithform = new PopupWithForm(this.popupSelector);
        const popupwithimage = new PopupWithImage(link, name, this.popupSelector);
        // const popupwithconfirmation = new PopupWithConfirmation(this.popupSelector);

        if(evt === "add"){
            popupwithform.openPlaceform();
        }
        else if(evt === "edit"){
            popupwithform.openEditform();
        }
        else if(evt === "image"){            
            popupwithimage.OpenImage();
        }
        else if(evt === "delete"){
            popupwithform.openConfirmation(id);        
        }
        
        this.setEventListener()
    }

    Close(){
        popup.classList.remove('popup_opened');
        popupform.classList.remove('popup__container_opened');
        popupimage.classList.remove('popup__image_opened');
        name.value = '';
        about.value = '';
        title.value = '';
        url.value = '';

        
        const buttonElement = document.querySelectorAll(".popup__submit");

        buttonElement.forEach((item)=>{
            item.classList.add('popup__submit_inactive');
            item.disabled = true;
        })
    }

    _handleEscClose(evt){
        if(evt.keyCode == 27){
            this.Close();
        };
    }

    setEventListener(){
        closeform.addEventListener('click', () => this.Close());
        closeimage.addEventListener('click', () => this.Close());
        document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
        this.popupSelector.addEventListener("click", function(evt){
            evt.stopPropagation();
          })
          
          popup.addEventListener("click", () => {
            this.Close();
          })
    }
}