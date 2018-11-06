import html from './html.js';

function makeTemplate() {
    return html`
        <form id="to-do-form" autocomplete="off">
            <input type="text" name="title" class="text">
            <input type="date" name="date" class="date">
            <button class="btn-approve">Add ToDo</button>
        </form>
    `;
}

class AddTodo {

    constructor(onAdd) {
        this.onAdd = onAdd;
    }

    render() {
        const dom = makeTemplate();
        const form = dom.querySelector('form');
        
        form.addEventListener('submit', event => {
            event.preventDefault();
    
            const elements = form.elements;
    
            const todo = {
                title: elements.title.value,
                date: new Date(elements.date.value).toLocaleDateString()
            };
    
            this.onAdd(todo);
    
            form.reset();
        });
        return dom;
    }
}

export default AddTodo;