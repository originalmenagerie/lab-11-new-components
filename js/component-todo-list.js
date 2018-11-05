import html from './html.js'; 

function makeTemplate() {
    return html`
        <ul id="list"></ul>
    `; 
}

function makeList(item) {
    return html`
        <li class ="to-do">
        <h3 class=${new Date(item.date) > Date.now() ? 'date' : 'overdue'}> 
        ${item.name} ${item.date}
        </h3> 
        <div><button class="remove">Done</button></div>
        </li> 
        `;
        
}


class TodoList {
    constructor(items, onRemove) {
        this.items = items;
        this.onRemove = onRemove; 
    }
        
    render() {
        const dom = makeTemplate(); 
        this.list = dom.querySelector('ul'); 
        
        for(let i = 0; i < this.items.length; i++) {
            this.add(this.items[i]); 
        }
        
        return this.list;
    } 
    add(item) {
        const dom = makeList(item); 

        const listItem = dom.querySelector('li'); 

        if(this.onRemove) {
            listItem.addEventListener('click', () => {
                this.onRemove(item); 
            }); 
        } 

        this.list.appendChild(dom);
    }
}

export default TodoList; 