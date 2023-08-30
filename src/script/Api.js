import { Section } from './section.js';
import Card from './card.js';
import { nameContent, aboutContent, avatarImage, popup } from './constants.js';

export class Api {
    constructor(options) {
      // body konstruktor
      this.options = options;
    }

    getInitialCards() {
        return fetch("https://around.nomoreparties.co/v1/web_id_03/cards", {
          headers: {
            authorization: "5f8bc2ce-9c96-4e75-869d-b995088f8715"
          }
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            
            return Promise.reject(`Error: ${res.status}`);
          });
    }

    addNewCard(name, link){
        return fetch("https://around.nomoreparties.co/v1/web_id_03/cards", {
            method: "POST",
            headers: {
                authorization: "5f8bc2ce-9c96-4e75-869d-b995088f8715",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                link: link
            })
        }); 
    }

    likeCard(id){
        return fetch(`https://around.nomoreparties.co/v1/web_id_03/cards/likes/${id}`, {
            method: "PUT",
            headers: {
                authorization: "5f8bc2ce-9c96-4e75-869d-b995088f8715",
                "Content-Type": "application/json"
            }
        }); 
    }

    unlikeCard(id){
        return fetch(`https://around.nomoreparties.co/v1/web_id_03/cards/likes/${id}`, {
            method: "DELETE",
            headers: {
                authorization: "5f8bc2ce-9c96-4e75-869d-b995088f8715",
                "Content-Type": "application/json"
            }
        }); 
    }

    deleteSelectedCard(id){
        return fetch(`https://around.nomoreparties.co/v1/web_id_03/cards/${id}`, {
            method: "DELETE",
            headers: {
                authorization: "5f8bc2ce-9c96-4e75-869d-b995088f8715",
                "Content-Type": "application/json"
            }
        }); 
    }

    getUserInformation(){
        return fetch("https://around.nomoreparties.co/v1/web_id_03/users/me", {
          headers: {
            authorization: "5f8bc2ce-9c96-4e75-869d-b995088f8715"
          }
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            
            return Promise.reject(`Error: ${res.status}`);
          });
    }

    editUserInformation(name, about){
        return fetch("https://around.nomoreparties.co/v1/web_id_03/users/me", {
            method: "PATCH",
            headers: {
                authorization: "5f8bc2ce-9c96-4e75-869d-b995088f8715",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                about: about
            })
        }); 
    }

  }
  
  
  export const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/web_id_03/",
    headers: {
      authorization: "5f8bc2ce-9c96-4e75-869d-b995088f8715",
      "Content-Type": "application/json"
    }
  });

    export function callCard(){
        api.getInitialCards()
            .then((result) => {
                console.log("card OK")
                console.log(result)
                const section = new Section({items : result , renderer : Card}, holder);
                section.Renderer()
            })
            .catch((err) => {
                console.log(err); // log kesalahan ke konsol
            });
        }

    export function callUser(){
            api.getUserInformation()
            .then((result) => {
                console.log(result);
                nameContent.textContent = result.name;
                aboutContent.textContent = result.about;
                avatarImage.src = result.avatar;
            })
                .catch((err) => {
                console.log(err); // log kesalahan ke konsol
            });
        }

    export function editUser(name, about){
        api.editUserInformation(name, about)
    }

    export function deleteCard(item){
        console.log(item)
        api.deleteSelectedCard(item)
        api.getInitialCards(item)
            .then((result) => {
                console.log("card OK")
                console.log(result)
                const section = new Section({items : result , renderer : Card}, holder);
                section.doDelete(item);
                popup.classList.remove('popup_opened');
            })
            .catch((err) => {
                console.log(err); 
            });
    }

    export function addCard(name, link){
        // saveLoading(true);
        setTimeout(saveLoading(true), 100000)
        api.addNewCard(name, link)
        .finally(() => {
            saveLoading(false)
        })
        ;
    }

    function saveLoading(isLoading){
        const allsubmit = document.querySelectorAll('.popup__submit')
        allsubmit.forEach(element => {
            if(isLoading){
                element.textContent = 'sedangkirim'
            }
            else{
                element.textContent = 'save'
            }
            
        });
    }
    
    export function LikeCard(id){
        api.likeCard(id);
    }

    export function UnlikeCard(id){
        api.unlikeCard(id);
    }
