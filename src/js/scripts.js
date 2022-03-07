const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", e => {
  e.preventDefault();
  addTask(); 
});


function addTask() {
  const inputTask = document.querySelector("#task-title");
  const taskTitle = inputTask.value;

  if(taskTitle) {
    const template = document.querySelector(".template");

    const newTask = template.cloneNode(true);
    newTask.querySelector(".task-title").textContent = taskTitle; // span
    newTask.classList.remove("template");
    newTask.classList.remove("hide");
    
    const list = document.querySelector("#task-list");
    list.appendChild(newTask);
    inputTask.value = "";

    const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", task => {
      removeTask(task.srcElement);
    });

    const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", task => {
      completTask(task.srcElement);
    });
  }
}

function removeTask(task) {
  task.parentNode.remove(true);
}

function completTask(task) {
  const taskComplete = task.parentNode;
  taskComplete.classList.toggle("done");
}
