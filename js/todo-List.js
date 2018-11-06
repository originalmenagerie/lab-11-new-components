import html from './html.js'

function makeTemplate() {
    return html`
        <ul id="todo"></ul>
    `;
}

function makeToDo(todo) {
    return html`
        <li class="to-do">
            <h3 class="title">
                ${todo.title}
            </h3>
            <h4 class=${new Date(todo.date) > Date.now() ? 'date' : 'late'}> ${todo.date}</h4>
            <button class="btn-remove">X</button>
        </li>
    `;
}

class TodoList {
    constructor(todos, onRemove) {
        this.todos = todos;
        this.onRemove = onRemove;
    }

    render() {
        const dom = makeTemplate();
        this.todo = dom.querySelector('ul');

        for(let i = 0; i < this.todos.length; i++) {
            this.add(this.todos[i]);
        }
        return dom;

    }
    add(todo) {
        const dom = makeToDo(todo);
        
        if(this.onRemove) {
            const removeButton = dom.querySelector('button');
            removeButton.addEventListener('click', () => {
                this.onRemove(todo);
            });
        }

        this.todo.appendChild(dom);
    }
    remove(index) {
        this.todo.querySelectorAll('li')[index].remove();

    }
};

export default TodoList;