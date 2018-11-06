import html from './html.js';

function makeTemplate() {
    return html`
        <ul class="list"></ul>
    `;
}

function makeList(list) {
    return html` 
        <li class="todo ${new Date(list.date) < Date.now() ? 'date-passed' : ''}">
            <h3 class="task">
                ${list.task}
            </h3>
            <h4 class="date">
                ${list.date}
            </h4>
            <button class="danger">X</button>
        </li>
        `;
}    

class TodoList {
    constructor(toDo, onRemove) {
        this.todo = todo;
        this.onRemove = onRemove;
    }

    render() {
        const dom = makeTemplate();
        this.todo = dom.querySelector('ul');

        for(let i = 0; i < list.length; i++) {
            this.add(this.todos[i]);
        }

        return dom;
    }

    add(toDo) {
        const dom = makeList(toDo);
        const listItem = dom.querySelector('li');

        if(this.onRemove) {
            listItem.addEventListener('click',() => {
                this.onRemove();
            });
        }
        
        this.list.appendChild(dom);
    }
    remove(index) {
        this.list.querySelectorAll('li')[index].remove();
    }
}

export default TodoList;