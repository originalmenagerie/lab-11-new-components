
function makeTask(task) {
    const html = html`
        <li class="task">
            <h3 class=${new Date(task.date) > Date.now() ? 'date' : 'overdue'}>
                ${task.name} ${task.date}
            </h3>
            <button class="danger">X</button>
        </li>
    `;

    const template = document.createElement('template');

    template.innerHTML = html;

    return template.content;
}

const list = document.getElementById('wholeList');

const taskList = {
    init(wholeList, onRemove) {
        for(let i = 0; i < wholeList.length; i++) {
            taskList.add(wholeList[i]);
        }
        taskList.onRemove = onRemove;
    },
    add(task) {
        const dom = makeTask(task);
        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        removeButton.addEventListener('click', function() {
            taskList.onRemove(task);
            listItem.remove();
            list.appendChild(dom);

        });
    }
};


export default taskList;
