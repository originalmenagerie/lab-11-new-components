let items = [
    {
        name: 'Go Grocery Shopping', 
        date: new Date(Date.UTC(2018, 9, 12)).toLocaleDateString()
    },
    {
        name: 'Take the Dog for a Walk',
        date: new Date(Date.UTC(2018, 9, 12)).toLocaleDateString()
    }
]; 

function saveItems() {
    localStorage.setItem('items', JSON.stringify(items)); 
}

function customParser(key, value) {
    if(key !== 'due') return value;
    return new Date(value);
}

const itemsApi = {
    getAll() {
        const json = localStorage.getItem('items'); 
        if(json) {
            items = JSON.parse(json, customParser); 
        }
        return items; 
    }, 

    add(item) {
        items.push(item);   
        saveItems();
    },
    remove(item) {
        const index = items.indexOf(item); 
        if(index !== -1) {
            items.splice(index, 1); 
            saveItems(); 
        }
    }
}; 
export default itemsApi;