const todoForm = document.getElementById('todoForm');
const taskList = document.getElementById('taskList');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('taskTitleInput').value;
    const details = document.getElementById('taskDetailInput').value;

    addTask(title, details);
    todoForm.reset();
});

function addTask(title, details) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${title}</strong>`;
    if (details !== '') {
        li.innerHTML += ` - ${details}`;
    }
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
        editTask(li, title, details);
    });
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        deleteTask(li);
    });

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
}

function editTask(li, title, details) {
    const newTitle = prompt('Enter new title:', title);
    if (newTitle !== null) {
        const newDetails = prompt('Enter new details:', details);
        li.innerHTML = `<strong>${newTitle}</strong>`;
        if (newDetails !== '') {
            li.innerHTML += ` - ${newDetails}`;
        }
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
            editTask(li, newTitle, newDetails);
        });
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteTask(li);
        });

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.insertBefore(li, taskList.childNodes[0]);
    }
}

function deleteTask(li) {
    taskList.removeChild(li);
}