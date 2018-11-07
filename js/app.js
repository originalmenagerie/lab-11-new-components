/* eslint-disable no-console */
import html from './html.js';
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

            <section id="list">
                <h2>To-Do List</h2>
            </section>
        </main>
    `;
}

class TodoApp {
    render() {
        const dom = makeTemplate();

        const addTodoSection = dom.querySelector('#add-todo');
        const todoListSection = dom.getElementById('list');

        const todoList = new TodoList(todos, todo => {
            const index = todosApi.remove(todo);
            todoList.remove(index);
        });

        todoListSection.appendChild(todoList.render());

        const addTodo = new AddTodo(todo => {
            todosApi.add(todo);
            todoList.add(todo);
        });

        addTodoSection.appendChild(addTodo.render());

        return dom;
    }
}

const app = new TodoApp();
document.getElementById('root').appendChild(app.render());

