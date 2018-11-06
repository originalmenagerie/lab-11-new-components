const addTask = {
    init(onAdd) {
        const form = document.getElementById('add-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const elements = form.elements;
            const task = {
                task: elements.taskName.value,
                due: new Date('10/30/2018')
            };

            onAdd(task);
            form.reset();
            document.activeElement.blur();
        
        });
    }


};

export default addTask;