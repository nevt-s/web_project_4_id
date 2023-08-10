import { popup, placeImage, placeName } from "./constants";

export class PopupWithImage{
    constructor(link, name, popupSelector){
        this.link = link,
        this.name = name,
        this.popupSelector = popupSelector
    }

    OpenImage(){
        popup.classList.add('popup_opened');
        this.popupSelector.classList.add('popup__image_opened');
    
        placeImage.src = this.link;
        const placeName = document.getElementById('place-name');
        placeName.textContent = this.name;

    }
}