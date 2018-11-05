
const addItem = {

    init(addItem) {
        const form = document.getElementById('add-form'); 

        form.addEventListener('submit', function(event) {

            
            event.preventDefault();

    
            const elements = form.elements;

        // get the values from the form controls
            const item = {
                name: elements.name.value,
                date: elements.date.value
        
            }; 

            addItem(item); 
 

            form.reset();
            
            document.activeElement.blur();
    
        });


    }
};


export default addItem; 