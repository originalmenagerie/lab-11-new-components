import itemsApi from './component-todo-api.js'; 
import html from './html.js'; 
import AddItem from './component-add-todo.js';
import TodoList from './component-todo-list.js';

const items = itemsApi.getAll();
console.log('hello', items);

function makeTemplate() {
    return html`
    <form id="add-form">
        <label>
            Activity
            <input required name="name">
        </label>
        <label>
            Date Due
            <input required name="date">
        </label>
        <label>
            <button class ="action"> Add To List </button>
        </label>
        </form>

        <h2> List </h2>
        <ul id="list"></ul>
    `; 
}

class ItemApp {
    render() {
        const dom = makeTemplate(); 
        const addAddItem = dom.getElementById('add-form');
        const addTodoList = dom.getElementById('list'); 

        const addItem = new AddItem(item => {
            itemsApi.add(item);

            todoList.add(item); 
        }); 

        addAddItem.appendChild(addItem.render());

        const todoList = new TodoList(items, item => {
            const index = itemsApi.remove(item);
            todoList.remove(index);
        });
        console.log("todo", todoList.items); 
        addTodoList.appendChild(todoList.render());

        return dom;
    }
}

const app = new ItemApp();
document.getElementById('root').appendChild(app.render());

