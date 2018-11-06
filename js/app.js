

















/*
## User stories

User wants to:

* see list of todos (saved in `localStorage`) when page is loaded
* add a new todo (via form) that is saved and new DOM added to page
* See the todo displayed differently if it is overdue
* remove a todo (via click) so that saved data is updated and DOM removed from page
* STRETCH: complete a todo (via click) so that saved data updated and class is changed on DOM to visually show completion

## Process

Build components in stepwise fashion, for example:
    * `app` calls `addTodo.init` passing in `onAdd` callback function
    * `addTodo.init` subscribes to `<form>` submit event passing in callback function that creates a new todo object (remember to use `new Date()` to turn the string from the `<input type="date">` into an actual `Date`)
    * `addTodo` calls `onAdd` with new todo
    * `app` 
        * receives new todo in `onAdd` callback, and
        * calls `todoList.add` with new todo
    * `todoList` uses template to create DOM for new todo. (HINT: compare `new Date()` for "now" against `todo.due` to conditionally add class using a `ternary` expression)
    * `todoList` adds DOM for new todo to `<ul>` parent
    * `app` also calls `todoApi.add` with new todo in `onAdd` before calling `todoList.add`
    * `todoApi.add` adds the todo to `todos` array and saves `todos` array to `localStorage`
    * Add `todoList.getAll` which loads `todos` from `localStorage`
    * Call `todoList.getAll` in `app` and pass to `todoList.init`
    * In `todoList.init`, loop the passed `todos` and call `todoList.add` for each one
    * `app` adds `onRemove` callback function passed to `todoList.init`, store the callback function as `todoList.onRemove`
    * Add code in `todoList.add` that 
        * `querySelect`'s the `<li>` and the remove `<button>`.
        * pass callback function to remove button click that
            * calls `todoList.onRemove` with the `todo` to remove
            * calls the `remove` method on the `<li>`
    * `app` 
        * receives todo to remove in `onRemove` callback, and
        * calls `todoApi.remove` with todo to remove
    * `todoApi.remove` finds the todoToRemove in `todos` array and removes it, then saves the `todos` array in `localStorage`
*/

