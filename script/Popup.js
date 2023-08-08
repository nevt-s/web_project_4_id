import { 
    formtitle, 
    nameContent, 
    aboutContent , 
    name, 
    about, 
    closeform, 
    popup, 
    popupform, 
    popupimage,
    placeImage,
    closeimage,
} from "./constants.js";

export class Popup{
    constructor(popupSelector){
        this.popupSelector = popupSelector;
    }

    openEditform(){
        popup.classList.add('popup_opened');
        this.popupSelector.classList.add('popup__container_opened');
        formtitle.textContent="Edit profile";

        document.getElementById("add").style.display="none";
        document.getElementById("edit").style.display="grid";

        name.value = nameContent.textContent;
        about.value = aboutContent.textContent;

        this.setEventListener();
    }

    openPlaceform(){
        popup.classList.add('popup_opened');
        this.popupSelector.classList.add('popup__container_opened');
        formtitle.textContent = "Tempat baru";
      
        document.getElementById("edit").style.display="none";
        document.getElementById("add").style.display="grid";

        this.setEventListener();
    }

    OpenImage(link, name){
        popup.classList.add('popup_opened');
        this.popupSelector.classList.add('popup__image_opened');
    
        placeImage.src = link;
        const placeName = document.getElementById('place-name');
        placeName.textContent = name;
    
        this.setEventListener();
    }

    Open(evt, link, name){
        if(evt === "add"){
            this.openPlaceform();
        }
        else if(evt === "edit"){
            this.openEditform();
        }
        else if(evt === "image"){
            this.OpenImage(link, name);
        }
    }

    Close(){
        popup.classList.remove('popup_opened');
        popupform.classList.remove('popup__container_opened');
        popupimage.classList.remove('popup__image_opened');
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