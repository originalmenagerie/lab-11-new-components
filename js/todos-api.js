/* eslint-disable no-console */
'use strict';

let todos = [
    {
        task: 'Do laundry',
        date: new Date('10/30/2018')
    },
    {
        task: 'Run',
        date: new Date('10/31/2018')
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
        }
    }
};

export default todosApi;