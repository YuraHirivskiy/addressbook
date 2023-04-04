const form = document.querySelector('#form');
const tasksList = document.querySelector('#tasksList');



let tasks = [];


form.addEventListener('submit', addTask);
tasksList.addEventListener('click', deleteTask);
tasksList.addEventListener('click', doneTask);

function addTask(event) {
    event.preventDefault();

    const name = document.querySelector('#name');
    const pass = document.querySelector('#pass');
    const tel = document.querySelector('#tel');
    const gender = document.querySelector('input[name="gender"]:checked');
    const relative = document.querySelector('#relative');
    const addinfo = document.querySelector('#addinfo');

/*    const inputTaskName = name.value;
    const inputTaskPass = pass.value;
    const inputTaskTel = tel.value;
    const inputTaskGender = gender.value;
    const inputTaskRelative = relative.value;
    const inputTaskAddInfo = addinfo.value;*/

    const newTask = {
        name: name.value,
        pass: pass.value,
        tel: tel.value,
        gender: gender.value,
        relative: relative.value,
        info: addinfo.value,
        id: Date.now(),
        done: false,
    }

    const taskHTML = `<li class="list-group-item d-flex justify-content-between task-item">
                <span class="task-title">${newTask.name}</span>
                <span class="task-title">${newTask.pass}</span>
                <span class="task-title">${newTask.tel}</span>
                <span class="task-title">${newTask.gender}</span>
                <span class="task-title">${newTask.relative}</span>
                <span class="task-title">${newTask.info}</span>
                
                <div class="task-item__buttons">
                    <button type="button" data-action="done" class="btn-action">
                        <img src="./img/tick.svg" alt="Done" width="18" height="18">
                    </button>
                    <button type="button" data-action="delete" class="btn-action">
                        <img src="./img/cross.svg" alt="Done" width="18" height="18">
                    </button>
                </div>
            </li>`;

    tasksList.insertAdjacentHTML('beforeend', taskHTML);

    name.value = "";
    pass.value = "";
    tel.value = "";
    addinfo.value = "";

}

function deleteTask(event) {
    if (event.target.dataset.action != 'delete') return;

    const parentNode = event.target.closest('.list-group-item');

    parentNode.remove();
}

function doneTask(event) {
    if (event.target.dataset.action != 'done') return;

    const parentNode = event.target.closest('.list-group-item');

    parentNode.classList.add('task-title--done');
}





// const taskGender = document.querySelector('input[name="gender"]:checked');
// const inputTaskGender = taskGender.value;

/*const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');
const emptyList = document.querySelector('#emptyList');

form.addEventListener('submit', addTask);
tasksList.addEventListener('click', deleteTask);
tasksList.addEventListener('click', clearDoneTask);
tasksList.addEventListener('click', doneTask);


let tasks = [];

if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach( (task)=> renderTask(task)  );
}

checkEmptyList();

function addTask(event) {
    event.preventDefault();
    const inputText = taskInput.value;

    const newTask = {
        id: Date.now(),
        text: inputText,
        done: false,
    }

    tasks.push(newTask);
    saveToLocalStorage();
    renderTask(newTask);
    taskInput.value = "";
    taskInput.focus();
    checkEmptyList();
}

function deleteTask(event) {
    if (event.target.dataset.action !== 'delete') return;

    const parentNode = event.target.closest('.list-group-item');

    const id = Number(parentNode.id);

    tasks = tasks.filter( (task)=> task.id !== id );

    saveToLocalStorage();

    parentNode.remove();

    checkEmptyList();
}





function doneTask(event) {
    if (event.target.dataset.action !== 'done') return;

    const parentNode = event.target.closest('.list-group-item');

    const id = Number(parentNode.id);

    const task = tasks.find( (task)=> task.id === id );

    task.done = !task.done;

    saveToLocalStorage();

    const taskText = parentNode.querySelector('.task-title');

    taskText.classList.add('task-title--done');
}

function clearDoneTask(event) {
    if (event.target.dataset.action !== 'done') return;
    const parentNode = event.target.closest('.list-group-item');
    const spanNode = parentNode.querySelector('.task-title');

    if (!spanNode.classList.contains('task-title--done')) return;

    if (spanNode.classList.contains('task-title--done')) {
        spanNode.classList.remove('task-title--done');
        location.reload();
    }



}



function renderTask(task) {
    const classCSS = task.done ? 'task-title task-title--done' : 'task-title';

    const taskHTML = `<li id="${task.id}" class="list-group-item d-flex justify-content-between task-item">
                <span class="${classCSS}">${task.text}</span>
                <div class="task-item__buttons">
                    <button type="button" data-action="done" class="btn-action">
                        <img src="./img/tick.svg" alt="Done" width="18" height="18">
                    </button>
                    <button type="button" data-action="delete" class="btn-action">
                        <img src="./img/cross.svg" alt="Done" width="18" height="18">
                    </button>
                </div>
            </li>`;

    tasksList.insertAdjacentHTML('beforeend', taskHTML);
}

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function checkEmptyList() {
    if (tasks.length === 0) {
        const emptyListHTML = `<li id="emptyList" class="list-group-item empty-list">
\t\t\t\t\t<img src="./img/leaf.svg" alt="Empty" width="48" class="mt-3">
\t\t\t\t\t<div class="empty-list__title">Список справ пустий</div>
\t\t\t\t</li>`;

        tasksList.insertAdjacentHTML('afterbegin', emptyListHTML);
    }

    if (tasks.length > 0) {
        const emptyListEl = document.querySelector('#emptyList');

        emptyListEl ? emptyListEl.remove() : null;
    }
}*/