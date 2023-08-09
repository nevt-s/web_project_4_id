export class Section {
    constructor({items, renderer}, classSelector){
        this.items = items;
        this.renderer = renderer;
        this.classSelector = classSelector;
    }

    //Render function dalam class
    Renderer(){
        this.items.forEach((item) => {
    
            const card = new this.renderer(
                item.name, item.link
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