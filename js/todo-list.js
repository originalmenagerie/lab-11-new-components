/* eslint-disable no-console */
'use strict';
import html from './html.js';

function makeTemplate() {
    return html`
        <ul id="list" ></ul>
    `;
}

function makeTodo(todo) {
    return html`
        <li class="todo ${todo.date < Date.now() ? 'date-passed' : ''}">
            <h3 class="task">
                ${todo.task}
            </h3>
            <h4 class="date">
                ${todo.date}
            </h4>
            <button class="danger">X</button>
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
        this.list = dom.querySelector('ul');
        
        for(let i = 0; i < this.todos.length; i++) {
            this.add(this.todos[i]);
        }
        
        return dom;
    }

    add(todo) {
        const dom = makeTodo(todo); 
        if(this.onRemove) {
            const removeButton = dom.querySelector('button');

            removeButton.addEventListener('click', () => {
                this.onRemove(todo);
            });
        }
        this.list.appendChild(dom);
    }

    remove(index) {
        this.list.querySelectorAll('li')[index].remove();

    }
}

export default TodoList;

