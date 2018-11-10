import addTodo from './add-todo.js';
import todoApi from './todo-api.js';
import todoList from './todo-list.js';

const tasks = todoApi.getAll();

todoList.init(tasks, function(task) {
    todoApi.remove(task);
});

addTodo.init(function(task) {
    todoApi.add(task);
    todoList.add(task);
});