import html from './html.js'; 

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

// const template = document.createElement('template');
 
//     template.innerHTML = html;

//     return template.content;


class todoList {
    constructor(items, onRemove) {
        this.items = items;
        this.onRemove = onRemove; 
    }
        
    render() {
        const dom = document.getElementById('list'); 
        this.list = dom.querySelector('ul'); 
        
        for(let i = 0; i < this.items.length; i++) {
            todoList.add(this.items[i]); 
        }
        
        return dom;
        // todoList.onRemove = this.onRemove; 
    } 
    add(item) {
        const dom = makeList(item); 

        // const removeButton = dom.querySelector('button'); 
        const listItem = dom.querySelector('li'); 

        if(this.onRemove) {
            listItem.addEventListener('click', () => {
                this.onRemove(item); 
            }); 
        }
        // removeButton.addEventListener('click', function() {
        //     todoList.onRemove(item); 
        //     listItem.remove();
        // }); 

        this.list.appendChild(dom);
    }
}

export default todoList; 