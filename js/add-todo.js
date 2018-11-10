const addTodo = {
    
    init(onAdd) {
        const form = document.getElementById('add-form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;
            // const date = new Date(elements.date.value);

            const task = {
                task: elements.task.value,
                date: elements.date.value
            };

            onAdd(task);

        });
    } 
};

export default addTodo;