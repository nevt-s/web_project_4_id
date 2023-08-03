// class Card{
//     constructor(data, cardSelector){
//         this._title = data.name;
//         this._image = data.link;
//         this._cardSelector = cardSelector;
//     }

//     _getTemplate(){
//         const cardElement = document
//             .querySelector(this._cardSelector)
//             .content
//             .querySelector('.elements__card')
//             .cloneNode(true);

//     return cardElement;
//     }

//     generateCard(){
//         this._element = this._getTemplate();

//         this._element.querySelector('.elements__image').src = this._image;
//         this._element.querySelector('.elements__place-name').textContent = this._title;
      
//         return this._element;
//     }
// }

// initialCards.forEach((item) => {
//     const card = new Card(item, ".elements__template");
//     const cardElement = card.generateCard();

//     document.querySelector(".elements").append(cardElement);
// })
// array
const initialCards = [
    {
      name: "Lembah Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
    },
    {
      name: "Danau Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
    },
    {
      name: "Pegunungan Gundul",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
    },
    {
      name: "Gunung Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
    },
    {
      name: "Taman Nasional Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
    }
  ];

export default class Card {
    constructor(name, link){
      this.name = name;
      this.link = link;
    }
  
    addEventDelete(clone){
      const deleteButton = clone.getElementById('delete');
      deleteButton.addEventListener('click', () => deleteCard({
        name: this.name,
        link: this.link
      }));
    }
  
    addEventOpen(clone){
      const clickPhoto = clone.getElementById('photo');
      clickPhoto.addEventListener('click', () => OpenPhoto({
        name: this.name,
        link: this.link
      }));
    }
  
    addEventLike(clone){
      const likeButton = clone.getElementById('like');
      likeButton.addEventListener('click', likeCard)
    }
  
  
    Place(clone, elementId, type, value){
      const el = clone.getElementById(elementId);
      el[type] = value;
    }
  
    render(template){
      const clone = template.content.cloneNode(true);
    
      this.Place(clone, 'placename', 'innerText', this.name);
      this.Place(clone, 'photo', 'src', this.link);
  
      this.addEventDelete(clone);
      this.addEventOpen(clone);
      this.addEventLike(clone);
      
      return clone;
  
    }
  }

  
render();

function render(){
  for(var i = 0; i < initialCards.length; i++){

    const { name, link } = initialCards[i];
  
    const card = new Card(
      name, link
    )

    const cloned = card.render(template);

    holder.appendChild(cloned);
  }
}

function clear(){
  holder.innerHTML = '';
}

  
//card button
function deleteCard(obj){
    const { name, link } = obj;
  
    const idxObj = initialCards.findIndex(object => {
      return object.name === name;
    });
    
    initialCards.splice(idxObj, 1);
  
    clear();
    render();
  }
  
  function likeCard(item){  
    item.target.classList.toggle("elements__like-black");
  }
  
  function OpenPhoto(obj){
    popup.classList.add('popup_opened');
    
    popupimage.classList.add('popup__image_opened');
  
    const { name, link } = obj;
    placeImage.src = link;
  
    const placeName = document.getElementById('place-name');
    placeName.textContent = name;
    
    closeimage.addEventListener('click', closePopupImage)  
    document.addEventListener("keydown", escapeButton);
  }


  

  

  