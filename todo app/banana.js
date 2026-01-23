let tasks = [
   
];


function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        
        return;
    }

    tasks.push(task);
    input.value = "";
    showTasks();
}

function showTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");

        li.innerHTML = `
            <span>${tasks[i]}</span>
            <div class="task-buttons">
                <button onclick="editTask(${i})">Edit</button>
                <button onclick="deleteTask(${i})">Delete</button>
            </div>
        `;

        list.appendChild(li);
    }
}

function editTask(index) {
    let newTask = prompt("Edit task", tasks[index]);

    if (newTask === null || newTask.trim() === "") {
        alert("Invalid task");
        return;
    }

    tasks[index] = newTask;
    showTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    showTasks();
}


showTasks();
