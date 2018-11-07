# Lab 11: New Components

Recreate either `todos` or `pokedex` lab from last week using the new sytax and tools:
* Components are `class`es
* `constructor` for passing and storing props (data and callbacks) from parent
* Use `this` inside methods
* Every component owns its template
* Every component has a render method that returns its `dom`

App also becomes a component! (Don't forget to create and append it to `<div id="root"></div>` in app file.

## Component Classes

* `constructor` receives and stores passed data and callback functions
* `render`:
    * creates the dom
    * finds needed elements
        * manipulates elements
        * adds event listenders
        * stores for later on `this.` if element will need to be used in another method
* Additional methods are added for receiving notifications from parent and applying releveant changes
* Parent Component appends the created DOM. Examples:
    * App adds child components to correct location in its DOM
    * List component adds child components
    
## Rubric

* Functionally correct for choosen lab **2pts**
* Uses `class` and `this` for all components (including app) **3pts**
* Each component owns template and returns from `render()` **3pts**
* Parent component(s) create via `new`, call `render()` on instance, and append to location **2pts**

