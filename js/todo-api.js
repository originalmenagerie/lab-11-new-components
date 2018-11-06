let wholeList = [
    {
        task: 'lab-06',
        date: new Date('10/30/2018'),
        done: true
    },
    {
        task: 'dishes',
        date: new Date('10/30/2018'),
        done: false
    },
    {
        task: 'work-out',
        date: new Date('10/30/2018'),
        done: false
    }


];
function customParser(key, value) {
    if(key !== 'due') return value;
    return new Date(value);
}

function saveTasks() {
    localStorage.setItem('wholeList', JSON.stringify(wholeList));
}

const tasksApi = {
    getAll() {
        const json = localStorage.getItem('wholeList');
        if(json) {
            wholeList = JSON.parse(json, customParser);
        }
        return wholeList;
    },
    add(task) {
        wholeList.push(task);
        saveTasks();
    },
    remove(task) {
        const index = wholeList.indexOf(task);
        if(index !== -1) {
            wholeList.splice(index, 1);
            saveTasks();
        }
    }
};

export default tasksApi;
