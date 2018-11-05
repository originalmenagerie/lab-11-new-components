/* eslint-disable no-console */
import html from './html.js';

'use strict';

function makeTemplate() {
    return html`
        <form id="add-form">
            <label>
                Item:
                <input required type="text" name="task">
            </label>
            <label for="">
                Date:
                <input required type="date" name="date">
            </label>
            <label>
                <button class="action">Add</button>
            </label>
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
                task: elements.task.value,
                date: elements.date.value
            };

            this.onAdd(todo);

            form.reset();
            document.activeElement.blur();
        });
        return dom;
    }
}
            
export default AddTodo;