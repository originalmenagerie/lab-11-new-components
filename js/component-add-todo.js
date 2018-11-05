import html from './html.js'; 

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
    `; 
}

class AddItem {

    constructor(addItem) {
        this.addItem = addItem; 
    }
    render() {
        const dom = makeTemplate(); 

        const form = dom.getElementById('add-form'); 

        
        // const form = document.getElementById('add-form'); 

        form.addEventListener('submit', event => {

            
            event.preventDefault();

    
            const elements = form.elements;

        // get the values from the form controls
            const item = {
                name: elements.name.value,
                date: elements.date.value
        
            }; 

            this.addItem(item); 
 
            form.reset();
    
        });

        return dom;
    }
} 
export default AddItem; 