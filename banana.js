function addTask() {
  var taskInput = document.getElementById("taskInput");
  var task = taskInput.value;

  if (task === "") return;

  database.ref("tasks").push({
    task: task
  });

  taskInput.value = "";
}

database.ref("tasks").on("child_added", function(snapshot) {
  var data = snapshot.val();
  var key = snapshot.key;

  var li = document.createElement("li");
  li.setAttribute("id", key);

  var span = document.createElement("span");
  span.innerText = data.task;

  var editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.onclick = function () {
    editTask(key, data.task);
  };

  var delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.onclick = function () {
    deleteTask(key);
  };

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);
});

// 🔵 EDIT TASK
function editTask(key, oldTask) {
  var newTask = prompt("Edit your task", oldTask);

  if (newTask === null || newTask === "") return;

  database.ref("tasks/" + key).update({
    task: newTask
  });

  document.querySelector("#" + key + " span").innerText = newTask;
}

// 🔴 DELETE TASK
function deleteTask(key) {
  database.ref("tasks/" + key).remove();
  document.getElementById(key).remove();
}