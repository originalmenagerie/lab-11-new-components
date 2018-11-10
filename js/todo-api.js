let tasks = [
    {
        task: 'finish AO training',
        date: new Date ('2018-11-5')
    },
    {
        task: 'pay A tuition',
        date: new Date ('2018-11-7')
    }
];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function customParser(key, value) {
    if(key !== 'date') return value;
    return new Date(value);
}

const todoApi = {
    getAll() {
        const saved = localStorage.getItem('tasks');
        if(saved){
            tasks = JSON.parse(saved, customParser);
        }
        return tasks;
    },
    add(task) {
        tasks.push(task);
        saveTasks();
    },
    remove(task) {
        const index = tasks.indexOf(task);
        if(index !== -1){
            tasks.splice(index, 1);
            saveTasks();
        }
    }
};

export default todoApi;