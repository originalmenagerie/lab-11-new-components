import addItem from './component-add-todo.js';
import todoList from './component-todo-list.js';
import itemsApi from './component-todo-api.js'; 

const items = itemsApi.getAll(); 

todoList.init(items, function(item){
    itemsApi.remove(item);
});

addItem.init(function(item) {
    itemsApi.add(item); 
    
    todoList.add(item); 

}); 