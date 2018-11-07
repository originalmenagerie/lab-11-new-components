

let todos = [
    {
        task: 'Wash car',
        date: new Date('11/10/2018')
    },
    {
        task: 'Clean apartment',
        date: new Date ('11/11/2018')
    }
];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function customParser(key, value) {
    if(key !== 'date') return value;    
    return new Date(value);
}

const todosApi = {
    getAll() {
        const json = localStorage.getItem('todos');
        if(json) {
            todos = JSON.parse(json, customParser);
        }
        return todos;
    },
    add(todo) {
        todos.push(todo);
        saveTodos();
    },
    remove(todo) {
        const index = todos.indexOf(todo);
        if(index !== -1) {
            todos.splice(index, 1);
            saveTodos();
            return index;
        }
    }
};

export default todosApi;