document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById('create-task-form')
  newTaskForm.addEventListener('submit', createNewTask)
})

function createNewTask(e) {
  e.preventDefault()

  const newTaskDescription = document.getElementById('new-task-description')
  const newTask = document.createElement('li')
  newTask.innerText = newTaskDescription.value

  appendNewTask(newTask)
  e.target.reset()
}

function appendNewTask(newTask) {
  const toDoTask = document.getElementById('tasks')
  toDoTask.append(newTask)
}