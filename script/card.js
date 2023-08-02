class Card{
    constructor(data, cardSelector){
        this._title = data.name;
        this._image = data.link;
        this._cardSelector = cardSelector;
    }

    _getTemplate(){
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.elements__card')
            .cloneNode(true);

    return cardElement;
    }

    generateCard(){
        this._element = this._getTemplate();

        this._element.querySelector('.elements__image').src = this._image;
        this._element.querySelector('.elements__place-name').textContent = this._title;
      
        return this._element;
    }
}

initialCards.forEach((item) => {
    const card = new Card(item, ".elements__template");
    const cardElement = card.generateCard();

    document.querySelector(".elements").append(cardElement);
})
