import { popup, formtitle, name, about, nameContent, aboutContent } from "./constants";
import { UserInfo } from "./UserInfo";
import { deleteCard, ChangeProfileAvatar } from "./Api";

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
        document.getElementById("confirm").style.display="none";
        document.getElementById("profile-avatar").style.display="none";

        userinfo.getUserInfo();
    }

    openPlaceform(){
        popup.classList.add('popup_opened');
        this.popupSelector.classList.add('popup__container_opened');
        formtitle.textContent = "Tempat baru";
      
        document.getElementById("edit").style.display="none";
        document.getElementById("add").style.display="grid";
        document.getElementById("confirm").style.display="none";
        document.getElementById("profile-avatar").style.display="none";

    }

    openConfirmation(item){
        popup.classList.add('popup_opened');
        this.popupSelector.classList.add('popup__confirmation_opened');
        formtitle.textContent = "Apakah anda yakin?";

        const confirm = document.getElementById("confirm-submit");
        confirm.textContent = 'Ya';
        
        confirm.classList.remove("popup__submit_inactive");
        confirm.disabled = false;
        confirm.addEventListener('click', () => deleteCard(item));
        document.getElementById("edit").style.display="none";
        document.getElementById("add").style.display="none";
        document.getElementById("confirm").style.display="grid";
        document.getElementById("profile-avatar").style.display="none";

    }

    OpenChangeAvatar(){
        popup.classList.add('popup_opened');
        this.popupSelector.classList.add('popup__confirmation_opened');
        formtitle.textContent = "Ubah foto profil";
        
        document.getElementById("edit").style.display="none";
        document.getElementById("add").style.display="none";
        document.getElementById("confirm").style.display="none";
        document.getElementById("profile-avatar").style.display="grid";


    }
}