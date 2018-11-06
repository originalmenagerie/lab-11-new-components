let todos = [];

function savetoDo() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const todoApi = {
    getAll() {
        const json = localStorage.getItem('todos');
        if(json) {
            todos = JSON.parse(json);
        }
        return todos;
    },
    add(todo) {
        todos.push(todo);
        savetoDo();
    },
    remove(todo) {
        const index = todos.indexOf(todo);
        if(index !== -1) {
            todos.splice(index, 1);
            savetoDo();
            return index;
        }
    }
};

export default todoApi;