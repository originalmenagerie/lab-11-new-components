import todoApi from './todo-Api.js';
import AddToDo from './add-Todo.js';
import html from './html.js';
import TodoList from './todo-List.js';

const todos = todoApi.getAll();

function makeTemplate() {
    return html`
    <main>
        <section id="add-todos">
            <h1>Add a To Do</h1>
        </section>
    </main>

    <section>
        <h2>To do!</h2>
        <ul id="todo"></ul>
    </section>
    `;

}

class TodoApp {
    render() {
        const dom = makeTemplate();

        const addTodoSection = dom.querySelector('#add-todos');
        const todoListSection = dom.getElementById('todo')

        const todoList = new TodoList(todos, todo => {
            const index = todoApi.remove(todo);
            todoList.remove(index);
        });

        todoListSection.appendChild(todoList.render());
        
        const addToDo = new AddToDo (todo => {
            todoApi.add(todo);
            todoList.add(todo);
        });

        addTodoSection.appendChild(addToDo.render());

        return dom;
    }

}


const app = new TodoApp();
document.getElementById('root').appendChild(app.render());