/* eslint-disable no-console */

import TodoList from './todo-list.js';
import AddTodo from './add-todo.js';
import todosApi from './todos-api.js';

const todos = todosApi.getAll();

function makeTemplate() {
    return html`
        <main>
            <section id="add-todo">
                <h2>Add a To-Do List Item</h2>
            </section>

            <section class="list">
                <h2>To-Do List</h2>
            </section>
        </main>

    `;
}

const addTodoSection = dom.querySelector('#add-todo');
// const todoListSection = dom.querySelector('list');

const addTodo = new AddTodo(todo => {
    todosApi.add(todo);
    todoList.add(todo);
});

addTodoSection.appendChild(addTodo.render());

// const todoList = new TodoList(todos, todo => )
    






todoList.init(todos, function(todo) {
    todosApi.remove(todo);
});

addTodo.init(function(todo) {

    todosApi.add(todo);

    todoList.add(todo);
});