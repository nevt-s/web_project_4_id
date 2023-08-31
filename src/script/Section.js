export class Section {
    constructor({items, renderer}, classSelector){
        this.items = items;
        this.renderer = renderer;
        this.classSelector = classSelector;
    }

    //Detele function
    doDelete(item){
        const allelements = document.querySelectorAll('.elements__card')
        const idxObj = this.items.findIndex((obj) => {
            return obj._id === item;
        })
        allelements[idxObj].remove()

        this.items.splice(idxObj, 1);
        console.log(idxObj);

    }

    //Render function dalam class
    Renderer(){
        this.items.forEach((item) => {
            
            const card = new this.renderer(
                item.name, item.link, item._id, item.likes.length, item.likes, item.owner._id
            )
        
            const cloned = card.render(template);
        
            this.classSelector.appendChild(cloned);
        });
    }

    Clear(){
        this.classSelector.innerHTML = '';
    }

    addItem(selector){
        this.classSelector.append(selector);
    }
}