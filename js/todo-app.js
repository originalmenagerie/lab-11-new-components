
import todosApi from './todos-api.js';
import html from './html.js';
import AddTodo from './add-todo.js';
import TodoList from './todo-list.js';

const todos = todosApi.getAll();

function makeTemplate() {
    return html`

        <main>
            <section id="add-task">
                <h2>Add Task</h2>
            </section>

            <section id="todo-list">
                <h2>List</h2>
            </section>
        </main>
    `;
}

class TodoApp {
    render() {
        const dom = makeTemplate();

        const addTaskSection = dom.querySelector('#add-task');
        const todoListSection = dom.querySelector('#todo-list');

        const addTodo = new AddTodo(todo => {
            todosApi.add(todo);
            todoList.add(todo);
        });
        addTaskSection.appendChild(addTodo.render());

        const todoList = new todoList(todos, todo => {
            todoList.update(todo);
        });
        todoListSection.appendChild(todoList.render());

        return dom;
    }
}

const app = new TodoApp();
document.getElementById('root').appendChild(app.render());
