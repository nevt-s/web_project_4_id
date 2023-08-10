import { popup, formtitle, name, about, nameContent, aboutContent } from "./constants";
import { UserInfo } from "./UserInfo";

export class PopupWithForm{
    constructor(popupSelector){
        this.popupSelector = popupSelector
    }

    openEditform(){

        const userinfo = new UserInfo(nameContent.textContent, aboutContent.textContent);

        popup.classList.add('popup_opened');
        this.popupSelector.classList.add('popup__container_opened');
        formtitle.textContent="Edit profile";

        document.getElementById("add").style.display="none";
        document.getElementById("edit").style.display="grid";

        userinfo.getUserInfo();
    }

    openPlaceform(){
        popup.classList.add('popup_opened');
        this.popupSelector.classList.add('popup__container_opened');
        formtitle.textContent = "Tempat baru";
      
        document.getElementById("edit").style.display="none";
        document.getElementById("add").style.display="grid";
    }
}